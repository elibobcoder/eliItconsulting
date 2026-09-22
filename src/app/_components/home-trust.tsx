'use client'

import React from 'react'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import { motion } from 'framer-motion'
import { Reveal } from '@/components/core'

const INDUSTRIES = [
  'Startups',
  'Fintech',
  'Healthcare',
  'Retail & E-commerce',
  'Logistics',
  'Professional Services',
]

const PLATFORMS = ['AWS', 'Google Cloud', 'Microsoft Azure']

const HomeTrust = () => {
  return (
    <Box
      id='home-trust'
      component='section'
      sx={{
        width: '100%',
        py: { xs: 6, md: 9 },
        backgroundColor: 'background.paper',
        borderBottom: (theme) => `1px solid ${theme.palette.divider}`,
      }}
    >
      <Container maxWidth='md'>
        <Reveal>
          <Typography
            sx={{
              textAlign: 'center',
              fontSize: { xs: 20, md: 26 },
              fontWeight: 700,
              lineHeight: 1.5,
              mb: 5,
            }}
          >
            &ldquo;Good enough&rdquo; isn&apos;t in our vocabulary.
            <Box component='span' sx={{ color: 'primary.main' }}>
              {' '}
              If it ships with our name on it, it works.
            </Box>
          </Typography>
        </Reveal>

        <Box sx={{ textAlign: 'center', mb: 4 }}>
          <Typography
            sx={{
              fontSize: 12,
              fontWeight: 700,
              letterSpacing: 1,
              color: 'text.disabled',
              textTransform: 'uppercase',
              mb: 2,
            }}
          >
            Built on
          </Typography>
          <Box
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: { xs: 3, md: 5 },
            }}
          >
            {PLATFORMS.map((platform, index) => (
              <Box
                key={platform}
                component={motion.div}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.4, delay: index * 0.06 }}
                sx={{ fontSize: { xs: 16, md: 18 }, fontWeight: 800, color: 'text.secondary' }}
              >
                {platform}
              </Box>
            ))}
          </Box>
        </Box>

        <Box sx={{ textAlign: 'center' }}>
          <Typography
            sx={{
              fontSize: 12,
              fontWeight: 700,
              letterSpacing: 1,
              color: 'text.disabled',
              textTransform: 'uppercase',
              mb: 2,
            }}
          >
            Industries we serve
          </Typography>
          <Box
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: { xs: 1.5, md: 2 },
            }}
          >
            {INDUSTRIES.map((industry, index) => (
              <Box
                key={industry}
                component={motion.div}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                whileHover={{ scale: 1.06 }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.06,
                  ease: 'easeOut',
                }}
                sx={{
                  px: 2.5,
                  py: 1,
                  borderRadius: 10,
                  fontSize: 13,
                  fontWeight: 700,
                  letterSpacing: 0.3,
                  color: 'primary.main',
                  backgroundColor: 'primary.light',
                  cursor: 'default',
                }}
              >
                {industry}
              </Box>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

export default HomeTrust
