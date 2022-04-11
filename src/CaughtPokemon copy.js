import React, { useState } from "react";

const CaughtPokemon = () => {
  const [points, setPoints] = useState(0);
  function click() {
    setPoints(points + 1);
  }

  const date = new Date().toLocaleDateString();
  return (
    <>
      <p>
        Caught {points} Pokemon on {date}
      </p>
      <button onClick={click}>Click</button>
    </>
  );
};

export default CaughtPokemon;
