'use client'

import React from 'react'
import NextLink from 'next/link'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { StyledButton, Reveal, SectionTitle } from '@/components/core'
import { stockPhotos } from '@/constants/stock-photos'

const HomeHiring = () => {
  return (
    <Box id='home-hiring' component='section' sx={{ width: '100%', py: 0, backgroundColor: 'background.paper' }}>
      <Box
        sx={{
          position: 'relative',
          overflow: 'hidden',
          color: '#fbfbfb',
          backgroundImage: `url(${stockPhotos.officeCulture})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(180deg, rgba(11,18,32,0.55), rgba(11,18,32,0.85))',
          }}
        />
        <Box
          sx={{
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'column',
            textAlign: 'center',
            py: { xs: 8, md: 10 },
            px: { xs: 3, md: 4 },
            mx: 'auto',
            width: { xs: '100%', md: 720 },
          }}
        >
          <Reveal>
            <SectionTitle sx={{ color: '#9ec1ff', '&:before': { backgroundColor: '#9ec1ff' } }}>
              WE&apos;RE HIRING
            </SectionTitle>
            <Typography variant='h2' sx={{ mb: 2, fontSize: { xs: 26, md: 36 }, fontWeight: 800, color: '#fbfbfb' }}>
              We&apos;re growing. Come build with us.
            </Typography>
            <Typography sx={{ mb: 5, color: 'rgba(255,255,255,0.8)', fontSize: { xs: 15, md: 17 } }}>
              We&apos;re always looking for engineers, designers, and
              consultants who want to do their best work on real projects.
            </Typography>
            <NextLink href='/career'>
              <StyledButton variant='contained' color='light' size='large'>
                View Open Roles
              </StyledButton>
            </NextLink>
          </Reveal>
        </Box>
      </Box>
    </Box>
  )
}

export default HomeHiring
