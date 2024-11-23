import React, { useState, useEffect } from "react";

import Section from "./Section";

const basePath = process.env.PUBLIC_URL;
const imagePath = (imageName) => require(`../../assets/logos/${imageName}`);

/**
 * Education Component
 *
 * The `Education` component dynamically loads and displays sections for education, experience, skills, and certificates.
 * Each section is populated with data fetched from JSON files and rendered using the `Section` component.
 *
 * Features:
 * - **Dynamic Data Loading**:
 *   - Fetches data for education, experience, skills, and certificates from respective JSON files located in `/data/`.
 *   - Processes and enriches the fetched data by adding image paths for logos.
 * - **Reusable Section Rendering**:
 *   - Uses the `Section` component to render each section with a consistent layout.
 *   - Supports dynamic content for each section.
 *
 * Hooks:
 * - `useState`: Manages the state for education, experience, skills, and certificates data.
 * - `useEffect`: Triggers the fetching of data when the component is mounted.
 *
 * Functions:
 * - `imagePath(imageName)`:
 *   - Dynamically imports image assets from the `/assets/logos/` directory based on the file name.
 *   - Ensures that the logos are correctly associated with their respective data items.
 * - Fetching Logic:
 *   - Fetches JSON files (`education.json`, `experience.json`, `skills.json`, and `certificates.json`) from the `/data/` directory.
 *   - Maps each data item to include its corresponding logo.
 *
 * Props:
 * - No props are passed to this component. It fetches all data dynamically from JSON files.
 *
 * Dependencies:
 * - `Section`:
 *   - A reusable component for rendering sections with a title and content.
 * - `react`:
 *   - Used for state management and lifecycle handling.
 *
 * Directory Structure:
 * - **Data**: JSON files for `education`, `experience`, `skills`, and `certificates` should be placed in `/public/data/`.
 * - **Assets**: Logos for each data item should be stored in `/assets/logos/`.
 *
 * JSON File Format:
 * Each JSON file should contain an array of objects. Example structure for `education.json`:
 * ```json
 * [
 *   {
 *     "title": "Master's Degree in Computer Science",
 *     "institution": "University XYZ",
 *     "logo": "university_logo.png",
 *     "date": "2019 - 2021"
 *   }
 * ]
 * ```
 *
 * CSS:
 * The component relies on external CSS for layout and styling. Ensure the `Section` component is styled for proper rendering.
 *
 * Usage:
 * Simply import and include the `<Education />` component in your application to display the sections dynamically.
 *
 * Notes:
 * - All JSON files must be placed in the `/public/data/` directory for proper fetching.
 * - Ensure the logo file names in the JSON files match the actual file names in `/assets/logos/`.
 * - Proper error handling is included to log issues with fetching or processing data.
 *
 * Example Rendering:
 * - Section 1: Education (e.g., degrees or certifications).
 * - Section 2: Experience (e.g., work history).
 * - Section 3: Certificates (e.g., additional qualifications).
 * - Section 4: Skills (e.g., programming languages or tools).
 *
 * @component
 * @returns {JSX.Element} The JSX markup for the Education component.
 */
const Education = () => {
  const [education, setEducation] = useState([]);
  const [experience, setExperience] = useState([]);
  const [skills, setSkills] = useState([]);
  const [certificates, setCertificates] = useState([]);

  useEffect(() => {
    fetch(`${basePath}/data/education.json`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error loading JSON file");
        }
        return response.json();
      })
      .then((data) =>
        setEducation(
          data.map((item) => ({
            ...item,
            logo: imagePath(item.logo),
          }))
        )
      )
      .catch((error) => console.error("Error loading data:", error));

    fetch(`${basePath}/data/experience.json`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error loading JSON file");
        }
        return response.json();
      })
      .then((data) =>
        setExperience(
          data.map((item) => ({
            ...item,
            logo: imagePath(item.logo),
          }))
        )
      )
      .catch((error) => console.error("Error loading data:", error));

    fetch(`${basePath}/data/skills.json`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error loading JSON file");
        }
        return response.json();
      })
      .then((data) =>
        setSkills(
          data.map((item) => ({
            ...item,
          }))
        )
      )
      .catch((error) => console.error("Error loading data:", error));

    fetch(`${basePath}/data/certificates.json`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error loading JSON file");
        }
        return response.json();
      })
      .then((data) =>
        setCertificates(
          data.map((item) => ({
            ...item,
            logo: imagePath(item.logo),
          }))
        )
      )
      .catch((error) => console.error("Error loading data:", error));
  }, []);

  return (
    <div>
      <Section sectionName="Education" content={education} />
      <hr />
      <Section sectionName="Experience" content={experience} />
      <hr />
      <Section sectionName="Certificates" content={certificates} />
      <hr />
      <Section sectionName="Skills" content={skills} />
    </div>
  );
};

export default Education;
