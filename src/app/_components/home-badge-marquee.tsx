'use client'

import React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { motion } from 'framer-motion'

// Placeholder platform names — swap for the real badge images/award text
// once available (Clutch, GoodFirms, TechReviewer.co, TechImply, DesignRush, CSSDA).
const BADGES = ['Clutch', 'GoodFirms', 'TechReviewer.co', 'TechImply', 'DesignRush', 'CSSDA']

const BadgeTile = ({ label }: { label: string }) => (
  <Box
    sx={{
      flexShrink: 0,
      width: 148,
      height: 108,
      mx: 1.5,
      borderRadius: 3,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      px: 2,
      border: (theme) => `1px dashed ${theme.palette.divider}`,
      backgroundColor: 'background.paper',
    }}
  >
    <Typography sx={{ fontSize: 14, fontWeight: 700, color: 'text.secondary' }}>
      {label}
    </Typography>
  </Box>
)

const HomeBadgeMarquee = () => {
  const track = [...BADGES, ...BADGES]

  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        overflow: 'hidden',
        py: 1,
        maskImage:
          'linear-gradient(90deg, transparent 0%, #000 10%, #000 90%, transparent 100%)',
        WebkitMaskImage:
          'linear-gradient(90deg, transparent 0%, #000 10%, #000 90%, transparent 100%)',
      }}
    >
      <Box
        component={motion.div}
        animate={{ x: ['0%', '-50%'] }}
        transition={{ duration: 22, repeat: Infinity, ease: 'linear' }}
        sx={{ display: 'flex', width: 'max-content' }}
      >
        {track.map((label, i) => (
          <BadgeTile key={`${label}-${i}`} label={label} />
        ))}
      </Box>
    </Box>
  )
}

export default HomeBadgeMarquee
