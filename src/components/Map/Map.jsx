import React, { useEffect, useState } from "react";
import { getPlacesData } from "../../api";
import GoogleMapReact from "google-map-react";
import "./Map.css";

function Map() {
  const [places, setPlaces] = useState([]);
  const [coordinates, setCoordinates] = useState({});
  const [bounds, setBounds] = useState({});

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        setCoordinates({ lat: latitude, lng: longitude });
      }
    );
  }, []);

  useEffect(() => {
    getPlacesData(bounds.sw, bounds.ne).then((data) => {
      setPlaces(data);
    });
  }, [coordinates, bounds]);

  return (
    <div className='mapcnt'>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyDoebjzhkV7Ja5O9nZ1uw1m2vkbNrXR8m0" }}
        defaultCenter={coordinates}
        center={coordinates}
        defaultZoom={14}
        margin={[50, 50, 50, 50]}
        options={""}
        onChange={(e) => {
          console.log(e);
          setCoordinates({ lat: e.center.lat, lng: e.center.lng });
          setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw });
        }}
        onChildClick={""}
      >
        {places?.map((place, key) => (
          <div
            className='mapplacesitem'
            lat={place.latitude}
            lng={place.longitude}
            key={key}
          >
            <h1>{place.name}</h1>
          </div>
        ))}
      </GoogleMapReact>
    </div>
  );
}

export default Map;
