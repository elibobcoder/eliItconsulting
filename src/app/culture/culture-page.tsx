'use client'

import React from 'react'
import NextLink from 'next/link'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import { useTheme } from '@mui/material/styles'
import { StyledButton, SectionTitle } from '@/components/core'
import BenefitsGrid from '@/app/_components/engagement/benefits-grid'
import {
  RocketIcon,
  GlobeIcon,
  UsersIcon,
  LayersIcon,
  ClipboardCheckIcon,
} from '@/app/_components/engagement/icons'

const PILLARS = [
  {
    icon: <GlobeIcon />,
    title: 'Remote-first, by design',
    description: 'We build our process around distributed work, not around forcing people into an office.',
    color: '#2B4FD9',
  },
  {
    icon: <RocketIcon />,
    title: 'Ownership over oversight',
    description: 'We hire people we trust to make good decisions, then give them the room to make them.',
    color: '#06B6D4',
  },
  {
    icon: <UsersIcon />,
    title: 'Direct, honest communication',
    description: 'Clear feedback and straightforward conversations, even when the update isn’t a good one.',
    color: '#10B981',
  },
  {
    icon: <ClipboardCheckIcon />,
    title: 'Continuous learning',
    description: 'The tools and best practices change fast. We build time to keep up into the way we work.',
    color: '#F59E0B',
  },
  {
    icon: <LayersIcon />,
    title: 'Small teams, real impact',
    description: 'We keep teams small enough that everyone’s work is visible and everyone’s input matters.',
    color: '#EC4899',
  },
]

const CulturePage = () => {
  const theme = useTheme()

  return (
    <Box component='main'>
      <Box
        sx={{
          pt: { xs: 16, md: 20 },
          pb: { xs: 8, md: 12 },
          backgroundColor: theme.palette.mode === 'dark' ? '#151733' : '#e8f3ff',
        }}
      >
        <Container maxWidth='md' sx={{ textAlign: 'center' }}>
          <Box
            sx={{
              mb: 3,
              borderRadius: 1,
              display: 'inline-block',
              padding: '6px 14px',
              backgroundColor:
                theme.palette.mode === 'dark' ? 'rgb(255,255,255,0.10)' : 'primary.light',
              color: theme.palette.mode === 'dark' ? '#fbfbfb' : 'primary.main',
            }}
          >
            <Typography sx={{ fontSize: 12, letterSpacing: 1, textTransform: 'uppercase' }} variant='h5'>
              Company Culture
            </Typography>
          </Box>
          <Typography
            variant='h1'
            sx={{ mb: 3, fontSize: { xs: 32, md: 48 }, fontWeight: 800, lineHeight: 1.2 }}
          >
            How we
            <br />
            <Box component='span' sx={{ color: 'primary.main' }}>
              actually work.
            </Box>
          </Typography>
          <Typography
            sx={{ fontSize: { xs: 16, md: 20 }, color: 'text.secondary', maxWidth: 640, mx: 'auto' }}
          >
            Culture isn&apos;t a poster on a wall. It&apos;s the habits that
            hold up when nobody&apos;s watching.
          </Typography>
        </Container>
      </Box>

      <Box sx={{ py: { xs: 8, md: 12 }, backgroundColor: 'background.paper' }}>
        <Container maxWidth='lg'>
          <SectionTitle>WHAT THIS LOOKS LIKE DAY TO DAY</SectionTitle>
          <Typography variant='h2' sx={{ mb: 5, fontSize: { xs: 24, md: 32 }, fontWeight: 800 }}>
            The habits behind the work.
          </Typography>
          <BenefitsGrid items={PILLARS} />
        </Container>
      </Box>

      <Box
        sx={{
          py: { xs: 8, md: 10 },
          backgroundColor: theme.palette.mode === 'dark' ? '#101014' : '#f7f8fb',
          textAlign: 'center',
        }}
      >
        <Container maxWidth='sm'>
          <Typography variant='h2' sx={{ mb: 2, fontSize: { xs: 22, md: 30 }, fontWeight: 800 }}>
            Want to be part of it?
          </Typography>
          <Typography sx={{ mb: 4, color: 'text.secondary', fontSize: { xs: 15, md: 17 } }}>
            We&apos;re always open to hearing from people who&apos;d be a good fit.
          </Typography>
          <NextLink href='/career' passHref>
            <StyledButton variant='contained' size='large' color='primary'>
              See Open Roles
            </StyledButton>
          </NextLink>
        </Container>
      </Box>
    </Box>
  )
}

export default CulturePage
