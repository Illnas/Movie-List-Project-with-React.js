import React, { useState, createContext } from "react";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/shared/Footer";
import Header from "./components/shared/Header";
import Add from "./components/views/Add";
import Favorites from "./components/views/Favorites";
import Index from "./components/views/Index";
import Search from "./components/views/Search";
import Playground from "./components/playground/Playground";
import MovieDetails from "./components/views/MovieDetails";

export const fontSizeContent = createContext();
export const themeContext = createContext();

function App() {
  const [isSmall, setIsSmall] = useState(false);
  const [color, setColor] = useState(false);

  const colorChanger = () => {
    setColor(!color);
  };

  return (
    <>
      <themeContext.Provider value={color}>
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

        {/*     <Playground /> */}

        <Footer />
      </themeContext.Provider>
    </>
  );
}

export default App;
