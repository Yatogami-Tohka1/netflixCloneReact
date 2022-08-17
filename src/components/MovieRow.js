import React from "react";
import "./MovieRow.css";

export default ({ title, items }) => {
  return (
    <div>
      <h2>{title}</h2>
      <div className="movieRow-listarea">
        <div className="movieRow-list">
          {items.results.map((item) => (
            <div className="movieRow-item">
              <img src={`https://image.tmdb.org/t/p/w300${item.poster_path}`}></img>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
