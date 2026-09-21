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
import VettingSteps from '@/app/_components/engagement/vetting-steps'
import BenefitsGrid from '@/app/_components/engagement/benefits-grid'
import {
  RocketIcon,
  ShieldIcon,
  GlobeIcon,
  LayersIcon,
} from '@/app/_components/engagement/icons'
import SendIcon from '@/assets/icons/picon--send.svg'
import { stockPhotos } from '@/constants/stock-photos'

const MODELS = [
  {
    slug: 'staff-augmentation',
    title: 'Staff Augmentation',
    description: 'Slot senior engineers directly into your existing team.',
  },
  {
    slug: 'dedicated-teams',
    title: 'Dedicated Teams',
    description: 'Get a self-managing squad that owns a workstream end-to-end.',
  },
  {
    slug: 'software-outsourcing',
    title: 'Software Outsourcing',
    description: 'Hand off a defined project and let us own delivery.',
  },
]

const STEPS = [
  {
    title: 'Technical screening',
    description:
      'Candidates go through written exercises and live technical interviews across languages, frameworks, and problem-solving.',
  },
  {
    title: 'Communication check',
    description:
      'We check for clear, fluent communication, since remote collaboration depends on it as much as technical skill.',
  },
  {
    title: 'Team & stack fit',
    description:
      'We match engineers to your stack, industry, and working style before you ever meet them.',
  },
]

const BENEFITS = [
  {
    icon: <RocketIcon />,
    title: 'Faster ramp-up',
    description: 'Engineers experienced in your stack start contributing from week one.',
    color: '#2B4FD9',
  },
  {
    icon: <GlobeIcon />,
    title: 'Clear communication',
    description: 'English-fluent engineers who can work in a timezone close to yours.',
    color: '#06B6D4',
  },
  {
    icon: <ShieldIcon />,
    title: 'Security first',
    description: 'NDAs and secure development practices on every engagement.',
    color: '#10B981',
  },
  {
    icon: <LayersIcon />,
    title: 'Flexible scale',
    description: 'Add or adjust capacity as your roadmap changes.',
    color: '#F59E0B',
  },
]

const HireDevelopersPage = () => {
  const theme = useTheme()

  return (
    <Box component='main'>
      <PageHero>
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
                    Hire Developers
                  </Typography>
                </Box>
                <Typography
                  variant='h1'
                  sx={{ mb: 3, fontSize: { xs: 32, md: 46 }, fontWeight: 800, lineHeight: 1.2 }}
                >
                  Hire senior developers
                  <br />
                  <Box component='span' sx={{ color: 'primary.main' }}>
                    who ship.
                  </Box>
                </Typography>
                <Typography
                  sx={{ mb: 4, fontSize: { xs: 16, md: 19 }, color: 'text.secondary' }}
                >
                  Add experienced engineers to your team through the model that fits
                  how you work: staff augmentation, a dedicated team, or a fully
                  outsourced project.
                </Typography>
                <NextLink href='/contact' passHref>
                  <StyledButton
                    variant='contained'
                    size='large'
                    color='primary'
                    endIcon={<Box component={SendIcon} sx={{ width: 18, height: 18 }} />}
                  >
                    Talk to Us
                  </StyledButton>
                </NextLink>
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
                    height: { xs: 320, md: 520 },
                    boxShadow: 4,
                  }}
                >
                  <Image
                    src={stockPhotos.developerFocused}
                    alt='Developer at work'
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
      </PageHero>

      {/* Engagement models */}
      <Box sx={{ py: { xs: 8, md: 12 }, backgroundColor: 'background.paper' }}>
        <Container maxWidth='lg'>
          <Reveal>
            <SectionTitle>THREE WAYS TO WORK WITH US</SectionTitle>
            <Typography variant='h2' sx={{ mb: 5, fontSize: { xs: 24, md: 32 }, fontWeight: 800 }}>
              Skip the recruiting bottleneck.
            </Typography>
          </Reveal>
          <Grid container spacing={3}>
            {MODELS.map((model, index) => (
              <Grid key={model.slug} size={{ xs: 12, md: 4 }}>
                <Reveal index={index}>
                  <NextLink href={`/services/${model.slug}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                    <Box
                      component={motion.div}
                      whileHover={{ y: -6 }}
                      transition={{ duration: 0.3 }}
                      sx={{
                        height: '100%',
                        p: 3.5,
                        borderRadius: 4,
                        border: (t) => `1px solid ${t.palette.divider}`,
                        '&:hover': { boxShadow: 3 },
                      }}
                    >
                      <Typography sx={{ fontSize: 18, fontWeight: 700, mb: 1 }}>
                        {model.title}
                      </Typography>
                      <Typography sx={{ color: 'text.secondary', fontSize: 14, mb: 2 }}>
                        {model.description}
                      </Typography>
                      <Typography sx={{ fontSize: 13, fontWeight: 700, color: 'primary.main' }}>
                        Learn more &rarr;
                      </Typography>
                    </Box>
                  </NextLink>
                </Reveal>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Vetting process */}
      <Box sx={{ py: { xs: 8, md: 12 }, backgroundColor: theme.palette.mode === 'dark' ? '#101014' : '#f7f8fb' }}>
        <Container maxWidth='lg'>
          <Reveal>
            <Box sx={{ mb: 6, maxWidth: 640 }}>
              <SectionTitle>HOW WE VET DEVELOPERS</SectionTitle>
              <Typography variant='h2' sx={{ fontSize: { xs: 24, md: 32 }, fontWeight: 800 }}>
                We only bring you engineers we&apos;d hire ourselves.
              </Typography>
            </Box>
          </Reveal>
          <VettingSteps steps={STEPS} />
        </Container>
      </Box>

      {/* Benefits */}
      <Box sx={{ py: { xs: 8, md: 12 }, backgroundColor: 'background.paper' }}>
        <Container maxWidth='lg'>
          <Reveal>
            <SectionTitle>BENEFITS</SectionTitle>
            <Typography variant='h2' sx={{ mb: 5, fontSize: { xs: 24, md: 32 }, fontWeight: 800 }}>
              What working with us gets you.
            </Typography>
          </Reveal>
          <BenefitsGrid items={BENEFITS} />
        </Container>
      </Box>

      {/* CTA */}
      <Box sx={{ py: { xs: 8, md: 12 }, backgroundColor: theme.palette.mode === 'dark' ? '#101014' : '#f7f8fb' }}>
        <Container maxWidth='sm' sx={{ textAlign: 'center' }}>
          <Reveal>
            <Typography variant='h2' sx={{ mb: 2, fontSize: { xs: 24, md: 36 }, fontWeight: 800 }}>
              Ready to add engineers to your team?
            </Typography>
            <Typography sx={{ mb: 4, color: 'text.secondary', fontSize: { xs: 15, md: 17 } }}>
              Tell us what you need and we&apos;ll recommend the right engagement model.
            </Typography>
            <NextLink href='/contact' passHref>
              <StyledButton variant='contained' size='large' color='primary'>
                Schedule a Call
              </StyledButton>
            </NextLink>
          </Reveal>
        </Container>
      </Box>
    </Box>
  )
}

export default HireDevelopersPage
