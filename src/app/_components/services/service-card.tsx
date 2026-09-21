'use client'

import React, { ReactElement } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import { useTheme } from '@mui/material/styles'
import { motion } from 'framer-motion'
import { StyledButton, Reveal } from '@/components/core'

export interface ExtendedService {
  id: number
  title: string
  slug: string
  description: string
  icon?: ReactElement
  image?: string
  photo?: string
  features: string[]
}

interface ServiceCardProps {
  service: ExtendedService
  index: number
}

const ServiceCard = ({ service, index }: ServiceCardProps) => {
  const theme = useTheme()
  const isEven = index % 2 === 0

  return (
    <Box
      id={service.slug}
      sx={{
        py: { xs: 6, md: 10 },
        scrollMarginTop: 96,
        backgroundColor: isEven ? 'background.default' : 'background.paper',
        overflow: 'hidden',
      }}
    >
      <Container maxWidth='lg'>
        <Grid
          container
          spacing={{ xs: 4, md: 8 }}
          direction={{ xs: 'column', md: isEven ? 'row' : 'row-reverse' }}
          alignItems='center'
        >
          <Grid size={{ xs: 12, md: 6 }}>
            <Reveal index={0}>
              <Box
                component={motion.div}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.4, ease: 'easeOut' }}
                sx={{
                  position: 'relative',
                  borderRadius: 4,
                  overflow: 'hidden',
                  minHeight: { xs: 220, md: 320 },
                  boxShadow: 3,
                }}
              >
                {service.photo && (
                  <Image
                    src={service.photo}
                    alt={service.title}
                    fill
                    sizes='(max-width: 900px) 100vw, 50vw'
                    style={{ objectFit: 'cover' }}
                  />
                )}
                <Box
                  sx={{
                    position: 'absolute',
                    inset: 0,
                    background: `linear-gradient(160deg, ${theme.palette.primary.main}66, transparent 60%)`,
                  }}
                />
                {service.image && (
                  <Box
                    sx={{
                      position: 'absolute',
                      bottom: 16,
                      left: 16,
                      width: 60,
                      height: 60,
                      borderRadius: 3,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      backgroundColor: 'background.paper',
                      boxShadow: 2,
                    }}
                  >
                    <Image
                      src={service.image}
                      alt=''
                      width={32}
                      height={32}
                      style={{ objectFit: 'contain' }}
                    />
                  </Box>
                )}
              </Box>
            </Reveal>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <Reveal index={1}>
              <Box
                sx={{
                  mb: 2,
                  borderRadius: 1,
                  display: 'inline-block',
                  padding: '4px 12px',
                  backgroundColor: theme.palette.primary.light,
                  color: theme.palette.primary.main,
                }}
              >
                <Typography
                  sx={{
                    fontSize: 11,
                    letterSpacing: 1,
                    textTransform: 'uppercase',
                    fontWeight: 600,
                  }}
                >
                  Service {String(index + 1).padStart(2, '0')}
                </Typography>
              </Box>
              <Typography
                variant='h3'
                sx={{
                  mb: 2,
                  fontSize: { xs: 24, md: 32 },
                  fontWeight: 800,
                }}
              >
                {service.title}
              </Typography>
              <Typography
                sx={{
                  mb: 3,
                  color: 'text.secondary',
                  fontSize: { xs: 15, md: 17 },
                  lineHeight: 1.8,
                }}
              >
                {service.description}
              </Typography>
              <Grid container spacing={2} sx={{ mb: 4 }}>
                {service.features.map((feature: string, idx: number) => (
                  <Grid size={{ xs: 6 }} key={idx}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <Box
                        sx={{
                          width: 8,
                          height: 8,
                          borderRadius: '50%',
                          backgroundColor: 'primary.main',
                        }}
                      />
                      <Typography sx={{ fontSize: 14, color: 'text.secondary' }}>
                        {feature}
                      </Typography>
                    </Box>
                  </Grid>
                ))}
              </Grid>
              <Link href='/contact' passHref>
                <StyledButton variant='outlined' color='primary' size='medium'>
                  Learn More
                </StyledButton>
              </Link>
            </Reveal>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default ServiceCard
