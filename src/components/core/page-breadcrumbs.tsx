'use client'

import React, { FC, useEffect, useState } from 'react'
import NextLink from 'next/link'
import { usePathname } from 'next/navigation'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'

const SEGMENT_LABELS: Record<string, string> = {
  services: 'Services',
  'staff-augmentation': 'Staff Augmentation',
  'dedicated-teams': 'Dedicated Teams',
  'software-outsourcing': 'Software Outsourcing',
  'ai-transformation': 'AI Transformation',
  about: 'About',
  blog: 'Blog',
  career: 'Career',
  contact: 'Contact',
  culture: 'Culture',
  faq: 'FAQs',
  'hire-developers': 'Hire Developers',
  portfolio: 'Our Work',
  privacy: 'Privacy Policy',
  terms: 'Terms of Service',
  'top-talent': 'Top 1% Talent',
}

const humanize = (slug: string) =>
  slug
    .split('-')
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ')

const HomeIcon = () => (
  <Box component='svg' viewBox='0 0 24 24' sx={{ width: 16, height: 16 }}>
    <path
      d='M3 11l9-8 9 8M5 10v10a1 1 0 0 0 1 1h4v-6h4v6h4a1 1 0 0 0 1-1V10'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </Box>
)

const ChevronIcon = () => (
  <Box component='svg' viewBox='0 0 24 24' sx={{ width: 14, height: 14, color: 'text.disabled' }}>
    <path
      d='M9 6l6 6-6 6'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </Box>
)

interface Crumb {
  label: string
  href?: string
}

const PageBreadcrumbs: FC = () => {
  const pathname = usePathname()
  const [blogTitle, setBlogTitle] = useState<string | null>(null)

  const segments = (pathname ?? '').split('/').filter(Boolean)
  const blogSlug = segments[0] === 'blog' ? segments[1] : undefined

  // Lazily load the (large) blog dataset only when actually on a blog
  // post route, so it never gets bundled into every other page.
  useEffect(() => {
    if (!blogSlug) {
      setBlogTitle(null)
      return
    }
    let cancelled = false
    import('@/constants/blog').then(({ getBlogPost }) => {
      if (!cancelled) setBlogTitle(getBlogPost(blogSlug)?.title ?? null)
    })
    return () => {
      cancelled = true
    }
  }, [blogSlug])

  if (!pathname || pathname === '/') return null

  const crumbs: Crumb[] = []
  let hrefSoFar = ''
  segments.forEach((segment, index) => {
    hrefSoFar += `/${segment}`
    const isLast = index === segments.length - 1

    let label = SEGMENT_LABELS[segment] ?? humanize(segment)
    if (segments[0] === 'blog' && index === 1) {
      label = blogTitle ?? humanize(segment)
    }

    crumbs.push({ label, href: isLast ? undefined : hrefSoFar })
  })

  return (
    <Box
      component='nav'
      aria-label='Breadcrumb'
      sx={{
        width: '100%',
        mt: { xs: '61px', md: '69px' },
        backgroundColor: 'background.default',
        borderBottom: (t) => `1px solid ${t.palette.divider}`,
      }}
    >
      <Container maxWidth='lg'>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, py: 1.5, flexWrap: 'wrap' }}>
          <NextLink href='/' style={{ display: 'flex', color: 'inherit' }} aria-label='Home'>
            <Box sx={{ color: 'text.secondary', display: 'flex' }}>
              <HomeIcon />
            </Box>
          </NextLink>
          {crumbs.map((crumb) => (
            <Box key={`${crumb.label}-${crumb.href ?? 'current'}`} sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <ChevronIcon />
              {crumb.href ? (
                <NextLink href={crumb.href} style={{ textDecoration: 'none' }}>
                  <Typography
                    sx={{
                      fontSize: 13.5,
                      fontWeight: 600,
                      color: 'primary.main',
                      '&:hover': { textDecoration: 'underline' },
                    }}
                  >
                    {crumb.label}
                  </Typography>
                </NextLink>
              ) : (
                <Typography
                  sx={{
                    fontSize: 13.5,
                    fontWeight: 700,
                    color: 'text.primary',
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    maxWidth: { xs: 200, sm: 400, md: 600 },
                  }}
                >
                  {crumb.label}
                </Typography>
              )}
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  )
}

export default PageBreadcrumbs
