import React, { useState, createContext, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/shared/Footer";
import Header from "./components/shared/Header";
import Add from "./components/views/Add";
import Favorites from "./components/views/Favorites";
import Index from "./components/views/Index";
import Search from "./components/views/Search";
import Playground from "./components/playground/Playground";
import MovieDetails from "./components/views/MovieDetails";
import { Provider } from "react-redux";
import store from "./Redux/store";

export const fontSizeContent = createContext();
export const themeContext = createContext();
export const movieContext = createContext();

function App() {
  const [isSmall, setIsSmall] = useState(false);
  const [color, setColor] = useState(false);
  const [movieArr, setMovieArr] = useState([]);

  const colorChanger = () => {
    setColor(!color);
  };

  useEffect(() => {
    if(movieArr.length !== 0) {
      localStorage.setItem("name", JSON.stringify(movieArr)); 
    }
    
  }, [movieArr]);

  useEffect(() => {
    const saved = localStorage.getItem("name");
    const savedParsed = JSON.parse(saved);
    if(savedParsed !== null) {
      setMovieArr(savedParsed)
    }
  }, [])


  


  return (
    <>
      <movieContext.Provider value={{ setMovieArr, movieArr }}>
        <Provider store={store}>
          <Header />
          {/*     <Button onClick={()=> colorChanger()} variant="contained">Color is {color ? "dark" : "light"}</Button> */}
          <main>
            <Routes>
              <Route
                exact
                path="/"
                element={
                  <>
                    <Index />
                  </>
                }
              />

              <Route
                exact
                path="/favorites"
                element={
                  <>
                    <Favorites />
                  </>
                }
              />

              <Route
                exact
                path="/details/:id"
                element={
                  <>
                    <MovieDetails />
                  </>
                }
              />

              <Route
                exact
                path="/add"
                element={
                  <>
                    <Add />
                  </>
                }
              />

              <Route
                exact
                path="/search"
                element={
                  <>
                    <Search />
                  </>
                }
              />
            </Routes>
          </main>

          {/*        <Playground /> */}

          <Footer />
        </Provider>
      </movieContext.Provider>
    </>
  );
}

export default App;
