import Box from '@mui/material/Box'
import Checkbox from '@mui/material/Checkbox'
import FormControlLabel from '@mui/material/FormControlLabel'

const pokeTypes = ['Water', 'Electric', 'Grass', 'Fighting', 'Fairy', 'Poison', 'Fire', 'Ice', 'Flying', 'Psychic', 'Normal', 'Rock', 'Dragon', 'Bug', 'Steel', 'Ground']

export default function TypeFilter() {
    return (
        <Box display="flex">
            <Box>Filter</Box>
            {pokeTypes.map(type =>
                <Box>
                    <FormControlLabel
                        label={type}
                        control={<Checkbox />}
                    />
                </Box>
            )}
        </Box>
    )
}