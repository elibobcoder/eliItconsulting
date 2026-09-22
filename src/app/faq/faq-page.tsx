'use client'

import React from 'react'
import NextLink from 'next/link'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import { useTheme } from '@mui/material/styles'
import { StyledButton, Reveal, PageHero } from '@/components/core'

const FAQS = [
  {
    question: 'How does an engagement usually start?',
    answer:
      'We start with a short call to understand what you need: a skill gap, a workstream, or a defined project. From there we recommend the engagement model that fits (staff augmentation, a dedicated team, or outsourcing) and put together a plan before any work begins.',
  },
  {
    question: 'What engagement models do you offer?',
    answer:
      'Three: staff augmentation (senior engineers embedded in your existing team), dedicated teams (a self-managing squad that owns a workstream), and software outsourcing (we own a defined project end-to-end). You can read about each on our Services page.',
  },
  {
    question: 'How quickly can you start?',
    answer:
      'It depends on the scope and the skills involved, but we aim to have the right engineer or team ready to start within a few weeks of finalizing the engagement.',
  },
  {
    question: 'What industries do you work with?',
    answer:
      'We’ve worked with startups, fintech, healthcare, retail and e-commerce, logistics, and professional services businesses. If your industry isn’t on that list, tell us about it, we’re happy to talk through whether it’s a good fit.',
  },
  {
    question: 'How do you handle security and confidentiality?',
    answer:
      'We sign NDAs as standard practice and follow secure development practices across code repositories and access management. If your project has specific compliance requirements, let us know up front so we can plan around them.',
  },
  {
    question: 'What technologies do you support?',
    answer:
      'Our team covers front-end (React, Angular, Vue.js, TypeScript), back-end (Node.js, Python, Java, .NET, Ruby, PHP, Go), cloud platforms (AWS, Google Cloud, Microsoft Azure), and AI/ML. See our full technology list on the Services menu.',
  },
  {
    question: 'How is pricing structured?',
    answer:
      'Pricing depends on the engagement model, scope, and skills required. Staff augmentation and dedicated teams are typically priced monthly per engineer or team; outsourced projects are scoped against defined milestones. We’ll walk you through the specifics on a call.',
  },
  {
    question: 'Can we talk to the engineers before starting?',
    answer:
      'Yes. For staff augmentation and dedicated teams, we introduce the engineers we recommend before the engagement starts, so you can confirm it’s the right fit.',
  },
]

const FaqPage = () => {
  const theme = useTheme()

  return (
    <Box component='main'>
      <PageHero>
        <Container maxWidth='md' sx={{ textAlign: 'center', position: 'relative' }}>
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
                FAQs
              </Typography>
            </Box>
            <Typography
              variant='h1'
              sx={{ mb: 3, fontSize: { xs: 32, md: 48 }, fontWeight: 800, lineHeight: 1.2 }}
            >
              Questions,
              <br />
              <Box component='span' sx={{ color: 'primary.main' }}>
                answered.
              </Box>
            </Typography>
            <Typography
              sx={{ fontSize: { xs: 16, md: 20 }, color: 'text.secondary', maxWidth: 600, mx: 'auto' }}
            >
              The things people usually ask before working with us.
            </Typography>
          </Reveal>
        </Container>
      </PageHero>

      <Box sx={{ py: { xs: 8, md: 12 }, backgroundColor: 'background.paper' }}>
        <Container maxWidth='md'>
          {FAQS.map((faq, index) => (
            <Reveal key={faq.question} index={index}>
              <Accordion
                disableGutters
                elevation={0}
                sx={{
                  mb: 2,
                  borderRadius: '16px !important',
                  border: (t) => `1px solid ${t.palette.divider}`,
                  '&:before': { display: 'none' },
                }}
              >
                <AccordionSummary
                  expandIcon={
                    <Box
                      component='svg'
                      viewBox='0 0 24 24'
                      sx={{ width: 16, height: 16 }}
                    >
                      <path
                        d='M6 9l6 6 6-6'
                        fill='none'
                        stroke='currentColor'
                        strokeWidth='2'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      />
                    </Box>
                  }
                  sx={{ px: 3, py: 1 }}
                >
                  <Typography sx={{ fontSize: 16, fontWeight: 700 }}>
                    {faq.question}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails sx={{ px: 3, pb: 3 }}>
                  <Typography sx={{ color: 'text.secondary', fontSize: 15, lineHeight: 1.8 }}>
                    {faq.answer}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </Reveal>
          ))}
        </Container>
      </Box>

      <Box
        sx={{
          py: { xs: 8, md: 10 },
          backgroundColor: theme.palette.mode === 'dark' ? '#101014' : '#f7f8fb',
          textAlign: 'center',
        }}
      >
        <Container maxWidth='sm'>
          <Reveal>
            <Typography variant='h2' sx={{ mb: 2, fontSize: { xs: 22, md: 30 }, fontWeight: 800 }}>
              Still have questions?
            </Typography>
            <Typography sx={{ mb: 4, color: 'text.secondary', fontSize: { xs: 15, md: 17 } }}>
              We&apos;re happy to talk through the specifics of your project.
            </Typography>
            <NextLink href='/contact' passHref>
              <StyledButton variant='contained' size='large' color='primary'>
                Contact Us
              </StyledButton>
            </NextLink>
          </Reveal>
        </Container>
      </Box>
    </Box>
  )
}

export default FaqPage
