// 1. Находим WAV-звук и кнопку включения звука в HTML.
const clickSound = document.getElementById('clickSound');
const soundButton = document.getElementById('soundToggle');
let soundEnabled = true;
clickSound.volume = 0.15; // Тихое воспроизведение: 15% громкости.

// 2. Восстанавливаем сохранённый выбор пользователя.
try {
    soundEnabled = localStorage.getItem('itCareerSound') !== 'off';
} catch (error) {}

// 3. Воспроизводим файл с начала.
function playClick() {
    if (!soundEnabled || document.hidden) return;
    clickSound.currentTime = 0;
    clickSound.play().catch(function () {});
}

// 4. Обновляем подпись кнопки на выбранном языке.
window.updateSoundControls = function () {
    const label = translate(soundEnabled ? 'soundOff' : 'soundOn');
    soundButton.setAttribute('aria-pressed', String(soundEnabled));
    soundButton.setAttribute('aria-label', label);
    soundButton.title = label;
};

// 5. Включаем или выключаем звук и запоминаем выбор.
soundButton.addEventListener('click', function () {
    soundEnabled = !soundEnabled;
    if (!soundEnabled) clickSound.pause();
    try {
        localStorage.setItem('itCareerSound', soundEnabled ? 'on' : 'off');
    } catch (error) {}
    window.updateSoundControls();
    if (soundEnabled) playClick();
});

// 6. Один щелчок при нажатии кнопок, ссылок и стрелок раскрытия.
document.addEventListener('click', function (event) {
    if (!event.isTrusted) return;
    const button = event.target.closest('button, a[href], summary');
    if (button && button !== soundButton && !button.disabled) playClick();
}, true);

// 7. Щелчок после выбора значения в фильтре.
document.addEventListener('change', function (event) {
    if (event.isTrusted && event.target.matches('select')) playClick();
});

window.updateSoundControls();
