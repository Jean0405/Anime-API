import { listGenres } from "./ListGenres.js";

let genresDropdown = document.querySelector("#genres");

export function displayOnLoading() {
  for (let i = 0; i < 10; i++) {
    let li = document.createElement("li");
    li.innerHTML = `
    <button class="btnGenre btn border-0 col-12 col-sm-10 col-md-5 col-lg-4" value="${listGenres[i]._id}">${listGenres[i]._id}</button>`;
    genresDropdown.appendChild(li);
  }
}
