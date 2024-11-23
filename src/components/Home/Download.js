import React from "react";
import { Button, Image, Container, Row, Col } from "react-bootstrap";
import { downloadLogo, pdfLogo } from "../../assets/logos";
import html2pdf from "html2pdf.js";

import "./Download.css";

const basePath = process.env.PUBLIC_URL;

/**
 * Download Component
 *
 * This component provides functionality for downloading files and creating a PDF of the webpage.
 * It includes two buttons: one for downloading a pre-existing resume PDF and another for converting 
 * the current webpage into a downloadable PDF using the `html2pdf.js` library.
 *
 * Features:
 * - **Download Resume PDF**:
 *   - Downloads a pre-existing `resume.pdf` file stored in the `public` directory.
 *   - Triggers a download action via a dynamically created link element.
 * - **Convert Webpage to PDF**:
 *   - Converts the current webpage to a high-quality PDF using `html2pdf.js`.
 *   - Supports scaling for better resolution and ensures compatibility across browsers.
 *
 * Functions:
 * - `handleDownload()`:
 *   - Dynamically creates an anchor element to download the `resume.pdf` file.
 *   - Uses the `basePath` from `process.env.PUBLIC_URL` to locate the file in the `public` folder.
 * - `handleDownloadPDF()`:
 *   - Uses `html2pdf.js` to convert the entire webpage into a PDF.
 *   - Configurable options include margin, image quality, scaling, and page dimensions.
 *
 * Hooks:
 * - No hooks are used in this component.
 *
 * Props:
 * - No props are passed to this component. It uses static data and assets for rendering.
 *
 * Dependencies:
 * - `react-bootstrap`: Used for layout (`Container`, `Row`, `Col`) and components (`Button`, `Image`).
 * - `html2pdf.js`: Used to convert the webpage into a PDF.
 *
 * Directory Structure:
 * - **Logos**: `downloadLogo` and `pdfLogo` are imported from `../../assets/logos` to display icons on the buttons.
 * - **PDF File**: The `resume.pdf` file should be placed in the `public` directory for direct access.
 *
 * CSS:
 * Custom styles are defined in `Download.css`:
 * - `.download-section`: Styles the container for the buttons.
 * - `.image-button`: Styles the buttons, aligning the icon and text.
 * - `.button-icon`: Styles the icon within the button (e.g., size, spacing).
 * - `.button-text`: Styles the text inside the button.
 *
 * Example Layout:
 * - Two buttons are displayed side by side on larger screens and stacked vertically on smaller screens.
 * - Button 1: Downloads the resume PDF.
 * - Button 2: Converts the webpage to a PDF.
 *
 * Usage:
 * Simply include the `<Download />` component in your application to provide file download functionality.
 *
 * Notes:
 * - The `resume.pdf` must be located in the `public` folder.
 * - Ensure `html2pdf.js` is installed and configured correctly for the webpage-to-PDF conversion to work.
 *
 * @component
 * @returns {JSX.Element} The JSX markup for the Download component.
 */
const Download = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = `${basePath}/resume.pdf`;
    link.download = "resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleDownloadPDF = () => {
    const element = document.body;
    const options = {
      margin: 0,
      filename: "webpage.pdf",
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: {
        scale: 2,
        scrollY: 0,
        useCORS: true,
        windowWidth: document.documentElement.scrollWidth,
        windowHeight: document.documentElement.scrollHeight,
      },
      jsPDF: {
        unit: "px",
        format: [
          document.documentElement.scrollWidth,
          document.documentElement.scrollHeight,
        ],
      },
    };
    html2pdf().set(options).from(element).save();
  };

  return (
    <Container fluid className="download-section">
      <Row className="align-items-center g-2">
        {/* Botones */}
        <Col
          xs={12}
          md={6}
          className="d-flex justify-content-center justify-content-md-end"
        >
          <Button
            variant="outline-primary"
            className="d-flex align-items-center image-button"
            onClick={handleDownload}
          >
            <Image src={pdfLogo} alt="icon" className="button-icon" rounded />
            <span className="button-text">Download CV as PDF</span>
          </Button>
        </Col>
        <Col
          xs={12}
          md={6}
          className="d-flex justify-content-center justify-content-md-end"
        >
          <Button
            variant="outline-primary"
            className="d-flex align-items-center image-button"
            onClick={handleDownloadPDF}
          >
            <Image
              src={downloadLogo}
              alt="icon"
              className="button-icon"
              rounded
            />
            <span className="button-text">Download Web as PDF</span>
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Download;
