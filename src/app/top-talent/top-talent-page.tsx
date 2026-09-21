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
  DecorativeOrbs,
} from '@/components/core'
import VettingSteps from '@/app/_components/engagement/vetting-steps'
import BenefitsGrid from '@/app/_components/engagement/benefits-grid'
import {
  ClipboardCheckIcon,
  GlobeIcon,
  UsersIcon,
  LayersIcon,
} from '@/app/_components/engagement/icons'
import { stockPhotos } from '@/constants/stock-photos'

const STEPS = [
  {
    title: 'Technical assessment',
    description:
      'Written exercises and live technical interviews across languages, frameworks, and real problem-solving, not just trivia.',
  },
  {
    title: 'Communication check',
    description:
      'We confirm clear, fluent communication, since remote collaboration depends on it as much as technical skill.',
  },
  {
    title: 'Team & culture fit',
    description:
      'We look for people who collaborate well, not just people who can pass a coding test.',
  },
]

const BENEFITS = [
  {
    icon: <ClipboardCheckIcon />,
    title: 'Deep technical experience',
    description: 'Engineers with a track record of shipping production software, not just tutorials.',
    color: '#2B4FD9',
  },
  {
    icon: <GlobeIcon />,
    title: 'Timezone-aligned',
    description: 'Work synchronously with engineers who overlap with your working hours.',
    color: '#06B6D4',
  },
  {
    icon: <LayersIcon />,
    title: 'Full stack coverage',
    description: 'From frontend to infrastructure, we cover the stack your project needs.',
    color: '#10B981',
  },
  {
    icon: <UsersIcon />,
    title: 'Fewer surprises',
    description: 'A rigorous process up front means fewer mismatches once the project starts.',
    color: '#F59E0B',
  },
]

const ROLES = [
  {
    title: 'Software Developers',
    description: 'Build intuitive, well-structured interfaces for web and mobile applications.',
  },
  {
    title: 'Back-end Developers',
    description: 'Focus on logic, performance, databases, and system design.',
  },
  {
    title: 'Project Managers',
    description: 'Lead the development process end-to-end to keep delivery on track.',
  },
  {
    title: 'QA Engineers',
    description: 'Make sure what ships actually works the way it’s supposed to.',
  },
  {
    title: 'Business Analysts',
    description: 'Turn business requirements into clear, actionable technical specs.',
  },
  {
    title: 'UX/UI Designers',
    description: 'Design interfaces people can actually use, not just ones that look good.',
  },
  {
    title: 'DevOps Engineers',
    description: 'Keep infrastructure, deployments, and pipelines reliable.',
  },
]

