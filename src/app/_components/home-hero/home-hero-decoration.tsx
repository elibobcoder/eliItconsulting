'use client'

import React, { memo } from 'react'

// components
import Box from '@mui/material/Box'

// motion
import { motion } from 'framer-motion'

const HomeHeroDecoration = () => {
  return (
    <Box
      sx={{
        width: '100%',
        height: '100%',
        position: 'absolute',
        top: 0,
        left: 0,
        overflow: 'hidden',
        pointerEvents: 'none',
      }}
    >
      <Box
        component={motion.div}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
        sx={{
          position: 'absolute',
          top: { xs: -120, md: -180 },
          right: { xs: -140, md: -160 },
          width: { xs: 320, md: 520 },
          height: { xs: 320, md: 520 },
          borderRadius: '50%',
          background: (theme) =>
            `radial-gradient(circle at 30% 30%, ${theme.palette.primary.light}, transparent 70%)`,
          filter: 'blur(10px)',
          opacity: 0.6,
        }}
      />
      <Box
        component={motion.div}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: 'easeOut', delay: 0.15 }}
        sx={{
          position: 'absolute',
          bottom: { xs: -160, md: -220 },
          left: { xs: -140, md: -180 },
          width: { xs: 300, md: 480 },
          height: { xs: 300, md: 480 },
          borderRadius: '50%',
          background: (theme) =>
            `radial-gradient(circle at 60% 60%, ${theme.palette.secondary.light}, transparent 70%)`,
          filter: 'blur(10px)',
          opacity: 0.55,
        }}
      />
      <Box
        component={motion.div}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, ease: 'easeOut', delay: 0.3 }}
        sx={{
          position: 'absolute',
          top: '18%',
          left: '8%',
          width: 10,
          height: 10,
          borderRadius: '50%',
          backgroundColor: 'secondary.main',
          display: { xs: 'none', md: 'block' },
        }}
      />
      <Box
        component={motion.div}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, ease: 'easeOut', delay: 0.4 }}
        sx={{
          position: 'absolute',
          bottom: '22%',
          right: '10%',
          width: 14,
          height: 14,
          borderRadius: '50%',
          backgroundColor: 'primary.main',
          display: { xs: 'none', md: 'block' },
        }}
      />
    </Box>
  )
}

export default memo(HomeHeroDecoration)
