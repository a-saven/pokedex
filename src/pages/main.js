import React, { useState } from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import { Link } from 'react-router-dom'
import TextSearch from 'components/text-search'
import TypeFilter from 'components/type-filter'
import Sorter from 'components/sorter'
import PokemonList from 'components/pokemon-list'
import PokemonCard from 'components/card'

export default function Main() {
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
    <Box width={'100%'} display="flex" justifyContent="center" m={5}>
      <Box
        display="flex"
        flexDirection="column"
        width={1280}
        alignItems="center"
        justifyContent="center"
      >
        <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)' }}>
          <Box
            alignItems="center"
            justifyContent="center"
            display="flex"
            flexDirection="row"
          >
            <Box m={1}>
              <Sorter sortSelect={sortSelect} sort={sort} />
            </Box>
            <Box m={1}>
              <Button
                component={Link}
                to="/favorite"
                variant="contained"
                color="primary"
                size="large"
                variant="outlined"
              >
                Favorite
              </Button>
            </Box>
          </Box>
          <Box fontWeight="700" alignItems="center" justifyContent="center">
            <Typography variant="h6" textAlign="center">
              POKEDEX
            </Typography>
          </Box>
          <Box maxWidth={'400px'}>
            <TextSearch pokemonList={pokemons} nameFilter={nameFilter} />
          </Box>
        </Box>
        <Box>
          <TypeFilter typeFilter={typeFilter} />
        </Box>
        <Box>
          <PokemonList updatePokemons={updatePokemons} />
        </Box>

        <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)' }}>
          {pokemons &&
            pokemons
              .filter(pokeFilter)
              .sort(pokeSort)
              .map((pokemon) => (
                <Box
                  key={pokemon.number}
                  m={1}
                  p={1}
                  borderRadius={1}
                  textAlign={'center'}
                  fontSize={19}
                  fontWeight="700"
                >
                  <PokemonCard pokemon={pokemon} />
                </Box>
              ))}
        </Box>
      </Box>
    </Box>
  )
}
