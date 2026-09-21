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
import CheckIcon from './check-icon'
import SendIcon from '@/assets/icons/picon--send.svg'

const EngagementModelPage = ({ content }: { content: IEngagementModel }) => {
  const theme = useTheme()

  return (
    <Box component='main'>
      {/* Hero */}
      <Box
        sx={{
          pt: { xs: 16, md: 20 },
          pb: { xs: 8, md: 12 },
          position: 'relative',
          overflow: 'hidden',
          backgroundColor:
            theme.palette.mode === 'dark' ? '#151733' : '#e8f3ff',
        }}
      >
        <DecorativeOrbs />
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
                      theme.palette.mode === 'dark'
                        ? 'rgb(255,255,255,0.10)'
                        : 'primary.light',
                    color:
                      theme.palette.mode === 'dark' ? '#fbfbfb' : 'primary.main',
                  }}
                >
                  <Typography
                    sx={{ fontSize: 12, letterSpacing: 1, textTransform: 'uppercase' }}
                    variant='h5'
                  >
                    {content.eyebrow}
                  </Typography>
                </Box>
                <Typography
                  variant='h1'
                  sx={{
                    mb: 3,
                    fontSize: { xs: 32, md: 46 },
                    fontWeight: 800,
                    lineHeight: 1.2,
                  }}
                >
                  {content.title}
                  <br />
                  <Box component='span' sx={{ color: 'primary.main' }}>
                    {content.titleAccent}
                  </Box>
                </Typography>
                <Typography
                  sx={{
                    mb: 4,
                    fontSize: { xs: 16, md: 19 },
                    color: 'text.secondary',
                  }}
                >
                  {content.description}
                </Typography>
                <Box
                  sx={{
                    mb: 5,
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: 1.5,
                  }}
                >
                  {content.highlights.map((h) => (
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
                <NextLink href='/contact' passHref>
                  <StyledButton
                    variant='contained'
                    size='large'
                    color='primary'
                    endIcon={<Box component={SendIcon} sx={{ width: 18, height: 18 }} />}
                  >
                    {content.ctaLabel}
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
                    height: { xs: 260, md: 400 },
                    boxShadow: 4,
                  }}
                >
                  <Image
                    src={content.photo}
                    alt={content.eyebrow}
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

      {/* Why section */}
      <Box sx={{ py: { xs: 8, md: 12 }, backgroundColor: 'background.paper' }}>
        <Container maxWidth='lg'>
          <Grid container spacing={6}>
            <Grid size={{ xs: 12, md: 5 }}>
              <Reveal>
                <SectionTitle>{content.whyEyebrow.toUpperCase()}</SectionTitle>
                <Typography
                  variant='h2'
                  sx={{ mb: 2, fontSize: { xs: 24, md: 32 }, fontWeight: 800 }}
                >
                  {content.whyTitle}
                </Typography>
                <Typography
                  sx={{ color: 'text.secondary', fontSize: 16, lineHeight: 1.8 }}
                >
                  {content.whyIntro}
                </Typography>
              </Reveal>
            </Grid>
            <Grid size={{ xs: 12, md: 7 }}>
              <Grid container spacing={2.5}>
                {content.benefits.map((benefit, index) => (
                  <Grid key={benefit} size={{ xs: 12, sm: 6 }}>
                    <Reveal index={index}>
                      <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.5 }}>
                        <Box
                          sx={{
                            mt: 0.3,
                            width: 22,
                            height: 22,
                            flexShrink: 0,
                            borderRadius: '50%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: 'primary.contrastText',
                            backgroundColor: 'primary.main',
                          }}
                        >
                          <CheckIcon />
                        </Box>
                        <Typography sx={{ fontSize: 15 }}>{benefit}</Typography>
                      </Box>
                    </Reveal>
                  </Grid>
                ))}
              </Grid>
              <Typography
                sx={{ mt: 3, color: 'text.secondary', fontSize: 15, lineHeight: 1.8 }}
              >
                {content.whySupport}
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* How it works */}
      <Box
        sx={{
          py: { xs: 8, md: 12 },
          backgroundColor:
            theme.palette.mode === 'dark' ? '#101014' : '#f7f8fb',
        }}
      >
        <Container maxWidth='lg'>
          <Reveal>
            <Box sx={{ mb: 6, maxWidth: 640 }}>
              <SectionTitle>HOW IT WORKS</SectionTitle>
              <Typography
                variant='h2'
                sx={{ mb: 2, fontSize: { xs: 24, md: 32 }, fontWeight: 800 }}
              >
                {content.howTitle}
              </Typography>
              <Typography sx={{ color: 'text.secondary', fontSize: 16 }}>
                {content.howIntro}
              </Typography>
            </Box>
          </Reveal>
          <Grid container spacing={4}>
            {content.howCards.map((card, index) => (
              <Grid key={card.title} size={{ xs: 12, md: 4 }}>
                <Reveal index={index}>
                  <Box
                    component={motion.div}
                    initial={{ width: 0 }}
                    whileInView={{ width: 40 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 + 0.2 }}
                    sx={{
                      height: 4,
                      mb: 2,
                      borderRadius: 2,
                      backgroundColor: 'primary.main',
                    }}
                  />
                  <Typography sx={{ fontSize: 18, fontWeight: 700, mb: 1 }}>
                    {card.title}
                  </Typography>
                  <Typography sx={{ color: 'text.secondary', fontSize: 15 }}>
                    {card.description}
                  </Typography>
                </Reveal>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Also available */}
      <Box sx={{ py: { xs: 8, md: 12 }, backgroundColor: 'background.paper' }}>
        <Container maxWidth='lg'>
          <Reveal>
            <SectionTitle>ALSO AVAILABLE</SectionTitle>
            <Typography
              variant='h2'
              sx={{ mb: 4, fontSize: { xs: 22, md: 28 }, fontWeight: 800 }}
            >
              Other ways to work with us.
            </Typography>
          </Reveal>
          <Grid container spacing={3}>
            {content.related.map((item, index) => (
              <Grid key={item.slug} size={{ xs: 12, sm: 6 }}>
                <Reveal index={index}>
                  <NextLink
                    href={`/services/${item.slug}`}
                    style={{ textDecoration: 'none', color: 'inherit' }}
                  >
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
                        {item.title}
                      </Typography>
                      <Typography sx={{ color: 'text.secondary', fontSize: 14, mb: 2 }}>
                        {item.description}
                      </Typography>
                      <Typography
                        sx={{ fontSize: 13, fontWeight: 700, color: 'primary.main' }}
                      >
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

      {/* Closing CTA */}
      <Box sx={{ py: { xs: 8, md: 12 }, backgroundColor: 'background.paper' }}>
        <Container maxWidth='sm' sx={{ textAlign: 'center' }}>
          <Reveal>
            <Typography
              variant='h2'
              sx={{ mb: 2, fontSize: { xs: 24, md: 36 }, fontWeight: 800 }}
            >
              Ready to get started?
            </Typography>
            <Typography sx={{ mb: 4, color: 'text.secondary', fontSize: { xs: 15, md: 17 } }}>
              Tell us what you need and we&apos;ll recommend the right engagement
              model for your team.
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

export default EngagementModelPage
