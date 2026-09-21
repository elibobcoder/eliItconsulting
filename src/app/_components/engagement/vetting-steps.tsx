'use client'

import React from 'react'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'

interface Step {
  title: string
  description: string
}

const VettingSteps = ({ steps }: { steps: Step[] }) => (
  <Grid container spacing={4}>
    {steps.map((step, index) => (
      <Grid key={step.title} size={{ xs: 12, md: 12 / steps.length }}>
        <Box
          sx={{
            width: 40,
            height: 40,
            mb: 2,
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontWeight: 800,
            fontSize: 16,
            color: 'primary.contrastText',
            backgroundColor: 'primary.main',
          }}
        >
          {index + 1}
        </Box>
        <Typography sx={{ fontSize: 17, fontWeight: 700, mb: 1 }}>
          {step.title}
        </Typography>
        <Typography sx={{ color: 'text.secondary', fontSize: 15, lineHeight: 1.7 }}>
          {step.description}
        </Typography>
      </Grid>
    ))}
  </Grid>
)

export default VettingSteps
