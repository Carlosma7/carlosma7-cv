import { useState } from "react";
import { Carousel, Image } from "react-bootstrap";
import "./Prints.css";

const formatFileName = (fileName) => {
  const nameWithoutExtension = fileName.replace(/\.[^/.]+$/, "");
  const formattedName = nameWithoutExtension
    .replace(/_/g, " ")
    .replace(/\b\w/g, (char) => char.toUpperCase());
  return formattedName;
};

const importAll = (requireContext) =>
  requireContext.keys().map((key) => ({
    src: requireContext(key),
    name: formatFileName(key.split("/").pop()),
  }));

const images = importAll(
  require.context("../../assets/prints", false, /\.(png|jpg|jpeg|svg)$/)
);

/**
 * Prints Component
 *
 * This component renders a carousel of 3D printing projects using react-bootstrap's `Carousel` and `Image` components.
 * Each slide in the carousel displays an image of a 3D printed object and a caption with the formatted name of the file.
 *
 * Features:
 * - Dynamically imports all images from the `/assets/prints` directory.
 * - Extracts and formats the file names of the images to display them as human-readable captions.
 * - Implements a responsive carousel that allows users to browse through the images.
 *
 * Helper Functions:
 * - `formatFileName(fileName)`: Formats the file name into a human-readable format:
 *   - Removes the file extension.
 *   - Replaces underscores with spaces.
 *   - Capitalizes the first letter of each word.
 * - `importAll(requireContext)`: Dynamically imports all images in the specified directory and creates an array of objects, 
 *   each containing:
 *   - `src` (string): The image path.
 *   - `name` (string): The formatted file name.
 *
 * Hooks:
 * - `useState`: Manages the active index of the carousel.
 *
 * Props and State:
 * - `images` (array): Contains objects with the `src` and `name` of each image in the `/assets/prints` directory.
 * - `index` (number): The currently active index of the carousel.
 *
 * Dependencies:
 * - `react-bootstrap`: Provides the `Carousel` and `Image` components for rendering the image carousel.
 * - `require.context`: Dynamically loads all images from a specified directory.
 *
 * Directory Structure:
 * Images should be placed in the `/assets/prints` directory and should have file names that can be transformed into readable captions.
 *
 * Example Image File:
 * File name: `card_shuffler.png`
 * - Caption: `Card Shuffler`
 *
 * CSS:
 * The component uses the `Prints.css` file for custom styling. Ensure the following classes are styled:
 * - `.prints-container`: Container for the entire component.
 * - `.carousel`: Styles the carousel.
 * - `.p-print`: Styles the descriptive paragraph.
 * - `.h3-overlay`: Styles the captions on the carousel slides.
 *
 * @component
 * @returns {JSX.Element} The JSX markup for the Prints component.
 */
const Prints = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <div className="prints-container">
      <h2 className="pt-3">3D Printing 🗿</h2>
      <p className="p-print">
        3D printing has become one of my favorite creative outlets. It allows me
        to bring ideas to life, turning digital designs into tangible objects.
        Below, you can explore some of the projects I've worked on and the
        unique pieces I've created using this technology.
      </p>
      <Carousel
        activeIndex={index}
        onSelect={handleSelect}
        className="carousel"
      >
        {images.map((item, idx) => (
          <Carousel.Item key={idx}>
            <Image src={item.src} alt={item.name} className="image-carousel"/>
            <Carousel.Caption>
              <h3 className="h3-overlay">{item.name}</h3>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default Prints;
