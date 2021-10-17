import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Album from './Album'
import Home from './Home'
import NavBar from './NavBar'
import Footer from './Footer'

import CssBaseline from '@mui/material/CssBaseline'
import { createTheme, ThemeProvider } from '@mui/material/styles'

const theme = createTheme()

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <NavBar />
      <Router>
        <CssBaseline />
        <Route path="/album" component={Album} />
        <Route exact path="/" component={Home} />
        {/* <Route path="/faves" component={Home} /> TODO: MAKE THIS WORK */}
      </Router>
      <Footer />
    </ThemeProvider>
  )
}

export default App
