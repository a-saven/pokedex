import React, { useState } from 'react'
import { styled } from '@mui/material/styles'
import Card from '@mui/material/Card'
import Box from '@mui/material/Box'
import CardHeader from '@mui/material/CardHeader'
import CardMedia from '@mui/material/CardMedia'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'
import Collapse from '@mui/material/Collapse'
import Avatar from '@mui/material/Avatar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import FavoriteIcon from '@mui/icons-material/Favorite'
import ShareIcon from '@mui/icons-material/Share'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

const ExpandMore = styled((props) => {
  const { expand, ...other } = props
  return <IconButton {...other} />
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest
  })
}))

export default function PokemonCard({ pokemon }) {
  const [expanded, setExpanded] = useState(false)

  const handleExpandClick = () => {
    setExpanded(!expanded)
  }

  return (
    <Card sx={{ maxWidth: 345, height: '100%' }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: '#1976d2' }} aria-label="recipe">
            {pokemon?.name.slice(0, 1)}
          </Avatar>
        }
        title={pokemon?.name}
        subheader={pokemon?.classification}
      />
      <CardMedia
        component="img"
        height="400"
        image={pokemon?.image}
        alt={pokemon?.name}
      />
      <CardContent>
        <Box display="flex" justifyContent="space-between">
          <Box>
            <Typography variant="body2" color="primary.main">
              CP {pokemon?.maxCP}
            </Typography>
          </Box>
          <Box>
            <Typography variant="body2" color="error.main">
              HP {pokemon?.maxHP}
            </Typography>
          </Box>
        </Box>
        <Typography variant="body1" color="text.primary">
          {pokemon?.types?.join(', ')}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography variant="h6">Resistant:</Typography>
          <Typography paragraph>{pokemon?.resistant?.join(', ')}</Typography>
          <Typography variant="h6">Weaknesses:</Typography>
          <Typography paragraph>{pokemon?.weaknesses?.join(', ')}</Typography>
          <Typography variant="h6">Flee Rate:</Typography>
          <Typography paragraph>{pokemon?.fleeRate}</Typography>
          <Typography variant="h6">Weight:</Typography>
          <Typography paragraph>
            {pokemon?.weight?.minimum} - {pokemon?.weight?.maximum}
          </Typography>
          <Typography variant="h6">Height:</Typography>
          <Typography paragraph>
            {pokemon?.height?.minimum} - {pokemon?.height?.maximum}
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  )
}
