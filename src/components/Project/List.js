import React, { useState, useEffect } from "react";

import { Image, Container, Card, Col, Row } from "react-bootstrap";
import { Chip } from "@mui/material";
import { githubLogo } from "../../assets/logos";

import "./List.css";

const basePath = process.env.PUBLIC_URL;
const imagePath = (imageName) => require(`../../assets/logos/${imageName}`);

/**
 * List Component
 *
 * The `List` component dynamically fetches and displays a grid of project cards. Each card represents an open-source project, including details such as an icon, description, and a link to the GitHub repository or project page.
 *
 * Features:
 * - **Dynamic Project Loading**:
 *   - Fetches project data from a JSON file located in `/data/projects.json`.
 *   - Dynamically maps project data to cards for rendering.
 * - **Responsive Grid Layout**:
 *   - Uses `react-bootstrap`'s grid system (`Container`, `Row`, `Col`) to ensure responsiveness across devices.
 * - **Project Cards**:
 *   - Each card includes:
 *     - A project icon.
 *     - A title and description.
 *     - A clickable `Chip` linking to the project repository or page.
 *
 * Props:
 * - This component does not accept props. All project data is fetched from the JSON file.
 *
 * State:
 * - `projects` (array):
 *   - Stores the project data fetched from the JSON file.
 *
 * Functions:
 * - `imagePath(imageName)`:
 *   - Dynamically imports project icons from the `/assets/logos/` directory based on the file name.
 * - `useEffect`:
 *   - Fetches the project data when the component mounts and updates the `projects` state.
 *
 * Dependencies:
 * - `react-bootstrap`:
 *   - Provides `Container`, `Row`, `Col`, `Card`, and `Image` components for layout and styling.
 * - `@mui/material`:
 *   - Provides the `Chip` component for creating clickable links with icons.
 *
 * JSON File Format:
 * The `projects.json` file should contain an array of objects with the following structure:
 * ```json
 * [
 *   {
 *     "project": "Project Name",
 *     "description": "A brief description of the project.",
 *     "link": "https://github.com/username/project",
 *     "icon": "project_icon.png"
 *   }
 * ]
 * ```
 *
 * Example Usage:
 * Simply include the `List` component in your application to display the projects:
 * ```jsx
 * <List />
 * ```
 *
 * CSS:
 * The component relies on external styles defined in `List.css`:
 * - `.card-image`: Styles the project icon at the top of the card.
 * - `.card-body`: Styles the content area of the card.
 * - `.card-text`: Styles the project description text.
 * - `.chip-github`: Styles the `Chip` used for linking to the project repository.
 * - `.chip-image`: Styles the icon inside the `Chip`.
 *
 * Example Rendering:
 * - Displays a grid of project cards with:
 *   - A project icon at the top.
 *   - A title and description in the body.
 *   - A clickable `Chip` that links to the project repository.
 *
 * Notes:
 * - Ensure the `projects.json` file exists in the `/public/data/` directory.
 * - Ensure the `icon` property in `projects.json` matches the file name of the logo in `/assets/logos/`.
 * - Proper error handling is included to log issues with fetching or processing data.
 *
 * Accessibility:
 * - The `alt` attribute on the `Card.Img` ensures accessibility by describing the project icon.
 * - The links open in a new tab with `target="_blank"` and are secured with `rel="noopener noreferrer"`.
 *
 * @component
 * @returns {JSX.Element} The JSX markup for the List component.
 */
const List = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch(`${basePath}/data/projects.json`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error loading JSON file");
        }
        return response.json();
      })
      .then((data) =>
        setProjects(
          data.map((item) => ({
            ...item,
            icon: imagePath(item.icon),
          }))
        )
      )
      .catch((error) => console.error("Error loading data:", error));
  }, []);
  return (
    <Container fluid className="my-3">
      <Row xs={1} md={4} className="g-3">
        {Array.isArray(projects) &&
          projects.map((item, index) => (
            <Col key={index} className="wrapper">
              <Card className="card">
                <Card.Img
                  variant="top"
                  src={item.icon}
                  className="card-image"
                />
                <Card.Body className="card-body">
                  <Card.Title>{item.project}</Card.Title>
                  <Card.Text className="card-text">
                    {item.description}
                  </Card.Text>
                  <a href={item.link} target="_blank" rel="noopener noreferrer">
                    <Chip
                      variant="outlined"
                      icon={
                        <Image
                          src={githubLogo}
                          width="20px"
                          className="chip-image"
                        />
                      }
                      label="View Project"
                      className="chip-github"
                      sx={{
                        color: "white",
                      }}
                    />
                  </a>
                </Card.Body>
              </Card>
            </Col>
          ))}
      </Row>
    </Container>
  );
};

export default List;
