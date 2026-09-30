'use client'

import React, { useEffect, useState } from 'react'
import NextLink from 'next/link'
import Image from 'next/image'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import { useTheme } from '@mui/material/styles'
import { Reveal, PageHero } from '@/components/core'
import { articleDiagrams } from './article-diagrams'

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

const WhatsAppIcon = () => (
  <Box component='svg' viewBox='0 0 24 24' sx={{ width: 18, height: 18 }}>
    <path
      fill='currentColor'
      d='M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.33 4.95L2.05 22l5.25-1.38a9.9 9.9 0 0 0 4.74 1.2h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.85 9.85 0 0 0 12.04 2Zm0 18.13h-.01a8.2 8.2 0 0 1-4.19-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.22 8.22 0 0 1-1.26-4.36c0-4.54 3.7-8.24 8.25-8.24 2.2 0 4.27.86 5.83 2.42a8.18 8.18 0 0 1 2.41 5.82c0 4.55-3.7 8.24-8.24 8.24Zm4.52-6.17c-.25-.12-1.47-.72-1.7-.81-.23-.08-.39-.12-.56.13-.17.25-.64.81-.78.97-.14.17-.29.19-.53.06-.25-.12-1.05-.39-2-1.23a7.5 7.5 0 0 1-1.38-1.72c-.15-.25-.02-.38.11-.5.11-.11.25-.29.37-.43.12-.14.16-.25.25-.41.08-.17.04-.31-.02-.44-.06-.12-.56-1.35-.77-1.85-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.44.06-.67.31-.23.25-.87.85-.87 2.08s.89 2.42 1.02 2.58c.12.17 1.75 2.67 4.24 3.75.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.67-1.18.21-.58.21-1.08.15-1.18-.06-.11-.23-.17-.48-.29Z'
    />
  </Box>
)

const EmailIcon = () => (
  <Box component='svg' viewBox='0 0 24 24' sx={{ width: 18, height: 18 }}>
    <path
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
      d='M3 5h18v14H3V5Zm0 0 9 8 9-8'
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

const TableOfContents = ({ sections }: { sections: IBlogSection[] }) => (
  <Box
    sx={{
      mb: { xs: 4, md: 6 },
      p: { xs: 2.5, md: 3 },
      border: (t) => `1px solid ${t.palette.divider}`,
      backgroundColor: 'background.default',
    }}
  >
    <Typography sx={{ fontSize: 13, fontWeight: 700, letterSpacing: 0.6, textTransform: 'uppercase', mb: 1.5 }}>
      Article contents
    </Typography>
    <Box component='ol' sx={{ m: 0, pl: 2.5, display: 'flex', flexDirection: 'column', gap: 0.75 }}>
      {sections.map((section) => (
        <Box component='li' key={section.id} sx={{ fontSize: 14.5 }}>
          <Box
            component='a'
            href={`#${section.id}`}
            sx={{
              color: 'text.secondary',
              textDecoration: 'none',
              '&:hover': { color: 'primary.main', textDecoration: 'underline' },
            }}
          >
            {section.heading}
          </Box>
        </Box>
      ))}
    </Box>
  </Box>
)

const ArticleSections = ({ sections }: { sections: IBlogSection[] }) => (
  <>
    {sections.map((section) => (
      <Box key={section.id} id={section.id} sx={{ scrollMarginTop: `${HEADER_OFFSET.md}px` }}>
        <Typography variant='h2' sx={{ fontSize: { xs: 21, md: 25 }, fontWeight: 800, mt: { xs: 5, md: 6 }, mb: 2.5 }}>
          {section.heading}
        </Typography>
        {section.paragraphs.map((paragraph, index) => (
          <Typography
            key={index}
            sx={{ mb: 3, fontSize: { xs: 16, md: 17 }, lineHeight: 1.9, color: 'text.primary' }}
          >
            {paragraph}
          </Typography>
        ))}
        {section.image && (
          <Box sx={{ my: { xs: 4, md: 5 } }}>
            <Box
              sx={{
                position: 'relative',
                height: { xs: 200, md: 320 },
                overflow: 'hidden',
              }}
            >
              <Image
                src={section.image.src}
                alt={section.image.alt}
                fill
                sizes='(max-width: 900px) 100vw, 800px'
                style={{ objectFit: 'cover' }}
              />
            </Box>
            {section.image.caption && (
              <Typography sx={{ mt: 1, fontSize: 13, color: 'text.secondary', fontStyle: 'italic' }}>
                {section.image.caption}
              </Typography>
            )}
          </Box>
        )}
        {section.diagramId && articleDiagrams[section.diagramId] && (
          <Box sx={{ my: { xs: 4, md: 5 }, p: { xs: 2.5, md: 3.5 }, border: (t) => `1px solid ${t.palette.divider}`, backgroundColor: 'background.default' }}>
            {React.createElement(articleDiagrams[section.diagramId].Component)}
            <Typography sx={{ mt: 2, fontSize: 13, color: 'text.secondary', fontStyle: 'italic' }}>
              {articleDiagrams[section.diagramId].caption}
            </Typography>
          </Box>
        )}
      </Box>
    ))}
  </>
)

const PrevNextCard = ({ post, direction }: { post: IBlogPostSummary; direction: 'previous' | 'next' }) => (
  <NextLink href={`/blog/${post.slug}`} style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}>
    <Box
      sx={{
        position: 'relative',
        height: { xs: 160, md: 200 },
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'flex-end',
        color: '#fbfbfb',
      }}
    >
      <Image src={post.coverImage} alt={post.title} fill sizes='(max-width: 900px) 100vw, 600px' style={{ objectFit: 'cover' }} />
      <Box sx={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(11,18,32,0.15), rgba(11,18,32,0.85))' }} />
      <Box sx={{ position: 'relative', p: { xs: 2.5, md: 3 } }}>
        <Typography sx={{ fontSize: 12, fontWeight: 700, letterSpacing: 0.6, textTransform: 'uppercase', color: 'rgba(255,255,255,0.75)', mb: 0.75 }}>
          {direction === 'previous' ? '← Previous article' : 'Next article →'}
        </Typography>
        <Typography sx={{ fontSize: { xs: 16, md: 18 }, fontWeight: 800, lineHeight: 1.3 }}>{post.title}</Typography>
      </Box>
    </Box>
  </NextLink>
)

