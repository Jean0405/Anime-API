import { displayOnLoading } from "./render/renderLoad.js";
import { getAnimesByGenre, getAnimeSearch } from "./request/Api.js";
displayOnLoading();
const btnGenres = document.querySelectorAll(".btnGenre");
btnGenres.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const genre = e.target.value;
    getAnimesByGenre(genre);
  });
});

document.querySelector(".submit").addEventListener("click", (e) => {
  e.preventDefault();
  let dataInput = document.querySelector(".formSearch").value;
  getAnimeSearch(dataInput);
});
