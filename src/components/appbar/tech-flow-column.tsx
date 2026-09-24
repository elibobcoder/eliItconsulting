'use client'

import React, { FC } from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { motion } from 'framer-motion'
import { techIcons } from '@/constants/tech-icons'

interface TechFlowColumnProps {
  heading: string
  tags: string[]
  direction: 'down' | 'up'
}

const COLUMN_HEIGHT = 220

const TechCard: FC<{ label: string }> = ({ label }) => (
  <Box
    sx={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 0.75,
      p: 1.25,
      mb: 1,
      borderRadius: 2.5,
      border: (theme) => `1px solid ${theme.palette.divider}`,
      backgroundColor: 'background.default',
    }}
  >
    <Box
      component='img'
      src={techIcons[label]}
      alt=''
      sx={{ width: 26, height: 26, objectFit: 'contain' }}
    />
    <Typography sx={{ fontSize: 11.5, fontWeight: 600, textAlign: 'center', lineHeight: 1.2 }}>
      {label}
    </Typography>
  </Box>
)

const TechFlowColumn: FC<TechFlowColumnProps> = ({ heading, tags, direction }) => {
  const track = [...tags, ...tags]

  return (
    <Box>
      {heading && (
        <Typography
          sx={{
            fontSize: 11,
            fontWeight: 700,
            letterSpacing: 0.5,
            color: 'text.secondary',
            mb: 1.5,
          }}
        >
          {heading}
        </Typography>
      )}
      <Box
        sx={{
          position: 'relative',
          height: COLUMN_HEIGHT,
          overflow: 'hidden',
          maskImage: 'linear-gradient(180deg, transparent 0%, #000 12%, #000 88%, transparent 100%)',
          WebkitMaskImage:
            'linear-gradient(180deg, transparent 0%, #000 12%, #000 88%, transparent 100%)',
        }}
      >
        <Box
          component={motion.div}
          animate={{ y: direction === 'down' ? ['-50%', '0%'] : ['0%', '-50%'] }}
          transition={{ duration: tags.length * 3, repeat: Infinity, ease: 'linear' }}
          sx={{ position: 'absolute', top: 0, left: 0, right: 0 }}
        >
          {track.map((label, i) => (
            <TechCard key={`${label}-${i}`} label={label} />
          ))}
        </Box>
      </Box>
    </Box>
  )
}

export default TechFlowColumn
