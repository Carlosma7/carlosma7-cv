import React, { useState, useEffect } from "react";
import { Fab } from "@mui/material";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import "./ScrollToTopButton.css";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Maneja la visibilidad del botón según el scroll
  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Desplaza hacia arriba al hacer clic en el botón
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div>
      {isVisible && (
        <Fab
          onClick={scrollToTop}
          className="fab"
        >
          <ArrowUpwardIcon />
        </Fab>
      )}
    </div>
  );
};

export default ScrollToTopButton;
