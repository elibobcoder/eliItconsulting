'use client'

import React, { FC, Fragment, useCallback, useMemo, useRef } from 'react'

// components
import NextLink from 'next/link'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import AppBarNavigation from './app-bar-navigations'
import AppBarSwitchDarkMode from './switch-dark-mode'
import AnimatedHamburgerMenu from './animated-hamburger-menu'
import { StyledButton } from '@/components/core'

// hooks
import { useWindowScroll } from 'react-use'
import { useMediaQuery } from '@mui/material'
import { useTheme, Theme } from '@mui/material/styles'
import { usePathname, useRouter } from 'next/navigation'

// assets
import Logo from '@/assets/logo.svg'

const AppBar: FC = () => {
  const theme = useTheme()
  const headerBarRef = useRef<HTMLDivElement>(null)
  const { y: scrollY } = useWindowScroll()
  const mobileMatches = useMediaQuery(theme.breakpoints.down('md'))

  const router = useRouter()
  const pathName = usePathname()

  const isScrolled = useMemo(() => scrollY > 20, [scrollY])

  const onClickLogo = useCallback(() => {
    if (typeof window !== 'undefined') {
      if (pathName === '/') {
        window.scrollTo({ top: 0, behavior: 'smooth' })
      } else {
        router.push('/')
      }
    }
  }, [pathName, router])

  return (
    <Fragment>
      <Box
        ref={headerBarRef}
        component='header'
        sx={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          zIndex: 1100, // zIndex @mui AppBar
          backgroundColor: 'background.paper',
          borderBottom: (theme: Theme) =>
            isScrolled ? `1px solid ${theme.palette.divider}` : '1px solid transparent',
          boxShadow: isScrolled ? 2 : 0,
          transition: (theme: Theme) =>
            theme.transitions.create(['box-shadow', 'border-color']),
        }}
      >
        <Container maxWidth='lg'>
          <Box
            sx={{
              py: { xs: 1.5, md: 2 },
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <Box
              onClick={onClickLogo}
              aria-label={'Back to home'}
              component={Logo}
              sx={{
                width: 'auto',
                height: 36,
                cursor: 'pointer',
              }}
            />
            {mobileMatches ? (
              <Box sx={{ ml: 'auto', display: 'flex', alignItems: 'center' }}>
                <AnimatedHamburgerMenu />
              </Box>
            ) : (
              <>
                <AppBarNavigation headerRef={headerBarRef} />
                <AppBarSwitchDarkMode />
                <Box sx={{ ml: 1.5 }}>
                  <NextLink href='/contact' passHref>
                    <StyledButton variant='contained' color='dark' size='medium'>
                      Schedule a Call
                    </StyledButton>
                  </NextLink>
                </Box>
              </>
            )}
          </Box>
        </Container>
      </Box>
    </Fragment>
  )
}

export default AppBar
