import React, { useState, useEffect } from "react";
import { Map, APIProvider, Marker } from "@vis.gl/react-google-maps";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from "@mui/material";
import { Image } from "react-bootstrap";
import "./MyMap.css";

const basePath = process.env.PUBLIC_URL;
const imagePath = (imageName) => require(`../../assets/locations/${imageName}`);

/**
 * MyMap Component
 *
 * This component renders an interactive map using the @vis.gl/react-google-maps library,
 * allowing users to explore various locations represented as markers on the map. When
 * a marker is clicked, a dialog appears displaying additional details about the location,
 * such as its name, an associated image, and the date of the visit.
 *
 * Features:
 * - Fetches location data dynamically from a JSON file located in `/data/locations.json`.
 * - Dynamically loads images associated with each location from the `/assets/locations/` directory.
 * - Displays an interactive map with markers for each location.
 * - Clicking a marker opens a dialog containing the location's details (image, name, date).
 *
 * Hooks:
 * - useState: Manages the state for dialog visibility and loaded locations.
 * - useEffect: Fetches location data when the component is mounted.
 *
 * Dependencies:
 * - @vis.gl/react-google-maps: Provides the Map and Marker components.
 * - @mui/material: Used for rendering the dialog.
 * - react-bootstrap: Used for rendering responsive images within the dialog.
 *
 * JSON File Format:
 * The JSON file (`locations.json`) should contain an array of location objects with the following fields:
 * - `city` (string): The name of the city.
 * - `lat` (number): The latitude of the location.
 * - `lng` (number): The longitude of the location.
 * - `image` (string): The filename of the associated image in `/assets/locations/`.
 * - `date` (string): The date associated with the location.
 *
 * Example JSON:
 * [
 *   {
 *     "city": "Granada",
 *     "lat": 36.947707,
 *     "lng": -3.5511425,
 *     "image": "granada.jpg",
 *     "date": "2023-05-14"
 *   },
 *   ...
 * ]
 *
 * @component
 * @returns {JSX.Element} The JSX markup for the MyMap component.
 */
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
            position: { lat: item.lat, lng: item.lng },
            image: imagePath(item.image),
          }))
        )
      )
      .catch((error) => console.error("Error loading data:", error));
  }, []);

  const handleMarkerClick = (location) => {
    setDialog(
      <Dialog
        open={true}
        onClose={() => setDialog(null)}
      >
        <DialogTitle>{location.city}</DialogTitle>
        <hr />
        <DialogContent>
          <Image
            src={location.image}
            alt={location.city}
            fluid
            className="image"
          />
          <p className="date">{location.date}</p>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setDialog(null)}>Close</Button>
        </DialogActions>
      </Dialog>
    );
  };

  return (
    <div>
      <h2 className="pt-3">Travelling ✈️</h2>
      <p className="p-travel">
        Traveling and exploring new countries is one of my greatest passions.
        Each destination has something unique to offer, from fascinating
        cultures to breathtaking landscapes. Below, you can find a map
        highlighting the cities I have had the chance to visit around the world.
        Feel free to click the markers if you want to see some of the picture I
        took myself.
        <br />
        <br />
        Here's the list of countries I've visited so far (including my own
        country): 🇪🇸🇫🇷🇩🇪🇦🇹🇮🇪🇵🇱🇳🇱🇨🇭🇮🇹🇬🇧🇸🇪🇺🇲🇵🇹.
      </p>
      <APIProvider apiKey="AIzaSyCKqne-j0b10eWuKoI0zMdcFomsP0O7kdk">
        <Map
          minZoom={3}
          defaultZoom={3}
          defaultCenter={{ lat: 36.947707, lng: -3.5511425 }}
          colorScheme="FOLLOW_SYSTEM"
          fullscreenControl={false}
          streetViewControl={false}
          mapTypeControl={false}
          style={{ width: "100%", height: "500px" }}
        >
          {locations.map((location, index) => (
            <Marker
              key={index}
              position={location.position}
              onClick={() => handleMarkerClick(location)}
            />
          ))}
        </Map>

        {dialog}
      </APIProvider>
    </div>
  );
};

export default MyMap;