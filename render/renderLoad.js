const genresDropdown = document.querySelector("#genres");

export function displayOnLoading(Genres) {
  Genres.forEach((genre) => {
    const li = document.createElement("li");
    li.innerHTML = `
        <button class="btn border-0 col-12 col-sm-10 col-md-5 col-lg-4">${genre._id}</button>
      `;
    genresDropdown.appendChild(li);
  });
}
