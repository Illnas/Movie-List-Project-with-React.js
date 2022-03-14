import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/shared/Footer";
import Header from "./components/shared/Header";
import Add from "./components/views/Add";
import Favorites from "./components/views/Favorites";
import Index from "./components/views/Index";
import Search from "./components/views/Search";
import Playground from "./components/playground/Playground";

function App() {
  return (
    <>
      <Header />
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
 
 {/* <Playground /> */}

      <Footer />
    </>
  );
}

export default App;
