import React from "react";
import MovieArticle from "../items/MovieArticle";

const Index = () => {


  
  let movieArray = [
    { movieName: "Batman", movieYear: "1994" },
    { movieName: "Lord", movieYear: "1998" },
    { movieName: "Cats", movieYear: "1994" },
    { movieName: "Hurray", movieYear: "1992" },
    { movieName: "Kill me!", movieYear: "1911"},
  ];

  return (
    <div className="article-container">
      <MovieArticle
        movieName={movieArray[0].movieName}
        movieYear={movieArray[0].movieYear}
      
      />
      <MovieArticle
        movieName={movieArray[1].movieName}
        movieYear={movieArray[1].movieYear}

      />
      <MovieArticle
        movieName={movieArray[2].movieName}
        movieYear={movieArray[2].movieYear}

      />
      <MovieArticle
        movieName={movieArray[3].movieName}
        movieYear={movieArray[3].movieYear}

      />
      <MovieArticle
        movieName={movieArray[4].movieName}
        movieYear={movieArray[4].movieYear}
      />
    </div>
  );
};

export default Index;
