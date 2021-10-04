import React, { useState } from 'react';
import TextSearch from 'components/text-search'
import TypeFilter from 'components/type-filter'
import Sorter from 'components/sorter'
import PokemonList from 'components/pokemon-list';

function App() {

  const [pokemons, setPokemons] = useState({})

  const updatePokemons = (pokemons) => {
    setPokemons(pokemons)
  }

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Pokedex
        </p>
      </header>
      <body>
        <TextSearch pokemonList={pokemons} />
        <TypeFilter />
        <Sorter />
        <PokemonList updatePokemons={updatePokemons} />
      </body>
    </div>
  );
}

export default App;





