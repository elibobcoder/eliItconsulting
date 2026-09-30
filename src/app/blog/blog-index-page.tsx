'use client'

import React, { FC, ReactNode, useMemo, useState } from 'react'
import NextLink from 'next/link'
import Image from 'next/image'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Stack from '@mui/material/Stack'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import InputAdornment from '@mui/material/InputAdornment'
import IconButton from '@mui/material/IconButton'
import Pagination from '@mui/material/Pagination'
import { motion } from 'framer-motion'
import { Reveal } from '@/components/core'
import { blogPosts } from '@/constants/blog'
import { calculateReadTime } from '@/utils/read-time'

const POSTS_PER_PAGE = 9
const TRENDING_COUNT = 6
const SHORTLIST_COUNT = 3

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

const ClearIcon = () => (
  <Box component='svg' viewBox='0 0 24 24' sx={{ width: 16, height: 16 }}>
    <line x1='6' y1='6' x2='18' y2='18' stroke='currentColor' strokeWidth='2' strokeLinecap='round' />
    <line x1='18' y1='6' x2='6' y2='18' stroke='currentColor' strokeWidth='2' strokeLinecap='round' />
  </Box>
)

const ChevronIcon = () => (
  <Box component='svg' viewBox='0 0 24 24' sx={{ width: 14, height: 14 }}>
    <path d='M6 9l6 6 6-6' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
  </Box>
)

const TabItem: FC<{ label: ReactNode; active: boolean; onClick: (e: React.MouseEvent<HTMLElement>) => void }> = ({
  label,
  active,
  onClick,
}) => (
  <Box
    component='button'
    onClick={onClick}
    sx={{
      px: 1.5,
      py: 0.75,
      borderRadius: 1.5,
      border: 'none',
      cursor: 'pointer',
      fontSize: 14,
      whiteSpace: 'nowrap',
      fontWeight: active ? 700 : 500,
      color: active ? 'text.primary' : 'text.secondary',
      backgroundColor: active ? 'action.selected' : 'transparent',
      transition: (t) => t.transitions.create(['background-color', 'color']),
      '&:hover': { backgroundColor: active ? 'action.selected' : 'action.hover' },
    }}
  >
    {label}
  </Box>
)

