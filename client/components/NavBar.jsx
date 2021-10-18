import React from 'react'

import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import FavoriteIcon from '@mui/icons-material/Favorite'

export default function NavBar ({ toggleFaves, faves }) {
  return (
    <AppBar position="relative">
      <Toolbar>
        <Typography variant="h2" color="inherit" noWrap sx={{ flexGrow: 1 }}>
          🍜 Use Your Noodle
        </Typography>
        <Button
          variant="contained"
          onClick={toggleFaves}
          startIcon={<FavoriteIcon />}
        >
          Toggle faves
        </Button>
      </Toolbar>
    </AppBar>
  )
}
