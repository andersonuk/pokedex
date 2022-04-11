import React, { useState } from "react";

function PokemonCity() {
  const [city, updateCity] = useState("");

  function handleChange(event) {
    updateCity(event.target.value);
    console.log(updateCity);
  }

  return (
    <>
      <div>
        <input type="text" value={city} onChange={handleChange} />
        <p>Welcome to the city of {city}</p>
      </div>
    </>
  );
}

export default PokemonCity;
