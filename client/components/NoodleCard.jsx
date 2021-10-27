// I'm really sorry about the state of this file! It works though :D

import React, { useState, useEffect } from 'react'
import { postFaveRecipe } from '../apis/recipes'

import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardHeader from '@mui/material/CardHeader'
import CardMedia from '@mui/material/CardMedia'
import FavoriteIcon from '@mui/icons-material/Favorite'
import KitchenIcon from '@mui/icons-material/Kitchen'
import IconButton from '@mui/material/IconButton'

const snake = require('snakecase-keys')

// import Button from '@mui/material/Button'
// import CardContent from '@mui/material/CardContent'
// import Collapse from '@mui/material/Collapse'
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
// import List from '@mui/material/List'
// import ListItem from '@mui/material/ListItem'
// import ListItemText from '@mui/material/ListItemText'
// import Typography from '@mui/material/Typography'
// import { styled } from '@mui/material/styles'

// const ExpandMore = styled((props) => {
//   const { expand, ...other } = props
//   return <IconButton {...other} />
// })(({ theme, expand }) => ({
//   transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
//   marginLeft: 'auto',
//   transition: theme.transitions.create('transform', {
//     duration: theme.transitions.duration.shortest
//   })
// }))

export default function NoodleCard ({ noodle }) {
  // const [expanded, setExpanded] = useState(false)
  const [faveColor, setFaveColor] = useState('default')
  const [faveDisabled, setFaveDisabled] = useState(false)

  useEffect(() => {
    if (noodle.id) {
      setFaveColor('secondary')
      setFaveDisabled(true)
    }
  }, [])

  const recipe = {
    externalId: noodle.uri.split('#')[1],
    label: noodle.label,
    image: noodle.image,
    source: noodle.source,
    url: noodle.url,
    yield: noodle.yield,
    cuisineType: noodle.cuisineType[0],
    mealType: noodle.mealType[0],
    dishType: noodle.dishType[0],
    totalTime: noodle.totalTime
  }

  const faveClick = () => {
    postFaveRecipe(snake(recipe))
      .then(() => setFaveColor('secondary'))
    // .then(response => setToast(response))
      .catch(err => console.log(err))
  }

  // const handleExpandClick = () => {
  //   setExpanded(!expanded)
  //   // console.log(recipe.ingredientLines)
  // }

  return (
    <Grid item xs={12} sm={6} md={4} lg={3} >
      <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
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
          <IconButton
            aria-label="add to favorites"
            onClick={faveClick}
            color={faveColor}
            disabled={faveDisabled}
          >
            <FavoriteIcon />
          </IconButton>
          {/* <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </ExpandMore> */}
        </CardActions>
        {/* <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent sx={{ flexGrow: 1 }}>
            <List component="ul" dense={true} >
              <ul>
                {recipe.ingredients.map((ingredient, i) => {
                // <li>
                //   {`It's option ${ingredient.text}`}
                // </li>
                  <ListItem key={i}>
                    <ListItemText
                      primary={`Use ${ingredient.text}`}
                      // primary="Halp"
                    />
                  </ListItem>
                })}
              </ul>
            </List>
          </CardContent>
        </Collapse> */}
      </Card>
    </Grid>)
}
