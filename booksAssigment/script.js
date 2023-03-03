const searchBtn = document.querySelector(`#search-btn`);
const booksText = document.querySelector(`.books-text`);

import { defaultDisplay } from "./displaydefault.js";
import { searchBook } from "./search.js";

function fetchJson() {
  fetch("assets/listofbooks.json")
    .then((res) => res.json())
    .then((books) => {
      defaultDisplay(books);
      searchBtn.addEventListener("click", () => searchBook(books));
      booksText.addEventListener(`click`, () => {
        defaultDisplay(books);
      });
    });
}

fetchJson();
