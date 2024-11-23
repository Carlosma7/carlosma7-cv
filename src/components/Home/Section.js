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
 * Item Component
 *
 * The `Item` component is a reusable and dynamic component for rendering individual items with various attributes,
 * such as a logo, title, experience, link, and location. It is commonly used to represent entries in sections like
 * "Education," "Experience," or "Certificates."
 *
 * Features:
 * - **Logo Display**:
 *   - Displays a rounded image (logo) if the `logo` prop is provided.
 *   - Uses `react-bootstrap`'s `Image` component for responsive and styled images.
 * - **Content Display**:
 *   - Renders various textual elements conditionally, including:
 *     - Item title (`item`)
 *     - Experience description (`experience`)
 *     - Location (`location`)
 *   - Adds appropriate styles and accessibility attributes (e.g., `lang="en"` for experience text).
 * - **Link to External Resources**:
 *   - Renders a clickable link if the `link` prop is provided.
 *   - Uses `@mui/material`'s `Chip` component with an icon to indicate external links.
 *
 * Props:
 * - `logo` (string, optional): Path to an image file for the logo. If provided, it is displayed as a circular image.
 * - `item` (string, optional): Title or name of the item. Displayed as a styled paragraph.
 * - `experience` (string, optional): Description of the experience or role. Displayed with `lang="en"` for accessibility.
 * - `link` (string, optional): URL to an external resource (e.g., a certificate or project). Renders as a clickable `Chip`.
 * - `location` (string, optional): Displays the location as a styled paragraph.
 *
 * Dependencies:
 * - `react-bootstrap`:
 *   - Used for the `Image` component to display the logo.
 * - `@mui/material`:
 *   - Used for the `Chip` component to create a clickable link with an icon.
 * - `@mui/icons-material`:
 *   - Provides the `ArrowUpwardIcon` for the `Chip` component.
 *
 * CSS:
 * The component relies on external styles for layout and appearance:
 * - `.item-section`: Styles the container for the entire item.
 * - `.logo`: Styles the circular logo image.
 * - `.item-content`: Styles the title or name of the item.
 * - `.experience`: Styles the experience description.
 * - `.chip-link`: Styles the clickable link for certificates or other external resources.
 * - `.location`: Styles the location text.
 *
 * Accessibility:
 * - Adds `lang="en"` to the `experience` paragraph for better screen reader support when the content is in English.
 * - Ensures all links open in a new tab with `target="_blank"` and prevents security risks with `rel="noopener noreferrer"`.
 *
 * Example Usage:
 * ```jsx
 * <Item
 *   logo="/path/to/logo.png"
 *   item="Master's Degree in Computer Science"
 *   experience="Focused on machine learning and data science."
 *   link="https://example.com/certificate"
 *   location="Granada, Spain"
 * />
 * ```
 *
 * Example Rendering:
 * - A circular logo.
 * - A title (e.g., "Master's Degree in Computer Science").
 * - A description of experience (e.g., "Focused on machine learning and data science").
 * - A clickable link styled as a `Chip` (e.g., "View Certificate").
 * - A location (e.g., "Granada, Spain").
 *
 * Notes:
 * - All props are optional, but at least one should be provided to render meaningful content.
 * - Ensure the `link` points to a valid URL for the `Chip` to function as expected.
 *
 * @component
 * @param {object} props - Props passed to the component.
 * @returns {JSX.Element} The JSX markup for the Item component.
 */
