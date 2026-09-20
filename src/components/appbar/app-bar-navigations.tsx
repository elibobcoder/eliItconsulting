'use client'

import React, { FC, memo, ReactElement } from 'react'

// components
import Link from 'next/link'
import Box from '@mui/material/Box'
import MuiLink from '@mui/material/Link'
import Typography from '@mui/material/Typography'
import NavDropdown from './nav-dropdown'
import {
  ServicesMegaPanel,
  TechnologiesMegaPanel,
  IndustriesMegaPanel,
  AboutDropdownPanel,
} from './mega-menu-panels'

// interfaces
import { Theme } from '@mui/material/styles'

// hooks
import { usePathname } from 'next/navigation'

interface LinkItemProps extends Props {
  label: string
  path: string
  icon?: ReactElement
}

const LinkItem: FC<LinkItemProps> = ({ label, path, icon }: LinkItemProps) => {
  const pathName = usePathname()
  return (
    <MuiLink
      href={path}
      component={Link}
      sx={{
        py: 0.8,
        px: 1.8,
        mx: 0.4,
        borderRadius: 10,
        cursor: 'pointer',
        overflow: 'hidden',
        alignItems: 'center',
        position: 'relative',
        color: 'text.primary',
        textDecoration: 'none',
        display: 'inline-block',
        // Icon
        '& svg': {
          fontSize: 18,
          transform: 'translateX(-32px)',
          position: 'absolute',
          top: '8px',
          transition: (theme: Theme) =>
            theme.transitions.create(['transform', 'margin']),
        },

        // Styles for active menu
        ...(pathName === path && {
          backgroundColor: 'primary.main',
          color: '#fbfbfb',
        }),

        '&:hover': {
          backgroundColor: 'primary.main',
          color: '#fbfbfb',
          '& svg': {
            transform: 'translateX(0px)',
          },
          '& p': {
            marginLeft: '26px',
          },
        },
      }}
    >
      {icon}
      <Typography
        variant='h6'
        component='p'
        sx={{
          fontSize: 14,
          display: 'inline-block',
          color: 'inherit',
          marginLeft: '0',
          transition: (theme: Theme) => theme.transitions.create(['margin']),
        }}
      >
        {label}
      </Typography>
    </MuiLink>
  )
}
const MemoizedLinkItem = memo(LinkItem)

interface Props {}

const AppBarNavigation: FC<Props> = () => {
  return (
    <Box
      sx={{
        mx: 'auto',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <NavDropdown label='Services' panelWidth={620}>
        <ServicesMegaPanel />
      </NavDropdown>
      <NavDropdown label='Technologies' panelWidth={480}>
        <TechnologiesMegaPanel />
      </NavDropdown>
      <NavDropdown label='Industries' panelWidth={440}>
        <IndustriesMegaPanel />
      </NavDropdown>
      <NavDropdown label='About' panelWidth={200}>
        <AboutDropdownPanel />
      </NavDropdown>
      <MemoizedLinkItem label='Our Work' path='/portfolio' />
      <MemoizedLinkItem label='Contact' path='/contact' />
    </Box>
  )
}

export default memo(AppBarNavigation)
