'use client'

import React from 'react'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import { useTheme } from '@mui/material/styles'
import { Reveal, PageHero } from '@/components/core'
import { ContactForm, ContactInfoCard } from '@/app/_components/contact'
import EmailIcon from '@/assets/icons/eva--email-outline.svg'
import PhoneIcon from '@/assets/icons/eva--phone-outline.svg'
import LocationIcon from '@/assets/icons/tdesign--location.svg'

const contactInfo = [
  {
    icon: EmailIcon,
    title: 'Email Us',
    value: 'hello@eliitconsulting.com',
    subtitle: 'We reply within 24 hours',
    href: 'mailto:hello@eliitconsulting.com',
  },
  {
    icon: PhoneIcon,
    title: 'Call Us',
    value: '+1 (351) 213-4567',
    subtitle: 'Mon - Fri, 9am - 6pm EST',
    href: 'tel:+13512134567',
  },
  {
    icon: LocationIcon,
    title: 'Visit Us',
    value: '123 Innovation Drive',
    subtitle: 'San Francisco, CA 94105',
    href: '#',
  },
]

const ContactPage = () => {
  const theme = useTheme()

  return (
    <Box component='main'>
      {/* Hero Section */}
      <PageHero>
        <Container maxWidth='md' sx={{ position: 'relative', zIndex: 1 }}>
          <Reveal>
            <Box sx={{ textAlign: 'center' }}>
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
                  sx={{
                    fontSize: 12,
                    letterSpacing: 1,
                    textTransform: 'uppercase',
                  }}
                  variant='h5'
                >
                  Get In Touch
                </Typography>
              </Box>
              <Typography
                variant='h1'
                sx={{
                  mb: 3,
                  fontSize: { xs: 32, md: 48 },
                  fontWeight: 800,
                  lineHeight: 1.2,
                  color:
                    theme.palette.mode === 'dark'
                      ? 'primary.contrastText'
                      : 'text.primary',
                }}
              >
                Let&apos;s Start a
                <br />
                Conversation
              </Typography>
              <Typography
                sx={{
                  fontSize: { xs: 16, md: 20 },
                  color: 'text.secondary',
                  maxWidth: 600,
                  mx: 'auto',
                }}
              >
                Have a project in mind? We&apos;d love to hear from you. Send us a
                message and we&apos;ll respond as soon as possible.
              </Typography>
            </Box>
          </Reveal>
        </Container>
      </PageHero>

      {/* Contact Info Cards */}
      <Box
        sx={{
          py: { xs: 6, md: 8 },
          backgroundColor: 'background.paper',
          mt: { xs: -4, md: -6 },
          position: 'relative',
          zIndex: 10,
        }}
      >
        <Container>
          <Grid container spacing={3}>
            {contactInfo.map((info, idx) => (
              <Grid size={{ xs: 12, md: 4 }} key={idx}>
                <Reveal index={idx}>
                  <ContactInfoCard info={info} />
                </Reveal>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Contact Form Section */}
      <Box
        sx={{
          py: { xs: 6, md: 10 },
          backgroundColor: 'background.default',
        }}
      >
        <Container maxWidth='lg'>
          <Grid container spacing={{ xs: 4, md: 8 }}>
            {/* Form */}
            <Grid size={{ xs: 12, md: 7 }}>
              <Reveal>
                <ContactForm />
              </Reveal>
            </Grid>

            {/* Location photo & Additional Info */}
            <Grid size={{ xs: 12, md: 5 }}>
              {/* Office map */}
              <Reveal index={1}>
                <Box
                  sx={{
                    height: { xs: 220, md: 260 },
                    borderRadius: 4,
                    overflow: 'hidden',
                    mb: 4,
                    position: 'relative',
                    boxShadow: 2,
                  }}
                >
                  <Box
                    component='iframe'
                    title='Our office location'
                    src='https://www.google.com/maps?q=123+Innovation+Drive,+San+Francisco,+CA+94105&output=embed'
                    loading='lazy'
                    referrerPolicy='no-referrer-when-downgrade'
                    sx={{
                      width: '100%',
                      height: '100%',
                      border: 0,
                      filter: (theme) =>
                        theme.palette.mode === 'dark' ? 'invert(0.9) hue-rotate(180deg)' : 'none',
                    }}
                  />
                  <Box
                    sx={{
                      position: 'absolute',
                      bottom: 16,
                      left: 16,
                      display: 'flex',
                      alignItems: 'center',
                      gap: 1,
                      color: '#fff',
                      px: 1.5,
                      py: 0.75,
                      borderRadius: 2,
                      backgroundColor: 'rgba(0,0,0,0.6)',
                      pointerEvents: 'none',
                    }}
                  >
                    <Box component={LocationIcon} sx={{ width: 20, height: 20 }} />
                    <Typography sx={{ fontWeight: 700, fontSize: 15 }}>
                      San Francisco, CA
                    </Typography>
                  </Box>
                </Box>
              </Reveal>

              {/* FAQ */}
              <Reveal index={2}>
                <Box
                  sx={{
                    p: 4,
                    borderRadius: 4,
                    backgroundColor: 'background.paper',
                  }}
                >
                  <Typography
                    variant='h5'
                    sx={{ mb: 3, fontWeight: 700, fontSize: { xs: 18, md: 22 } }}
                  >
                    Frequently Asked
                  </Typography>
                  {[
                    {
                      q: 'How long does a typical project take?',
                      a: 'Project timelines vary based on scope. Most projects range from 4-12 weeks.',
                    },
                    {
                      q: 'What is your pricing model?',
                      a: 'We offer both fixed-price and hourly engagement models depending on project needs.',
                    },
                    {
                      q: 'Do you offer ongoing support?',
                      a: 'Yes! We provide maintenance and support packages for all completed projects.',
                    },
                  ].map((faq, idx) => (
                    <Box key={idx} sx={{ mb: idx < 2 ? 3 : 0 }}>
                      <Typography sx={{ fontWeight: 600, mb: 0.5, fontSize: 15 }}>
                        {faq.q}
                      </Typography>
                      <Typography sx={{ color: 'text.secondary', fontSize: 14 }}>
                        {faq.a}
                      </Typography>
                    </Box>
                  ))}
                </Box>
              </Reveal>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  )
}

export default ContactPage
