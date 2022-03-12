import React, { useState, useEffect } from 'react'
import { postFaveRecipe } from '../apis/recipes'
import { IfAuthenticated } from './Authenticated'

import Alert from '@mui/material/Alert'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardHeader from '@mui/material/CardHeader'
import CardMedia from '@mui/material/CardMedia'
import FavoriteIcon from '@mui/icons-material/Favorite'
import Grid from '@mui/material/Grid'
import IconButton from '@mui/material/IconButton'
import KitchenIcon from '@mui/icons-material/Kitchen'
import Snackbar from '@mui/material/Snackbar'

const snake = require('snakecase-keys')

export default function NoodleCard ({ noodle }) {
  const [faveColor, setFaveColor] = useState('default')
  const [faveDisabled, setFaveDisabled] = useState(false)
  const [snackOpen, setSnackOpen] = useState(false)
  const [snackMessage, setSnackMessage] = useState('')

  useEffect(() => {
    if (noodle.id) {
      setFaveColor('secondary')
      setFaveDisabled(true)
    }
  }, [])

  const recipe = {
    externalId: noodle.externalId || noodle.uri.split('#')[1],
    label: noodle.label,
    image: noodle.image,
    source: noodle.source,
    url: noodle.url,
    yield: noodle.yield,
    cuisineType: noodle?.cuisineType[0],
    mealType: noodle?.mealType[0],
    dishType: noodle?.dishType[0],
    totalTime: noodle.totalTime
  }

  const faveClick = () => {
    postFaveRecipe(snake(recipe))
      .then(response => {
        setSnackMessage(`${response.label} saved`)
        setSnackOpen(true)
        setFaveColor('secondary')
        return null
      })
      .catch(err => console.log(err))
  }

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return
    }
    setSnackOpen(false)
  }

  return (
    <>
      <Grid item xs={12} sm={6} md={4} lg={3} >
        <Card
          sx={{
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            backgroundColor: 'secondary.main'
          }}
          variant="outlined"
        >
          <CardHeader
            title={recipe.label}
          />
          <CardMedia
            component="img"
            sx={{ pt: '5px', flex: 1 }}
            image={recipe.image}
            alt={recipe.label}
          />
          <CardActions sx={{ justifyContent: 'flex-end' }} >
            <IconButton
              aria-label={`view on ${recipe.source}`}
              href={recipe.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <KitchenIcon />
            </IconButton>
            <IfAuthenticated>
              <IconButton
                aria-label="add to favorites"
                onClick={faveClick}
                color={faveColor}
                disabled={faveDisabled}
              >
                <FavoriteIcon />
              </IconButton>
            </IfAuthenticated>
          </CardActions>
        </Card>
      </Grid>
      <Snackbar
        open={snackOpen}
        autoHideDuration={6000}
        onClose={handleClose}
      >
        <Alert onClose={handleClose} severity="success" variant="filled" sx={{ width: '100%' }}>
          {snackMessage.toUpperCase()}
        </Alert>
      </Snackbar>
    </>)
}
