import React, { useState } from 'react';
import pokemonJSON from "../../data/pokemon";
import PokemonItem from "../PokemonItem/PokemonItem";
import "./PokemonList.css";

function PokemonList() {
  const [pokemons] = useState(pokemonJSON);

  return (
    <div className="list-pokemon">
      {pokemons.map((item) => (
        <PokemonItem key={item.id} pokemon={item} />
      ))}
    </div>
  );
}

export default PokemonList;
