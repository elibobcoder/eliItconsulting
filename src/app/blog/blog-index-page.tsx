'use client'

import React from 'react'
import NextLink from 'next/link'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import { useTheme } from '@mui/material/styles'
import { blogPosts } from '@/constants/blog'

const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

const BlogIndexPage = () => {
  const theme = useTheme()

  return (
    <Box component='main'>
      <Box
        sx={{
          pt: { xs: 16, md: 20 },
          pb: { xs: 8, md: 12 },
          backgroundColor: theme.palette.mode === 'dark' ? '#151733' : '#e8f3ff',
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
                theme.palette.mode === 'dark' ? 'rgb(255,255,255,0.10)' : 'primary.light',
              color: theme.palette.mode === 'dark' ? '#fbfbfb' : 'primary.main',
            }}
          >
            <Typography sx={{ fontSize: 12, letterSpacing: 1, textTransform: 'uppercase' }} variant='h5'>
              Blog
            </Typography>
          </Box>
          <Typography
            variant='h1'
            sx={{ mb: 3, fontSize: { xs: 32, md: 48 }, fontWeight: 800, lineHeight: 1.2 }}
          >
            Notes on building
            <br />
            <Box component='span' sx={{ color: 'primary.main' }}>
              better engineering teams.
            </Box>
          </Typography>
          <Typography
            sx={{ fontSize: { xs: 16, md: 20 }, color: 'text.secondary', maxWidth: 640, mx: 'auto' }}
          >
            Practical writing on engagement models, team strategy, and AI
            adoption, without the fluff.
          </Typography>
        </Container>
      </Box>

      <Box sx={{ py: { xs: 8, md: 12 }, backgroundColor: 'background.paper' }}>
        <Container maxWidth='lg'>
          <Grid container spacing={4}>
            {blogPosts.map((post) => (
              <Grid key={post.slug} size={{ xs: 12, md: 6 }}>
                <NextLink
                  href={`/blog/${post.slug}`}
                  style={{ textDecoration: 'none', color: 'inherit' }}
                >
                  <Box
                    sx={{
                      height: '100%',
                      p: 4,
                      borderRadius: 4,
                      border: (t) => `1px solid ${t.palette.divider}`,
                      transition: (t) => t.transitions.create(['box-shadow', 'transform']),
                      '&:hover': { boxShadow: 3, transform: 'translateY(-4px)' },
                    }}
                  >
                    <Box
                      sx={{
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
                          backgroundColor: 'primary.light',
                        }}
                      >
                        {post.category}
                      </Box>
                      <span>{formatDate(post.date)}</span>
                      <span>&middot;</span>
                      <span>{post.readTime}</span>
                    </Box>
                    <Typography sx={{ fontSize: { xs: 20, md: 22 }, fontWeight: 700, mb: 1.5 }}>
                      {post.title}
                    </Typography>
                    <Typography sx={{ color: 'text.secondary', fontSize: 15, lineHeight: 1.7, mb: 2 }}>
                      {post.excerpt}
                    </Typography>
                    <Typography sx={{ fontSize: 13, fontWeight: 700, color: 'primary.main' }}>
                      Read the post &rarr;
                    </Typography>
                  </Box>
                </NextLink>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </Box>
  )
}

export default BlogIndexPage
