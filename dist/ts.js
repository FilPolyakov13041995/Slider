const slider = document.querySelector('.slider');
const sliderItem = Array.from(slider.children);
const btnNext = document.querySelector('#btnNext');
const btnPrev = document.querySelector('#btnPrev');
sliderItem.forEach((slide, index) => {
    if (index !== 0) {
        slide.classList.add('hidden');
    }
    slide.dataset.index = index;
    sliderItem[0].setAttribute('data-active', '');
    slide.addEventListener('click', () => {
        slide.classList.add('hidden');
        slide.removeAttribute('data-active');
        let nextSlideIndex;
        if (index + 1 === sliderItem.length) {
            nextSlideIndex = 0;
        }
        else {
            nextSlideIndex = index + 1;
        }
        const nextSlide = slider.querySelector(`[data-index="${nextSlideIndex}"]`);
        nextSlide.classList.remove('hidden');
        nextSlide.setAttribute('data-active', '');
    });
});
btnNext.addEventListener('click', () => {
    // скрываем текущий слайд
    const currentSlide = slider.querySelector('[data-active]');
    const currentSlideIndex = +currentSlide.dataset.index;
    currentSlide.classList.add('hidden');
    currentSlide.removeAttribute('data-active');
    // показывваем следующий слайд
    const nextSlideIndex = currentSlideIndex + 1 === sliderItem.length ? 0 : currentSlideIndex + 1;
    const nextSlide = slider.querySelector(`[data-index="${nextSlideIndex}"]`);
    nextSlide.classList.remove('hidden');
    nextSlide.setAttribute('data-active', '');
});
btnPrev.addEventListener('click', () => {
    // скрываем текущий слайд
    const currentSlide = slider.querySelector('[data-active]');
    const currentSlideIndex = +currentSlide.dataset.index;
    currentSlide.classList.add('hidden');
    currentSlide.removeAttribute('data-active');
    // показывваем следующий слайд
    const nextSlideIndex = currentSlideIndex === 0 ? sliderItem.length - 1 : currentSlideIndex - 1;
    const nextSlide = slider.querySelector(`[data-index="${nextSlideIndex}"]`);
    nextSlide.classList.remove('hidden');
    nextSlide.setAttribute('data-active', '');
});
