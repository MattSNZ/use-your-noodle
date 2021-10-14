import React from 'react'

import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardHeader from '@mui/material/CardHeader'
import CardMedia from '@mui/material/CardMedia'
import Collapse from '@mui/material/Collapse'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import FavoriteIcon from '@mui/icons-material/Favorite'
import IconButton from '@mui/material/IconButton'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
// import Typography from '@mui/material/Typography'
import { styled } from '@mui/material/styles'

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

export default function NoodleCard ({ noodle }) {
  const [expanded, setExpanded] = React.useState(false)

  // const renderIngredients = uri => {

  // }

  const handleExpandClick = () => {
    setExpanded(!expanded)
  }

  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
        <CardHeader
          title={noodle.recipe.label}
        />
        <CardMedia
          component="img"
          sx={{ pt: '5px', flex: 1 }}
          image={noodle.recipe.image}
          alt={noodle.recipe.label}
        />
        <CardActions >
          <Button size="small" href={noodle.recipe.url} align="center" target="_blank">{`View on ${noodle.recipe.source}`}</Button>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
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
          <CardContent sx={{ flexGrow: 1 }}>
            <List component="ul" dense={true} >
              {noodle.recipe.ingredientLines.map((ingredient, i) => {
                <ListItem key={i}>
                  <ListItemText
                    primary={`Use ${ingredient}`}
                  // primary="Halp"
                  />
                </ListItem>
              })}
            </List>
          </CardContent>
        </Collapse>
      </Card>
    </Grid>)
}
