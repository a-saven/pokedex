import React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

export default function TextSearch({ pokemonList }) {
    return (
        <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={pokemonList}
            getOptionLabel={(option) => option.name}
            sx={{ width: 300 }}
            renderInput={(params) =>
                <TextField {...params} label="Movie" />
            }
        />
    );
}