const BlogIndexPage = () => {
  const [search, setSearch] = useState('')
  const [activeFilter, setActiveFilter] = useState<string | null>(null)
  const [page, setPage] = useState(1)
  const [moreAnchor, setMoreAnchor] = useState<HTMLElement | null>(null)

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

  const shortlistCategories = categories.slice(0, SHORTLIST_COUNT)
  const moreCategories = categories.slice(SHORTLIST_COUNT)
  const activeIsInMore = moreCategories.some((c) => c.name === activeFilter)

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
      <Box sx={{ py: { xs: 6, md: 8 }, backgroundColor: 'background.paper' }}>
        <Container maxWidth='lg'>
          {/* Toolbar */}
          <Reveal>
            <Stack
              direction={{ xs: 'column', md: 'row' }}
              justifyContent='space-between'
              alignItems={{ xs: 'flex-start', md: 'center' }}
              spacing={2}
              sx={{
                mb: 5,
                pb: 2,
                borderBottom: (t) => `1px solid ${t.palette.divider}`,
              }}
            >
              <Stack direction='row' spacing={0.5} sx={{ flexWrap: 'wrap', rowGap: 0.5 }}>
                <TabItem label='All' active={activeFilter === null} onClick={() => handleFilterClick(null)} />
                <TabItem
                  label='🔥 Trending'
                  active={activeFilter === 'Trending'}
                  onClick={() => handleFilterClick('Trending')}
                />
                {shortlistCategories.map(({ name }) => (
                  <TabItem
                    key={name}
                    label={name}
                    active={activeFilter === name}
                    onClick={() => handleFilterClick(name)}
                  />
                ))}
                {moreCategories.length > 0 && (
                  <>
                    <TabItem
                      label={
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                          {activeIsInMore ? activeFilter : 'More'}
                          <ChevronIcon />
                        </Box>
                      }
                      active={activeIsInMore}
                      onClick={(e) => setMoreAnchor(e.currentTarget)}
                    />
                    <Menu
                      anchorEl={moreAnchor}
                      open={Boolean(moreAnchor)}
                      onClose={() => setMoreAnchor(null)}
                    >
                      {moreCategories.map(({ name, count }) => (
                        <MenuItem
                          key={name}
                          selected={activeFilter === name}
                          onClick={() => {
                            handleFilterClick(name)
                            setMoreAnchor(null)
                          }}
                        >
                          {name} ({count})
                        </MenuItem>
                      ))}
                    </Menu>
                  </>
                )}
              </Stack>

              <TextField
                placeholder='Search...'
                variant='standard'
                value={search}
                onChange={(e) => handleSearchChange(e.target.value)}
                slotProps={{
                  input: {
                    disableUnderline: true,
                    startAdornment: (
                      <InputAdornment position='start' sx={{ color: 'text.secondary' }}>
                        <SearchIcon />
                      </InputAdornment>
                    ),
                    endAdornment: search && (
                      <InputAdornment position='end'>
                        <IconButton
                          size='small'
                          aria-label='Clear search'
                          onClick={() => handleSearchChange('')}
                        >
                          <ClearIcon />
                        </IconButton>
                      </InputAdornment>
                    ),
                  },
                }}
                sx={{
                  width: { xs: '100%', md: 200 },
                  px: 1.5,
                  py: 0.25,
                  borderRadius: 1.5,
                  border: (t) => `1px solid ${t.palette.divider}`,
                  fontSize: 14,
                  flexShrink: 0,
                }}
              />
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
            <Grid container spacing={4} alignItems='stretch'>
              {paginatedPosts.map((post, index) => (
                <Grid key={post.slug} size={{ xs: 12, md: 6, lg: 4 }} sx={{ display: 'flex' }}>
                  <Reveal index={index % 6}>
                    <NextLink
                      href={`/blog/${post.slug}`}
                      style={{ textDecoration: 'none', color: 'inherit', display: 'block', height: '100%' }}
                    >
                      <Box
                        component={motion.div}
                        whileHover={{ y: -6 }}
                        transition={{ duration: 0.3 }}
                        sx={{
                          height: '100%',
                          display: 'flex',
                          flexDirection: 'column',
                          borderRadius: 0,
                          overflow: 'hidden',
                          border: (t) => `1px solid ${t.palette.divider}`,
                          '&:hover': { boxShadow: 3 },
                        }}
                      >
                        <Box
                          sx={{
                            position: 'relative',
                            height: 180,
                            flexShrink: 0,
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
                              borderRadius: 0,
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
                        <Box sx={{ p: 3.5, display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
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
                            <span>{calculateReadTime(post)}</span>
                          </Box>
                          <Typography
                            sx={{
                              fontSize: { xs: 19, md: 20 },
                              fontWeight: 700,
                              mb: 1.5,
                              display: '-webkit-box',
                              WebkitLineClamp: 2,
                              WebkitBoxOrient: 'vertical',
                              overflow: 'hidden',
                            }}
                          >
                            {post.title}
                          </Typography>
                          <Typography
                            sx={{
                              color: 'text.secondary',
                              fontSize: 14.5,
                              lineHeight: 1.7,
                              mb: 2,
                              display: '-webkit-box',
                              WebkitLineClamp: 2,
                              WebkitBoxOrient: 'vertical',
                              overflow: 'hidden',
                            }}
                          >
                            {post.excerpt}
                          </Typography>
                          <Typography sx={{ fontSize: 13, fontWeight: 700, color: 'primary.main', mt: 'auto' }}>
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
                size='large'
                sx={{ '& .MuiPaginationItem-root': { borderRadius: 0 } }}
              />
            </Box>
          )}
        </Container>
      </Box>
    </Box>
  )
}

export default BlogIndexPage
