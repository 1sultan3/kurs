const sliderLeftArrow = document.querySelector('.arrow-left');
const sliderRightArrow = document.querySelector('.arrow-right');
const sliders = document.querySelectorAll('.slider-image');
let slideIndex = 0;
// sliders[slideIndex].onmouseover = sliders[slideIndex].onmouseout = autoScroll;


function removeBlock() {
    sliders[slideIndex].classList.remove('block')
}

function nextSlide() {
    removeBlock()
    if(slideIndex >= sliders.length - 1) {
        slideIndex = 0
        sliders[slideIndex].classList.add('block')
    }else{
        sliders[++slideIndex].classList.add('block')
    }
}

function prevSlide() {
    removeBlock()
    if(slideIndex <= 0) {
        slideIndex = sliders.length - 1
        sliders[slideIndex].classList.add('block')
    }else{
        sliders[--slideIndex].classList.add('block')
    }
}

function autoScroll(event) {
    intervalId = setInterval(nextSlide, 4000)
    
    if(event.type == 'mouseover') {
        clearInterval(intervalId)
        console.log('came')
    }
}


sliderRightArrow.addEventListener('click', nextSlide)
sliderLeftArrow.addEventListener('click', prevSlide)
// autoScroll()
