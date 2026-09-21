'use client'

import React, { FC } from 'react'
import Box from '@mui/material/Box'
import { motion } from 'framer-motion'

interface DecorativeOrbsProps {
  variant?: 'default' | 'reverse'
}

const DecorativeOrbs: FC<DecorativeOrbsProps> = ({ variant = 'default' }) => {
  const flip = variant === 'reverse'

  return (
    <Box
      sx={{
        position: 'absolute',
        inset: 0,
        overflow: 'hidden',
        pointerEvents: 'none',
      }}
    >
      <Box
        component={motion.div}
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.1, ease: 'easeOut' }}
        sx={{
          position: 'absolute',
          top: flip ? 'auto' : -140,
          bottom: flip ? -140 : 'auto',
          right: flip ? 'auto' : -120,
          left: flip ? -120 : 'auto',
          width: { xs: 280, md: 420 },
          height: { xs: 280, md: 420 },
          borderRadius: '50%',
          background: (theme) =>
            `radial-gradient(circle at 30% 30%, ${theme.palette.primary.light}, transparent 70%)`,
          filter: 'blur(10px)',
          opacity: 0.55,
        }}
      />
      <Box
        component={motion.div}
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.1, ease: 'easeOut', delay: 0.15 }}
        sx={{
          position: 'absolute',
          bottom: flip ? 'auto' : -160,
          top: flip ? -160 : 'auto',
          left: flip ? 'auto' : -140,
          right: flip ? -140 : 'auto',
          width: { xs: 240, md: 380 },
          height: { xs: 240, md: 380 },
          borderRadius: '50%',
          background: (theme) =>
            `radial-gradient(circle at 60% 60%, ${theme.palette.secondary.light}, transparent 70%)`,
          filter: 'blur(10px)',
          opacity: 0.5,
        }}
      />
    </Box>
  )
}

export default DecorativeOrbs
