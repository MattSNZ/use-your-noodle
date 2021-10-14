import React from 'react'

import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Link from '@mui/material/Link'

export default function Footer () {
  return (
    <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
      <Typography variant="h6" align="center" gutterBottom>
        Brought to you by <Link href="https://www.github.com/mattsnz" target="_blank">Matt</Link>, a fan of using your noodle.
      </Typography>
    </Box>
  )
}
