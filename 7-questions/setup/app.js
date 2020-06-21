//using selectors inside the element
// traversing the dom

const btns = document.querySelectorAll('.question-btn');

btns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        console.log(e.currentTarget); // <button type="button" class="question-btn">..</button>
        console.log(e.currentTarget.parentElement);

        const question = e.currentTarget.parentElement.parentElement;
        question.classList.toggle('show-text');
    });
});
