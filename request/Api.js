import { displayOnLoading } from "../render/renderLoad.js";
import { renderCards } from "../render/renderCards.js";

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "0a0a986a4cmsh5a13bc30f563b55p1fa06cjsn5551f8e2c3e7",
    "X-RapidAPI-Host": "anime-db.p.rapidapi.com",
  },
};

export const getGenres = async () => {
  const Genres = await (
    await fetch("https://anime-db.p.rapidapi.com/genre", options)
  ).json();
  displayOnLoading(Genres.data);
};

export const getAnimesByGenre = async (genre) => {
  const Animes = await (
    await fetch(
      `https://anime-db.p.rapidapi.com/anime?page=1&size=10&genres=${genre}`,
      options
    )
  ).json();
  const listAnimes = Animes.data;
  renderCards(listAnimes);
};
