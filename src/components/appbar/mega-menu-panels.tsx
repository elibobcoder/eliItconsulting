'use client'

import React, { FC } from 'react'
import Link from 'next/link'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'

// constants
import {
  aboutMegaMenu,
  servicesMegaMenu,
  technologiesMegaMenu,
  industriesMegaMenu,
} from '@/constants/menus'
import TechFlowColumn from './tech-flow-column'

const IntroColumn: FC<{ intro: IMegaMenuIntro }> = ({ intro }) => (
  <Box sx={{ pr: 3, minWidth: 180 }}>
    <Typography sx={{ fontSize: 20, fontWeight: 800, mb: 1 }}>
      {intro.title}.
    </Typography>
    <Typography
      sx={{ fontSize: 13, color: 'text.secondary', mb: 2, lineHeight: 1.6 }}
    >
      {intro.descriptionLinkLabel && intro.descriptionLinkPath ? (
        <>
          {intro.description}{' '}
          <Link
            href={intro.descriptionLinkPath}
            style={{ color: 'inherit', textDecoration: 'underline' }}
          >
            {intro.descriptionLinkLabel}
          </Link>
          , built around your needs:
        </>
      ) : (
        intro.description
      )}
    </Typography>
    {intro.quickLinks && (
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.2, mb: 2.5 }}>
        {intro.quickLinks.map((item) => (
          <Link
            key={item.path}
            href={item.path}
            style={{
              fontSize: 14,
              fontWeight: 600,
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            {item.label}
          </Link>
        ))}
      </Box>
    )}
    <Link
      href={intro.ctaPath}
      style={{
        fontSize: 13,
        fontWeight: 700,
        color: 'inherit',
        textDecoration: 'none',
        borderBottom: '2px solid currentColor',
      }}
    >
      {intro.ctaLabel} &rarr;
    </Link>
  </Box>
)

const LinkColumn: FC<{ column: IMegaMenuLinkColumn }> = ({ column }) => (
  <Box>
    <Typography
      sx={{
        fontSize: 11,
        fontWeight: 700,
        letterSpacing: 0.5,
        color: 'text.secondary',
        mb: 1.5,
      }}
    >
      {column.heading}
    </Typography>
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.2 }}>
      {column.links.map((link) => (
        <Link
          key={link.label}
          href={link.path}
          style={{
            fontSize: 14,
            fontWeight: 500,
            color: 'inherit',
            textDecoration: 'none',
          }}
        >
          {link.label}
        </Link>
      ))}
    </Box>
  </Box>
)

const TagColumn: FC<{ column: IMegaMenuTagColumn }> = ({ column }) => (
  <Box>
    {column.heading && (
      <Typography
        sx={{
          fontSize: 11,
          fontWeight: 700,
          letterSpacing: 0.5,
          color: 'text.secondary',
          mb: 1.5,
        }}
      >
        {column.heading}
      </Typography>
    )}
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.2 }}>
      {column.tags.map((tag) => (
        <Typography key={tag} sx={{ fontSize: 14, color: 'text.primary' }}>
          {tag}
        </Typography>
      ))}
    </Box>
  </Box>
)

export const ServicesMegaPanel = () => (
  <Grid container spacing={3}>
    <Grid size={4}>
      <IntroColumn intro={servicesMegaMenu.intro} />
    </Grid>
    {servicesMegaMenu.columns.map((column) => (
      <Grid size={8 / servicesMegaMenu.columns.length} key={column.heading}>
        <LinkColumn column={column} />
      </Grid>
    ))}
  </Grid>
)

export const TechnologiesMegaPanel = () => (
  <Grid container spacing={3}>
    <Grid size={4}>
      <IntroColumn intro={technologiesMegaMenu.intro} />
    </Grid>
    {technologiesMegaMenu.columns.map((column, index) => (
      <Grid size={8 / technologiesMegaMenu.columns.length} key={index}>
        <TechFlowColumn
          heading={column.heading}
          tags={column.tags}
          direction={index % 2 === 0 ? 'down' : 'up'}
        />
      </Grid>
    ))}
  </Grid>
)

export const IndustriesMegaPanel = () => (
  <Grid container spacing={3}>
    <Grid size={5}>
      <IntroColumn intro={industriesMegaMenu.intro} />
    </Grid>
    {industriesMegaMenu.columns.map((column, index) => (
      <Grid size={7 / industriesMegaMenu.columns.length} key={index}>
        <TagColumn column={column} />
      </Grid>
    ))}
  </Grid>
)

export const AboutMegaPanel = () => (
  <Grid container spacing={3}>
    <Grid size={4}>
      <IntroColumn intro={aboutMegaMenu.intro} />
    </Grid>
    {aboutMegaMenu.columns.map((column) => (
      <Grid size={8 / aboutMegaMenu.columns.length} key={column.heading}>
        <LinkColumn column={column} />
      </Grid>
    ))}
  </Grid>
)
