import React from "react";
import { ProgressBar, Image, Container, Row, Col } from "react-bootstrap";
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineOppositeContent,
} from "@mui/lab";
import { Chip } from "@mui/material";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

import "./Section.css";

/**
 * Item - A functional component that renders information about an individual item,
 * including a logo, name, experience, location, skill, and progress bar.
 *
 * @param {Object} props - The properties passed to the component.
 * @param {string} [props.logo] - The source URL for the logo image (optional).
 * @param {string} [props.item] - The name or title of the item (optional).
 * @param {string} [props.experience] - The experience or description related to the item (optional).
 * @param {string} [props.location] - The location associated with the item (optional).
 * @param {string} [props.skill] - The name of the skill associated with the progress bar (optional).
 * @param {number} [props.progress] - The progress percentage to display in the progress bar (optional).
 *
 * @returns {JSX.Element} The JSX markup for the Item component, displaying relevant details and a progress bar if provided.
 *
 * @example
 * <Item
 *   logo="path/to/logo"
 *   item="JavaScript Developer"
 *   experience="5 years"
 *   location="Granada, Spain"
 *   skill="JavaScript"
 *   progress={80}
 * />
 */
function Item(props) {
  return (
    <div class="item-section">
      {props.logo && <Image src={props.logo} roundedCircle className="logo" />}
      <div>
        {props.item && <p class="item-content">{props.item}</p>}
        {props.experience && <p class="experience" lang="en">{props.experience}</p>}
        {props.link && (
          <a
            href={props.link}
            target="_blank"
            rel="noopener noreferrer"
            class="chip-link"
          >
            <Chip
              variant="outlined"
              icon={<ArrowUpwardIcon />}
              label="View Certificate"
            />
          </a>
        )}
        {props.location && <p class="location">{props.location}</p>}
      </div>
    </div>
  );
}

function SkillItem(props) {
  return (
    <Row>
      <Col className="custom-progress-bar">
        <p>{props.skill}</p>
        <ProgressBar now={props.progress} className="customi" />
      </Col>
    </Row>
  );
}

function TimedItem(props) {
  return (
    <div>
      {Array.isArray(props.content) && (
        <Timeline>
          {props.content.map((item, index) => (
            <TimelineItem key={index}>
              {item.dates && (
                <TimelineOppositeContent sx={{ position: "relative", top: {xs: 10, md: 44}, flex: {xs: 0, md: 0.2}}}>
                  <p class="dates">{item.dates}</p>
                </TimelineOppositeContent>
              )}
              <TimelineSeparator sx={{ position: "relative", top: {xs: 10, md: 44},}}>
                <TimelineDot color="grey" />
                {index < props.content.length - 1 && <TimelineConnector />}
              </TimelineSeparator>
              <TimelineContent>
                <Item key={index} {...item} />
              </TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
      )}
    </div>
  );
}

function NotTimedItem(props) {
  return (
    <Container className="mb-5">
      {Array.isArray(props.content) &&
        props.content.map((item, index) => <SkillItem key={index} {...item} />)}
    </Container>
  );
}

/**
 * Section - A functional component that renders a section with a title and a list of items.
 *
 * @param {Object} props - The properties passed to the component.
 * @param {string} props.sectionName - The title of the section.
 * @param {Array<Object>} props.content - An array of objects representing items to display in the section.
 * Each item object is passed as props to the `Item` component.
 *
 * @returns {JSX.Element} The JSX markup for the Section component, displaying a section title and a list of items.
 *
 * @example
 * <Section
 *   sectionName="Skills"
 *   content={[
 *     { logo: "path/to/logo", item: "JavaScript Developer", experience: "5 years", location: "Granada, Spain", skill: "JavaScript", progress: 80 },
 *     { logo: "path/to/logo2", item: "Python Developer", experience: "3 years", location: "Madrid, Spain", skill: "Python", progress: 70 }
 *   ]}
 * />
 */

/*<Container class="section-content">*/
/*

*/
function Section(props) {
  return (
    <Container>
      <Row>
        <Col xs={12} md={2}>
          <p class="section-name">{props.sectionName}</p>
        </Col>
        <Col xs={12} md={10}>
          {props.sectionName !== "Skills" ? (
            <TimedItem {...props} />
          ) : (
            <NotTimedItem {...props} />
          )}
        </Col>
      </Row>
    </Container>
  );
}

export default Section;
