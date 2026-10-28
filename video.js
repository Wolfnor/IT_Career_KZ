// Видео и аудиогид не звучат одновременно.
const introVideo = document.getElementById('introVideo');
const guidePlayButton = document.getElementById('guidePlay');
const guideStopButton = document.getElementById('guideStop');
const videoStatus = document.getElementById('videoStatus');
const videoFile = introVideo.querySelector('source').src;
let videoLoading = null;
let videoBlobUrl = '';

// Полная локальная копия в памяти позволяет перематывать даже тогда,
// когда сервер не поддерживает запросы отдельных частей видео.
async function prepareVideoSeeking() {
    if (videoBlobUrl) return;
    if (videoLoading) return videoLoading;
    delete videoStatus.dataset.i18n;
    videoStatus.textContent = '';
    videoLoading = (async function () {
        const response = await fetch(videoFile);
        if (!response.ok) throw new Error('Video download failed');
        const blob = await response.blob();
        const savedTime = introVideo.currentTime;
        const wasPlaying = !introVideo.paused && !introVideo.ended;
        const url = URL.createObjectURL(blob);
        try {
            await new Promise(function (resolve, reject) {
                function loaded() { cleanup(); resolve(); }
                function failed() { cleanup(); reject(new Error('Video could not load')); }
                function cleanup() {
                    introVideo.removeEventListener('loadedmetadata', loaded);
                    introVideo.removeEventListener('error', failed);
                }
                introVideo.addEventListener('loadedmetadata', loaded);
                introVideo.addEventListener('error', failed);
                introVideo.src = url;
                introVideo.load();
            });
            videoBlobUrl = url;
            introVideo.currentTime = Math.min(savedTime, introVideo.duration);
            if (wasPlaying) await introVideo.play().catch(function () {});
        } catch (error) {
            URL.revokeObjectURL(url);
            introVideo.src = videoFile;
            introVideo.load();
            throw error;
        }
    })();
    try { await videoLoading; }
    finally { videoLoading = null; }
}

introVideo.addEventListener('play', function () {
    if (!guideStopButton.disabled) guideStopButton.click();
    prepareVideoSeeking().catch(function () {
        videoStatus.dataset.i18n = 'videoSeekError';
        videoStatus.textContent = translate('videoSeekError');
    });
});
guidePlayButton.addEventListener('click', function () { introVideo.pause(); });
window.addEventListener('pagehide', function (event) {
    if (!event.persisted && videoBlobUrl) URL.revokeObjectURL(videoBlobUrl);
});
