'use client'

import React from 'react'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'

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
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: { xs: 1.5, md: 2 },
          }}
        >
          {INDUSTRIES.map((industry) => (
            <Box
              key={industry}
              sx={{
                px: 2.5,
                py: 1,
                borderRadius: 10,
                fontSize: 13,
                fontWeight: 700,
                letterSpacing: 0.3,
                color: 'primary.main',
                backgroundColor: 'primary.light',
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
