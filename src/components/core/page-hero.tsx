'use client'

import React, { FC, ReactNode } from 'react'
import Box from '@mui/material/Box'
import DecorativeOrbs from './decorative-orbs'

interface PageHeroProps {
  children: ReactNode
  orbVariant?: 'default' | 'reverse'
  pb?: { xs: number; md: number }
}

const PageHero: FC<PageHeroProps> = ({
  children,
  orbVariant = 'default',
  pb = { xs: 8, md: 12 },
}) => {
  return (
    <Box
      sx={{
        position: 'relative',
        overflow: 'hidden',
        pt: { xs: 16, md: 20 },
        pb,
        background: (theme) =>
          theme.palette.mode === 'dark'
            ? 'radial-gradient(circle at 15% 15%, #1c1f4d 0%, #12132c 45%, #0a0b1c 100%)'
            : 'radial-gradient(circle at 15% 15%, #ffffff 0%, #e9f0ff 45%, #dbe6ff 100%)',
      }}
    >
      <DecorativeOrbs variant={orbVariant} />
      <Box sx={{ position: 'relative', zIndex: 1 }}>{children}</Box>
    </Box>
  )
}

export default PageHero
