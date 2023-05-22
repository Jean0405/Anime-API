const cards_container = document.querySelector(".cards-container");

export function renderCards(listAnimes) {
  cards_container.innerHTML = "";
  listAnimes.forEach((anime) => {
    const card = document.createElement("div");
    card.setAttribute("class", "anime-card");

    card.innerHTML = `
    <img src="${anime.image}" alt="anime img">
    <div>
        <p>${anime.title}</p>
    </div>
  `;
    cards_container.appendChild(card);
  });
}
