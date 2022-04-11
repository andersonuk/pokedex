import React from "react";
import Logo from "./Logo";
import CaughtPokemon from "./CaughtPokemon";
import PokemonMovesSelector from "./PokemonMovesSelector";
import PokemonCity from "./PokemonCity";
import BestPokemon from "./BestPokemon";

function App() {
  const logWhenClicked = () => {
    console.log("Button was clicked!");
  };
  return (
    <div>
      <Logo handleClick={logWhenClicked} />
      <BestPokemon />
      <CaughtPokemon />
      <PokemonMovesSelector />
      <PokemonCity />
    </div>
  );
}

export default App;
