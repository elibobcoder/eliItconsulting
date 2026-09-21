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

const HomeTrust = () => {
  return (
    <Box
      id='home-trust'
      component='section'
      sx={{
        width: '100%',
        py: { xs: 5, md: 7 },
        backgroundColor: 'background.paper',
        borderBottom: (theme) => `1px solid ${theme.palette.divider}`,
      }}
    >
      <Container maxWidth='lg'>
        <Reveal>
          <Typography
            sx={{
              textAlign: 'center',
              fontSize: { xs: 16, md: 20 },
              fontWeight: 600,
              color: 'text.secondary',
              mb: 3,
            }}
          >
            Trusted by teams who need software that ships and keeps working.
          </Typography>
        </Reveal>
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
      </Container>
    </Box>
  )
}

export default HomeTrust
