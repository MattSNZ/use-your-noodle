import React, { useState, useEffect } from 'react'
import { baseApiUrl as baseUrl } from '../config'
import { register, signIn, isAuthenticated } from 'authenticare/client'
import Error from './Error'

import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'

function UserDialog (props, { openDialog, closeDialog, register: registering }) {
  const [error, setError] = useState('')
  const [openError, setOpenError] = useState(false)
  const [form, setForm] = useState({
    username: '',
    password: ''
  })

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

  function handleSubmit (e) {
    e.preventDefault()
    const { username, password } = form

    if (registering) {
      return register({ username, password }, { baseUrl })
        .then((token) => {
          if (isAuthenticated()) {
            props.history.push('/')
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
            props.history.push('/')
          }
          return null
        })
        .catch(err => {
          if (err.message === 'INVALID_CREDENTIALS') {
            setError('Username and password combination not found')
          }
        })
    }
  }

  useEffect(() => {
    console.log('Register: ', registering)
    console.log('OpenDialog: ', openDialog)
  }, [])

  return (
    <Dialog
      open={openDialog}
      onClose={closeDialog}
      // scroll="paper"
      maxWidth="sm"
      fullWidth={true}
    >
      <DialogContent dividers={true}>
        <Box
          component="form"
          sx={{
            '& .MuiTextField-root': { m: 1, width: '25ch' }
          }}
          noValidate
          // autoComplete="off"
          onSubmit={handleSubmit}
        >
          { openError &&
        <Error
          hideError={hideError}
          error={error}
        >
          {`${error}`}
        </Error>
          }
          <Typography
            component="h5"
            variant="h5"
          >
            Register an account to Use Your Noodle
          </Typography>
          <TextField
            required
            id='username'
            name='username'
            value={form.username}
            onChange={handleChange}
            label="Email"
            fullWidth
          />
          <TextField
            required
            fullWidth
            id='password'
            name='password'
            value={form.password}
            onChange={handleChange}
            label="Password"
            type="password"
            autoComplete={register ? 'new-password' : 'current-password'}
          />
        </Box>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleSubmit}>{register ? 'Register' : 'Login'}</Button>
        <Button onClick={closeDialog}>Back</Button>
      </DialogActions>
    </Dialog>
  )
}

export default UserDialog
