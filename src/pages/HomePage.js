// src/pages/HomePage.js
import { useEffect } from "react";
import Table from "../components/Table";
import axios from "axios";
import { useState } from "react";
import Characters from "../services/Characters";
import { LocalGroceryStoreTwoTone } from "@mui/icons-material";

function HomePage() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    console.log("hejsa");
    Characters.getAllCharacters()
  }, []);

  return (
    <div>
      <h1>Best Rick and Morty</h1>
      <Table characters={characters} />
    </div>
  );
}

export default HomePage;
