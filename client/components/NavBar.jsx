import React, { useEffect, useState } from 'react'

import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import FavoriteIcon from '@mui/icons-material/Favorite'

export default function NavBar ({ toggleFaves, faves }) {
  const [faveColor, setFaveColor] = useState('primary')
  const [buttonText, setButtonText] = useState('Show favourites')

  useEffect(() => {
    faves ? setFaveColor('secondary') : setFaveColor('primary')
    faves ? setButtonText('Hide') : setButtonText('Show')
  }, [faves])

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
          color={faveColor}
        >
          {`${buttonText} favourites`}
        </Button>
      </Toolbar>
    </AppBar>
  )
}
