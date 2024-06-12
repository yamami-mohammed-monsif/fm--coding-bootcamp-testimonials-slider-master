const nextBtn = document.getElementsByClassName('right-btn');
const prevBtn = document.getElementsByClassName('left-btn');

const slideOne = document.getElementById('slide-1');
const slideTwo = document.getElementById('slide-2');

nextBtn[0].addEventListener('click', () => {

    var slideOneVisibility = slideOne.getAttribute('data-visible');

    if(slideOneVisibility === 'true') {
        slideOne.setAttribute('data-visible', false);
        slideTwo.setAttribute('data-visible', true);
    }
})

prevBtn[1].addEventListener('click', () => {

    var slideTwovisibility = slideTwo.getAttribute('data-visible');

    if(slideTwovisibility === 'true') {
        slideOne.setAttribute('data-visible', true);
        slideTwo.setAttribute('data-visible', false);
    }
})