//using selectors inside the element
const questions = document.querySelectorAll('.question');

questions.forEach(question => {
    console.log(question);
    const btn = question.querySelector('.question-btn')
    console.log(btn);

    btn.addEventListener('click', () => {

        questions.forEach(item => {
            if(item !== question) {
                item.classList.remove('show-text');
            }
        })

        question.classList.toggle('show-text');
    });
})


/*
// traversing the dom
const btns = document.querySelectorAll('.question-btn');

btns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        console.log(e.currentTarget); // <button type="button" class="question-btn">..</button>
        console.log(e.currentTarget.parentElement); <article class="question">...</article>

        const question = e.currentTarget.parentElement.parentElement;
        question.classList.toggle('show-text');
    });
});
*/
