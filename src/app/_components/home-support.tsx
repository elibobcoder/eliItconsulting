'use client'

import React from 'react'
import NextLink from 'next/link'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import { SectionTitle, Reveal, StyledButton } from '@/components/core'
import BenefitsGrid from '@/app/_components/engagement/benefits-grid'
import { ClipboardCheckIcon, UsersIcon, ShieldIcon } from '@/app/_components/engagement/icons'

const SUPPORT_ITEMS = [
  {
    icon: <ClipboardCheckIcon />,
    title: 'Resume & Portfolio Review',
    description: 'Hands-on feedback to help your resume and portfolio reflect the work you can actually do.',
    color: '#2B4FD9',
  },
  {
    icon: <UsersIcon />,
    title: 'Interview Coaching',
    description: 'Mock technical and behavioral interviews with real feedback, not generic tips.',
    color: '#06B6D4',
  },
  {
    icon: <ShieldIcon />,
    title: 'Ongoing Job Support',
    description: 'Support that continues after you start, from ramp-up questions to career check-ins.',
    color: '#10B981',
  },
]

const HomeSupport = () => {
  return (
    <Box id='home-support' component='section' sx={{ width: '100%', py: { xs: 8, md: 14 }, backgroundColor: 'background.paper' }}>
      <Container maxWidth='lg'>
        <Reveal>
          <Box sx={{ mb: 6, maxWidth: 680, mx: 'auto', textAlign: 'center' }}>
            <SectionTitle>CAREER SUPPORT</SectionTitle>
            <Typography variant='h1' sx={{ mb: 2, fontSize: { xs: 26, md: 36 }, fontWeight: 800 }}>
              We invest in your career, not just your placement.
            </Typography>
            <Typography sx={{ color: 'text.secondary', fontSize: { xs: 15, md: 17 } }}>
              Whether you&apos;re joining a client team or growing with us
              directly, we back you before, during, and after you land the role.
            </Typography>
          </Box>
        </Reveal>
        <BenefitsGrid items={SUPPORT_ITEMS} />
        <Box sx={{ textAlign: 'center', mt: 5 }}>
          <NextLink href='/contact' passHref>
            <StyledButton variant='outlined' color='primary' size='large'>
              Get Career Support
            </StyledButton>
          </NextLink>
        </Box>
      </Container>
    </Box>
  )
}

export default HomeSupport
