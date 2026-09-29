'use client'

import React from 'react'

// components
import Box from '@mui/material/Box'
import HomeHeroContent from './home-hero/home-hero-content'
import HomeHeroDecoration from './home-hero/home-hero-decoration'

const HomeHero = () => {
  return (
    <Box
      id='home-hero'
      sx={{
        width: '100%',
        position: 'relative',
        background:
          'radial-gradient(circle at 18% 15%, rgba(30,63,196,0.05), transparent 55%), #fbfaf7',
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
