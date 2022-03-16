import React, { useState } from 'react'
import { baseApiUrl as baseUrl } from '../config'
import { register, signIn, isAuthenticated } from 'authenticare/client'
import { useHistory } from 'react-router-dom'
import Error from './Error'

import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import Tab from '@mui/material/Tab'
import Tabs from '@mui/material/Tabs'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'

const UserDialog = (props) => {
  const { openDialog, closeDialog, register: registering, handleLoginOpen, handleRegisterOpen } = props
  const [error, setError] = useState('')
  const [openError, setOpenError] = useState(false)
  const [form, setForm] = useState({
    username: '',
    password: ''
  })
  const tabValueAtOpen = registering ? 'register' : 'login'
  const [tabValue, setTabValue] = useState(tabValueAtOpen)

  const history = useHistory()

  const hideError = () => {
    setError('')
    setOpenError(false)
  }

  const handleChange = e => {
    const { name, value } = e.target
    setForm({
      ...form,
      [name]: value
    })
  }

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue)
  }

  function handleSubmit (e) {
    e.preventDefault()
    const { username, password } = form

    if (registering) {
      return register({ username, password }, { baseUrl })
        .then((token) => {
          if (isAuthenticated()) {
            console.log('registered!')
            history.push('/')
            closeDialog()
          }
          return null
        })
        .catch(err => {
          if (err.message === 'USERNAME_UNAVAILABLE') {
            setError('Username is not available')
            setOpenError(true)
          }
        })
    } else {
      return signIn({ username, password }, { baseUrl })
        .then((token) => {
          if (isAuthenticated()) {
            closeDialog()
            history.push('/')
            console.log('logged in!')
          }
          return null
        })
        .catch(err => {
          if (err.message === 'INVALID_CREDENTIALS') {
            setError('Username and password combination not found')
            setOpenError(true)
          }
        })
    }
  }

  return (
    <Dialog
      open={openDialog}
      onClose={closeDialog}
      // scroll="paper"
      maxWidth="sm"
      fullWidth={true}
    >
      <AppBar position="static">
        <Tabs
          value={tabValue}
          onChange={handleTabChange}
          indicatorColor="secondary"
          textColor="inherit"
          variant="fullWidth"
        >
          <Tab label="Log In" value='login' onClick={handleLoginOpen} />
          <Tab label="Register" value='register' onClick={handleRegisterOpen} />
        </Tabs>
      </AppBar>
      <DialogContent dividers={true}>
        <Box
          component="form"
          sx={{
            '& .MuiTextField-root': { m: 1, width: '25ch' },
            // display: 'flex',
            // flexDirection: 'column',
            // alignItems: 'center'
          }}
          noValidate
          // autoComplete="off"
          onSubmit={handleSubmit}
        >
          { error && <Error
            hideError={hideError}
            // error={error}
            openError={openError}
          >
            {`${error}`}
          </Error>
          }
          <Typography
            component="h5"
            variant="h5"
            align='center'
          >
            { registering ? 'Register an account' : 'Log in' } to Use Your Noodle
          </Typography>
          <TextField
            required
            id='username'
            name='username'
            value={form.username}
            onChange={handleChange}
            label="Email"
            fullWidth={true}
            variant='standard'
            margin='dense'
            InputLabelProps={{
              style: {
                color: '#55917F'
              }
            }}

          />
          <TextField
            required
            fullWidth={true}
            id='password'
            name='password'
            value={form.password}
            onChange={handleChange}
            label="Password"
            type="password"
            autoComplete={ registering ? 'new-password' : 'current-password'}
            variant='standard'
            margin='dense'
            InputLabelProps={{
              style: {
                color: '#55917F'
              }
            }}
          />
        </Box>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleSubmit}>{registering ? 'Register' : 'Login'}</Button>
        <Button onClick={closeDialog}>Back</Button>
      </DialogActions>
    </Dialog>
  )
}

export default UserDialog
