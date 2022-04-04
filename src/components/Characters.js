// src/pages/Characters.js

import { useState, useEffect } from "react";
import axios from "axios";
import Table from "./Table";

const API_URL = " https://rickandmortyapi.com";

function Characters() {
  const [characters, setCharacters] = useState([]);

  const getAllCharacters = () => {
    axios
      .get(`${API_URL}/api/character`)
      .then((response) => {
        console.log("characters", response.data.results);
        setCharacters(response.data.results);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getAllCharacters();
  }, []); // so code doesn't run infinitely

  return (
    <Table characters={characters} />
  );
}

export default Characters;
