import React from "react";
import MovieArticle from "../items/MovieArticle";

const Favorites = () => {
  let movieArray = [
    { movieName: "Batman", movieYear: "1994", watched: false },
    { movieName: "Lord", movieYear: "1998", watched: true },
    { movieName: "Cats", movieYear: "1994", watched: false },
    { movieName: "Hurray", movieYear: "1992", watched: true },
    { movieName: "Kill me!", movieYear: "1911", watched: false },
  ];

  return (
    <div className="article-container">
      {movieArray.map((e) => (
        <MovieArticle
          key={movieArray.indexOf(e)}
          movieName={e.movieName}
          movieYear={e.movieYear}
          movieWatched={e.watched}
        />
      ))}
    </div>
  );
};

export default Favorites;
