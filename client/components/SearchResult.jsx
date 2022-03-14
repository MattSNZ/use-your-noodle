import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import { getRecipes, getFaveRecipes } from '../apis/recipes'

import { IfAuthenticated, IfNotAuthenticated } from './Authenticated'
import NoodleCard from './NoodleCard'

import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'

function SearchResult ({ faves }) {
  let { searchTerm } = useParams()
  const [noodles, setNoodles] = useState(null)

  const randomNoodles = (str) => {
    // if (str.substring(str.length - 7) !== 'noodles') {
    //   str = str + ' noodles'
    // }
    return getRecipes(str)
      .then(data => setNoodles(data))
  }

  const showFaves = () => {
    getFaveRecipes()
      .then(data => setNoodles(data))
      .catch(err => console.log(err.message))
  }

  useEffect(() => {
    console.log('faves:', searchTerm)
    faves ? showFaves() : randomNoodles(searchTerm)
  }, [faves])

  // useEffect(() => {
  //   console.log('searchTerm:', searchTerm)
  //   searchTerm ? randomNoodles(searchTerm) : null
  // }, [searchTerm])

  return (
    <Box
      sx={{
        py: 5
      }}
    >
      <Container maxWidth="sm" >
        <Typography
          variant="h5"
          color="text.secondary"
          gutterBottom
        >
        Check out the recipes below to use your noodle.
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
      <Container sx={{ py: 5 }} maxWidth="lg">
        <Grid container spacing={2}>
          {noodles?.map((item) => (
            <NoodleCard noodle={item} key={item.uri || item.externalId}/>
          ))}
        </Grid>
      </Container>
    </Box>
  )
}

export default SearchResult
