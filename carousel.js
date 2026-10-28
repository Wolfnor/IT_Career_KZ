// IT Career KZ — баннер из пяти фотографий.
// CSS меняет прозрачность кадров, JavaScript выбирает активный кадр.
const banner = document.getElementById('careerBanner');
const slides = Array.from(banner.querySelectorAll('.slide'));
const dots = Array.from(banner.querySelectorAll('.slide-dot'));
const pauseButton = document.getElementById('pauseSlides');
const motionPreference = window.matchMedia('(prefers-reduced-motion: reduce)');


let activeSlide = 0;
let slideshowTimer = null;
let isPaused = motionPreference.matches;
let isHovered = false;
let hasFocus = false;

// Переключаем фотографию, подпись, номер и индикатор.
function showSlide(index) {
    activeSlide = (index + slides.length) % slides.length;

    slides.forEach(function (slide, position) {
        slide.classList.toggle('is-active', position === activeSlide);
    });

    dots.forEach(function (dot, position) {
        const isActive = position === activeSlide;
        dot.classList.toggle('is-active', isActive);
        dot.setAttribute('aria-pressed', String(isActive));
    });

    document.getElementById('slideNumber').textContent =
        String(activeSlide + 1).padStart(2, '0') + ' / 05';
    document.getElementById('slideCaption').textContent = translate('caption' + activeSlide);
    dots.forEach(function (dot, index) { dot.setAttribute('aria-label', translate('photo', {number: index + 1})); });
}

// Автоматическая смена работает только на видимой странице.
// При наведении мыши или фокусе внутри баннера она временно останавливается.
function updateSlideshow() {
    if (slideshowTimer !== null) {
        window.clearInterval(slideshowTimer);
        slideshowTimer = null;
    }

    pauseButton.textContent = translate(isPaused ? 'play' : 'pause');
    pauseButton.setAttribute('aria-label', translate(isPaused ? 'playAria' : 'pauseAria'));
    pauseButton.setAttribute('aria-pressed', String(isPaused));

    if (!isPaused && !isHovered && !hasFocus && !document.hidden) {
        slideshowTimer = window.setInterval(function () {
            showSlide(activeSlide + 1);
        }, 6000);
    }
}

// При ручном переключении отсчёт шести секунд начинается заново.
function selectSlide(index) {
    showSlide(index);
    updateSlideshow();
}

document.getElementById('previousSlide').addEventListener('click', function () {
    selectSlide(activeSlide - 1);
});

document.getElementById('nextSlide').addEventListener('click', function () {
    selectSlide(activeSlide + 1);
});

dots.forEach(function (dot, index) {
    dot.addEventListener('click', function () {
        selectSlide(index);
    });
});

pauseButton.addEventListener('click', function () {
    isPaused = !isPaused;
    updateSlideshow();
});

banner.addEventListener('mouseenter', function () {
    isHovered = true;
    updateSlideshow();
});

banner.addEventListener('mouseleave', function () {
    isHovered = false;
    updateSlideshow();
});

banner.addEventListener('focusin', function () {
    hasFocus = true;
    updateSlideshow();
});

banner.addEventListener('focusout', function (event) {
    hasFocus = banner.contains(event.relatedTarget);
    updateSlideshow();
});

document.addEventListener('visibilitychange', updateSlideshow);

motionPreference.addEventListener('change', function (event) {
    isPaused = event.matches;
    updateSlideshow();
});

showSlide(0);
updateSlideshow();
