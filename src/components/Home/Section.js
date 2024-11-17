import React from "react";
import { ProgressBar, Image } from "react-bootstrap";
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
      {props.logo && (
        <Image
          src={props.logo}
          roundedCircle
          className="logo"
          width="100"
          height="100"
        />
      )}
      <div>
        {props.item && <p class="item-content">{props.item}</p>}
        {props.experience && <p class="experience">{props.experience}</p>}
        {props.link && (
          <a href={props.link} target="_blank" rel="noopener noreferrer" class="chip-link">
            <Chip
              variant="outlined"
              icon={<ArrowUpwardIcon />}
              label="View Certificate"
            />
          </a>
        )}
        {props.location && <p class="location-dates">{props.location}</p>}
      </div>
    </div>
  );
}

function SkillItem(props) {
  return (
    <div class="custom-progress-bar">
      <p class="skill">{props.skill}</p>
      <ProgressBar now={props.progress} className="customi" />
    </div>
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
                <TimelineOppositeContent
                  sx={{ minWidth: 300, position: "relative", top: 44 }}
                >
                  <p class="location-dates">{item.dates}</p>
                </TimelineOppositeContent>
              )}
              <TimelineSeparator sx={{ position: "relative", top: 40 }}>
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
    <div>
      {Array.isArray(props.content) &&
        props.content.map((item, index) => <SkillItem key={index} {...item} />)}
    </div>
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
function Section(props) {
  return (
    <div class="section">
      <div class="section-name">
        <p>{props.sectionName}</p>
      </div>
      <div class="section-content">
        {props.sectionName !== "Skills" ? (
          <TimedItem {...props} />
        ) : (
          <NotTimedItem {...props} />
        )}
      </div>
    </div>
  );
}

export default Section;
