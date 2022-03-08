import React from 'react'
import MovieArticle from '../items/MovieArticle';

const Favorites = () => {
  let movieArray = [
    { movieName: "Batman", movieYear: "1994", watched: false },
    { movieName: "Lord", movieYear: "1998", watched: true  },
    { movieName: "Cats", movieYear: "1994", watched: false  },
    { movieName: "Hurray", movieYear: "1992", watched: true },
    { movieName: "Kill me!", movieYear: "1911", watched: false  },
  ];


  

  return (
    <div className="article-container">
      <MovieArticle
        movieName={movieArray[0].movieName}
        movieYear={movieArray[0].movieYear}
        movieWatched={movieArray[0].watched}
      />
      <MovieArticle
        movieName={movieArray[1].movieName}
        movieYear={movieArray[1].movieYear}
        movieWatched={movieArray[1].watched}
      />
      <MovieArticle
        movieName={movieArray[2].movieName}
        movieYear={movieArray[2].movieYear}
        movieWatched={movieArray[2].watched}
      />
      <MovieArticle
        movieName={movieArray[3].movieName}
        movieYear={movieArray[3].movieYear}
        movieWatched={movieArray[3].watched}
      />
      <MovieArticle
        movieName={movieArray[4].movieName}
        movieYear={movieArray[4].movieYear}
        movieWatched={movieArray[4].watched}
      />
    </div>
  );
}

export default Favorites