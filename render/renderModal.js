let sectionInfo = document.querySelector(".anime_info-container");

export function renderModalInfo(anime) {
  sectionInfo.innerHTML = "";
  const INFO = document.createElement("div");
  INFO.setAttribute("class", "row rounded bg-dark");
  INFO.innerHTML = /*HTML*/ `
    <img class="col-12 col-sm-4 col-md-4 col-lg-4 p-0" src="${anime.image}" alt="">
    <div class=" col-12 col-sm-8 col-md-8 col-lg-8 p-3 d-flex justify-content-center flex-column align-items-center py-3">
        <h3 class="fw-bold text-center text-info">${anime.title}</h3>
        <p class="text-light text-center">${anime.synopsis}</p>
        <span class="text-light fw-bold">Type: ${anime.type}</span>
        <div class="d-flex justify-content-center align-items-center mt-1 p-1">
        <span class="text-info fw-bold">${anime.episodes} episodes</span>
        <a class="btn btn-light text-info ms-4" href="${anime.link}">Ver Ranking</a>
        </div>
    </div>
  `;
  sectionInfo.appendChild(INFO);
  sectionInfo.style.display = "block";
  sectionInfo.classList.add("fadeIn");
}
