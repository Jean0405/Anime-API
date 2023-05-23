import { getAnimeById } from "../request/Api.js";
import { sectionInfo } from "./renderModal.js";

const cards_container = document.querySelector(".cards-container");

export function renderCards(listAnimes) {
  sectionInfo.innerHTML = "";
  cards_container.innerHTML = "";

  listAnimes.forEach((anime) => {
    const card = document.createElement("div");
    card.setAttribute("class", "anime-card");
    card.setAttribute("id", `${anime._id}`);
    card.innerHTML = `
    <img src="${anime.image}" alt="anime img">
    <div>
        <p>${anime.title}</p>
    </div>
  `;
    cards_container.appendChild(card);
  });

  const cards = document.querySelectorAll(".anime-card");
  cards.forEach((card) => {
    card.addEventListener("click", (e) => {
      const parent = e.target.closest(".anime-card");
      const parentId = parent.getAttribute("id");
      getAnimeById(parentId);
    });
  });
}
