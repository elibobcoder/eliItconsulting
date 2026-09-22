'use client'

import React from 'react'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import { motion } from 'framer-motion'
import { SectionTitle, Reveal } from '@/components/core'

const TESTIMONIALS = [
  {
    quote:
      'They plugged in as an extension of our team and shipped faster than we expected, without cutting corners on quality.',
    name: 'Product Lead',
    role: 'SaaS Startup',
  },
  {
    quote:
      'Clear communication and solid engineering. We finally have a technology partner we can rely on for the long term.',
    name: 'Operations Director',
    role: 'Retail Business',
  },
  {
    quote:
      "They didn't just write code — they helped us think through the right architecture before we built anything.",
    name: 'Founder',
    role: 'Fintech Company',
  },
]

const StarRow = () => (
  <Box sx={{ display: 'flex', gap: 0.5, mb: 2, color: '#F59E0B' }}>
    {Array.from({ length: 5 }).map((_, i) => (
      <Box key={i} component='svg' viewBox='0 0 24 24' sx={{ width: 16, height: 16 }}>
        <path
          fill='currentColor'
          d='M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 21 12 17.77 5.82 21 7 14.14l-5-4.87 6.91-1.01L12 2z'
        />
      </Box>
    ))}
  </Box>
)

const HomeTestimonials = () => {
  return (
    <Box
      id='home-testimonials'
      component='section'
      sx={{
        width: '100%',
        py: { xs: 8, md: 14 },
        backgroundColor: (theme) => (theme.palette.mode === 'dark' ? '#101014' : '#f7f8fb'),
      }}
    >
      <Container maxWidth='lg'>
        <Reveal>
          <Box sx={{ mb: 6, maxWidth: 640 }}>
            <SectionTitle>CLIENT REVIEWS</SectionTitle>
            <Typography
              variant='h1'
              sx={{ fontSize: { xs: 26, md: 36 }, fontWeight: 800 }}
            >
              Excellent reviews, from clients who trust us with real work.
            </Typography>
          </Box>
        </Reveal>
        <Grid container spacing={3}>
          {TESTIMONIALS.map((t, index) => (
            <Grid key={t.name} size={{ xs: 12, md: 4 }}>
              <Reveal index={index}>
                <Box
                  component={motion.div}
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.3 }}
                  sx={{
                    height: '100%',
                    p: 4,
                    borderRadius: 4,
                    backgroundColor: 'background.paper',
                    border: (theme) => `1px solid ${theme.palette.divider}`,
                  }}
                >
                  <StarRow />
                  <Typography
                    sx={{
                      fontSize: 16,
                      lineHeight: 1.7,
                      color: 'text.primary',
                      mb: 3,
                    }}
                  >
                    &ldquo;{t.quote}&rdquo;
                  </Typography>
                  <Typography sx={{ fontWeight: 700 }}>{t.name}</Typography>
                  <Typography sx={{ color: 'text.secondary', fontSize: 14 }}>
                    {t.role}
                  </Typography>
                </Box>
              </Reveal>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  )
}

export default HomeTestimonials
