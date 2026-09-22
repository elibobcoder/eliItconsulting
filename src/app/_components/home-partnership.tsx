'use client'

import React from 'react'
import NextLink from 'next/link'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import { SectionTitle, Reveal, StyledButton } from '@/components/core'
import BenefitsGrid from '@/app/_components/engagement/benefits-grid'
import { LayersIcon, UsersIcon, GlobeIcon } from '@/app/_components/engagement/icons'

const PARTNER_TYPES = [
  {
    icon: <LayersIcon />,
    title: 'Technical Partners',
    description: 'Engineers, designers, and QA specialists who join our delivery network for client work.',
    color: '#2B4FD9',
  },
  {
    icon: <UsersIcon />,
    title: 'Referral Partners',
    description: 'Non-technical partners who connect us with businesses that need software built.',
    color: '#06B6D4',
  },
  {
    icon: <GlobeIcon />,
    title: 'Agency Partners',
    description: 'Agencies who need overflow engineering capacity for their own client projects.',
    color: '#F59E0B',
  },
]

const HomePartnership = () => {
  return (
    <Box
      id='home-partnership'
      component='section'
      sx={{
        width: '100%',
        py: { xs: 8, md: 14 },
        backgroundColor: (theme) => (theme.palette.mode === 'dark' ? '#101014' : '#f7f8fb'),
      }}
    >
      <Container maxWidth='lg'>
        <Reveal>
          <Box sx={{ mb: 6, maxWidth: 680, mx: 'auto', textAlign: 'center' }}>
            <SectionTitle>PARTNER WITH US</SectionTitle>
            <Typography variant='h1' sx={{ mb: 2, fontSize: { xs: 26, md: 36 }, fontWeight: 800 }}>
              Build the network with us, not just for us.
            </Typography>
            <Typography sx={{ color: 'text.secondary', fontSize: { xs: 15, md: 17 } }}>
              We partner with both technical and non-technical individuals who
              want more than a one-off project — a working relationship that
              lasts.
            </Typography>
          </Box>
        </Reveal>
        <BenefitsGrid items={PARTNER_TYPES} />
        <Box sx={{ textAlign: 'center', mt: 5 }}>
          <NextLink href='/contact' passHref>
            <StyledButton variant='contained' color='primary' size='large'>
              Become a Partner
            </StyledButton>
          </NextLink>
        </Box>
      </Container>
    </Box>
  )
}

export default HomePartnership
