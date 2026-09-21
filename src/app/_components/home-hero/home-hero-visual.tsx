'use client'

import React, { memo } from 'react'

// components
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { CountUp } from '@/components/core'
import { stockPhotos } from '@/constants/stock-photos'

// motion
const MotionBox = motion(Box)

interface CodeToken {
  t: string
  c: string
}

interface CodeLine {
  indent: number
  tokens: CodeToken[]
}

const CODE_LINES: CodeLine[] = [
  { indent: 0, tokens: [{ t: 'const', c: '#c678dd' }, { t: ' deploy ', c: '#e5e7eb' }, { t: '= ', c: '#e5e7eb' }, { t: 'async', c: '#c678dd' }, { t: ' () => {', c: '#e5e7eb' }] },
  { indent: 1, tokens: [{ t: 'await', c: '#c678dd' }, { t: ' runTests', c: '#61afef' }, { t: '()', c: '#e5e7eb' }] },
  { indent: 1, tokens: [{ t: 'await', c: '#c678dd' }, { t: ' build', c: '#61afef' }, { t: '(', c: '#e5e7eb' }, { t: "'production'", c: '#98c379' }, { t: ')', c: '#e5e7eb' }] },
  { indent: 1, tokens: [{ t: 'return', c: '#c678dd' }, { t: ' ship', c: '#61afef' }, { t: '()', c: '#e5e7eb' }] },
  { indent: 0, tokens: [{ t: '}', c: '#e5e7eb' }] },
  { indent: 0, tokens: [{ t: '// status: ', c: '#5c6370' }, { t: 'all systems green', c: '#98c379' }] },
]

const HomeHeroVisual = () => {
  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        maxWidth: 480,
        mx: 'auto',
        py: { xs: 4, md: 0 },
      }}
    >
      {/* Ambient glow behind the panel */}
      <Box
        sx={{
          position: 'absolute',
          inset: '-15%',
          background: (theme) =>
            `radial-gradient(circle at 50% 40%, ${theme.palette.primary.main}33, transparent 65%)`,
          filter: 'blur(30px)',
          zIndex: 0,
        }}
      />

      {/* Terminal / code panel */}
      <MotionBox
        initial={{ opacity: 0, y: 30, rotate: -1 }}
        animate={{ opacity: 1, y: 0, rotate: -1.5 }}
        transition={{ duration: 0.9, delay: 0.3, ease: 'easeOut' }}
        sx={{
          position: 'relative',
          zIndex: 1,
          borderRadius: 4,
          overflow: 'hidden',
          backgroundColor: '#0d1220',
          border: '1px solid rgba(255,255,255,0.08)',
          boxShadow: '0 30px 60px -20px rgba(11, 18, 32, 0.55)',
        }}
      >
        <Stack
          direction='row'
          spacing={0.75}
          alignItems='center'
          sx={{ px: 2.5, py: 1.5, borderBottom: '1px solid rgba(255,255,255,0.06)' }}
        >
          <Box sx={{ width: 10, height: 10, borderRadius: '50%', backgroundColor: '#f87171' }} />
          <Box sx={{ width: 10, height: 10, borderRadius: '50%', backgroundColor: '#fbbf24' }} />
          <Box sx={{ width: 10, height: 10, borderRadius: '50%', backgroundColor: '#34d399' }} />
          <Typography
            sx={{
              ml: 1.5,
              fontFamily: 'monospace',
              fontSize: 12,
              color: 'rgba(255,255,255,0.45)',
            }}
          >
            deploy.ts
          </Typography>
        </Stack>
        <Box sx={{ px: 3, py: 2.5, fontFamily: 'monospace', fontSize: { xs: 12.5, md: 13.5 } }}>
          {CODE_LINES.map((line, i) => (
            <Box
              key={i}
              component={motion.div}
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.7 + i * 0.22 }}
              sx={{ pl: line.indent * 2.5, whiteSpace: 'pre', lineHeight: 1.9 }}
            >
              {line.tokens.map((tok, j) => (
                <Box key={j} component='span' sx={{ color: tok.c }}>
                  {tok.t}
                </Box>
              ))}
            </Box>
          ))}
          <Box
            component={motion.span}
            animate={{ opacity: [1, 0, 1] }}
            transition={{ duration: 1, repeat: Infinity, ease: 'easeInOut' }}
            sx={{
              display: 'inline-block',
              width: 7,
              height: 14,
              ml: 0.5,
              backgroundColor: 'secondary.main',
              verticalAlign: 'middle',
            }}
          />
        </Box>
      </MotionBox>

      {/* Floating photo card */}
      <MotionBox
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1, y: [0, -12, 0] }}
        transition={{
          opacity: { duration: 0.7, delay: 1.4 },
          scale: { duration: 0.7, delay: 1.4 },
          y: { duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 1.6 },
        }}
        sx={{
          position: 'absolute',
          zIndex: 2,
          top: { xs: -28, md: -36 },
          right: { xs: -12, md: -32 },
          width: { xs: 108, md: 140 },
          height: { xs: 78, md: 100 },
          borderRadius: 3,
          overflow: 'hidden',
          border: '3px solid',
          borderColor: 'background.paper',
          boxShadow: 4,
        }}
      >
        <Image
          src={stockPhotos.codingCloseup}
          alt='Senior engineer at work'
          fill
          sizes='140px'
          style={{ objectFit: 'cover' }}
        />
      </MotionBox>

      {/* Floating stat card */}
      <MotionBox
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1, y: [0, 10, 0] }}
        transition={{
          opacity: { duration: 0.7, delay: 1.6 },
          scale: { duration: 0.7, delay: 1.6 },
          y: { duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1.8 },
        }}
        sx={{
          position: 'absolute',
          zIndex: 2,
          bottom: { xs: -20, md: -28 },
          left: { xs: -8, md: -28 },
          px: 2.5,
          py: 1.75,
          borderRadius: 3,
          backgroundColor: 'background.paper',
          boxShadow: 4,
        }}
      >
        <Typography sx={{ fontSize: { xs: 20, md: 24 }, fontWeight: 800, color: 'primary.main', lineHeight: 1 }}>
          <CountUp value='98%' />
        </Typography>
        <Typography sx={{ fontSize: 11, color: 'text.secondary', fontWeight: 600, mt: 0.25 }}>
          On-time delivery
        </Typography>
      </MotionBox>
    </Box>
  )
}

export default memo(HomeHeroVisual)
