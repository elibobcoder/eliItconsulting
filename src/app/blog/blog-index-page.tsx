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
import { Reveal, PageHero } from '@/components/core'
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
          </Reveal>
        </Container>
      </PageHero>

      <Box sx={{ py: { xs: 8, md: 12 }, backgroundColor: 'background.paper' }}>
        <Container maxWidth='lg'>
          <Grid container spacing={4}>
            {blogPosts.map((post, index) => (
              <Grid key={post.slug} size={{ xs: 12, md: 6 }}>
                <Reveal index={index}>
                  <NextLink
                    href={`/blog/${post.slug}`}
                    style={{ textDecoration: 'none', color: 'inherit' }}
                  >
                    <Box
                      component={motion.div}
                      whileHover={{ y: -6 }}
                      transition={{ duration: 0.3 }}
                      sx={{
                        height: '100%',
                        borderRadius: 4,
                        overflow: 'hidden',
                        border: (t) => `1px solid ${t.palette.divider}`,
                        '&:hover': { boxShadow: 3 },
                      }}
                    >
                      <Box
                        sx={{
                          position: 'relative',
                          height: 180,
                          overflow: 'hidden',
                        }}
                      >
                        <Box
                          component={motion.div}
                          whileHover={{ scale: 1.08 }}
                          transition={{ duration: 0.5 }}
                          sx={{ position: 'relative', width: '100%', height: '100%' }}
                        >
                          <Image
                            src={post.coverImage}
                            alt={post.title}
                            fill
                            sizes='(max-width: 900px) 100vw, 50vw'
                            style={{ objectFit: 'cover' }}
                          />
                        </Box>
                        <Box
                          sx={{
                            position: 'absolute',
                            top: 12,
                            left: 12,
                            px: 1.5,
                            py: 0.4,
                            borderRadius: 1,
                            fontWeight: 700,
                            fontSize: 11,
                            letterSpacing: 0.5,
                            textTransform: 'uppercase',
                            color: 'primary.main',
                            backgroundColor: 'background.paper',
                          }}
                        >
                          {post.category}
                        </Box>
                      </Box>
                      <Box sx={{ p: 4 }}>
                        <Box
                          sx={{
                            mb: 1.5,
                            display: 'flex',
                            alignItems: 'center',
                            gap: 1.5,
                            fontSize: 13,
                            color: 'text.secondary',
                          }}
                        >
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
                    </Box>
                  </NextLink>
                </Reveal>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </Box>
  )
}

export default BlogIndexPage
