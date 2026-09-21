'use client'

import React from 'react'
import NextLink from 'next/link'
import Image from 'next/image'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import { useTheme } from '@mui/material/styles'
import { StyledButton, Reveal } from '@/components/core'

const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

const BlogPostPage = ({ post }: { post: IBlogPost }) => {
  const theme = useTheme()

  return (
    <Box component='main'>
      <Box
        sx={{
          pt: { xs: 16, md: 20 },
          pb: { xs: 6, md: 8 },
          backgroundColor: theme.palette.mode === 'dark' ? '#151733' : '#e8f3ff',
        }}
      >
        <Container maxWidth='md'>
          <Reveal>
            <NextLink
              href='/blog'
              style={{
                fontSize: 13,
                fontWeight: 700,
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              &larr; Back to Blog
            </NextLink>
            <Box
              sx={{
                mt: 3,
                mb: 2,
                display: 'flex',
                alignItems: 'center',
                gap: 1.5,
                fontSize: 13,
                color: 'text.secondary',
              }}
            >
              <Box
                sx={{
                  px: 1.5,
                  py: 0.4,
                  borderRadius: 1,
                  fontWeight: 700,
                  fontSize: 11,
                  letterSpacing: 0.5,
                  textTransform: 'uppercase',
                  color: 'primary.main',
                  backgroundColor:
                    theme.palette.mode === 'dark' ? 'rgb(255,255,255,0.10)' : 'primary.light',
                }}
              >
                {post.category}
              </Box>
              <span>{formatDate(post.date)}</span>
              <span>&middot;</span>
              <span>{post.readTime}</span>
            </Box>
            <Typography
              variant='h1'
              sx={{ fontSize: { xs: 28, md: 42 }, fontWeight: 800, lineHeight: 1.25 }}
            >
              {post.title}
            </Typography>
          </Reveal>
        </Container>
      </Box>

      <Container maxWidth='md' sx={{ mt: { xs: -4, md: -6 }, position: 'relative' }}>
        <Reveal>
          <Box
            sx={{
              position: 'relative',
              height: { xs: 200, md: 340 },
              borderRadius: 5,
              overflow: 'hidden',
              boxShadow: 4,
            }}
          >
            <Image
              src={post.coverImage}
              alt={post.title}
              fill
              sizes='(max-width: 900px) 100vw, 800px'
              style={{ objectFit: 'cover' }}
              priority
            />
          </Box>
        </Reveal>
      </Container>

      <Box sx={{ py: { xs: 6, md: 10 }, backgroundColor: 'background.paper' }}>
        <Container maxWidth='md'>
          <Reveal>
            {post.content.map((paragraph, index) => (
              <Typography
                key={index}
                sx={{ mb: 3, fontSize: { xs: 16, md: 17 }, lineHeight: 1.9, color: 'text.primary' }}
              >
                {paragraph}
              </Typography>
            ))}
          </Reveal>
        </Container>
      </Box>

      <Box
        sx={{
          py: { xs: 8, md: 10 },
          backgroundColor: theme.palette.mode === 'dark' ? '#101014' : '#f7f8fb',
        }}
      >
        <Container maxWidth='sm' sx={{ textAlign: 'center' }}>
          <Reveal>
            <Typography variant='h2' sx={{ mb: 2, fontSize: { xs: 22, md: 30 }, fontWeight: 800 }}>
              Want help with this?
            </Typography>
            <Typography sx={{ mb: 4, color: 'text.secondary', fontSize: { xs: 15, md: 17 } }}>
              Tell us what you&apos;re working on and we&apos;ll point you to the right next step.
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

export default BlogPostPage
