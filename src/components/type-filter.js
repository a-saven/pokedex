import React, { useState } from 'react'
import Box from '@mui/material/Box'
import Checkbox from '@mui/material/Checkbox'
import FormControlLabel from '@mui/material/FormControlLabel'

const pokeTypes = {
  Water: false,
  Electric: false,
  Grass: false,
  Fighting: false,
  Fairy: false,
  Poison: false,
  Fire: false,
  Ice: false,
  Flying: false,
  Psychic: false,
  Normal: false,
  Rock: false,
  Dragon: false,
  Bug: false,
  Steel: false,
  Ground: false
}

export default function TypeFilter({ typeFilter }) {
  const [checked, setChecked] = useState(pokeTypes)

  const handleChange = (type) => {
    const newChecked = checked
    newChecked[type] = !checked[type]
    setChecked(newChecked)
    const selected = Object.keys(newChecked).filter(
      (item) => newChecked[item] === true
    )
    typeFilter(selected)
  }

  return (
    <Box p={5} sx={{ display: 'grid', gridTemplateColumns: 'repeat(8, 1fr)' }}>
      {Object.keys(pokeTypes).map((type, index) => (
        <Box key={index}>
          <FormControlLabel
            label={type}
            control={
              <Checkbox
                checked={checked[type]}
                onChange={() => handleChange(type)}
              />
            }
          />
        </Box>
      ))}
    </Box>
  )
}
