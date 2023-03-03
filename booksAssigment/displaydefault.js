const cardsHTML = document.querySelector(`.all-cards`);

export function defaultDisplay(books) {
  cardsHTML.innerHTML = "";
  let sortedBooks = books.sort((a, b) => {
    if (a.author < b.author) {
      return -1;
    }
    if (a.author > b.author) {
      return 1;
    }
    return 0;
  });
  sortedBooks.forEach((book) => {
    cardsHTML.innerHTML += `
          <div class="card-container">
          <h2>${book.title}</h2>
          <div class="img-placeholder">
          <img
      src="./assets/images/placeholder-book.png"
      alt="placeholder-book"
      width="100px"
      class="placeholder-img"
    />
          </div>
          <div class="author-genre">
          <h4>Author: ${book.author}</h4>
          <h4>Genre: ${book.genre}</h4>
    </div>
      
        </div>
          `;
  });
}
