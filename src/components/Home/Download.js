import React from "react";
import { Button, Image, Container, Row, Col } from "react-bootstrap";
import { downloadLogo, pdfLogo } from "../../assets/logos";
import html2pdf from "html2pdf.js";


import "./Download.css";

const basePath = process.env.PUBLIC_URL;

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
        <Col xs={12} md={6} className="d-flex justify-content-center justify-content-md-end">
          <Button variant="outline-primary" className="d-flex align-items-center image-button" onClick={handleDownload}>
            <Image src={pdfLogo} alt="icon" className="button-icon" rounded />
            <span className="button-text">Download CV as PDF</span>
          </Button>
        </Col>
        <Col xs={12} md={6} className="d-flex justify-content-center justify-content-md-end">
        <Button variant="outline-primary" className="d-flex align-items-center image-button" onClick={handleDownloadPDF}>
            <Image src={downloadLogo} alt="icon" className="button-icon" rounded />
            <span className="button-text">Download Web as PDF</span>
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Download;
