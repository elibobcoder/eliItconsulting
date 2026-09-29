'use client'

import React, { FC, ReactNode } from 'react'
import Box from '@mui/material/Box'

interface PageHeroProps {
  children: ReactNode
  pb?: { xs: number; md: number }
}

const PageHero: FC<PageHeroProps> = ({ children, pb = { xs: 8, md: 12 } }) => {
  return (
    <Box
      sx={{
        position: 'relative',
        overflow: 'hidden',
        pt: { xs: 16, md: 20 },
        pb,
        background:
          'radial-gradient(circle at 18% 15%, rgba(30,63,196,0.05), transparent 55%), #fbfaf7',
      }}
    >
      <Box sx={{ position: 'relative', zIndex: 1 }}>{children}</Box>
    </Box>
  )
}

export default PageHero
