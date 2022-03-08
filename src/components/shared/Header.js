import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <nav>
      <div className="title">
        <h1>My watchlist</h1>
      </div>

      <ul>
        <li>
          <Link to="/">All Movies</Link>
        </li>
        <li>
          <Link to="/favorites">Favorites</Link>
        </li>
        <li>
          <Link to="/add">Add</Link>
        </li>
        <li>
          <Link to="/search">Search</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
