import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Grid from '@mui/material/Grid'
// import Stack from '@mui/material/Stack'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import Link from '@mui/material/Link'
import { createTheme, ThemeProvider } from '@mui/material/styles'

function Copyright () {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  )
}

const { hits: noodles } = require('../../noodles.json')

const theme = createTheme()

function Home () {
  return (
    <ThemeProvider theme={theme}>
      <AppBar position="relative">
        <Toolbar>
          <Typography variant="h2" color="inherit" noWrap>
            🍜 Use Your Noodle
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 8,
            pb: 6
          }}
        >
          <Container maxWidth="sm">
            <Typography
              variant="h5"
              color="text.primary"
              gutterBottom
            >
              It&apos;s simple really.
            </Typography>
            <Typography
              variant="h5"
              color="text.primary"
              gutterBottom
            >
              You tell us about your noodle and we&apos;ll tell you how to use your noodle.
            </Typography>
          </Container>
          <Container sx={{ py: 8 }} maxWidth="md">
            <Grid container spacing={4}>
              {noodles.map((item, i) => (
                <Grid item key={i} xs={12} sm={6} md={4}>
                  <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                    <CardMedia
                      component="img"
                      sx={{ pt: '5px' }}
                      image={item.recipe.image}
                      alt={item.recipe.label}
                    />
                    <CardContent sx={{ flexGrow: 1 }}>
                      <Typography gutterBottom variant="h5" component="h3">
                        {`${item.recipe.label}`}
                      </Typography>
                      <Typography >
                        {item.recipe.ingredients.map(food => (
                          <span key={food}>{`${food.food} * `}</span>
                        ))}
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button size="medium" href={item.recipe.url} align="center" target="_blank">{`View on ${item.recipe.source}`}</Button>
                    </CardActions>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Container>
        </Box>
      </main>
      <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
        <Typography variant="h6" align="center" gutterBottom>
          Brought to you by <Link href="https://www.github.com/mattsnz" target="_blank">MattSNZ</Link>.
        </Typography>
        <Copyright />
      </Box>
    </ThemeProvider>
  )
}

export default Home
