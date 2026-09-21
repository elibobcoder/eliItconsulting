'use client'

import React, { ReactNode } from 'react'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'

interface Benefit {
  icon: ReactNode
  title: string
  description: string
  color: string
}

const BenefitsGrid = ({ items }: { items: Benefit[] }) => (
  <Grid container spacing={3}>
    {items.map((item) => (
      <Grid key={item.title} size={{ xs: 12, sm: 6, md: 4 }}>
        <Box
          sx={{
            height: '100%',
            p: 3.5,
            borderRadius: 4,
            backgroundColor: 'background.paper',
            border: (t) => `1px solid ${t.palette.divider}`,
          }}
        >
          <Box
            sx={{
              width: 48,
              height: 48,
              mb: 2,
              borderRadius: 3,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#fff',
              backgroundColor: item.color,
            }}
          >
            {item.icon}
          </Box>
          <Typography sx={{ fontSize: 16, fontWeight: 700, mb: 1 }}>
            {item.title}
          </Typography>
          <Typography sx={{ color: 'text.secondary', fontSize: 14, lineHeight: 1.7 }}>
            {item.description}
          </Typography>
        </Box>
      </Grid>
    ))}
  </Grid>
)

export default BenefitsGrid
