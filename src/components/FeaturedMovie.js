import "./FeaturedMovie.css";

export default ({ item }) => {
  let genres = [];

  for (let i in item.genres) {
    genres.push(item.genres[i].name);
  }

  return (
    <section
      className="featured"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`,
      }}
    >
      <div className="featured-vertical">
        <div className="featured-horizontal">
          <div className="featured-name">{item.original_name}</div>
          <div className="featured-info">
            <div className="featured-points">IMDB {Math.round(item.vote_average * 10) / 10}</div>
            <div className="featured-year">{item.first_air_date.substring(0, 4)}</div>
            <div className="featured-temps">
              {item.number_of_seasons} {item.number_of_seasons > 1 ? "temporadas" : "temporada"}
            </div>
          </div>
          <div className="featured-desc">{item.overview}</div>
          <div className="featured-buttons">
            <button className="featured-buttons-watch">▶ Assistir</button>
            <button className="featured-buttons-add">+ Minha Lista</button>
          </div>
          <div className="featured-genres">
            <strong>Gêneros: </strong> {genres.join(", ")}
          </div>
        </div>
      </div>
    </section>
  );
};
