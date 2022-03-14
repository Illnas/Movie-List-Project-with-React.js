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

      {movieArray.map(e =>
          <MovieArticle
          key={movieArray.indexOf(e)}
        movieName={e.movieName}
        movieYear={e.movieYear}
      
      />
      )}
    
    
    </div>
  );
};

export default Index;
