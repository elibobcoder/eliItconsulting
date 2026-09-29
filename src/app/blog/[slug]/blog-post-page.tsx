'use client'

import React, { useEffect, useState } from 'react'
import NextLink from 'next/link'
import Image from 'next/image'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import { useTheme } from '@mui/material/styles'
import { StyledButton, Reveal, PageHero } from '@/components/core'

const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

const HEADER_OFFSET = { xs: 77, md: 85 }

const XIcon = () => (
  <Box component='svg' viewBox='0 0 24 24' sx={{ width: 18, height: 18 }}>
    <path
      fill='currentColor'
      d='M18.9 2H22l-7.6 8.7L23.3 22h-7l-5.5-7.2L4.5 22H1.4l8.2-9.3L1 2h7.2l5 6.6L18.9 2Zm-1.2 18h1.7L6.4 4H4.6l13.1 16Z'
    />
  </Box>
)

const LinkedInIcon = () => (
  <Box component='svg' viewBox='0 0 24 24' sx={{ width: 18, height: 18 }}>
    <path
      fill='currentColor'
      d='M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3V9Zm7 0h3.8v1.64h.05c.53-1 1.83-2.06 3.77-2.06 4.03 0 4.78 2.65 4.78 6.1V21h-4v-5.5c0-1.31-.02-3-1.83-3-1.83 0-2.11 1.43-2.11 2.9V21h-4V9Z'
    />
  </Box>
)

const FacebookIcon = () => (
  <Box component='svg' viewBox='0 0 24 24' sx={{ width: 18, height: 18 }}>
    <path
      fill='currentColor'
      d='M13.5 21v-7.6h2.55l.38-2.96h-2.93V8.55c0-.86.24-1.44 1.47-1.44h1.57V4.46A21 21 0 0 0 14.2 4.3c-2.24 0-3.77 1.37-3.77 3.88v2.16H7.87v2.96h2.56V21h3.07Z'
    />
  </Box>
)

const LinkIcon = () => (
  <Box component='svg' viewBox='0 0 24 24' sx={{ width: 18, height: 18 }}>
    <path
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
      d='M10 13a5 5 0 0 0 7.54.54l2-2a5 5 0 0 0-7.07-7.07l-1.5 1.5M14 11a5 5 0 0 0-7.54-.54l-2 2a5 5 0 0 0 7.07 7.07l1.5-1.5'
    />
  </Box>
)

const ShareButton = ({
  href,
  label,
  onClick,
  children,
}: {
  href?: string
  label: string
  onClick?: () => void
  children: React.ReactNode
}) => {
  const content = (
    <Box
      sx={{
        width: 40,
        height: 40,
        borderRadius: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'text.secondary',
        border: (t) => `1px solid ${t.palette.divider}`,
        backgroundColor: 'background.paper',
        transition: (t) => t.transitions.create(['color', 'border-color']),
        '&:hover': { color: 'primary.main', borderColor: 'primary.main' },
      }}
    >
      {children}
    </Box>
  )
  if (href) {
    return (
      <Box
        component='a'
        href={href}
        target='_blank'
        rel='noopener noreferrer'
        aria-label={label}
        sx={{ display: 'block' }}
      >
        {content}
      </Box>
    )
  }
  return (
    <Box component='button' onClick={onClick} aria-label={label} sx={{ display: 'block', border: 'none', p: 0, background: 'none', cursor: 'pointer' }}>
      {content}
    </Box>
  )
}

const SidebarList = ({ heading, posts }: { heading: string; posts: IBlogPostSummary[] }) => {
  if (posts.length === 0) return null
  return (
    <Box sx={{ mb: 4 }}>
      <Typography
        sx={{
          fontSize: 11,
          fontWeight: 700,
          letterSpacing: 0.6,
          textTransform: 'uppercase',
          color: 'text.disabled',
          mb: 1.5,
        }}
      >
        {heading}
      </Typography>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
        {posts.map((p) => (
          <NextLink key={p.slug} href={`/blog/${p.slug}`} style={{ textDecoration: 'none', color: 'inherit' }}>
            <Box
              sx={{
                py: 1.25,
                borderTop: (t) => `1px solid ${t.palette.divider}`,
                '&:hover .related-title': { color: 'primary.main' },
              }}
            >
              <Typography
                className='related-title'
                sx={{
                  fontSize: 13.5,
                  fontWeight: 700,
                  lineHeight: 1.4,
                  mb: 0.5,
                  transition: (t) => t.transitions.create('color'),
                }}
              >
                {p.title}
              </Typography>
              <Typography sx={{ fontSize: 11.5, color: 'text.secondary' }}>{p.readTime}</Typography>
            </Box>
          </NextLink>
        ))}
      </Box>
    </Box>
  )
}

