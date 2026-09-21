'use client'

import React from 'react'
import NextLink from 'next/link'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import { useTheme } from '@mui/material/styles'
import { StyledButton, SectionTitle } from '@/components/core'
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
          backgroundColor:
            theme.palette.mode === 'dark' ? '#151733' : '#e8f3ff',
        }}
      >
        <Container maxWidth='md' sx={{ textAlign: 'center' }}>
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
              color: theme.palette.mode === 'dark' ? '#fbfbfb' : 'primary.main',
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
              fontSize: { xs: 32, md: 48 },
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
              fontSize: { xs: 16, md: 20 },
              color: 'text.secondary',
              maxWidth: 640,
              mx: 'auto',
            }}
          >
            {content.description}
          </Typography>
          <Box
            sx={{
              mb: 5,
              display: 'flex',
              justifyContent: 'center',
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
        </Container>
      </Box>

      {/* Why section */}
      <Box sx={{ py: { xs: 8, md: 12 }, backgroundColor: 'background.paper' }}>
        <Container maxWidth='lg'>
          <Grid container spacing={6}>
            <Grid size={{ xs: 12, md: 5 }}>
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
            </Grid>
            <Grid size={{ xs: 12, md: 7 }}>
              <Grid container spacing={2.5}>
                {content.benefits.map((benefit) => (
                  <Grid key={benefit} size={{ xs: 12, sm: 6 }}>
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
          <Grid container spacing={4}>
            {content.howCards.map((card) => (
              <Grid key={card.title} size={{ xs: 12, md: 4 }}>
                <Box
                  sx={{
                    height: 4,
                    width: 40,
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
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Also available */}
      <Box sx={{ py: { xs: 8, md: 12 }, backgroundColor: 'background.paper' }}>
        <Container maxWidth='lg'>
          <SectionTitle>ALSO AVAILABLE</SectionTitle>
          <Typography
            variant='h2'
            sx={{ mb: 4, fontSize: { xs: 22, md: 28 }, fontWeight: 800 }}
          >
            Other ways to work with us.
          </Typography>
          <Grid container spacing={3}>
            {content.related.map((item) => (
              <Grid key={item.slug} size={{ xs: 12, sm: 6 }}>
                <NextLink
                  href={`/services/${item.slug}`}
                  style={{ textDecoration: 'none', color: 'inherit' }}
                >
                  <Box
                    sx={{
                      height: '100%',
                      p: 3.5,
                      borderRadius: 4,
                      border: (t) => `1px solid ${t.palette.divider}`,
                      transition: (t) =>
                        t.transitions.create(['box-shadow', 'transform']),
                      '&:hover': { boxShadow: 3, transform: 'translateY(-4px)' },
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
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Closing CTA */}
      <Box sx={{ py: { xs: 8, md: 12 }, backgroundColor: 'background.paper' }}>
        <Container maxWidth='sm' sx={{ textAlign: 'center' }}>
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
        </Container>
      </Box>
    </Box>
  )
}

export default EngagementModelPage
