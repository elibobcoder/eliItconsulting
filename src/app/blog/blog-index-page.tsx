'use client'

import React, { useMemo, useState } from 'react'
import NextLink from 'next/link'
import Image from 'next/image'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Stack from '@mui/material/Stack'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import InputAdornment from '@mui/material/InputAdornment'
import Pagination from '@mui/material/Pagination'
import { useTheme } from '@mui/material/styles'
import { motion } from 'framer-motion'
import { Reveal, PageHero } from '@/components/core'
import { blogPosts } from '@/constants/blog'

const POSTS_PER_PAGE = 9
const TRENDING_COUNT = 6

const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

const SearchIcon = () => (
  <Box component='svg' viewBox='0 0 24 24' sx={{ width: 18, height: 18 }}>
    <circle cx='11' cy='11' r='7' fill='none' stroke='currentColor' strokeWidth='2' />
    <line x1='21' y1='21' x2='16.65' y2='16.65' stroke='currentColor' strokeWidth='2' strokeLinecap='round' />
  </Box>
)

const BlogIndexPage = () => {
  const theme = useTheme()
  const [search, setSearch] = useState('')
  const [activeFilter, setActiveFilter] = useState<string | null>(null)
  const [page, setPage] = useState(1)

  const trendingSlugs = useMemo(() => {
    return new Set(
      [...blogPosts]
        .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
        .slice(0, TRENDING_COUNT)
        .map((p) => p.slug)
    )
  }, [])

  const categories = useMemo(() => {
    const counts = new Map<string, number>()
    blogPosts.forEach((post) => counts.set(post.category, (counts.get(post.category) ?? 0) + 1))
    return Array.from(counts.entries())
      .sort((a, b) => b[1] - a[1])
      .map(([name, count]) => ({ name, count }))
  }, [])

  const sortedPosts = useMemo(
    () => [...blogPosts].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()),
    []
  )

  const filteredPosts = useMemo(() => {
    const query = search.trim().toLowerCase()
    return sortedPosts.filter((post) => {
      if (activeFilter === 'Trending' && !trendingSlugs.has(post.slug)) return false
      if (activeFilter && activeFilter !== 'Trending' && post.category !== activeFilter) return false
      if (!query) return true
      return (
        post.title.toLowerCase().includes(query) ||
        post.excerpt.toLowerCase().includes(query) ||
        post.category.toLowerCase().includes(query)
      )
    })
  }, [sortedPosts, activeFilter, search, trendingSlugs])

  const pageCount = Math.max(1, Math.ceil(filteredPosts.length / POSTS_PER_PAGE))
  const paginatedPosts = filteredPosts.slice((page - 1) * POSTS_PER_PAGE, page * POSTS_PER_PAGE)

  const handleFilterClick = (name: string | null) => {
    setActiveFilter((prev) => (prev === name ? null : name))
    setPage(1)
  }

  const handleSearchChange = (value: string) => {
    setSearch(value)
    setPage(1)
  }

  const handlePageChange = (_: React.ChangeEvent<unknown>, value: number) => {
    setPage(value)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

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
          {/* Toolbar */}
          <Reveal>
            <Stack spacing={3} sx={{ mb: 6 }}>
              <TextField
                fullWidth
                placeholder='Search articles by topic...'
                value={search}
                onChange={(e) => handleSearchChange(e.target.value)}
                slotProps={{
                  input: {
                    startAdornment: (
                      <InputAdornment position='start' sx={{ color: 'text.secondary' }}>
                        <SearchIcon />
                      </InputAdornment>
                    ),
                  },
                }}
                sx={{
                  maxWidth: 480,
                  '& .MuiOutlinedInput-root': { borderRadius: 3, backgroundColor: 'background.default' },
                }}
              />
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1.2 }}>
                <Box
                  component='button'
                  onClick={() => handleFilterClick(null)}
                  sx={{
                    px: 2.2,
                    py: 0.9,
                    borderRadius: 10,
                    fontSize: 13,
                    fontWeight: 700,
                    cursor: 'pointer',
                    border: 'none',
                    color: activeFilter === null ? '#fff' : 'text.secondary',
                    backgroundColor: activeFilter === null ? 'primary.main' : 'background.default',
                  }}
                >
                  All Articles
                </Box>
                <Box
                  component='button'
                  onClick={() => handleFilterClick('Trending')}
                  sx={{
                    px: 2.2,
                    py: 0.9,
                    borderRadius: 10,
                    fontSize: 13,
                    fontWeight: 700,
                    cursor: 'pointer',
                    border: 'none',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 0.5,
                    color: activeFilter === 'Trending' ? '#fff' : 'secondary.dark',
                    backgroundColor: activeFilter === 'Trending' ? 'secondary.main' : 'secondary.light',
                  }}
                >
                  🔥 Trending
                </Box>
                {categories.map(({ name, count }) => (
                  <Box
                    key={name}
                    component='button'
                    onClick={() => handleFilterClick(name)}
                    sx={{
                      px: 2.2,
                      py: 0.9,
                      borderRadius: 10,
                      fontSize: 13,
                      fontWeight: 700,
                      cursor: 'pointer',
                      border: 'none',
                      color: activeFilter === name ? '#fff' : 'text.secondary',
                      backgroundColor: activeFilter === name ? 'primary.main' : 'background.default',
                    }}
                  >
                    {name} ({count})
                  </Box>
                ))}
              </Box>
            </Stack>
          </Reveal>

          {/* Results count */}
          <Typography sx={{ mb: 3, fontSize: 14, color: 'text.secondary' }}>
            {filteredPosts.length} article{filteredPosts.length === 1 ? '' : 's'}
            {activeFilter ? ` in ${activeFilter}` : ''}
            {search ? ` matching “${search}”` : ''}
          </Typography>

          {paginatedPosts.length === 0 ? (
            <Box sx={{ py: 10, textAlign: 'center' }}>
              <Typography sx={{ fontSize: 18, fontWeight: 700, mb: 1 }}>No articles found</Typography>
              <Typography sx={{ color: 'text.secondary' }}>
                Try a different search term or clear the category filter.
              </Typography>
            </Box>
          ) : (
            <Grid container spacing={4}>
              {paginatedPosts.map((post, index) => (
                <Grid key={post.slug} size={{ xs: 12, md: 6, lg: 4 }}>
                  <Reveal index={index % 6}>
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
                              sizes='(max-width: 900px) 100vw, 33vw'
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
                        <Box sx={{ p: 3.5 }}>
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
                          <Typography sx={{ fontSize: { xs: 19, md: 20 }, fontWeight: 700, mb: 1.5 }}>
                            {post.title}
                          </Typography>
                          <Typography sx={{ color: 'text.secondary', fontSize: 14.5, lineHeight: 1.7, mb: 2 }}>
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
          )}

          {pageCount > 1 && (
            <Box sx={{ display: 'flex', justifyContent: 'center', mt: 8 }}>
              <Pagination
                count={pageCount}
                page={page}
                onChange={handlePageChange}
                color='primary'
                shape='rounded'
                size='large'
              />
            </Box>
          )}
        </Container>
      </Box>
    </Box>
  )
}

export default BlogIndexPage
