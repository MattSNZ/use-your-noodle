import React, { useState } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Album from './Album'
import Home from './Home'
import NavBar from './NavBar'
import Footer from './Footer'
import UserDialog from './UserDialog'

import CssBaseline from '@mui/material/CssBaseline'
import { createTheme, ThemeProvider } from '@mui/material/styles'

const theme = createTheme({
  palette: {
    primary: {
      main: '#55917F'
    },
    secondary: {
      main: '#B2675E'
    },
    background: {
      default: 'eff1f3'
    }
  },
  typography: {
    fontFamily: 'Montserrat',
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightHeavy: 700
  }
})

const App = () => {
  const [openDialog, setOpenDialog] = useState(false)
  const [faves, setFaves] = useState(false)
  const [register, setRegister] = useState(true)

  const toggleFaves = () => {
    setFaves(!faves)
  }

  // const openDialog = () => {
  //   setOpen(true)
  //   console.log(open)
  // }

  const closeDialog = () => {
    setOpenDialog(false)
    console.log(openDialog)
  }

  const handleLoginOpen = () => {
    setRegister(false)
    setOpenDialog(true)
    console.log('Register: ', register)
    console.log('OpenDialog: ', openDialog)
  }

  const handleRegisterOpen = () => {
    setRegister(true)
    setOpenDialog(true)
    console.log('Register: ', register)
    console.log('OpenDialog: ', openDialog)
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <NavBar
        toggleFaves={toggleFaves}
        faves={faves}
        handleLoginOpen={handleLoginOpen}
        handleRegisterOpen={handleRegisterOpen}
      />
      { openDialog && <UserDialog
        closeDialog={closeDialog}
        open={openDialog}
        register={register}
        handleLoginOpen={handleLoginOpen}
        handleRegisterOpen={handleRegisterOpen}
      />}
      <Router>
        <Route path="/album" component={Album} />
        <Route path="/" render={() => (<Home faves={faves} />)} />
      </Router>
      <Footer />
    </ThemeProvider>
  )
}

export default App
