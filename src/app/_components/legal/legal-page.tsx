'use client'

import React from 'react'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import { useTheme } from '@mui/material/styles'
import { Reveal, DecorativeOrbs } from '@/components/core'

interface LegalSection {
  heading: string
  body: string
}

interface LegalPageProps {
  eyebrow: string
  title: string
  titleAccent: string
  updated: string
  sections: LegalSection[]
}

const LegalPage = ({ eyebrow, title, titleAccent, updated, sections }: LegalPageProps) => {
  const theme = useTheme()

  return (
    <Box component='main'>
      <Box
        sx={{
          pt: { xs: 16, md: 20 },
          pb: { xs: 6, md: 8 },
          position: 'relative',
          overflow: 'hidden',
          backgroundColor: theme.palette.mode === 'dark' ? '#151733' : '#e8f3ff',
        }}
      >
        <DecorativeOrbs />
        <Container maxWidth='md' sx={{ textAlign: 'center', position: 'relative' }}>
          <Reveal>
            <Box
              sx={{
                mb: 3,
                borderRadius: 1,
                display: 'inline-block',
                padding: '6px 14px',
                backgroundColor:
                  theme.palette.mode === 'dark' ? 'rgb(255,255,255,0.10)' : 'primary.light',
                color: theme.palette.mode === 'dark' ? '#fbfbfb' : 'primary.main',
              }}
            >
              <Typography sx={{ fontSize: 12, letterSpacing: 1, textTransform: 'uppercase' }} variant='h5'>
                {eyebrow}
              </Typography>
            </Box>
            <Typography
              variant='h1'
              sx={{ mb: 2, fontSize: { xs: 32, md: 44 }, fontWeight: 800, lineHeight: 1.2 }}
            >
              {title}
              <br />
              <Box component='span' sx={{ color: 'primary.main' }}>
                {titleAccent}
              </Box>
            </Typography>
            <Typography sx={{ color: 'text.secondary', fontSize: 14 }}>{updated}</Typography>
          </Reveal>
        </Container>
      </Box>

      <Box sx={{ py: { xs: 6, md: 10 }, backgroundColor: 'background.paper' }}>
        <Container maxWidth='md'>
          {sections.map((section, index) => (
            <Reveal key={section.heading} index={index}>
              <Box sx={{ mb: 5 }}>
                <Typography sx={{ mb: 1.5, fontSize: { xs: 18, md: 20 }, fontWeight: 700 }}>
                  {section.heading}
                </Typography>
                <Typography sx={{ color: 'text.secondary', fontSize: 15, lineHeight: 1.8 }}>
                  {section.body}
                </Typography>
              </Box>
            </Reveal>
          ))}
        </Container>
      </Box>
    </Box>
  )
}

export default LegalPage