const TopTalentPage = () => {
  const theme = useTheme()

  return (
    <Box component='main'>
      <Box
        sx={{
          pt: { xs: 16, md: 20 },
          pb: { xs: 8, md: 12 },
          position: 'relative',
          overflow: 'hidden',
          backgroundColor: theme.palette.mode === 'dark' ? '#151733' : '#e8f3ff',
        }}
      >
        <DecorativeOrbs variant='reverse' />
        <Container maxWidth='lg' sx={{ position: 'relative' }}>
          <Grid container spacing={{ xs: 6, md: 8 }} alignItems='center'>
            <Grid size={{ xs: 12, md: 6 }}>
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
                    Our Vetting Standard
                  </Typography>
                </Box>
                <Typography
                  variant='h1'
                  sx={{ mb: 3, fontSize: { xs: 32, md: 46 }, fontWeight: 800, lineHeight: 1.2 }}
                >
                  We hire the
                  <br />
                  <Box component='span' sx={{ color: 'primary.main' }}>
                    top tier of tech talent.
                  </Box>
                </Typography>
                <Typography
                  sx={{ mb: 2, fontSize: { xs: 16, md: 19 }, color: 'text.secondary' }}
                >
                  Every engineer who joins a project goes through a rigorous,
                  multi-stage vetting process, so you get technical depth and
                  reliable collaboration from day one.
                </Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1.5, mt: 3 }}>
                  {['Rigorous technical vetting', 'English-fluent, timezone-aligned'].map((h) => (
                    <Box
                      key={h}
                      sx={{
                        px: 2,
                        py: 0.8,
                        borderRadius: 10,
                        fontSize: 13,
                        fontWeight: 700,
                        color: 'primary.main',
                        backgroundColor: 'background.paper',
                      }}
                    >
                      {h}
                    </Box>
                  ))}
                </Box>
              </Reveal>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Reveal index={1}>
                <Box
                  component={motion.div}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.4 }}
                  sx={{
                    position: 'relative',
                    borderRadius: 5,
                    overflow: 'hidden',
                    height: { xs: 260, md: 400 },
                    boxShadow: 4,
                  }}
                >
                  <Image
                    src={stockPhotos.teamPresentation}
                    alt='Vetted engineering team'
                    fill
                    sizes='(max-width: 900px) 100vw, 50vw'
                    style={{ objectFit: 'cover' }}
                  />
                  <Box
                    sx={{
                      position: 'absolute',
                      inset: 0,
                      background: `linear-gradient(160deg, ${theme.palette.primary.main}55, transparent 55%)`,
                    }}
                  />
                </Box>
              </Reveal>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Vetting process */}
      <Box sx={{ py: { xs: 8, md: 12 }, backgroundColor: 'background.paper' }}>
        <Container maxWidth='lg'>
          <Reveal>
            <Box sx={{ mb: 6, maxWidth: 640 }}>
              <SectionTitle>OUR PROCESS</SectionTitle>
              <Typography variant='h2' sx={{ fontSize: { xs: 24, md: 32 }, fontWeight: 800 }}>
                Your team starts with our vetting process.
              </Typography>
            </Box>
          </Reveal>
          <VettingSteps steps={STEPS} />
        </Container>
      </Box>

      {/* What this means */}
      <Box sx={{ py: { xs: 8, md: 12 }, backgroundColor: theme.palette.mode === 'dark' ? '#101014' : '#f7f8fb' }}>
        <Container maxWidth='lg'>
          <Reveal>
            <SectionTitle>WHAT THIS MEANS FOR YOU</SectionTitle>
            <Typography variant='h2' sx={{ mb: 5, fontSize: { xs: 24, md: 32 }, fontWeight: 800 }}>
              What hiring vetted talent actually gets you.
            </Typography>
          </Reveal>
          <BenefitsGrid items={BENEFITS} />
        </Container>
      </Box>

      {/* Roles */}
      <Box sx={{ py: { xs: 8, md: 12 }, backgroundColor: 'background.paper' }}>
        <Container maxWidth='lg'>
          <Reveal>
            <SectionTitle>ROLES WE COVER</SectionTitle>
            <Typography variant='h2' sx={{ mb: 5, fontSize: { xs: 24, md: 32 }, fontWeight: 800 }}>
              Need more than developers?
            </Typography>
          </Reveal>
          <Grid container spacing={3}>
            {ROLES.map((role, index) => (
              <Grid key={role.title} size={{ xs: 12, sm: 6, md: 4 }}>
                <Reveal index={index}>
                  <Box
                    component={motion.div}
                    whileHover={{ y: -4 }}
                    transition={{ duration: 0.3 }}
                    sx={{
                      height: '100%',
                      p: 3,
                      borderRadius: 4,
                      border: (t) => `1px solid ${t.palette.divider}`,
                      '&:hover': { boxShadow: 2 },
                    }}
                  >
                    <Typography sx={{ fontSize: 16, fontWeight: 700, mb: 1 }}>
                      {role.title}
                    </Typography>
                    <Typography sx={{ color: 'text.secondary', fontSize: 14 }}>
                      {role.description}
                    </Typography>
                  </Box>
                </Reveal>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* CTA */}
      <Box sx={{ py: { xs: 8, md: 12 }, backgroundColor: theme.palette.mode === 'dark' ? '#101014' : '#f7f8fb' }}>
        <Container maxWidth='sm' sx={{ textAlign: 'center' }}>
          <Reveal>
            <Typography variant='h2' sx={{ mb: 2, fontSize: { xs: 24, md: 36 }, fontWeight: 800 }}>
              Get the top talent on your team.
            </Typography>
            <Typography sx={{ mb: 4, color: 'text.secondary', fontSize: { xs: 15, md: 17 } }}>
              Tell us what you need and we&apos;ll match you with the right engineers.
            </Typography>
            <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
              <NextLink href='/contact' passHref>
                <StyledButton variant='contained' size='large' color='primary'>
                  Schedule a Call
                </StyledButton>
              </NextLink>
              <NextLink href='/hire-developers' passHref>
                <StyledButton variant='outlined' size='large' color='primary'>
                  Hire Developers
                </StyledButton>
              </NextLink>
            </Box>
          </Reveal>
        </Container>
      </Box>
    </Box>
  )
}

export default TopTalentPage
