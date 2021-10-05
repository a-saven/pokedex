import React, { useState } from 'react'
import Box from '@mui/material/Box'
import TextSearch from 'components/text-search'
import TypeFilter from 'components/type-filter'
import Sorter from 'components/sorter'
import PokemonList from 'components/pokemon-list'

function App() {
  const [pokemons, setPokemons] = useState(null)
  const [sort, setSort] = useState(null)
  const [filterName, setNameFilter] = useState(null)
  const [filterType, setTypeFilter] = useState(null)

  const updatePokemons = (pokemons) => {
    setPokemons(pokemons)
  }

  const sortSelect = (select) => {
    setSort(select)
  }

  const nameFilter = (name) => {
    setNameFilter(name)
  }

  const typeFilter = (type) => {
    setTypeFilter(type)
  }

  const pokeFilter = (pokemon) => {
    return pokemon
  }

  const pokeSort = (a, b) => {
    return a - b
  }

  return (
    <div className="App">
      <header className="App-header">
        <p>Pokedex</p>
      </header>
      <body>
        <Box>
          <Box display="flex" flexDirection="row" justifyContent="space-around">
            <Box>
              <Sorter sortSelect={sortSelect} />
            </Box>
            <Box maxWidth={'40px'}>
              <TextSearch pokemonList={pokemons} nameFilter={nameFilter} />
            </Box>
          </Box>
          <Box>
            <TypeFilter typeFilter={typeFilter} />
          </Box>
          <Box>
            <PokemonList updatePokemons={updatePokemons} />
          </Box>
          <Box>
            {pokemons &&
              pokemons
                .filter(pokeFilter)
                .sort(pokeSort)
                .map(({ name, number }) => (
                  <div key={number}>
                    <p>
                      {name}: {number}
                    </p>
                  </div>
                ))}
          </Box>
        </Box>
      </body>
    </div>
  )
}

export default App
