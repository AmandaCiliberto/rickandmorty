// // src/pages/Characters.js

import { useState, useEffect } from "react";
import axios from "axios";
import Table from "../components/Table";

const API_URL = "https://rickandmortyapi.com";

// function Characters() {
//   const [characters, setCharacters] = useState([]);

//   const getAllCharacters = () => {
//     console.log("init");
//     axios
//       .get(`${API_URL}/api/character`)
//       .then((response) => {
//         console.log("characters", response.data);
//         setCharacters(response.data);
//       })
//       .catch((error) => console.log(error));
//   };

//   useEffect(() => {
//     console.log("useeffect");
//     getAllCharacters();
//   }, []); // so code doesn't run infinitely

//   return (
//     <div>{characters !== undefined && <Table characters={characters} />}</div>
//   );
// }

// export default Characters;

const Characters = {
  getAllCharacters() {
    return axios
      .get(`${API_URL}/api/character`)
      .then((response) => {
        console.log("characters", response.data);
      })
      .catch((error) => console.log(error));
  },

  testData() {
    return "hej";
  },
};

export default Characters;
