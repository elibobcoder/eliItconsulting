'use client'

import React from 'react'
import NextLink from 'next/link'
import Image from 'next/image'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import { useTheme } from '@mui/material/styles'
import { motion } from 'framer-motion'
import {
  StyledButton,
  SectionTitle,
  Reveal,
  PageHero,
} from '@/components/core'
import BenefitsGrid from '@/app/_components/engagement/benefits-grid'
import {
  RocketIcon,
  GlobeIcon,
  UsersIcon,
  LayersIcon,
  ClipboardCheckIcon,
} from '@/app/_components/engagement/icons'
import { stockPhotos } from '@/constants/stock-photos'

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

const GALLERY = [
  { src: stockPhotos.remoteWork, alt: 'Remote work setup' },
  { src: stockPhotos.officeCulture, alt: 'Team collaborating' },
  { src: stockPhotos.teamDiscussion, alt: 'Team discussion' },
]

const CulturePage = () => {
  const theme = useTheme()

  return (
    <Box component='main'>
      <PageHero>
        <Container maxWidth='md' sx={{ textAlign: 'center', position: 'relative' }}>
          <Reveal>
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
          </Reveal>
        </Container>
      </PageHero>

      {/* Photo gallery */}
      <Box sx={{ py: { xs: 6, md: 8 }, backgroundColor: 'background.paper' }}>
        <Container maxWidth='lg'>
          <Grid container spacing={2}>
            {GALLERY.map((photo, index) => (
              <Grid key={photo.alt} size={{ xs: 12, sm: 4 }}>
                <Reveal index={index}>
                  <Box
                    component={motion.div}
                    whileHover={{ scale: 1.03 }}
                    transition={{ duration: 0.4 }}
                    sx={{
                      position: 'relative',
                      height: { xs: 200, md: 240 },
                      borderRadius: 4,
                      overflow: 'hidden',
                      boxShadow: 2,
                    }}
                  >
                    <Image
                      src={photo.src}
                      alt={photo.alt}
                      fill
                      sizes='(max-width: 900px) 100vw, 33vw'
                      style={{ objectFit: 'cover' }}
                    />
                  </Box>
                </Reveal>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      <Box sx={{ py: { xs: 8, md: 12 }, backgroundColor: (t) => t.palette.mode === 'dark' ? '#101014' : '#f7f8fb' }}>
        <Container maxWidth='lg'>
          <Reveal>
            <SectionTitle>WHAT THIS LOOKS LIKE DAY TO DAY</SectionTitle>
            <Typography variant='h2' sx={{ mb: 5, fontSize: { xs: 24, md: 32 }, fontWeight: 800 }}>
              The habits behind the work.
            </Typography>
          </Reveal>
          <BenefitsGrid items={PILLARS} />
        </Container>
      </Box>

      <Box
        sx={{
          py: { xs: 8, md: 10 },
          backgroundColor: 'background.paper',
          textAlign: 'center',
        }}
      >
        <Container maxWidth='sm'>
          <Reveal>
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
          </Reveal>
        </Container>
      </Box>
    </Box>
  )
}

export default CulturePage
