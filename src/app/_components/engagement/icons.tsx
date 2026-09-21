import React from 'react'

const base = {
  width: 22,
  height: 22,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 2,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
}

export const RocketIcon = () => (
  <svg {...base}>
    <path d='M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z' />
    <path d='M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z' />
    <path d='M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0' />
    <path d='M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5' />
  </svg>
)

export const ShieldIcon = () => (
  <svg {...base}>
    <path d='M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z' />
  </svg>
)

export const GlobeIcon = () => (
  <svg {...base}>
    <circle cx='12' cy='12' r='10' />
    <line x1='2' y1='12' x2='22' y2='12' />
    <path d='M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z' />
  </svg>
)

export const LayersIcon = () => (
  <svg {...base}>
    <polygon points='12 2 2 7 12 12 22 7 12 2' />
    <polyline points='2 17 12 22 22 17' />
    <polyline points='2 12 12 17 22 12' />
  </svg>
)

export const UsersIcon = () => (
  <svg {...base}>
    <path d='M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2' />
    <circle cx='9' cy='7' r='4' />
    <path d='M23 21v-2a4 4 0 0 0-3-3.87' />
    <path d='M16 3.13a4 4 0 0 1 0 7.75' />
  </svg>
)

export const ClipboardCheckIcon = () => (
  <svg {...base}>
    <rect x='8' y='2' width='8' height='4' rx='1' ry='1' />
    <path d='M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2' />
    <path d='M9 14l2 2 4-4' />
  </svg>
)
