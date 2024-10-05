const ADD_BOOK_BTN = document.querySelector('#addBookBtn');
const SUBMIT_BTN = document.querySelector('#submitBtn');
const CLOSE_BTN = document.querySelector('#closeBtn');
const FORM = document.querySelector('#toggleForm');

function showForm() {
    FORM.classList.remove('d-none');
}

function hideForm() {
    FORM.classList.forEach(el => {
        if (el !== 'd-none') {
            FORM.classList.add('d-none');
        }
    });
}

ADD_BOOK_BTN.addEventListener('click', showForm);   
SUBMIT_BTN.addEventListener('click', hideForm);
CLOSE_BTN.addEventListener('click', hideForm);


