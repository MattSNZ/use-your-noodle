import React from 'react'

import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Link from '@mui/material/Link'

export default function Footer () {
  return (
    <Box sx={{ bgcolor: 'primary.main', p: 3, position: "fixed", bottom: 0, width: '100vw'}} component="footer">
      <Typography variant="h6" align="center" gutterBottom>
        Brought to you by <Link color="text.secondary" href="https://www.github.com/mattsnz" target="_blank" rel="noreferrer">Matt</Link>, a fan of using your noodle.
      </Typography>
    </Box>
  )
}
