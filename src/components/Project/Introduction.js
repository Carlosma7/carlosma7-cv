import React from "react";

import { githubLogo } from "../../assets";

import { Container, Row, Col, Image } from "react-bootstrap";
import "./Introduction.css";

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
