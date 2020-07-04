const btns = document.querySelectorAll('.tab-btn');
const about = document.querySelector('.about');
const articles = document.querySelectorAll('.content');

about.addEventListener('click', e => {
    // console.log(e.target); // <button class="tab-btn" data-id="vision">vision</button>
                           // or <h4>history</h4>, or any child element.

    console.log(e.target.dataset.id);

    const id = e.target.dataset.id;
    if(id) {
        // remove active from other buttons
        btns.forEach(btn => {
            btn.classList.remove('active');
            e.target.classList.add('active'); // only add it to the current button
        });
    }
});
