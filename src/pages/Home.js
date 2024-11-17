import React from "react";
import { AboutMe, Download, Education } from "../components/Home";

/**
 * Home - A functional component that serves as the homepage layout, displaying the main sections
 * of the website, including the "About Me" and "Education" sections.
 *
 * @returns {JSX.Element} The JSX markup for the Home component, containing the AboutMe and Education sections.
 *
 * @example
 * <Home />
 *
 * @description
 * This component represents the homepage of the website, including the `AboutMe` and `Education`
 * components to introduce the user and provide information about their educational background.
 */
const Home = () => {
    return(
        <div>
            <AboutMe/>
            <Education/>
            <Download/>
        </div>
    );
};

export default Home;
