'use client'

import React from 'react'
import NextLink from 'next/link'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import { useTheme } from '@mui/material/styles'
import { StyledButton } from '@/components/core'

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
        </Container>
      </Box>

      <Box sx={{ py: { xs: 6, md: 10 }, backgroundColor: 'background.paper' }}>
        <Container maxWidth='md'>
          {post.content.map((paragraph, index) => (
            <Typography
              key={index}
              sx={{ mb: 3, fontSize: { xs: 16, md: 17 }, lineHeight: 1.9, color: 'text.primary' }}
            >
              {paragraph}
            </Typography>
          ))}
        </Container>
      </Box>

      <Box
        sx={{
          py: { xs: 8, md: 10 },
          backgroundColor: theme.palette.mode === 'dark' ? '#101014' : '#f7f8fb',
        }}
      >
        <Container maxWidth='sm' sx={{ textAlign: 'center' }}>
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
        </Container>
      </Box>
    </Box>
  )
}

export default BlogPostPage
