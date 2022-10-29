// Элементы на странице

const slider = document.querySelector('.slider');
const sliderItem = Array.from(slider.children);
const btnNext = document.querySelector('#btnNext');
const btnPrev = document.querySelector('#btnPrev');


sliderItem.forEach(function(slide, index) {

    // скрываем все слайды кроме первого.
    if(index !== 0) {
        slide.classList.add('hidden');
    }

    // добовляем индексы для слайдов
    slide.dataset.index = index;
    // добовляем data - атрибут active для первого активного слайда
    sliderItem[0].setAttribute('data-active', '');

    // клик по слайдам
    slide.addEventListener('click', () => {


        // скрываем текущий слайд
        slide.classList.add('hidden');
        slide.removeAttribute('data-active');

        // рассчитываем индекс следующего слайда
        const nextSlideIndex = index + 1 === sliderItem.length ? 0 : index + 1;

        // находим следующий слайд
        const nextSlide = slider.querySelector(`[data-index="${nextSlideIndex}"]`);

        // отображаем следующий слайд
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