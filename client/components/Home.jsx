import React, { useState, useEffect } from 'react'

import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Card from '@mui/material/Card'
import CardActionArea from '@mui/material/CardActionArea'
import CardContent from '@mui/material/CardContent'

const noodleTypes = [
  "Ramen",
  "Fettuccine",
  "Soba",
  "Vermicelli",
  "Rice Sticks",
  "Spaghetti",
  "Hokkien Noodles",
  "Egg Noodles",
  "Udon",
  "Tagliatelle",
  "Lo Mein",
  "Glass Noodles",
  "Bucatini",
  "Linguine",
  "Pappardelle"
  ]

function Home () {

  return (
    <Box
      sx={{
        py: 5,
        minHeight: '90vh'
      }}
    >
      <Container maxWidth="sm" >
        <Typography
          variant="h5"
          color="text.secondary"
          gutterBottom
        >
        It&apos;s simple really.
        </Typography>
        <Typography
          variant="h5"
          color="text.secondary"
          gutterBottom
        >
        Click on your noodle to see how to use it.
        </Typography>
      </Container>
      <Container sx={{ py: 5 }} maxWidth="md">
        <Grid container spacing={2}>
          {noodleTypes.map((item, index) => (
            <Grid item xs={12} sm={6} md={4} lg={4} key={index}>
              <Card sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                backgroundColor: 'secondary.main'
              }}>
                <CardActionArea href={`/noodle/${item}`}>
                  <CardContent>
                    <Typography variant="h5" align="center">
                      {`${item}`}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  )
}

export default Home
