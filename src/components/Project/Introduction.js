import React from "react";

import { githubLogo } from "../../assets/logos";

import { Container, Row, Col, Image } from "react-bootstrap";
import "./Introduction.css";

/**
 * Introduction Component
 *
 * The `Introduction` component provides a brief introduction and links to the user's GitHub profile. It highlights open-source projects and serves as an entry point for exploring the user's work on GitHub.
 *
 * Features:
 * - **GitHub Link**:
 *   - Displays a clickable circular GitHub logo that links to the user's GitHub profile.
 *   - Opens the link in a new tab while preventing security risks using `rel="noopener noreferrer"`.
 * - **Introductory Text**:
 *   - A short description inviting users to explore open-source projects hosted on GitHub.
 *
 * Props:
 * - This component does not accept props. The GitHub link and logo are statically defined.
 *
 * Dependencies:
 * - `react-bootstrap`:
 *   - Provides `Container`, `Row`, `Col`, and `Image` components for responsive layout and styling.
 *
 * CSS:
 * The component relies on custom styles defined in `Introduction.css`:
 * - `.introduction-container`: Styles the container for the entire component.
 * - `.introduction-col`: Styles the column containing the GitHub logo and text.
 * - `.github-link-image`: Styles the circular GitHub logo for consistent sizing and presentation.
 *
 * Example Usage:
 * Simply include the `Introduction` component in your application, typically at the start of a portfolio or project page:
 * ```jsx
 * <Introduction />
 * ```
 *
 * Example Rendering:
 * - **GitHub Logo**: A circular logo linking to the user's GitHub profile.
 * - **Text**: A short paragraph encouraging users to explore the user's GitHub projects.
 *
 * Notes:
 * - Ensure the `githubLogo` is correctly imported from the `../../assets/logos` directory.
 * - The GitHub link is hardcoded to `https://github.com/carlosma7`. Update it if necessary.
 *
 * Accessibility:
 * - The `alt` attribute on the `Image` ensures accessibility by describing the GitHub logo.
 *
 * @component
 * @returns {JSX.Element} The JSX markup for the Introduction component.
 */
const Introduction = () => {
  return (
    <Container fluid className="introduction-container">
      <Row>
        <Col className="introduction-col">
          <a
            href="https://github.com/carlosma7"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src={githubLogo} alt="Github Profile" roundedCircle className="github-link-image"/>
          </a>
          <p>Here are some of my open source projects on GitHub.</p>
        </Col>
      </Row>
    </Container>
  );
};

export default Introduction;
