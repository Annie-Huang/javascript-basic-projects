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
    slides.forEach(slide => {
        slide.style.transform = `translateX(-${counter*100}%)`;
    });
}
