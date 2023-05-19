import { getGenre, getAnimesByGenre } from "./request/Api.js";

const btnGenres = document.querySelectorAll(".btnGenre");
btnGenres.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const genre = e.target.value;
    getAnimesByGenre(genre);
  });
});
