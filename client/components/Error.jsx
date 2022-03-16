import React from 'react'

import Alert from '@mui/material/Alert'
import AlertTitle from '@mui/material/AlertTitle'
import Collapse from '@mui/material/Collapse'
import CloseIcon from '@mui/icons-material/Close'
import IconButton from '@mui/material/IconButton'

const Error = ({ children, openError, hideError }) => {
  return (
    <Collapse in={openError} >
      <Alert
        severity="error"
        action={
          <IconButton
            aria-label="close"
            color="inherit"
            size="small"
            onClick={hideError}
          >
            <CloseIcon fontSize="inherit" />
          </IconButton>
        }
        sx={{ mb: 2 }}
      >
        <AlertTitle>Error</AlertTitle>
        {children}
      </Alert>
    </Collapse>
  )
}

export default Error