'use client'

import React, { useState } from 'react'
import NextLink from 'next/link'
import Image from 'next/image'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import { useTheme } from '@mui/material/styles'
import { motion, AnimatePresence } from 'framer-motion'
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

const AVATAR_COLORS = ['#1E3FC4', '#0891B2', '#D85A30', '#639922', '#993C1D', '#0E7490']

const AvatarGlyph = () => (
  <svg viewBox='0 0 24 24' width='60%' height='60%' fill='none'>
    <circle cx='12' cy='8' r='4' fill='#fbfbfb' fillOpacity={0.9} />
    <path d='M4 20c0-4.4 3.6-8 8-8s8 3.6 8 8' fill='#fbfbfb' fillOpacity={0.9} />
  </svg>
)

const TEAM_TESTIMONIALS = [
  {
    quote:
      'I’ve worked at places where every decision needed three approvals. Here, if I think something’s the right call, I make it — and that trust changes how you show up to work every day.',
    role: 'Senior Backend Engineer',
    photo: stockPhotos.portraitProfessionalWomanOne,
  },
  {
    quote:
      'Being remote-first isn’t just a policy here — it’s how everything is actually built. Meetings are the exception, not the default, and that respect for focused time is rare.',
    role: 'Project Manager',
    photo: stockPhotos.portraitProfessionalManOne,
  },
  {
    quote:
      'Feedback here is direct, not diplomatic-to-the-point-of-useless. It stung the first time, but it’s the fastest I’ve ever grown as an engineer.',
    role: 'QA Engineer',
    photo: stockPhotos.portraitProfessionalManTwo,
  },
]

const DEI_PHOTOS = [
  { src: stockPhotos.teamAroundTable, alt: 'The team gathered around a table' },
  { src: stockPhotos.teamWorkshop, alt: 'A team workshop session' },
  { src: stockPhotos.diverseTeamVideoCall, alt: 'A distributed team on a video call' },
]

