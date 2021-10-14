import React, { useState, useEffect } from 'react'
import { getRecipes } from '../apis/recipes'

import NoodleCard from './NoodleCard'

import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'

// const { hits: noodles } = require('../../noodles.json')
// const noodles = getRecipes()

function Home () {
  const [noodles, setNoodles] = useState(null)

  const refreshNoodles = () => {
    return getRecipes('noodles')
      .then(data => setNoodles(data))
  }

  useEffect(() => {
    refreshNoodles()
  }, [])

  return (
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
          {noodles?.map((item, i) => (
            <NoodleCard noodle={item} key={i}/>
          ))}
        </Grid>
      </Container>
    </Box>
  )
}

export default Home
