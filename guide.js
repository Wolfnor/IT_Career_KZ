// Аудиогид: браузер читает текст голосом, доступным на устройстве.
(function () {
    const synth = window.speechSynthesis;
    const play = document.getElementById('guidePlay');
    const pause = document.getElementById('guidePause');
    const stop = document.getElementById('guideStop');
    const selector = document.getElementById('guideVoice');
    const status = document.getElementById('guideStatus');
    const supported = !!synth && typeof SpeechSynthesisUtterance !== 'undefined';
    let voices = [];
    let state = 'ready';
    let session = 0;
    let sentences = [];
    let position = 0;
    let utterance = null;

    function refresh() {
        const busy = state === 'playing' || state === 'paused';
        play.disabled = !supported || !voices.length || busy;
        pause.disabled = !busy;
        stop.disabled = !busy;
        selector.disabled = !supported || !voices.length;
        pause.textContent = translate(state === 'paused' ? 'guideResume' : 'guidePause');
        pause.setAttribute('aria-pressed', String(state === 'paused'));
        const key = !supported ? 'guideUnavailable' : !voices.length ? 'guideNoVoice' : {
            ready: 'guideReady', playing: 'guidePlaying', paused: 'guidePaused',
            finished: 'guideFinished', error: 'guideError'
        }[state];
        status.textContent = translate(key);
    }

    function stopGuide() {
        session++;
        if (supported) synth.cancel();
        state = 'ready';
        utterance = null;
        refresh();
    }

    // Доступные голоса для выбранного языка. По возможности выбираем мужской.
    function loadVoices() {
        const previous = selector.value;
        voices = supported ? synth.getVoices().filter(function (voice) {
            return voice.lang.toLowerCase().replace('_', '-').split('-')[0] === currentLanguage;
        }) : [];
        selector.replaceChildren();
        voices.forEach(function (voice) {
            const option = document.createElement('option');
            option.value = voice.voiceURI;
            option.textContent = voice.name + ' · ' + voice.lang;
            selector.append(option);
        });
        const retained = voices.find(voice => voice.voiceURI === previous);
        const preferred = voices.find(voice => /\b(david|mark|daniel|guy|ryan|eric|james|george|dmitry|pavel|yuri|palladium|daulet|дмитрий|павел|юрий|дәулет)\b/i.test(voice.name));
        if (retained || preferred) selector.value = (retained || preferred).voiceURI;
        refresh();
    }

    // Короткие предложения позволяют надёжнее читать длинный текст.
    function speakNext(id) {
        if (id !== session) return;
        if (position >= sentences.length) {
            state = 'finished';
            utterance = null;
            refresh();
            return;
        }
        utterance = new SpeechSynthesisUtterance(sentences[position]);
        const voice = voices.find(voice => voice.voiceURI === selector.value) || voices[0];
        utterance.voice = voice;
        utterance.lang = voice.lang;
        utterance.rate = 0.95;
        utterance.pitch = 0.95;
        utterance.volume = 0.85;
        utterance.onend = function () {
            if (id !== session) return;
            position++;
            speakNext(id);
        };
        utterance.onerror = function () {
            if (id !== session) return;
            state = 'error';
            refresh();
        };
        synth.speak(utterance);
    }

    play.addEventListener('click', function () {
        if (!supported || !voices.length || play.disabled) return;
        stopGuide();
        // Берём текст из словаря, чтобы он всегда совпадал с языком сайта.
        sentences = translate('guideText').match(/[^.!?]+[.!?]+|[^.!?]+$/g) || [];
        position = 0;
        state = 'playing';
        refresh();
        synth.resume();
        speakNext(session);
    });
    pause.addEventListener('click', function () {
        if (state === 'playing') {
            synth.pause();
            state = 'paused';
        } else if (state === 'paused') {
            synth.resume();
            state = 'playing';
        }
        refresh();
    });
    stop.addEventListener('click', stopGuide);
    selector.addEventListener('change', stopGuide);
    window.updateGuideLanguage = function () {
        stopGuide();
        loadVoices();
    };
    if (supported) synth.addEventListener('voiceschanged', loadVoices);
    window.addEventListener('pagehide', stopGuide);
    window.updateGuideLanguage();
})();
