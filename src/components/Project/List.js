import React, { useState, useEffect } from "react";

import { Image, Container, Card, Col, Row } from "react-bootstrap";
import { Chip } from "@mui/material";

import {
  githubLogo,
  alarmbotLogo,
  isaacbotLogo,
  aidrawitLogo,
  arduinoLogo,
  frameworkLogo,
  grandquizLogo,
  matchupLogo,
  medauthLogo,
  xLogo,
  universityLogo
} from "../../assets";

import "./List.css";

// Logos to map them when reading JSON files
const logos = {
  githubLogo,
  alarmbotLogo,
  isaacbotLogo,
  aidrawitLogo,
  arduinoLogo,
  frameworkLogo,
  grandquizLogo,
  matchupLogo,
  medauthLogo,
  xLogo,
  universityLogo
};

const basePath = process.env.PUBLIC_URL;

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
            icon: logos[item.icon],
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
          <Col key={index}>
            <Card>
              <Card.Img variant="top" src={item.icon} className="card-image" />
              <Card.Body className="card-body">
                <Card.Title>{item.project}</Card.Title>
                <Card.Text className="card-text">{item.description}</Card.Text>
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Chip
                    variant="outlined"
                    icon={<Image src={githubLogo} width="20px" className="chip-image" />}
                    label="View Project" className="chip-github"
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