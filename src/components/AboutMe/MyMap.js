import React, { useState, useEffect } from "react";
import { Map, APIProvider, Marker } from "@vis.gl/react-google-maps";
import { Dialog, DialogTitle, DialogContent, DialogActions, Button } from "@mui/material";
import { Image } from 'react-bootstrap';

const basePath = process.env.PUBLIC_URL;
const imagePath = (imageName) => require(`../../assets/locations/${imageName}`);

const MyMap = () => {
  const [dialog, setDialog] = useState(null);
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    fetch(`${basePath}/data/locations.json`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error loading JSON file");
        }
        return response.json();
      })
      .then((data) =>
        setLocations(
          data.map((item) => ({
            ...item,
            position: {lat: item.lat, lng: item.lng},
            image: imagePath(item.image),
          }))
        )
      )
      .catch((error) => console.error("Error loading data:", error));
  }, []);

  // Función para mostrar el diálogo al hacer clic en un marcador
  const handleMarkerClick = (location) => {
    setDialog(
      <Dialog
        open={true}
        onClose={() => setDialog(null)} // Cierra el diálogo al eliminarlo
      >
        <DialogTitle>{location.city}</DialogTitle>
        <DialogContent>
          <Image
            src={location.image}
            alt={location.city}
            style={{ width: "100%", borderRadius: "10px" }}
          />
          <p>{location.date}</p>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setDialog(null)}>Close</Button>
        </DialogActions>
      </Dialog>
    );
  };

  return (
    <APIProvider apiKey="AIzaSyCKqne-j0b10eWuKoI0zMdcFomsP0O7kdk">
      <Map
        minZoom={3}
        defaultZoom={3}
        defaultCenter={{ lat: 36.947707, lng: -3.5511425 }}
        style={{ width: "100%", height: "500px" }}
      >
        {/* Renderiza múltiples marcadores */}
        {locations.map((location, index) => (
          <Marker
            key={index}
            position={location.position}
            onClick={() => handleMarkerClick(location)} // Pasa la información del marcador al hacer clic
          />
        ))}
      </Map>

      {/* Renderiza dinámicamente el diálogo */}
      {dialog}
    </APIProvider>
  );
};

export default MyMap;
