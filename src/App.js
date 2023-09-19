import { useEffect, useState } from "react";
import "./App.css";
import { getPlacesData } from "./api";
import Navbar from "./components/Navbar";
import Homes from "./components/Homes/Homes";
import Map from "./components/Map/Map";

function App() {
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
    <>
      <Navbar />
      <Homes places={places} />
      <Map
        setCoordinates={setCoordinates}
        setBounds={setBounds}
        coordinates={coordinates}
        places={places}
      />
    </>
  );
}

export default App;
