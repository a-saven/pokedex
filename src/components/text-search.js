import React, { useState } from 'react'
import TextField from '@mui/material/TextField'
import Autocomplete from '@mui/material/Autocomplete'

export default function TextSearch({ pokemonList, nameFilter }) {
  const [value, setValue] = useState(pokemonList?.[0])
  const [inputValue, setInputValue] = useState('')

  return (
    <Autocomplete
      value={value}
      onChange={(event, newValue) => {
        nameFilter(newValue?.name)
        setValue(newValue)
      }}
      inputValue={inputValue}
      onInputChange={(event, newInputValue) => {
        nameFilter(newInputValue)
        setInputValue(newInputValue)
      }}
      disablePortal
      id="combo-box-demo"
      options={pokemonList || []}
      getOptionLabel={(option) => option?.name}
      sx={{ width: 300 }}
      renderInput={(params) => (
        <TextField {...params} label="Pokemon name" width={'300px'} />
      )}
    />
  )
}
