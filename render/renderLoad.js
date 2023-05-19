let genresDropdown = document.querySelector("#genres");

export function displayOnLoading(Genres) {
  console.log(Genres);
  Genres.forEach((genre) => {
    let li = document.createElement("li");
    li.innerHTML = `<button class="btnGenre btn border-0 col-12 col-sm-10 col-md-5 col-lg-4" value="${genre._id}">${genre._id}/button>`;
    genresDropdown.appendChild(li);
  });
}
