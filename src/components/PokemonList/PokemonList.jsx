import React, { useState } from 'react';
import pokemonJSON from "../../data/pokemon";
import PokemonItem from "../PokemonItem/PokemonItem";
import "./PokemonList.css";

function PokemonList() {
  const [pokemons] = useState(pokemonJSON);
  const [filterPokemons ,setFilterPokemons] = useState(pokemonJSON);

  const handleSearch = (event) =>
  {
    let search = pokemons.filter((item) => {
      return item.name.toLowerCase().includes(event.target.value);
    });
    setFilterPokemons(search)
  };
  return (
    <div>
    <input type="text" placeholder='Cari Pokemon' className='search' onChange={handleSearch}/>
    <div className="list-pokemon">
    {filterPokemons.length == 0 ? (
      <div>data tidak ditemukan</div>
    ) : (
      filterPokemons.map((item) => (
        <PokemonItem 
          key={item.id} 
          pokemon={item} 
        />
      ))
    )}
  </div>
  </div>
  );}



export default PokemonList;

