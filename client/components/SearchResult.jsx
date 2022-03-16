import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import { getRecipes, getFaveRecipes } from '../apis/recipes'

import { IfAuthenticated, IfNotAuthenticated } from './Authenticated'
import NoodleCard from './NoodleCard'

import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Image from 'mui-image'

const LoadingGif = () => {
  return (
    <Grid item xs={12} sm={6} md={4} lg={3} >
      <Image src="../../server/public/noodles.gif" duration={0}  />
    </Grid>
  )
}

const SearchResult = ({ faves }) => {
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
    faves ? showFaves() : randomNoodles(searchTerm)
  }, [faves])

  return (
    <Box
      sx={{
        py: 5,
        minHeight: "90vh"
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
          {noodles ?
            noodles.map((item) => (
              <NoodleCard noodle={item} key={item.uri || item.externalId}/>
            )) :
            <LoadingGif />
          }
        </Grid>
      </Container>
    </Box>
  )
}

export default SearchResult
