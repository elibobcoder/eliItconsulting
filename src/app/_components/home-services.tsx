'use client'

import React from 'react'

// components
import Image from 'next/image'
import Link from 'next/link'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Chip from '@mui/material/Chip'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import { SectionTitle, Reveal } from '@/components/core'

// constants
import { services } from '@/constants/service'

type ServiceItemProps = {
  item: IService
  index: number
}
const HomeServiceItem = ({ item, index }: ServiceItemProps) => {
  return (
    <Grid size={{ xs: 12, md: 6 }}>
      <Reveal index={index}>
      <Box
        sx={{
          height: '100%',
          borderRadius: 4,
          p: { xs: 3, md: 4 },
          backgroundColor: 'background.paper',
          border: (theme) => `1px solid ${theme.palette.divider}`,
          transition: (theme) =>
            theme.transitions.create(['box-shadow', 'transform'], {
              duration: 250,
            }),
          '&:hover': {
            boxShadow: 3,
            transform: 'translateY(-4px)',
          },
        }}
      >
        <Box
          sx={{
            width: 56,
            height: 56,
            borderRadius: 3,
            mb: 2.5,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: item.color ?? 'primary.main',
            '& img': {
              filter: 'brightness(0) invert(1)',
            },
          }}
        >
          <Image
            src={item.image as string}
            alt=''
            width={28}
            height={28}
          />
        </Box>
        <Typography
          component='h3'
          variant='h4'
          sx={{ fontSize: { xs: 18, md: 20 }, fontWeight: 700, mb: 1 }}
        >
          {item.title}
        </Typography>
        <Typography
          component='p'
          sx={{ color: 'text.secondary', fontSize: 15, mb: 2.5 }}
        >
          {item.description}
        </Typography>
        {item.tags && (
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
            {item.tags.map((tag) => (
              <Chip
                key={tag}
                label={tag}
                size='small'
                variant='outlined'
                sx={{
                  borderRadius: 1.5,
                  fontSize: 12,
                  fontWeight: 600,
                  color: 'text.secondary',
                  borderColor: (theme) => theme.palette.divider,
                }}
              />
            ))}
          </Box>
        )}
      </Box>
      </Reveal>
    </Grid>
  )
}

const HomeServices = () => {
  return (
    <Box
      id='home-service'
      component='section'
      sx={{
        width: '100%',
        py: { xs: 8, md: 14 },
        backgroundColor: (theme) =>
          theme.palette.mode === 'dark' ? '#101014' : '#f7f8fb',
      }}
    >
      <Container maxWidth='lg'>
        <Reveal>
          <Box
            sx={{
              mb: 6,
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              alignItems: { xs: 'flex-start', md: 'flex-end' },
              justifyContent: 'space-between',
              gap: 3,
            }}
          >
            <Box sx={{ maxWidth: 640 }}>
              <SectionTitle>WHAT WE DO</SectionTitle>
              <Typography
                variant='h1'
                sx={{
                  fontSize: { xs: 26, md: 36 },
                  fontWeight: 800,
                  lineHeight: 1.3,
                }}
              >
                Every discipline you need, under one roof.
              </Typography>
            </Box>
            <Link
              href='/services'
              style={{
                textDecoration: 'none',
                color: 'inherit',
                fontWeight: 700,
                borderBottom: '2px solid currentColor',
                whiteSpace: 'nowrap',
              }}
            >
              Everything we do &rarr;
            </Link>
          </Box>
        </Reveal>

        <Grid container spacing={3}>
          {services.map((item, index) => (
            <HomeServiceItem item={item} index={index} key={item.title} />
          ))}
        </Grid>
      </Container>
    </Box>
  )
}

export default HomeServices
