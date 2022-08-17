const API_KEY = "838db27e3f0a0b67e95d898ec2c2b7ad";
const API_URL = "https://api.themoviedb.org/3";

const basic_fetch = async (endpoint) => {
  const response = await fetch(`${API_URL}${endpoint}&api_key=${API_KEY}`);
  return response.json();
};

export default {
  getHomeList: async () => {
    return [
      {
        slug: "originals",
        name: "Originais do Netflix",
        items: await basic_fetch("/discover/tv?with_network=213&language=pt-BR"),
      },
      {
        slug: "trending",
        name: "Recomendados para você",
        items: await basic_fetch("/trending/all/week?language=pt-BR"),
      },
      {
        slug: "top-rated",
        name: "Em Alta",
        items: await basic_fetch("/movie/top_rated?language=pt-BR"),
      },
      {
        slug: "action",
        name: "Ação",
        items: await basic_fetch("/discover/movie?with_genres=28&language=pt-BR"),
      },
      {
        slug: "comedy",
        name: "Comédia",
        items: await basic_fetch("/discover/movie?with_genres=35&language=pt-BR"),
      },
      {
        slug: "horror",
        name: "Terror",
        items: await basic_fetch("/discover/movie?with_genres=27&language=pt-BR"),
      },
      {
        slug: "romance",
        name: "Romance",
        items: await basic_fetch("/discover/movie?with_genres=10749&language=pt-BR"),
      },
      {
        slug: "documentary",
        name: "Documentários",
        items: await basic_fetch("/discover/movie?with_genres=99&language=pt-BR"),
      },
    ];
  },
  getMovieInfo: async (movieId, type) => {
    let info = {};

    if (type) {
      switch (type) {
        case "movie":
          info = await basic_fetch("/movie/" + movieId + "?language=pt-BR");
          break;
        case "tv":
          info = await basic_fetch("/tv/" + movieId + "?language=pt-BR");
          break;
        default:
          info = null;
          break;
      }
    }

    return info;
  },
};
