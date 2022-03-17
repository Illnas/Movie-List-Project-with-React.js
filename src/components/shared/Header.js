import React from "react";
import PropTypes from "prop-types";
import { Tab, Tabs, AppBar, Typography, Box } from "@mui/material";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [value, setValue] = React.useState(0);
  const location = useLocation()


  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <nav>
      <div className="title">
        <h1>My watchlist</h1>
      </div>
      <Box>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="nav tabs example"
        >
          <Tab component={Link} label="Home" to="/" />
          <Tab component={Link} label="Favorites" to="/favorites" />
          <Tab component={Link} label="Add" to="/add" />
          <Tab component={Link} label="Search" to="/search" />
        </Tabs>
      </Box>
    </nav>
  );
};

export default Header;