interface BlogPostPageProps {
  post: IBlogPost
  readTime: string
  trendingPosts: IBlogPostSummary[]
  relatedPosts: IBlogPostSummary[]
  previousPost: IBlogPostSummary | null
  nextPost: IBlogPostSummary | null
}

const BlogPostPage = ({ post, readTime, trendingPosts, relatedPosts, previousPost, nextPost }: BlogPostPageProps) => {
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
      <PageHero pt={{ xs: 6, md: 8 }} pb={{ xs: 6, md: 8 }}>
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
              gridTemplateColumns: { xs: '1fr', md: '5fr 70fr 25fr' },
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
              <ShareButton
                label='Share on WhatsApp'
                href={pageUrl ? `https://wa.me/?text=${shareText}%20${shareUrl}` : undefined}
              >
                <WhatsAppIcon />
              </ShareButton>
              <ShareButton
                label='Share via Email'
                href={pageUrl ? `mailto:?subject=${shareText}&body=${shareUrl}` : undefined}
              >
                <EmailIcon />
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
              <Reveal index={1} amount={0}>
                {post.sections && <TableOfContents sections={post.sections} />}
                {post.sections ? (
                  <ArticleSections sections={post.sections} />
                ) : (
                  post.content.map((paragraph, index) => (
                    <Typography
                      key={index}
                      sx={{ mb: 3, fontSize: { xs: 16, md: 17 }, lineHeight: 1.9, color: 'text.primary' }}
                    >
                      {paragraph}
                    </Typography>
                  ))
                )}
              </Reveal>
            </Box>

            {/* Trending / Related — right column */}
            <Box
              sx={{
                order: { xs: 3, md: 3 },
                py: { xs: 4, md: 8 },
                borderTop: { xs: '1px solid', md: 'none' },
                borderColor: 'divider',
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

      {(previousPost || nextPost) && (
        <Box sx={{ backgroundColor: 'background.paper', pb: { xs: 6, md: 8 } }}>
          <Container maxWidth='lg'>
            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: { xs: '1fr', md: '5fr 70fr 25fr' },
                columnGap: { md: '5%' },
              }}
            >
              <Box sx={{ display: { xs: 'none', md: 'block' } }} />
              <Box
                sx={{
                  display: 'grid',
                  gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' },
                  gap: 3,
                }}
              >
                {previousPost ? <PrevNextCard post={previousPost} direction='previous' /> : <Box />}
                {nextPost ? <PrevNextCard post={nextPost} direction='next' /> : <Box />}
              </Box>
              <Box sx={{ display: { xs: 'none', md: 'block' } }} />
            </Box>
          </Container>
        </Box>
      )}
    </Box>
  )
}

export default BlogPostPage
