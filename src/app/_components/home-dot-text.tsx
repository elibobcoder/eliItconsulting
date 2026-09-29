'use client'

import React, { useEffect, useRef } from 'react'
import Box from '@mui/material/Box'

interface Dot {
  homeX: number
  homeY: number
  x: number
  y: number
}

const TEXT = 'ELI IT CONSULTING'
const DOT_STEP = 6
const DOT_RADIUS = 1.5
const REPEL_RADIUS = 50
const REPEL_STRENGTH = 14
const EASE = 0.12

const buildDots = (width: number, height: number): Dot[] => {
  if (width <= 0 || height <= 0) return []

  const off = document.createElement('canvas')
  off.width = width
  off.height = height
  const octx = off.getContext('2d', { willReadFrequently: true })
  if (!octx) return []

  octx.textBaseline = 'middle'
  octx.textAlign = 'center'

  let fontSize = height * 0.62
  let measured = 0
  do {
    octx.font = `900 ${fontSize}px Arial, "Helvetica Neue", sans-serif`
    measured = octx.measureText(TEXT).width
    if (measured > width * 0.94) fontSize -= 2
  } while (measured > width * 0.94 && fontSize > 8)

  octx.fillStyle = '#fff'
  octx.fillText(TEXT, width / 2, height / 2)

  const { data } = octx.getImageData(0, 0, width, height)
  const dots: Dot[] = []
  for (let y = 0; y < height; y += DOT_STEP) {
    for (let x = 0; x < width; x += DOT_STEP) {
      const alpha = data[(y * width + x) * 4 + 3]
      if (alpha > 128) {
        dots.push({ homeX: x, homeY: y, x, y })
      }
    }
  }
  return dots
}

const HomeDotText = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const dotsRef = useRef<Dot[]>([])
  const mouseRef = useRef({ x: -9999, y: -9999 })
  const sizeRef = useRef({ width: 0, height: 0, dpr: 1 })
  const rafRef = useRef(0)

  useEffect(() => {
    const container = containerRef.current
    const canvas = canvasRef.current
    if (!container || !canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let resizeTimer: ReturnType<typeof setTimeout>

    const setup = () => {
      const rect = container.getBoundingClientRect()
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      const width = Math.max(1, Math.round(rect.width))
      const height = Math.max(1, Math.round(rect.height))
      sizeRef.current = { width, height, dpr }
      canvas.width = width * dpr
      canvas.height = height * dpr
      canvas.style.width = `${width}px`
      canvas.style.height = `${height}px`
      dotsRef.current = buildDots(width, height)
    }

    setup()

    const debouncedResize = () => {
      clearTimeout(resizeTimer)
      resizeTimer = setTimeout(setup, 200)
    }
    window.addEventListener('resize', debouncedResize)

    const setMouseFromClient = (clientX: number, clientY: number) => {
      const rect = canvas.getBoundingClientRect()
      mouseRef.current = { x: clientX - rect.left, y: clientY - rect.top }
    }
    const onMouseMove = (e: MouseEvent) => setMouseFromClient(e.clientX, e.clientY)
    const onTouchMove = (e: TouchEvent) => {
      if (e.touches[0]) setMouseFromClient(e.touches[0].clientX, e.touches[0].clientY)
    }
    const onLeave = () => {
      mouseRef.current = { x: -9999, y: -9999 }
    }

    canvas.addEventListener('mousemove', onMouseMove)
    canvas.addEventListener('mouseleave', onLeave)
    canvas.addEventListener('touchmove', onTouchMove, { passive: true })
    canvas.addEventListener('touchend', onLeave)

    const render = () => {
      const { width, height, dpr } = sizeRef.current
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      ctx.clearRect(0, 0, width, height)
      ctx.fillStyle = '#fbfbfb'

      const mouse = mouseRef.current
      const dots = dotsRef.current
      for (let i = 0; i < dots.length; i++) {
        const dot = dots[i]
        const dx = dot.x - mouse.x
        const dy = dot.y - mouse.y
        const dist = Math.sqrt(dx * dx + dy * dy)
        if (dist < REPEL_RADIUS) {
          const force = (1 - dist / REPEL_RADIUS) * REPEL_STRENGTH
          const angle = Math.atan2(dy, dx)
          dot.x += Math.cos(angle) * force
          dot.y += Math.sin(angle) * force
        }
        dot.x += (dot.homeX - dot.x) * EASE
        dot.y += (dot.homeY - dot.y) * EASE

        ctx.beginPath()
        ctx.arc(dot.x, dot.y, DOT_RADIUS, 0, Math.PI * 2)
        ctx.fill()
      }

      rafRef.current = requestAnimationFrame(render)
    }
    rafRef.current = requestAnimationFrame(render)

    return () => {
      cancelAnimationFrame(rafRef.current)
      clearTimeout(resizeTimer)
      window.removeEventListener('resize', debouncedResize)
      canvas.removeEventListener('mousemove', onMouseMove)
      canvas.removeEventListener('mouseleave', onLeave)
      canvas.removeEventListener('touchmove', onTouchMove)
      canvas.removeEventListener('touchend', onLeave)
    }
  }, [])

  return (
    <Box
      component='section'
      id='home-dot-text'
      sx={{
        width: '100%',
        py: { xs: 8, md: 12 },
        backgroundColor: '#0a0b1c',
      }}
    >
      <Box
        ref={containerRef}
        sx={{
          position: 'relative',
          width: '100%',
          maxWidth: 1100,
          mx: 'auto',
          height: { xs: 110, sm: 150, md: 200 },
          px: 2,
        }}
      >
        <Box
          component='canvas'
          ref={canvasRef}
          sx={{ position: 'absolute', inset: 0, width: '100%', height: '100%', cursor: 'default' }}
        />
      </Box>
    </Box>
  )
}

export default HomeDotText
