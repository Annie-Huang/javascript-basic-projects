const slides = document.querySelectorAll('.slide');
const nextBtn = document.querySelector('.nextBtn');
const prevBtn = document.querySelector('.prevBtn');

slides.forEach((slide,index) => {
    slide.style.left = `${index * 100}%`;
});

let counter = 0;
nextBtn.addEventListener('click', () => {
    counter++;
    carousel();
});
prevBtn.addEventListener('click', () => {
    counter--;
    carousel();
});

// -100% > show 2nd one.
// -200% > show 3rd one.
// -300% > show 4th one.
function carousel() {
    // // working with slides: circulate.
    // if (counter === slides.length) {
    //     counter = 0;
    // }
    // if (counter < 0) {
    //     counter = slides.length - 1;
    // }

    // working with buttons: add|remove.
    nextBtn.style.display = counter < slides.length - 1 ? 'block' : 'none';
    prevBtn.style.display = counter > 0 ? 'block' : 'none';

    slides.forEach(slide => {
        slide.style.transform = `translateX(-${counter*100}%)`;
    });
}

prevBtn.style.display = 'none';
