import React from 'react'
import Album from './Album'
import Home from './Home'
import CssBaseline from '@mui/material/CssBaseline'

import { BrowserRouter as Router, Route } from 'react-router-dom'

const App = () => {
  return (
    <Router>
      <CssBaseline />
      <Route path="/album" component={Album} />
      <Route pate="/" component={Home} />
    </Router>
  )
}

export default App
