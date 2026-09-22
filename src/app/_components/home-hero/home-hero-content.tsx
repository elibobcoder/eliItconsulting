'use client'

import React, { memo, useEffect, useState } from 'react'

// components
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import NextLink from 'next/link'
import { StyledButton } from '@/components/core'
import { Link } from 'react-scroll'
import HomeHeroVisual from './home-hero-visual'

// assets
import LogoIcon from '@/assets/logo-icon.svg'

// motion
import { motion, AnimatePresence } from 'framer-motion'

const MotionTypography = motion(Typography)

const HIGHLIGHTS = [
  { value: '50+', label: 'Projects shipped' },
  { value: '15+', label: 'Senior engineers' },
  { value: '24/7', label: 'Support coverage' },
]

const HomeHeroContent = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const SERVICES_TEXTS = [
    'Digital Marketing',
    'UI/UX Design',
    'Web & Mobile App Development',
    'Cloud Solutions',
    'Data & Analytics',
    'AI & Machine Learning',
    'E-Commerce Solutions',
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % SERVICES_TEXTS.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [SERVICES_TEXTS.length])

  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: 1.5,
      }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        delay: 0.15,
        type: 'spring',
        bounce: 0.15,
      }}
    >
      <Stack
        direction='column'
        sx={{
          position: 'relative',
          minHeight: '100vh',
          justifyContent: 'center',
          py: { xs: 14, md: 4 },
        }}
      >
        <Container maxWidth='lg'>
          <Grid container spacing={{ xs: 8, md: 6 }} alignItems='center'>
            <Grid size={{ xs: 12, md: 6 }}>
              <Stack
                direction='row'
                sx={(theme) => ({
                  mb: 2,
                  justifyContent: { xs: 'center', md: 'flex-start' },
                  transition: theme.transitions.create(['all'], {
                    duration: theme.transitions.duration.complex,
                  }),
                  div: {
                    transition: theme.transitions.create(['all'], {
                      duration: theme.transitions.duration.complex,
                    }),
                  },
                })}
              >
                <Box
                  sx={() => ({
                    width: 24,
                    height: 'auto',
                    mr: 1.5,
                    mt: '2px',
                  })}
                >
                  <Box component={LogoIcon} />
                </Box>
                <Box>
                  <AnimatePresence mode='wait'>
                    <MotionTypography
                      key={currentIndex}
                      variants={{
                        initial: { y: 20 },
                        animate: { y: 0 },
                        exit: { opacity: 0, y: -20 },
                      }}
                      initial='initial'
                      animate='animate'
                      exit='exit'
                      transition={{
                        duration: 0.25,
                        ease: 'easeInOut',
                      }}
                      sx={(theme) => ({
                        fontSize: {
                          xs: 17,
                          md: 18,
                        },
                        fontWeight: '600',
                        color: theme.palette.primary.main,
                      })}
                    >
                      {SERVICES_TEXTS[currentIndex]}
                    </MotionTypography>
                  </AnimatePresence>
                </Box>
              </Stack>
              <Box sx={{ textAlign: { xs: 'center', md: 'left' } }}>
                <Typography
                  component='h2'
                  sx={{
                    mb: 3,
                    fontSize: { xs: 34, md: 46, lg: 56 },
                    lineHeight: 1.15,
                    letterSpacing: '-0.02em',
                    fontWeight: '800',
                  }}
                >
                  Technology consulting that
                  <br />
                  <Box component='span' sx={{ color: 'primary.main' }}>
                    ships and keeps working.
                  </Box>
                </Typography>
                <Typography
                  sx={{
                    mb: 4,
                    color: 'text.secondary',
                    fontWeight: 500,
                    lineHeight: 1.9,
                    fontSize: {
                      xs: 14,
                      md: 17,
                    },
                    maxWidth: { xs: '100%', md: 480 },
                    mx: { xs: 'auto', md: 0 },
                  }}
                >
                  We plan, build, and support the software your business runs on
                  &mdash; from <strong>strategy </strong>to <strong>launch </strong>
                  and beyond. Senior engineers, embedded in your team or ours,
                  shipping work that holds up after launch day.
                </Typography>
                <Stack
                  direction={{ xs: 'column', sm: 'row' }}
                  spacing={2}
                  sx={{ mb: 5, justifyContent: { xs: 'center', md: 'flex-start' } }}
                >
                  <NextLink href='/contact' passHref>
                    <StyledButton variant='contained' color='primary' size='large'>
                      Schedule a Call
                    </StyledButton>
                  </NextLink>
                  <NextLink href='/portfolio' passHref>
                    <StyledButton variant='outlined' color='primary' size='large'>
                      See Our Work
                    </StyledButton>
                  </NextLink>
                </Stack>
                <Stack
                  direction='row'
                  spacing={{ xs: 3, md: 4 }}
                  sx={{ justifyContent: { xs: 'center', md: 'flex-start' } }}
                >
                  {HIGHLIGHTS.map((item, i) => (
                    <Box
                      key={item.label}
                      component={motion.div}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.9 + i * 0.1 }}
                      sx={{
                        pl: i > 0 ? { xs: 3, md: 4 } : 0,
                        borderLeft: i > 0 ? '1px solid' : 'none',
                        borderColor: 'divider',
                      }}
                    >
                      <Typography sx={{ fontSize: { xs: 18, md: 22 }, fontWeight: 800 }}>
                        {item.value}
                      </Typography>
                      <Typography sx={{ fontSize: { xs: 11, md: 12.5 }, color: 'text.secondary', fontWeight: 600 }}>
                        {item.label}
                      </Typography>
                    </Box>
                  ))}
                </Stack>
              </Box>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }} sx={{ display: { xs: 'none', md: 'block' } }}>
              <HomeHeroVisual />
            </Grid>
          </Grid>
        </Container>

        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.5,
            type: 'spring',
            bounce: 0,
          }}
        >
          <Box
            sx={() => ({
              mt: '80px',
              textAlign: 'center',
            })}
          >
            <Link
              to='home-trust'
              offset={0}
              spy={true}
              smooth={true}
              duration={400}
              style={{ display: 'inline-flex', flexDirection: 'column', alignItems: 'center', cursor: 'pointer' }}
            >
              <Box
                sx={(theme) => ({
                  width: 22,
                  height: 36,
                  borderRadius: 999,
                  border: `2px solid ${theme.palette.text.disabled}`,
                  display: 'flex',
                  justifyContent: 'center',
                  pt: '6px',
                })}
              >
                <Box
                  component={motion.div}
                  animate={{ y: [0, 12, 0], opacity: [1, 0.3, 1] }}
                  transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
                  sx={{
                    width: 4,
                    height: 4,
                    borderRadius: '50%',
                    backgroundColor: 'text.disabled',
                  }}
                />
              </Box>
              <Typography
                sx={{
                  color: 'text.disabled',
                  fontWeight: '500',
                  fontSize: 12,
                  mt: 1.2,
                }}
              >
                Scroll for more
              </Typography>
            </Link>
          </Box>
        </motion.div>
      </Stack>
    </motion.div>
  )
}

export default memo(HomeHeroContent)
