import React, { useState } from 'react'
import { baseApiUrl as baseUrl } from '../config'

import { register, isAuthenticated } from 'authenticare/client'
import Error from './Error'

import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'

function Register (props) {
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
  }

  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' }
      }}
      noValidate
      autoComplete="off"
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
        component="h2"
        variant="h2"
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
      />

      <TextField
        required
        id='password'
        name='password'
        value={form.password}
        onChange={handleChange}
        autocomplete='new-password'
        label="Password"
        type="password"
        autoComplete="current-password"
      />
      <Button
        variant="outlined"
      >
        Register
      </Button>
    </Box>
  )
}

export default Register
