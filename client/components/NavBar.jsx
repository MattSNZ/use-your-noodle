import React from 'react'

import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'

export default function NavBar () {
  return (
    <AppBar position="relative">
      <Toolbar>
        <Typography variant="h2" color="inherit" noWrap>
          🍜 Use Your Noodle
        </Typography>
      </Toolbar>
    </AppBar>
  )
}
