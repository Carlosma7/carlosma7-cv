import React, { useState, useEffect } from "react";

import Section from "./Section";

const basePath = process.env.PUBLIC_URL;
const imagePath = (imageName) => require(`../../assets/logos/${imageName}`);

/**
 * Education - A functional component that fetches and displays data about education,
 * work experience, and skills, organizing them into separate sections.
 *
 * @returns {JSX.Element} The JSX markup for the Education component, including sections for Education, Experience, and Skills.
 *
 * @description
 * This component fetches data from three JSON files (`education.json`, `experience.json`, and `skills.json`)
 * and stores the information in separate state variables. Each section is displayed using the `Section` component,
 * with appropriate data passed as props. Logos associated with each item are mapped from a predefined set of logos.
 *
 * @example
 * <Education />
 *
 * @see Section - Used to render each individual section for education, experience, and skills.
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
        <hr/>
        <Section sectionName="Experience" content={experience} />
        <hr/>
        <Section sectionName="Certificates" content={certificates} />
        <hr/>
        <Section sectionName="Skills" content={skills} />
    </div>
  );
};

export default Education;
