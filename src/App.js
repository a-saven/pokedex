import React, { useState } from 'react'
import Box from '@mui/material/Box'
import TextSearch from 'components/text-search'
import TypeFilter from 'components/type-filter'
import Sorter from 'components/sorter'
import PokemonList from 'components/pokemon-list'

function App() {
  const [pokemons, setPokemons] = useState(null)
  const [sort, setSort] = useState('Id')
  const [filterName, setNameFilter] = useState(null)
  const [filterType, setTypeFilter] = useState([])

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
    if (!filterName && filterType.length === 0) {
      return pokemon
    } else if (filterName && filterType.length > 0) {
      if (
        pokemon.name.includes(filterName) &&
        filterType.every((type) => pokemon.types.includes(type))
      ) {
        return pokemon
      }
    } else if (filterName && filterType.length === 0) {
      if (pokemon.name.includes(filterName)) {
        return pokemon
      }
    } else if (filterType.length > 0 && !filterName) {
      if (filterType.every((type) => pokemon.types.includes(type))) {
        return pokemon
      }
    } else {
      return pokemon
    }
  }

  const pokeSort = (a, b) => {
    switch (sort) {
      case 'number':
        return a < b ? -1 : 1
      case 'A-Z':
        return a.name < b.name ? -1 : 1
      case 'Z-A':
        return a.name < b.name ? 1 : -1
      case 'Type A-Z':
        return a.types[0] < b.types[0] ? -1 : 1
      case 'Type Z-A':
        return b.types[0] - a.types[0] ? 1 : -1
      default:
        return a - b
    }
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
              <Sorter sortSelect={sortSelect} sort={sort} />
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
                .map(({ name, number }) => {
                  return (
                    <div key={number}>
                      <p>
                        {name}: {number}
                      </p>
                    </div>
                  )
                })}
          </Box>
        </Box>
      </body>
    </div>
  )
}

export default App
