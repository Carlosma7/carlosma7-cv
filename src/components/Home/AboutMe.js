import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import { useTypewriter, Cursor } from "react-simple-typewriter";

import { profilePic } from "../../assets";
import { githubLogo, linkedinLogo, telegramLogo } from "../../assets/logos";

import "./AboutMe.css";

function LogoLinkButton(props) {
  return (
    <a href={props.link} target="_blank" rel="noopener noreferrer">
      <Image
        src={props.logo}
        alt={props.alt}
        className="logo-link-image"
        roundedCircle
      />
    </a>
  );
}

/**
 * AboutMe Component
 *
 * This component provides an introduction to the user with dynamic text animation, a profile picture, 
 * and links to social media platforms. It uses `react-simple-typewriter` to display a typewriter effect 
 * for the introduction and `react-bootstrap` for layout and styling.
 *
 * Features:
 * - **Dynamic Typewriter Effect**:
 *   - Displays rotating phrases about the user (e.g., name, job, location) with a typewriter effect.
 *   - Supports looping and customizable type and delete speeds.
 * - **Responsive Design**:
 *   - Uses Bootstrap's grid system to create a responsive layout.
 *   - The profile picture and description adjust based on the screen size.
 * - **Social Media Links**:
 *   - Renders circular logos for GitHub, LinkedIn, and Telegram with links that open in a new tab.
 *
 * Hooks:
 * - `useTypewriter`: A hook from `react-simple-typewriter` to handle the dynamic typewriter effect.
 *
 * Props:
 * - No props are passed to this component. It uses static data for its content.
 *
 * Subcomponent:
 * - `LogoLinkButton`:
 *   - A reusable button component for displaying a social media logo with a link.
 *   - Props:
 *     - `link` (string): The URL for the social media page.
 *     - `logo` (string): The path to the social media logo image.
 *     - `alt` (string): Alternative text for the image.
 *
 * Dependencies:
 * - `react-bootstrap`: Provides the `Container`, `Row`, `Col`, and `Image` components for layout and styling.
 * - `react-simple-typewriter`: Handles the dynamic typewriter effect.
 *
 * Directory Structure:
 * - **Profile Picture**: Located in `../../assets` and imported as `profilePic`.
 * - **Social Media Logos**: Located in `../../assets/logos` and imported individually.
 *
 * CSS:
 * Custom styles are defined in `AboutMe.css` and include:
 * - `.about-me`: Container for the component.
 * - `.profile-pic`: Styles the profile picture.
 * - `.description`: Styles the text description.
 * - `.adjectives`: Styles the dynamic typewriter text.
 * - `.rrss`: Styles the social media links section.
 * - `.logo-link-image`: Styles the circular logos for social media links.
 *
 * Example Structure:
 * - Left Column: Displays the profile picture.
 * - Right Column: Contains the dynamic typewriter effect, description, and social media links.
 *
 * Usage:
 * Simply import and include the `<AboutMe />` component in your application to display a personal introduction.
 *
 * @component
 * @returns {JSX.Element} The JSX markup for the AboutMe component.
 */
const AboutMe = () => {
  const [adjectives] = useTypewriter({
    words: [
      "Hi there, I'm Carlos!",
      "I'm working as an Odoo Developer",
      "I'm from Granada, Spain",
      "I studied Computer Engineering",
    ],
    loop: {},
    typeSpeed: 50,
    deleteSpeed: 80,
  });

  return (
    <Container fluid className="about-me">
      <Row className="justify-content-center align-items-center">
        <Col xs={12} md={4} className="text-center">
          <Image
            src={profilePic}
            className="profile-pic"
            roundedCircle
            width="200"
          />
        </Col>
        <Col xs={12} md={8} className="description">
          <span className="adjectives">
            {adjectives}
            <Cursor cursorStyle="/" />
          </span>
          <p>
            Computer engineer and Odoo developer graduated from a Master's
            Degree in Computer Engineering. I consider myself as a proactive and
            a team player with good communication skills. Overall I have good
            general computing and IT knowledge that allows me to adapt to any
            kind of situation and learn fast.
          </p>
          <div className="rrss">
            <LogoLinkButton
              link="https://github.com/carlosma7"
              logo={githubLogo}
              alt="Github"
            />
            <LogoLinkButton
              link="https://linkedin.com/in/carlos-morales-aguilera/"
              logo={linkedinLogo}
              alt="LinkedIn"
            />
            <LogoLinkButton
              link="https://telegram.me/carlosma7"
              logo={telegramLogo}
              alt="Telegram"
            />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutMe;
