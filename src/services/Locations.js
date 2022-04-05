// src/pages/Locations.js

import { useState, useEffect } from "react";
import axios from "axios";
import Table from "../components/Table";

const API_URL = " https://rickandmortyapi.com";

function Locations() {
  const [locations, setLocations] = useState([]);
  /* const [locations, setLocations] = useState([]);
  const [episodes, setEpisodes] = useState([]); */

  const getAllCharacters = () => {
    axios
      .get(`${API_URL}/api/location`)
      .then((response) => {
        // console.log("locations", response.data);
        const allLocations = response.data.results;
        setLocations(allLocations);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getAllCharacters();
  }, []); // so code doesn't run infinitely

  return {/* <Table locations={locations} /> */};
}

export default Locations;
