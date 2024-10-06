const ADD_BOOK_BTN = document.querySelector('#addBookBtn');
const SUBMIT_BTN = document.querySelector('#submitBtn');
const CLOSE_BTN = document.querySelector('#closeBtn');
const FORM = document.querySelector('#toggleForm');
const myLibrary = [];

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

function getFormValues(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const formProps = Object.fromEntries(formData);

    return formProps
}

function Book(bookName, bookAuthor, bookPages, bookIsRead) {
    this.bookName = bookName;
    this.bookAuthor = bookAuthor;
    this.bookPages = bookPages;
    this.bookIsRead = bookIsRead;
}
  
function addBookToLibrary(e) {
    const bookInfos = getFormValues(e);
    const book = new Book(bookInfos.bookName, bookInfos.bookAuthor, bookInfos.bookPages, bookInfos.bookIsRead)
    myLibrary.push(book);
}

function printBooksScreen(e) {
    addBookToLibrary(e);
    let arrayLastEl = myLibrary[myLibrary.length - 1];

    document.querySelector('.book-container').innerHTML += `
        <div class="book">
            <h2 class="book-title">${arrayLastEl.bookName}</h2>
            <div>
                <h4 class="book-author">Yazar: <span>${arrayLastEl.bookAuthor}</span></h4>
                <h4 class="book-pages">Sayfa Sayısı: <span>${arrayLastEl.bookPages}</span></h4>
                <h4 class="book-isRead">${arrayLastEl.bookIsRead ? 'Okundu' : 'Okunmadı'}</h4>
            </div>
        </div>
    `;
}

ADD_BOOK_BTN.addEventListener('click', showForm);
CLOSE_BTN.addEventListener('click', hideForm);
FORM.addEventListener('submit', printBooksScreen);

