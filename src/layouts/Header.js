import React from "react";
import { AppBar, Toolbar, Tabs, Tab } from "@mui/material";
import { Link } from "react-router-dom";
import "./Header.css";

const basePath = process.env.PUBLIC_URL;

/**
 * Header - A functional component that renders the navigation header of the website using Material-UI AppBar.
 *
 * @returns {JSX.Element} The JSX markup for the Header component, displaying a navigation menu with links.
 *
 * @example
 * <Header />
 *
 * @description
 * This component displays a header with navigation tabs, allowing users to navigate to different sections
 * of the website (Home, Projects, Hobbies, and Contact). The `Tab` components use React Router's `Link`
 * for client-side routing.
 */
const Header = () => {
  return (
    <AppBar position="static" className="header-appbar">
      <Toolbar className="toolbar">
        <Tabs
          className="tabs"
        >
          <Tab label="Home" component={Link} to={`${basePath}`} className="tab-link" />
          <Tab label="Projects" component={Link} to={`${basePath}/projects`} className="tab-link" />
          <Tab label="Hobbies" component={Link} to={`${basePath}/hobbies`} className="tab-link" />
          <Tab label="Contact" component={Link} to={`${basePath}/contact`} className="tab-link" />
        </Tabs>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
