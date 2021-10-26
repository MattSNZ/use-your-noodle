import React, { useState, useEffect } from 'react'
import { getRecipes, getFaveRecipes } from '../apis/recipes'

import { IfAuthenticated, IfNotAuthenticated } from './Authenticated'
import NoodleCard from './NoodleCard'

import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'

function Home ({ faves, openDialog, register, toggleDialog }) {
  const [noodles, setNoodles] = useState(null)

  const randomNoodles = () => {
    return getRecipes('noodles')
      .then(data => setNoodles(data))
  }

  const showFaves = () => {
    getFaveRecipes()
      .then(data => setNoodles(data))
      .catch(err => console.log(err.message))
  }

  useEffect(() => {
    faves ? showFaves() : randomNoodles()
  }, [faves])

  return (
    <>
      <Box
        sx={{
        // bgcolor: 'background.paper',
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
          Check out the recipes below for how to use your noodle.
          </Typography>
          <IfAuthenticated>
            <Typography
              variant="h5"
              color="text.primary"
              gutterBottom
            >
            Click the heart to save to your favourites.
            </Typography>
          </IfAuthenticated>
          <IfNotAuthenticated>
            <Typography
              variant="h5"
              color="text.primary"
              gutterBottom
            >
            Register to save recipes as favourites.
            </Typography>
          </IfNotAuthenticated>
        </Container>
        <Container sx={{ py: 5 }} maxWidth="md">
          <Grid container spacing={4}>
            {noodles?.map((item, i) => (
              <NoodleCard noodle={item} key={i}/>
            ))}
          </Grid>
        </Container>
      </Box>
    </>
  )
}

export default Home
