import React, { useEffect, useState } from "react";
import theMovieDB from "./theMovieDB";
import MovieRow from "./components/MovieRow.js";
import FeaturedMovie from "./components/FeaturedMovie.js";
import Header from "./components/Header.js";
import "./App.css";

export default () => {
  const [movieList, setMovieList] = useState([]);
  const [featuredMovie, setFeaturedMovie] = useState(null);
  useEffect(() => {
    const loadAll = async () => {
      const homeList = await theMovieDB.getHomeList();
      setMovieList(homeList);
      let originalsMovies = homeList.filter((i) => i.slug === "originals");
      let indexMovie = Math.floor(Math.random() * 19);
      let chosenMovie = originalsMovies[0].items.results[indexMovie];
      let chosenInfo = await theMovieDB.getMovieInfo(chosenMovie.id, "tv");
      console.log(chosenInfo);
      setFeaturedMovie(chosenInfo);
    };
    loadAll();
  }, []);
  return (
    <div className="page">
      <Header />
      {featuredMovie && <FeaturedMovie item={featuredMovie} />}

      <section className="listas">
        {movieList.map((item, key) => (
          <MovieRow key={key} title={item.name} items={item.items} />
        ))}
      </section>
    </div>
  );
};
