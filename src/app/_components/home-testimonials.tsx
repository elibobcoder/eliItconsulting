'use client'

import React from 'react'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import { SectionTitle } from '@/components/core'

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

const HomeTestimonials = () => {
  return (
    <Box
      id='home-testimonials'
      component='section'
      sx={{
        width: '100%',
        py: { xs: 8, md: 14 },
        backgroundColor: 'background.paper',
      }}
    >
      <Container maxWidth='lg'>
        <Box sx={{ mb: 6, maxWidth: 640 }}>
          <SectionTitle>WHAT CLIENTS SAY</SectionTitle>
          <Typography
            variant='h1'
            sx={{ fontSize: { xs: 26, md: 36 }, fontWeight: 800 }}
          >
            No need to wonder. Working with us is straightforward.
          </Typography>
        </Box>
        <Grid container spacing={3}>
          {TESTIMONIALS.map((t) => (
            <Grid key={t.name} size={{ xs: 12, md: 4 }}>
              <Box
                sx={{
                  height: '100%',
                  p: 4,
                  borderRadius: 4,
                  backgroundColor: (theme) =>
                    theme.palette.mode === 'dark' ? '#101014' : '#f7f8fb',
                }}
              >
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
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  )
}

export default HomeTestimonials
