import { displayOnLoading } from "./render/renderLoad.js";
import { getAnimesByGenre, getAnimeSearch, getAll } from "./request/Api.js";

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

let toggle = document.getElementById("toggle");
toggle.addEventListener("change", (e) => {
  let checked = e.target.checked;
  document.body.classList.toggle("dark");
  if (checked == true) {
    label_toggle.innerHTML =
      '<i class="fa-solid fa-moon" style="color: #009dff;"></i>';
  } else {
    label_toggle.innerHTML =
      '<i class="fa-solid fa-sun" style="color: #fffd80"></i>';
  }
});

getAll();
