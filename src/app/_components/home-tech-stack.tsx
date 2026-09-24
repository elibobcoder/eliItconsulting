'use client'

import React, { FC } from 'react'
import NextLink from 'next/link'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import { motion } from 'framer-motion'
import { Reveal, StyledButton } from '@/components/core'
import { technologiesMegaMenu } from '@/constants/menus'
import { techIcons } from '@/constants/tech-icons'

const COLUMN_HEIGHT = 420

const TechCard: FC<{ label: string }> = ({ label }) => (
  <Box
    sx={{
      display: 'flex',
      alignItems: 'center',
      gap: 1.5,
      p: 2,
      mb: 1.5,
      borderRadius: 3,
      border: (theme) => `1px solid ${theme.palette.divider}`,
      backgroundColor: 'background.paper',
    }}
  >
    <Box
      component='img'
      src={techIcons[label]}
      alt=''
      sx={{ width: 30, height: 30, objectFit: 'contain', flexShrink: 0 }}
    />
    <Typography sx={{ fontSize: 14, fontWeight: 700 }}>{label}</Typography>
  </Box>
)

const TechFlowColumn: FC<{ heading: string; tags: string[]; direction: 'down' | 'up' }> = ({
  heading,
  tags,
  direction,
}) => {
  const track = [...tags, ...tags]

  return (
    <Box>
      {heading && (
        <Typography
          sx={{
            fontSize: 11,
            fontWeight: 700,
            letterSpacing: 0.5,
            color: 'text.secondary',
            textAlign: 'center',
            mb: 2,
          }}
        >
          {heading}
        </Typography>
      )}
      <Box
        sx={{
          position: 'relative',
          height: COLUMN_HEIGHT,
          overflow: 'hidden',
          maskImage:
            'linear-gradient(180deg, transparent 0%, #000 10%, #000 90%, transparent 100%)',
          WebkitMaskImage:
            'linear-gradient(180deg, transparent 0%, #000 10%, #000 90%, transparent 100%)',
        }}
      >
        <Box
          component={motion.div}
          animate={{ y: direction === 'down' ? ['-50%', '0%'] : ['0%', '-50%'] }}
          transition={{ duration: tags.length * 3.5, repeat: Infinity, ease: 'linear' }}
          sx={{ position: 'absolute', top: 0, left: 0, right: 0 }}
        >
          {track.map((label, i) => (
            <TechCard key={`${label}-${i}`} label={label} />
          ))}
        </Box>
      </Box>
    </Box>
  )
}

const HomeTechStack = () => {
  return (
    <Box
      id='home-tech-stack'
      component='section'
      sx={{
        width: '100%',
        py: { xs: 8, md: 14 },
        backgroundColor: 'background.paper',
        borderBottom: (theme) => `1px solid ${theme.palette.divider}`,
        overflow: 'hidden',
      }}
    >
      <Container maxWidth='lg'>
        <Grid container spacing={{ xs: 6, md: 4 }} alignItems='center'>
          <Grid size={{ xs: 12, md: 4 }}>
            <Reveal>
              <Typography
                sx={{
                  fontSize: { xs: 30, md: 38 },
                  fontWeight: 800,
                  lineHeight: 1.15,
                  textTransform: 'uppercase',
                  mb: 2,
                }}
              >
                Modern
                <br />
                Tech Stack
              </Typography>
              <Typography sx={{ color: 'text.secondary', fontSize: { xs: 15, md: 16 }, mb: 4 }}>
                Get experts in 20+ technologies. We cover any tech stack your
                project needs, from front-end to cloud.
              </Typography>
              <NextLink href='/services' passHref>
                <StyledButton variant='outlined' color='primary' size='large'>
                  All Technologies
                </StyledButton>
              </NextLink>
            </Reveal>
          </Grid>
          <Grid size={{ xs: 12, md: 8 }}>
            <Grid container spacing={{ xs: 2, md: 3 }}>
              {technologiesMegaMenu.columns.map((column, index) => (
                <Grid key={column.heading} size={{ xs: 6, md: 3 }}>
                  <Reveal index={index}>
                    <TechFlowColumn
                      heading={column.heading}
                      tags={column.tags}
                      direction={index % 2 === 0 ? 'down' : 'up'}
                    />
                  </Reveal>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default HomeTechStack