const PILLARS = [
  {
    icon: <GlobeIcon />,
    title: 'Remote-first, by design',
    description: 'We build our process around distributed work, not around forcing people into an office.',
    color: '#1E3FC4',
  },
  {
    icon: <RocketIcon />,
    title: 'Ownership over oversight',
    description: 'We hire people we trust to make good decisions, then give them the room to make them.',
    color: '#0891B2',
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
  const [testimonialIndex, setTestimonialIndex] = useState(0)
  const [testimonialDirection, setTestimonialDirection] = useState(1)
  const activeTestimonial = TEAM_TESTIMONIALS[testimonialIndex]

  const goToPrevTestimonial = () => {
    setTestimonialDirection(-1)
    setTestimonialIndex((i) => (i === 0 ? TEAM_TESTIMONIALS.length - 1 : i - 1))
  }
  const goToNextTestimonial = () => {
    setTestimonialDirection(1)
    setTestimonialIndex((i) => (i === TEAM_TESTIMONIALS.length - 1 ? 0 : i + 1))
  }

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
                      borderRadius: 0,
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

      <Box sx={{ py: { xs: 8, md: 12 }, backgroundColor: 'background.paper', textAlign: 'center' }}>
        <Container maxWidth='lg'>
          <Reveal>
            <Typography variant='h2' sx={{ mb: 2, fontSize: { xs: 26, md: 36 }, fontWeight: 800 }}>
              Hear from our team
              <Box component='span' sx={{ color: 'primary.main' }}>
                .
              </Box>
            </Typography>
            <Typography sx={{ mb: 6, color: 'text.secondary', fontSize: { xs: 15, md: 17 }, maxWidth: 560, mx: 'auto' }}>
              We build the kind of place we&apos;d want to work at ourselves. Here&apos;s what that looks like from
              the inside.
            </Typography>
          </Reveal>
          <Reveal index={1}>
            <Box
              sx={{
                position: 'relative',
                backgroundColor: '#0a0b1c',
                overflow: 'hidden',
                minHeight: { xs: 420, md: 280 },
              }}
            >
              <AnimatePresence mode='popLayout' initial={false}>
                <Box
                  key={testimonialIndex}
                  component={motion.div}
                  initial={{ opacity: 0, x: testimonialDirection * 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -testimonialDirection * 40 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  sx={{
                    position: { xs: 'relative', md: 'absolute' },
                    inset: 0,
                    display: 'flex',
                    flexDirection: { xs: 'column', md: 'row' },
                    alignItems: 'stretch',
                    textAlign: 'left',
                  }}
                >
                  <Box
                    sx={{
                      position: 'relative',
                      width: { xs: '100%', md: 280 },
                      minHeight: { xs: 220, md: 'auto' },
                      flexShrink: 0,
                      overflow: 'hidden',
                    }}
                  >
                    <Image
                      src={activeTestimonial.photo}
                      alt=''
                      fill
                      sizes='(max-width: 900px) 100vw, 280px'
                      style={{ objectFit: 'cover' }}
                    />
                  </Box>
                  <Box sx={{ p: { xs: 4, md: 6 }, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                    <Typography sx={{ mb: 2, fontSize: 12, fontWeight: 700, letterSpacing: 1, textTransform: 'uppercase', color: 'rgba(255,255,255,0.5)' }}>
                      Employee testimonial
                    </Typography>
                    <Typography sx={{ mb: 3, fontSize: { xs: 17, md: 20 }, lineHeight: 1.6, fontWeight: 700, color: '#fbfbfb' }}>
                      &ldquo;{activeTestimonial.quote}&rdquo;
                    </Typography>
                    <Typography sx={{ color: 'rgba(255,255,255,0.7)', fontSize: 14, fontWeight: 700 }}>
                      {activeTestimonial.role}
                    </Typography>
                  </Box>
                </Box>
              </AnimatePresence>
            </Box>
            <Box sx={{ display: 'flex', gap: 1.5, mt: 3 }}>
              <Box
                component='button'
                onClick={goToPrevTestimonial}
                aria-label='Previous testimonial'
                sx={{
                  width: 44,
                  height: 44,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: (t) => `1px solid ${t.palette.divider}`,
                  backgroundColor: 'transparent',
                  color: 'text.primary',
                  cursor: 'pointer',
                  transition: (t) => t.transitions.create(['border-color', 'color']),
                  '&:hover': { borderColor: 'primary.main', color: 'primary.main' },
                }}
              >
                <Box component='svg' viewBox='0 0 24 24' sx={{ width: 20, height: 20 }}>
                  <path d='M15 6l-6 6 6 6' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
                </Box>
              </Box>
              <Box
                component='button'
                onClick={goToNextTestimonial}
                aria-label='Next testimonial'
                sx={{
                  width: 44,
                  height: 44,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: (t) => `1px solid ${t.palette.primary.main}`,
                  backgroundColor: 'transparent',
                  color: 'primary.main',
                  cursor: 'pointer',
                  transition: (t) => t.transitions.create(['background-color', 'color']),
                  '&:hover': { backgroundColor: 'primary.main', color: '#fbfbfb' },
                }}
              >
                <Box component='svg' viewBox='0 0 24 24' sx={{ width: 20, height: 20 }}>
                  <path d='M9 6l6 6-6 6' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
                </Box>
              </Box>
            </Box>
          </Reveal>
        </Container>
      </Box>

      <Box sx={{ py: { xs: 8, md: 12 }, backgroundColor: 'background.paper' }}>
        <Container maxWidth='lg'>
          <Grid container spacing={{ xs: 6, md: 8 }} alignItems='center'>
            <Grid size={{ xs: 12, md: 7 }}>
              <Reveal>
                <Typography variant='h2' sx={{ mb: 3, fontSize: { xs: 28, md: 38 }, fontWeight: 800, lineHeight: 1.2 }}>
                  All voices.
                  <br />
                  All backgrounds.
                  <br />
                  <Box component='span' sx={{ color: 'primary.main' }}>
                    One team.
                  </Box>
                </Typography>
                <Typography sx={{ mb: 3, color: 'text.secondary', fontSize: { xs: 15, md: 17 }, lineHeight: 1.8 }}>
                  At Eli IT Consulting, we build teams by bringing together talent from every background, time
                  zone, and career path — not by filtering for a single mold.
                </Typography>
                <Typography sx={{ mb: 3, color: 'text.secondary', fontSize: { xs: 15, md: 17 }, lineHeight: 1.8 }}>
                  Our distributed team spans multiple countries and disciplines. We invest in remote-first
                  tooling, flexible schedules, and hiring practices that judge people on their work, not on where
                  they went to school or what they look like.
                </Typography>
                <Typography sx={{ mb: 4, color: 'text.secondary', fontSize: { xs: 15, md: 17 }, lineHeight: 1.8 }}>
                  We&apos;re still early in this work, and we don&apos;t think it&apos;s ever really finished. What
                  we can commit to is staying honest about where we are, and continuing to build a place where
                  different perspectives make the work better, not just the roster look better.
                </Typography>
                <NextLink
                  href='/about'
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 8,
                    fontSize: 15,
                    fontWeight: 700,
                    color: 'inherit',
                    textDecoration: 'none',
                    borderBottom: '2px solid currentColor',
                    paddingBottom: 2,
                  }}
                >
                  Learn more &rarr;
                </NextLink>
              </Reveal>
            </Grid>
            <Grid size={{ xs: 12, md: 5 }}>
              <Reveal index={1}>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, maxWidth: 340, ml: 'auto' }}>
                  {DEI_PHOTOS.map((photo, index) => (
                    <Box
                      key={photo.alt}
                      sx={{
                        position: 'relative',
                        height: { xs: 140, md: 160 },
                        width: index === 1 ? '100%' : '80%',
                        ml: index === 1 ? 0 : 'auto',
                        overflow: 'hidden',
                        border: (t) => `1px solid ${t.palette.divider}`,
                      }}
                    >
                      <Image
                        src={photo.src}
                        alt={photo.alt}
                        fill
                        sizes='(max-width: 900px) 100vw, 420px'
                        style={{ objectFit: 'cover' }}
                      />
                    </Box>
                  ))}
                </Box>
              </Reveal>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Box sx={{ py: { xs: 8, md: 12 }, backgroundColor: '#0a0b1c' }}>
        <Container maxWidth='lg'>
          <Grid container spacing={{ xs: 6, md: 4 }} alignItems='center'>
            <Grid size={{ xs: 12, md: 7 }}>
              <Reveal>
                <Box sx={{ display: 'flex', mb: 3 }}>
                  {AVATAR_COLORS.map((color, index) => (
                    <Box
                      key={color}
                      sx={{
                        width: 44,
                        height: 44,
                        borderRadius: '50%',
                        backgroundColor: color,
                        border: '2px solid #0a0b1c',
                        ml: index === 0 ? 0 : -1.5,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <AvatarGlyph />
                    </Box>
                  ))}
                </Box>
                <Typography variant='h2' sx={{ mb: 2, fontSize: { xs: 26, md: 36 }, fontWeight: 800, color: '#fbfbfb' }}>
                  It all comes together in what we do
                </Typography>
                <Typography sx={{ color: 'rgba(255,255,255,0.7)', fontSize: { xs: 15, md: 17 }, maxWidth: 480 }}>
                  Our beliefs are our compass. Our values are our action plan. Together, they create a workplace
                  where we&apos;re challenged, supported, and inspired to do our best work.
                </Typography>
              </Reveal>
            </Grid>
            <Grid size={{ xs: 12, md: 5 }}>
              <Reveal index={1}>
                <Box
                  sx={{
                    backgroundColor: '#fbfbfb',
                    border: (t) => `1px solid ${t.palette.primary.main}`,
                    p: { xs: 3.5, md: 4.5 },
                  }}
                >
                  <Typography variant='h3' sx={{ mb: 2, fontSize: { xs: 20, md: 24 }, fontWeight: 800 }}>
                    See yourself here?
                  </Typography>
                  <Typography sx={{ mb: 3, color: 'text.secondary', fontSize: 15, lineHeight: 1.7 }}>
                    If this feels like a fit, don&apos;t wait.{' '}
                    <Box component='span' sx={{ fontWeight: 800, color: 'text.primary' }}>
                      Let&apos;s find you your next career opportunity today!
                    </Box>
                  </Typography>
                  <Box sx={{ '& > a': { display: 'block' }, '& button': { width: '100%' } }}>
                    <NextLink href='/career' passHref>
                      <StyledButton variant='contained' size='large' color='primary'>
                        Apply Now
                      </StyledButton>
                    </NextLink>
                  </Box>
                </Box>
              </Reveal>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  )
}

export default CulturePage