function Item(props) {
  return (
    <div class="item-section">
      {props.logo && <Image src={props.logo} roundedCircle className="logo" />}
      <div>
        {props.item && <p class="item-content">{props.item}</p>}
        {props.experience && (
          <p class="experience" lang="en">
            {props.experience}
          </p>
        )}
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

/**
 * SkillItem Component
 *
 * The `SkillItem` component is a reusable and straightforward component for displaying a skill and its corresponding proficiency level as a progress bar. It is typically used in a list of skills, such as in a "Skills" section of a portfolio.
 *
 * Features:
 * - **Skill Name**:
 *   - Displays the name of the skill provided via the `skill` prop.
 * - **Progress Bar**:
 *   - Shows the skill's proficiency level as a progress bar using `react-bootstrap`'s `ProgressBar` component.
 *
 * Props:
 * - `skill` (string, required): The name of the skill to display.
 * - `progress` (number, required): The proficiency level of the skill, represented as a percentage (0-100) for the progress bar.
 *
 * Dependencies:
 * - `react-bootstrap`:
 *   - Provides the `Row`, `Col`, and `ProgressBar` components for layout and styling.
 *
 * CSS:
 * Custom styles should be applied via external CSS classes:
 * - `.custom-progress-bar`: Styles the column containing the skill name and progress bar.
 *
 * Example Usage:
 * ```jsx
 * <SkillItem skill="JavaScript" progress={85} />
 * ```
 *
 * Example Rendering:
 * - Displays the skill name (e.g., "JavaScript") as a paragraph.
 * - Renders a progress bar showing the proficiency level (e.g., 85% filled).
 *
 * Notes:
 * - Ensure the `progress` prop is within the valid range of 0-100 to avoid unexpected behavior in the progress bar.
 * - Wrap multiple `SkillItem` components in a parent container (e.g., a `Container` or `Section`) for proper layout.
 *
 * @component
 * @param {object} props - Props passed to the component.
 * @param {string} props.skill - The name of the skill.
 * @param {number} props.progress - The proficiency level of the skill (0-100).
 * @returns {JSX.Element} The JSX markup for the SkillItem component.
 */
function SkillItem(props) {
  return (
    <Row>
      <Col className="custom-progress-bar">
        <p>{props.skill}</p>
        <ProgressBar now={props.progress} />
      </Col>
    </Row>
  );
}

/**
 * TimedItem Component
 *
 * The `TimedItem` component renders a timeline visualization of content items. It uses the Material-UI Timeline library to display a structured timeline, where each item can optionally display associated dates and its detailed content.
 *
 * Features:
 * - **Dynamic Timeline Rendering**:
 *   - Checks if the `content` prop is an array and dynamically renders a `Timeline` with individual `TimelineItem`s.
 * - **Dates Display**:
 *   - If an item contains a `dates` property, it is displayed on the left (opposite content) of the timeline.
 *   - The dates are styled responsively with Material-UI's `sx` prop for flexible positioning.
 * - **Customizable Content**:
 *   - Uses an `Item` component to render the details of each timeline entry.
 * - **Timeline Separation**:
 *   - Includes a `TimelineDot` for each entry and a `TimelineConnector` between items, except the last one.
 *
 * Props:
 * - `content` (array, required):
 *   - An array of objects representing the timeline entries. Each object can have the following properties:
 *     - `dates` (string, optional): The date or time range for the timeline entry.
 *     - Any additional properties to be passed to the `Item` component.
 *
 * Dependencies:
 * - `@mui/lab`:
 *   - Provides the `Timeline`, `TimelineItem`, `TimelineDot`, `TimelineSeparator`, `TimelineContent`, and `TimelineConnector` components for creating the timeline.
 * - `@mui/material`:
 *   - Used for responsive styling via the `sx` prop.
 * - `Item`:
 *   - A custom component that renders the details of each timeline entry.
 *
 * CSS:
 * The component relies on external styles for additional customization:
 * - `.dates`: Styles the paragraph displaying the `dates` property.
 *
 * Example `content` Array:
 * ```jsx
 * const timelineContent = [
 *   {
 *     dates: "2021 - Present",
 *     item: "Software Engineer",
 *     experience: "Developing scalable web applications.",
 *   },
 *   {
 *     dates: "2019 - 2021",
 *     item: "Intern Developer",
 *     experience: "Worked on frontend and backend development.",
 *   },
 * ];
 * ```
 *
 * Example Usage:
 * ```jsx
 * <TimedItem content={timelineContent} />
 * ```
 *
 * Example Rendering:
 * - Displays a vertical timeline where:
 *   - Each entry has a `TimelineDot`.
 *   - Dates appear on the left side if provided.
 *   - The `Item` component renders the details of the entry.
 *   - `TimelineConnector`s connect entries, except the last one.
 *
 * Notes:
 * - Ensure the `content` prop is an array. If not, the component will render nothing.
 * - Dates are optional for each timeline entry. If absent, the timeline will adjust dynamically.
 * - The `Item` component should handle additional properties passed from the `content` array.
 *
 * @component
 * @param {object} props - Props passed to the component.
 * @param {array} props.content - Array of objects representing timeline entries.
 * @returns {JSX.Element} The JSX markup for the TimedItem component.
 */
function TimedItem(props) {
  return (
    <div>
      {Array.isArray(props.content) && (
        <Timeline>
          {props.content.map((item, index) => (
            <TimelineItem key={index}>
              {item.dates && (
                <TimelineOppositeContent
                  sx={{
                    position: "relative",
                    top: { xs: 10, md: 44 },
                    flex: { xs: 0, md: 0.2 },
                  }}
                >
                  <p class="dates">{item.dates}</p>
                </TimelineOppositeContent>
              )}
              <TimelineSeparator
                sx={{ position: "relative", top: { xs: 10, md: 44 } }}
              >
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

/**
 * NotTimedItem Component
 *
 * The `NotTimedItem` component is a reusable container for rendering a list of items, typically representing skills or attributes, using the `SkillItem` component. Unlike a timeline visualization, this component displays items in a simple, sequential format within a `Container`.
 *
 * Features:
 * - **Dynamic Rendering**:
 *   - Checks if the `content` prop is an array and dynamically maps each item to a `SkillItem` component.
 * - **Reusable Layout**:
 *   - Encapsulates the rendered items within a responsive Bootstrap `Container` with a bottom margin (`mb-5`).
 * - **SkillItem Integration**:
 *   - Uses the `SkillItem` component for rendering individual items, passing all properties from the `content` array to it.
 *
 * Props:
 * - `content` (array, required):
 *   - An array of objects representing the items to display.
 *   - Each object should have properties that match the `SkillItem` component's expected props, such as:
 *     - `skill` (string): The name of the skill.
 *     - `progress` (number): The proficiency level as a percentage (0-100).
 *
 * Dependencies:
 * - `react-bootstrap`:
 *   - Provides the `Container` component for responsive layout.
 * - `SkillItem`:
 *   - A custom component used for rendering individual items, typically skills with a progress bar.
 *
 * CSS:
 * The component uses the following external styles:
 * - `mb-5`: Adds a bottom margin for spacing between sections.
 *
 * Example `content` Array:
 * ```jsx
 * const skillsContent = [
 *   { skill: "JavaScript", progress: 85 },
 *   { skill: "React", progress: 90 },
 *   { skill: "Python", progress: 80 },
 * ];
 * ```
 *
 * Example Usage:
 * ```jsx
 * <NotTimedItem content={skillsContent} />
 * ```
 *
 * Example Rendering:
 * - Displays a list of skill items, each rendered using the `SkillItem` component:
 *   - `SkillItem` shows the skill name and a progress bar representing proficiency.
 *
 * Notes:
 * - Ensure the `content` prop is an array. If not, the component will render nothing.
 * - The `SkillItem` component must be capable of handling the props passed from the `content` array.
 * - The parent component should provide the appropriate data structure for the `content` prop.
 *
 * @component
 * @param {object} props - Props passed to the component.
 * @param {array} props.content - Array of objects representing items to display.
 * @returns {JSX.Element} The JSX markup for the NotTimedItem component.
 */
function NotTimedItem(props) {
  return (
    <Container className="mb-5">
      {Array.isArray(props.content) &&
        props.content.map((item, index) => <SkillItem key={index} {...item} />)}
    </Container>
  );
}

/**
 * Section Component
 *
 * The `Section` component serves as a reusable and dynamic layout for rendering different types of sections in an application.
 * It supports two rendering modes:
 * - **TimedItem**: For sections with a timeline structure (e.g., Education, Experience).
 * - **NotTimedItem**: For sections without a timeline structure (e.g., Skills).
 *
 * Features:
 * - **Dynamic Section Rendering**:
 *   - Based on the `sectionName` prop, it decides whether to render a `TimedItem` or a `NotTimedItem`.
 * - **Responsive Layout**:
 *   - Uses Bootstrap's grid system (`Container`, `Row`, `Col`) to create a responsive and flexible layout.
 * - **Section Title**:
 *   - Displays the section name in a prominent way, styled separately from the content.
 *
 * Props:
 * - `sectionName` (string, required):
 *   - The name of the section (e.g., "Skills", "Education").
 *   - Determines whether to render `TimedItem` or `NotTimedItem`.
 * - `content` (array, required):
 *   - An array of data objects to be passed to either `TimedItem` or `NotTimedItem`.
 *   - Each object should have the necessary properties expected by the respective child component.
 *
 * Dependencies:
 * - `react-bootstrap`:
 *   - Provides `Container`, `Row`, and `Col` for responsive layout.
 * - `TimedItem`:
 *   - A custom component for rendering timeline-based sections.
 * - `NotTimedItem`:
 *   - A custom component for rendering non-timeline-based sections (e.g., Skills).
 *
 * CSS:
 * Custom styles should be defined externally:
 * - `.section-name`: Styles the title of the section, often used for emphasis.
 *
 * Logic:
 * - If `sectionName` equals "Skills", the `NotTimedItem` component is rendered.
 * - For all other `sectionName` values, the `TimedItem` component is rendered.
 *
 * Example Props:
 * ```jsx
 * const educationContent = [
 *   { dates: "2019 - 2021", item: "Master's Degree", location: "Granada, Spain" },
 *   { dates: "2015 - 2019", item: "Bachelor's Degree", location: "Granada, Spain" },
 * ];
 * const skillsContent = [
 *   { skill: "JavaScript", progress: 85 },
 *   { skill: "React", progress: 90 },
 * ];
 * ```
 *
 * Example Usage:
 * ```jsx
 * <Section sectionName="Education" content={educationContent} />
 * <Section sectionName="Skills" content={skillsContent} />
 * ```
 *
 * Example Rendering:
 * - **Section Name**: Displayed in the first column.
 * - **Section Content**:
 *   - `TimedItem` for timeline-based sections like Education or Experience.
 *   - `NotTimedItem` for sections like Skills, which use progress bars.
 *
 * Notes:
 * - Ensure `content` matches the expected structure of `TimedItem` or `NotTimedItem`.
 * - Properly style `.section-name` for consistent section headers.
 * - This component serves as a wrapper for specific types of content and depends on `TimedItem` and `NotTimedItem` for rendering.
 *
 * @component
 * @param {object} props - Props passed to the component.
 * @param {string} props.sectionName - The name of the section to display.
 * @param {array} props.content - The content to be rendered in the section.
 * @returns {JSX.Element} The JSX markup for the Section component.
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