interface BlogPostPageProps {
  post: IBlogPost
  readTime: string
  trendingPosts: IBlogPostSummary[]
  relatedPosts: IBlogPostSummary[]
}

const BlogPostPage = ({ post, readTime, trendingPosts, relatedPosts }: BlogPostPageProps) => {
  const theme = useTheme()
  const [pageUrl, setPageUrl] = useState('')

  useEffect(() => {
    setPageUrl(window.location.href)
  }, [])

  const [copied, setCopied] = useState(false)
  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(pageUrl)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      // clipboard unavailable — silently ignore, link is still visible in the address bar
    }
  }

  const shareText = encodeURIComponent(post.title)
  const shareUrl = encodeURIComponent(pageUrl)

  return (
    <Box component='main'>
      <PageHero pb={{ xs: 6, md: 8 }}>
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
                  borderRadius: 0,
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
              <span>{readTime}</span>
            </Box>
            <Typography
              variant='h1'
              sx={{ fontSize: { xs: 28, md: 42 }, fontWeight: 800, lineHeight: 1.25 }}
            >
              {post.title}
            </Typography>
          </Reveal>
        </Container>
      </PageHero>

      <Box sx={{ backgroundColor: 'background.paper' }}>
        <Container maxWidth='lg'>
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', md: '5% 70% 25%' },
              columnGap: { md: '5%' },
            }}
          >
            {/* Social share — left column */}
            <Box
              sx={{
                order: { xs: 2, md: 1 },
                display: 'flex',
                flexDirection: { xs: 'row', md: 'column' },
                gap: 1.5,
                justifyContent: { xs: 'center', md: 'flex-start' },
                py: { xs: 4, md: 8 },
                alignSelf: 'start',
                position: { md: 'sticky' },
                top: { md: HEADER_OFFSET.md },
              }}
            >
              <ShareButton
                label='Share on X'
                href={pageUrl ? `https://twitter.com/intent/tweet?text=${shareText}&url=${shareUrl}` : undefined}
              >
                <XIcon />
              </ShareButton>
              <ShareButton
                label='Share on LinkedIn'
                href={pageUrl ? `https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}` : undefined}
              >
                <LinkedInIcon />
              </ShareButton>
              <ShareButton
                label='Share on Facebook'
                href={pageUrl ? `https://www.facebook.com/sharer/sharer.php?u=${shareUrl}` : undefined}
              >
                <FacebookIcon />
              </ShareButton>
              <ShareButton label={copied ? 'Link copied' : 'Copy link'} onClick={handleCopyLink}>
                <LinkIcon />
              </ShareButton>
            </Box>

            {/* Article — middle column */}
            <Box sx={{ order: { xs: 1, md: 2 }, minWidth: 0, py: { xs: 4, md: 8 } }}>
              <Reveal>
                <Box
                  sx={{
                    position: 'relative',
                    height: { xs: 200, md: 340 },
                    borderRadius: 0,
                    overflow: 'hidden',
                    boxShadow: 4,
                    mb: { xs: 4, md: 6 },
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
              <Reveal index={1}>
                {post.content.map((paragraph, index) => (
                  <Typography
                    key={index}
                    sx={{ mb: 3, fontSize: { xs: 16, md: 17 }, lineHeight: 1.9, color: 'text.primary' }}
                  >
                    {paragraph}
                  </Typography>
                ))}
              </Reveal>
            </Box>

            {/* Trending / Related — right column */}
            <Box
              sx={{
                order: { xs: 3, md: 3 },
                py: { xs: 4, md: 8 },
                borderTop: { xs: (t) => `1px solid ${t.palette.divider}`, md: 'none' },
                mt: { xs: 2, md: 0 },
                alignSelf: 'start',
                position: { md: 'sticky' },
                top: { md: HEADER_OFFSET.md },
              }}
            >
              <SidebarList heading='Trending' posts={trendingPosts} />
              <SidebarList heading='Related articles' posts={relatedPosts} />
            </Box>
          </Box>
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
