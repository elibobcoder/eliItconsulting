'use client'

import React from 'react'

// hooks
import { useTheme } from '@mui/material'

// components
import Box from '@mui/material/Box'
import HomeHeroContent from './home-hero/home-hero-content'
import HomeHeroDecoration from './home-hero/home-hero-decoration'

const HomeHero = () => {
  const { palette } = useTheme()

  return (
    <Box
      id='home-hero'
      sx={{
        width: '100%',
        position: 'relative',
        background:
          palette.mode === 'dark'
            ? 'radial-gradient(circle at 15% 15%, #1c1f4d 0%, #12132c 45%, #0a0b1c 100%)'
            : 'radial-gradient(circle at 15% 15%, #ffffff 0%, #e9f0ff 45%, #dbe6ff 100%)',
        minHeight: '100vh',
        overflow: 'hidden',
      }}
    >
      <HomeHeroDecoration />
      <HomeHeroContent />
    </Box>
  )
}

export default HomeHero
