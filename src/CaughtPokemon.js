import React, { useState } from "react";

const CaughtPokemon = () => {
  const [caught, setCaught] = useState([]);
  const [points, setPoints] = useState(0);
  const [pokemonNameInput, setPokemonNameInput] = useState("");

  function click() {
    setPoints(points + 1);
    setCaught(caught.concat(pokemonNameInput));
  }

  function handleInputChange(event) {
    setPokemonNameInput(event.target.value);
  }

  const date = new Date().toLocaleDateString();
  return (
    <>
      <p>
        Caught {points} Pokemon on {date}
      </p>
      <ul>
        {caught.map((name, index) => (
          <li key={index}> {name}</li>
        ))}
      </ul>
      <input
        type="text"
        value={pokemonNameInput}
        onChange={handleInputChange}
      />
      <button onClick={click}>Click</button>
    </>
  );
};

export default CaughtPokemon;
