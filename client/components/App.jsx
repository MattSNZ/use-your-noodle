import React, { useState } from 'react'
import { BrowserRouter as Router, Route, useParams } from 'react-router-dom'

import Album from './Album'
import Home from './Home'
import NavBar from './NavBar'
import Footer from './Footer'
import UserDialog from './UserDialog'
import Routing from './Routing'
import Search from './Search'
import Testing from './Testing'

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
      default: '#214a73'
    },
    text: {
      secondary: '#FFF'
    }
  },
  typography: {
    fontFamily: 'Montserrat',
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightHeavy: 700
  },
  overrides: {
    MuiInputLabel: {
      root: {
        color: "#000",
      },
    },
  },

})

const App = () => {
  const [openDialog, setOpenDialog] = useState(false)
  const [faves, setFaves] = useState(false)
  const [register, setRegister] = useState(true)

  const toggleFaves = () => {
    setFaves(!faves)
  }

  const handleLoginOpen = () => {
    setRegister(false)
    setOpenDialog(true)
  }

  const handleRegisterOpen = () => {
    setRegister(true)
    setOpenDialog(true)
  }

  const closeDialog = () => {
    setOpenDialog(false)
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Route path="/" render={() => (
          <NavBar
            toggleFaves={toggleFaves}
            faves={faves}
            handleLoginOpen={handleLoginOpen}
            handleRegisterOpen={handleRegisterOpen}
          />
        )} />
        { openDialog && <UserDialog
          closeDialog={closeDialog}
          openDialog={openDialog}
          register={register}
          handleLoginOpen={handleLoginOpen}
          handleRegisterOpen={handleRegisterOpen}
        />}
        <Route exact path="/">
          <Search />
        </Route>
        <Route path="/noodle/:value">
          <Testing />
        </Route>
        <Footer />
      </Router>
    </ThemeProvider>
  )
}

export default App
