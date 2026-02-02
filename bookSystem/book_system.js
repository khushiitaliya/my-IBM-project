let books = [];

function addBook() {
    const bookName = document.getElementById('bookName').value;
    const authorName = document.getElementById('authorName').value;
    const bookDescription = document.getElementById('bookDescription').value;
    const pagesNumber = parseInt(document.getElementById('pagesNumber').value);

    if (bookName && authorName && bookDescription && !isNaN(pagesNumber)) {
        const book = {
            name: bookName,
            authorName: authorName,
            bookDescription: bookDescription,
            pagesNumber: pagesNumber
        };
        books.push(book);
        showBooks();
        clearInputs();
    } else {
        alert('Please fill in all fields correctly.');
    }
}

function showBooks() {
    const booksDiv = document.getElementById('books');
    booksDiv.innerHTML = '';

    books.forEach((book, index) => {
        const bookElement = document.createElement('div');
        bookElement.innerHTML = `
            <h3>${book.name}</h3>
            <p><strong>Author:</strong> ${book.authorName}</p>
            <p><strong>Description:</strong> ${book.bookDescription}</p>
            <p><strong>Pages:</strong> ${book.pagesNumber}</p>
            <button onclick="removeBook(${index})">Remove</button>
            <hr>
        `;
        booksDiv.appendChild(bookElement);
    });
}

function clearInputs() {
    document.getElementById('bookName').value = '';
    document.getElementById('authorName').value = '';
    document.getElementById('bookDescription').value = '';
    document.getElementById('pagesNumber').value = '';
}

function removeBook(index) {
    books.splice(index, 1);
    showBooks();
}