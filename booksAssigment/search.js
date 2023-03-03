const searchInput = document.querySelector(`#search-bar`);
const cardsHTML = document.querySelector(`.all-cards`);

export function searchBook(books) {
  let userInput = searchInput.value.trim().toLowerCase();

  const filteredBooks = books.filter((book) => {
    const title = book.title.toLowerCase();
    const author = book.author.toLowerCase();
    const genre = book.genre.toLowerCase();

    return (
      title.includes(userInput) ||
      author.includes(userInput) ||
      genre.includes(userInput)
    );
  });
  if (filteredBooks.length === 0) {
    cardsHTML.innerHTML = `<h1 class="no-match">No match for ${searchInput.value}.</h1>`;
  } else {
    cardsHTML.innerHTML = "";
    filteredBooks.forEach((book) => {
      cardsHTML.innerHTML += `
        <div class="card-container">
        <h2>${book.title}</h2>
        <img
        src="./assets/images/placeholder-book.png"
        alt="placeholder-book"
        width="100px"
        class="placeholder-img"
      />
        <h4>Author: ${book.author}</h4>
        <h4>Genre: ${book.genre}</h4>
      </div>
        `;
    });
  }
  searchInput.value = ``;
}
