import React from "react";
import PropTypes from "prop-types";
import { Tab, Tabs, AppBar, Typography, Box } from "@mui/material";
import {
  MemoryRouter,
  Route,
  Routes,
  Link,
  matchPath,
  useLocation,
} from 'react-router-dom';
import { StaticRouter } from 'react-router-dom/server';

const Header = () => {
  const [value, setValue] = React.useState(0);


  const handleChange = (event, newValue) => {
    setValue(newValue);
  };


  function Router(props) {
    const { children } = props;
    if (typeof window === 'undefined') {
      return <StaticRouter location="/">{children}</StaticRouter>;
    }
  
    return (
      <MemoryRouter initialEntries={['/']} initialIndex={0}>
        {children}
      </MemoryRouter>
    );
  }
  
  Router.propTypes = {
    children: PropTypes.node,
  };
  
  function useRouteMatch(patterns) {
    const { pathname } = useLocation();
  
    for (let i = 0; i < patterns.length; i += 1) {
      const pattern = patterns[i];
      const possibleMatch = matchPath(pattern, pathname);
      if (possibleMatch !== null) {
        return possibleMatch;
      }
    }
  
    return null;
  }

  const routeMatch = useRouteMatch(["/", "/favorites", "/details/:id", "/add", "/search"]);
  const currentTab = routeMatch?.pattern?.path;

  

  return (
    <nav>
      <div className="title">
        <h1>My watchlist</h1>
      </div>
      <Box>
        <Tabs
  value={currentTab}
        >
          <Tab component={Link} value="/" label="Home" to="/" />
          <Tab component={Link} value="/favorites" label="Favorites" to="/favorites" />
          <Tab component={Link} value="/details/:id" label="Movie Details" to="/details/:id" />
          <Tab component={Link} value="/add" label="Add" to="/add" />
          <Tab component={Link} value="/search" label="Search" to="/search" />
        </Tabs>
      </Box>
    </nav>
  );
};

export default Header;
