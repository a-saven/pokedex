import React, { useState } from 'react'
import Box from '@mui/material/Box'
import PokemonList from 'components/pokemon-list'
import PokemonCard from 'components/card'

export default function Favorite() {
  const [pokemons, setPokemons] = useState(null)

  const updatePokemons = (pokemons) => {
    setPokemons(pokemons)
  }

  const numberFilter = (pokemon) => {
    let savedIdArray = JSON.parse(localStorage['favorite'] || null)
    const savedIndex = savedIdArray.indexOf(pokemon?.number)
    return savedIndex === -1 ? null : pokemon
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
          {pokemons &&
            pokemons.filter(numberFilter).map((pokemon) => (
              <Box
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
      <PokemonList updatePokemons={updatePokemons} />
    </Box>
  )
}
