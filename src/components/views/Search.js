import React, { useState, useEffect } from "react";
import spinner from "../Images/spinner.svg";
import MovieArticle from "../items/MovieArticle";

const Search = () => {
  const [spinnerState, setSpinnerState] = useState(true);
  const [movieState, setMovieState] = useState(false);
  const [movieData, setMovieData] = useState();
  const [movieInput, setMovieInput] = useState("")
  const [movieSearchValue, setMovieSearchValue] = useState("")

  /* useEffect(() => {
    console.log(movieData)
  }, [movieData]) */

  const movieSearch = (e) => {
    console.log(e.target.value)
    setMovieInput(e.target.value)
  }
  console.log(movieInput)

  const handleSecondSubmit = (e) => {  

    e.preventDefault()
 
      fetch(`http://www.omdbapi.com/?apikey=6fe1e02&s=${movieInput}`, {
        method: "GET",
      })
        .then((response) => response.json())
        .then((data) => {
          
          setTimeout(() => {
            console.log(data["Search"]);
            setSpinnerState(false);
            setMovieData(data["Search"]);
            setMovieState(true)
          }, 2000);
        });



    };

  return (
    <>
      <h2>Search</h2>

      <form onSubmit={(e) => handleSecondSubmit(e)}>
    
        <label htmlFor="">Search: </label>
        <input value={movieInput} onChange={(e) => movieSearch(e)} type="text" />
  
        <input type="submit" value="Submit" />
      </form>
   
      
      {spinnerState && <img src={spinner} alt="spinner" />}
      {movieState &&
        movieData.map((e) => (
          <MovieArticle
            key={movieData.indexOf(e)}
            movieName={e["Title"]}
            movieYear={e["Year"]}
            id={e["imdbID"]}
            movieImage={e["Poster"]}
          />
        ))}
    </>
  );
};

export default Search;
