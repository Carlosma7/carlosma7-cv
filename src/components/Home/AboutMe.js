import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import { useTypewriter, Cursor } from "react-simple-typewriter";

import {
  profilePic,
  githubLogo,
  linkedinLogo,
  telegramLogo,
} from "../../assets";

import "./AboutMe.css";

function LogoLinkButton(props) {
  return (
    <a
      href={props.link}
      target="_blank"
      rel="noopener noreferrer"
    >
      <Image
        src={props.logo}
        alt={props.alt}
        className="logo-link-image"
        roundedCircle
      />
    </a>
  );
}

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
            Degree in Computer Engineering. I consider myself as a proactive
            and a team player with good communication skills. Overall I have
            good general computing and IT knowledge that allows me to adapt to
            any kind of situation and learn fast.
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
