'use client'

import React from 'react'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import { motion } from 'framer-motion'
import { Reveal } from '@/components/core'

const PILLARS = [
  {
    title: 'The right expertise',
    description:
      'Engineers and consultants who have shipped production software across your stack.',
  },
  {
    title: 'The right team',
    description:
      'From a single engineer to a full pod, sized to match how your project actually needs to move.',
  },
  {
    title: 'The right approach',
    description:
      'We plan before we build, so the solution fits your business, not the other way around.',
  },
  {
    title: 'The right partner',
    description:
      'Clear communication and honest timelines, from kickoff through long-term support.',
  },
]

const HomeValuePillars = () => {
  return (
    <Box
      id='home-value-pillars'
      component='section'
      sx={{
        width: '100%',
        py: { xs: 8, md: 14 },
        backgroundColor: (theme) =>
          theme.palette.mode === 'dark' ? '#101014' : '#f7f8fb',
      }}
    >
      <Container maxWidth='lg'>
        <Reveal>
          <Typography
            variant='h1'
            sx={{
              mb: 6,
              fontSize: { xs: 26, md: 36 },
              fontWeight: 800,
              textAlign: 'center',
            }}
          >
            No need to wonder.
            <br />
            Working with us is easy.
          </Typography>
        </Reveal>
        <Grid container spacing={4}>
          {PILLARS.map((pillar, index) => (
            <Grid key={pillar.title} size={{ xs: 12, sm: 6, md: 3 }}>
              <Reveal index={index}>
                <Box
                  component={motion.div}
                  initial={{ width: 0 }}
                  whileInView={{ width: 40 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 + 0.2 }}
                  sx={{
                    height: 4,
                    mb: 2,
                    borderRadius: 2,
                    backgroundColor: 'primary.main',
                  }}
                />
                <Typography sx={{ fontSize: 18, fontWeight: 700, mb: 1 }}>
                  {pillar.title}
                </Typography>
                <Typography sx={{ color: 'text.secondary', fontSize: 15 }}>
                  {pillar.description}
                </Typography>
              </Reveal>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  )
}

export default HomeValuePillars
