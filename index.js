function fetchBooks() {
  fetch("https://anapioficeandfire.com/api/books")
  .then(response => renderBooks(data))
  .catch(error => console.error("Error fetching books:", error));
}
function renderBooks(books) {
  const bookList = document.getElementById("book-list");
  bookList.innerHTML ="";

  books.forEach(book => {
    const li =document.createComment("li");
    li.textContent = book.name;
    bookList.appendChild(li);
  });
}