import React from 'react';
import "./Footer.css";

/**
 * Footer - A functional component that renders the footer section of the website.
 *
 * @returns {JSX.Element} The JSX markup for the Footer component, displaying copyright information.
 *
 * @example
 * <Footer />
 *
 * @description
 * This component displays a footer with copyright information, including the year and a statement
 * indicating that all rights are reserved.
 */
const Footer = () => {
  return (
    <footer>
      <p>© 2024 My Website. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
