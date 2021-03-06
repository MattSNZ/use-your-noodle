import React, { useState } from 'react'
import { BrowserRouter as Router, Route, useParams } from 'react-router-dom'

import NavBar from './NavBar'
import Footer from './Footer'
import UserDialog from './UserDialog'
import Home from './Home'
import SearchResult from './SearchResult'

import CssBaseline from '@mui/material/CssBaseline'
import { createTheme, ThemeProvider } from '@mui/material/styles'

const theme = createTheme({
  palette: {
    primary: {
      main: '#BE7C4D'
    },
    secondary: {
      main: '#ADEFD1'
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
          <Home />
        </Route>
        <Route path="/noodle/:searchTerm">
          <SearchResult />
        </Route>
        <Footer />
      </Router>
    </ThemeProvider>
  )
}

export default App
