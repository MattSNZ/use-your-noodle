import React, { useState } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Album from './Album'
import Home from './Home'
import NavBar from './NavBar'
import Footer from './Footer'

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
  const [faves, setFaves] = useState(false)
  const toggleFaves = () => {
    setFaves(!faves)
  }

  return (
    <ThemeProvider theme={theme}>
      <NavBar toggleFaves={toggleFaves} faves={faves}/>
      <Router>
        <CssBaseline />
        <Route path="/album" component={Album} />
        <Route path="/" render={() => (<Home faves={faves} />)} />
      </Router>
      <Footer />
    </ThemeProvider>
  )
}

export default App
