'use client'

import React, { FC, ReactNode, RefObject, useEffect, useRef, useState } from 'react'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import ClickAwayListener from '@mui/material/ClickAwayListener'
import { AnimatePresence, motion } from 'framer-motion'

interface Props {
  label: string
  children: ReactNode
  headerRef: RefObject<HTMLDivElement | null>
}

const CLOSE_DELAY = 150

const NavDropdown: FC<Props> = ({ label, children, headerRef }) => {
  const [open, setOpen] = useState(false)
  const [top, setTop] = useState(0)
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

  const clearCloseTimer = () => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current)
      closeTimer.current = null
    }
  }

  const scheduleClose = () => {
    clearCloseTimer()
    closeTimer.current = setTimeout(() => setOpen(false), CLOSE_DELAY)
  }

  const handleOpen = () => {
    clearCloseTimer()
    setOpen(true)
  }

  // Track the header bar's bottom edge so the full-width panel sits
  // flush beneath it, whether floating or not.
  useEffect(() => {
    if (!open || !headerRef.current) return

    const updateTop = () => {
      const rect = headerRef.current?.getBoundingClientRect()
      if (rect) setTop(rect.bottom)
    }

    updateTop()

    const observer = new ResizeObserver(updateTop)
    observer.observe(headerRef.current)
    window.addEventListener('scroll', updateTop)
    window.addEventListener('resize', updateTop)

    return () => {
      observer.disconnect()
      window.removeEventListener('scroll', updateTop)
      window.removeEventListener('resize', updateTop)
    }
  }, [open, headerRef])

  return (
    <ClickAwayListener onClickAway={() => setOpen(false)}>
      <Box
        sx={{ position: 'relative', display: 'inline-block' }}
        onMouseEnter={handleOpen}
        onMouseLeave={scheduleClose}
      >
        <Box
          component='button'
          type='button'
          onClick={() => setOpen((prev) => !prev)}
          onFocus={handleOpen}
          aria-expanded={open}
          sx={{
            font: 'inherit',
            cursor: 'pointer',
            border: 'none',
            background: 'transparent',
            py: 0.8,
            px: 1.8,
            mx: 0.4,
            borderRadius: 10,
            color: open ? '#fbfbfb' : 'text.primary',
            backgroundColor: open ? 'primary.main' : 'transparent',
            fontSize: 14,
            fontWeight: 600,
            display: 'inline-flex',
            alignItems: 'center',
            gap: 0.5,
            transition: (theme) =>
              theme.transitions.create(['background-color', 'color']),
            '&:hover': {
              backgroundColor: 'primary.main',
              color: '#fbfbfb',
            },
          }}
        >
          {label}
          <Box
            component='svg'
            viewBox='0 0 24 24'
            sx={{
              width: 14,
              height: 14,
              transform: open ? 'rotate(180deg)' : 'rotate(0deg)',
              transition: (theme) => theme.transitions.create(['transform']),
            }}
          >
            <path
              d='M6 9l6 6 6-6'
              fill='none'
              stroke='currentColor'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
          </Box>
        </Box>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, clipPath: 'inset(0% 0% 100% 0%)' }}
              animate={{ opacity: 1, clipPath: 'inset(0% 0% 0% 0%)' }}
              exit={{ opacity: 0, clipPath: 'inset(0% 0% 100% 0%)' }}
              transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
              style={{
                position: 'fixed',
                top,
                left: 0,
                width: '100vw',
                zIndex: 1200,
              }}
              onMouseEnter={handleOpen}
              onMouseLeave={scheduleClose}
            >
              <Box
                sx={{
                  width: '100%',
                  boxShadow: 6,
                  backgroundColor: 'background.paper',
                  borderBottom: (theme) => `1px solid ${theme.palette.divider}`,
                }}
                onClick={() => setOpen(false)}
              >
                <Container maxWidth='lg' sx={{ py: 4 }}>
                  {children}
                </Container>
              </Box>
            </motion.div>
          )}
        </AnimatePresence>
      </Box>
    </ClickAwayListener>
  )
}

export default NavDropdown
