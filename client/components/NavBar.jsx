import React, { useEffect, useState } from 'react'

import { IfAuthenticated, IfNotAuthenticated } from './Authenticated'

import AppBar from '@mui/material/AppBar'
import Button from '@mui/material/Button'
import ControlPointIcon from '@mui/icons-material/ControlPoint'
import FavoriteIcon from '@mui/icons-material/Favorite'
import LoginIcon from '@mui/icons-material/Login'
import LogoutIcon from '@mui/icons-material/Logout'
import Stack from '@mui/material/Stack'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'

export default function NavBar ({ toggleFaves, faves, handleLoginOpen, handleRegisterOpen }) {
  const [faveColor, setFaveColor] = useState('primary')
  const [buttonText, setButtonText] = useState('Show favourites')

  useEffect(() => {
    faves ? setFaveColor('secondary') : setFaveColor('primary')
    faves ? setButtonText('Hide') : setButtonText('Show')
  }, [faves])

  const handleLogout = () => {
    return null // TODO use Authenticare Logout
  }
  // const handleRegister = () => {
  //   openDialog()
  //   enableRegister()
  // }
  // const handleLogin = () => {
  //   enableLogin()
  //   openDialog()
  // }

  return (
    <AppBar position="relative">
      <Toolbar>
        <Typography variant="h2" color="inherit" noWrap sx={{ flexGrow: 1 }}>
          🍜 Use Your Noodle
        </Typography>
        <Stack direction="row" spacing={1} >
          <IfAuthenticated>
            <Button
              variant="contained"
              onClick={toggleFaves}
              startIcon={<FavoriteIcon />}
              color={faveColor}
            >
              {`${buttonText} favourites`}
            </Button>
            <Button
              variant="contained"
              onClick={handleLogout}
              startIcon={<LogoutIcon />}
              color='primary'
            >
              Log out
            </Button>
          </IfAuthenticated>
          <IfNotAuthenticated>
            <Button
              variant="contained"
              onClick={handleLoginOpen}
              startIcon={<LoginIcon />}
              color='primary'
            >
              Log in
            </Button>
            <Button
              variant="contained"
              onClick={handleRegisterOpen}
              startIcon={<ControlPointIcon />}
              color='primary'
            >
              Register
            </Button>
          </IfNotAuthenticated>
        </Stack>
      </Toolbar>
    </AppBar>
  )
}
