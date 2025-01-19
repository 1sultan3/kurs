const accordionNavBars = document.querySelectorAll('.accordion-top')
const dropInfo = document.querySelectorAll('.drop-info')


function showInfo(event) {
    if(targetInfo.classList != 'drop-info block') {
        if (targetInfo) {
        targetInfo.classList.add('block');
        event.target.lastElementChild.style.rotate = '270deg';
        } else {
            targetInfo = event.target.closest('.accordion-top')
            target.nextElementSibling.classList.add('block')
            event.target.style.rotate = '270deg';
        }
    } else {
        targetInfo.classList.remove('block')
        event.target.lastElementChild.style.rotate = '90deg';
    }
}

accordionNavBars.forEach(nav => {
    nav.addEventListener('click', event => {
        targetInfo = event.target.nextElementSibling
        showInfo(event);
    }); 
});

// 1 всплытие события


let aha;


