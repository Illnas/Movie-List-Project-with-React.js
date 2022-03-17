import React from "react";
import PropTypes from "prop-types";
import { Tab, Tabs, AppBar, Typography, Box } from "@mui/material";
import { Link } from "react-router-dom";


const Footer = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <footer>
      <div className="footer-container">
        <h2>Copyright My Watchlist</h2>
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
      </div>
    </footer>
  );
};

export default Footer;
