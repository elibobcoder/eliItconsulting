'use client'

import React, { FC, ReactNode, useRef, useState } from 'react'
import Box from '@mui/material/Box'
import ClickAwayListener from '@mui/material/ClickAwayListener'
import { AnimatePresence, motion } from 'framer-motion'

interface Props {
  label: string
  children: ReactNode
  panelWidth?: number
}

const CLOSE_DELAY = 150

const NavDropdown: FC<Props> = ({ label, children, panelWidth = 420 }) => {
  const [open, setOpen] = useState(false)
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
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 8 }}
              transition={{ duration: 0.18 }}
              style={{
                position: 'absolute',
                top: 'calc(100% + 14px)',
                left: '50%',
                transform: 'translateX(-50%)',
                zIndex: 1200,
              }}
              onMouseEnter={handleOpen}
              onMouseLeave={scheduleClose}
            >
              <Box
                sx={{
                  width: panelWidth,
                  maxWidth: '80vw',
                  borderRadius: 4,
                  boxShadow: 6,
                  backgroundColor: 'background.paper',
                  border: (theme) => `1px solid ${theme.palette.divider}`,
                  p: 3,
                }}
                onClick={() => setOpen(false)}
              >
                {children}
              </Box>
            </motion.div>
          )}
        </AnimatePresence>
      </Box>
    </ClickAwayListener>
  )
}

export default NavDropdown
