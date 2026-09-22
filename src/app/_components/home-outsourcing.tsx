'use client'

import React from 'react'
import NextLink from 'next/link'
import Image from 'next/image'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Stack from '@mui/material/Stack'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import { SectionTitle, Reveal, StyledButton } from '@/components/core'
import { RocketIcon, GlobeIcon, ClipboardCheckIcon } from '@/app/_components/engagement/icons'
import { stockPhotos } from '@/constants/stock-photos'

const HIGHLIGHTS = [
  { icon: <ClipboardCheckIcon />, label: 'Rigorously vetted' },
  { icon: <GlobeIcon />, label: 'Timezone-aligned' },
  { icon: <RocketIcon />, label: 'Start in weeks' },
]

const HomeOutsourcing = () => {
  return (
    <Box id='home-outsourcing' component='section' sx={{ width: '100%', py: { xs: 8, md: 14 }, backgroundColor: 'background.paper' }}>
      <Container maxWidth='lg'>
        <Grid container spacing={{ xs: 6, md: 8 }} alignItems='center'>
          <Grid size={{ xs: 12, md: 6 }}>
            <Reveal>
              <SectionTitle>OUTSOURCING &amp; STAFFING</SectionTitle>
              <Typography variant='h1' sx={{ mb: 3, fontSize: { xs: 26, md: 36 }, fontWeight: 800, lineHeight: 1.25 }}>
                Scale with the top 1% of tech talent.
              </Typography>
              <Typography sx={{ mb: 4, color: 'text.secondary', fontSize: { xs: 15, md: 17 }, lineHeight: 1.8 }}>
                Hire senior engineers who plug into your team fast, or hand off a
                whole workstream to ours. Either way, you get people who have
                shipped production software before, not a resume that just says so.
              </Typography>
              <Stack direction='row' spacing={{ xs: 3, md: 4 }} sx={{ mb: 4, flexWrap: 'wrap', rowGap: 2 }}>
                {HIGHLIGHTS.map((item) => (
                  <Stack key={item.label} direction='row' spacing={1} alignItems='center'>
                    <Box sx={{ color: 'primary.main', display: 'flex' }}>{item.icon}</Box>
                    <Typography sx={{ fontSize: 14, fontWeight: 700 }}>{item.label}</Typography>
                  </Stack>
                ))}
              </Stack>
              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                <NextLink href='/hire-developers' passHref>
                  <StyledButton variant='contained' color='primary' size='large'>
                    Hire Developers
                  </StyledButton>
                </NextLink>
                <NextLink href='/top-talent' passHref>
                  <StyledButton variant='outlined' color='primary' size='large'>
                    Meet Our Talent
                  </StyledButton>
                </NextLink>
              </Stack>
            </Reveal>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <Reveal index={1}>
              <Box sx={{ position: 'relative', borderRadius: 5, overflow: 'hidden', height: { xs: 280, md: 420 }, boxShadow: 4 }}>
                <Image
                  src={stockPhotos.developerFocused}
                  alt='Senior engineer working on production code'
                  fill
                  sizes='(max-width: 900px) 100vw, 50vw'
                  style={{ objectFit: 'cover' }}
                />
              </Box>
            </Reveal>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default HomeOutsourcing
