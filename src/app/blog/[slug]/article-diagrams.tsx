import React, { FC } from 'react'
import Box from '@mui/material/Box'

const INK = '#151A23'
const MUTED = '#6B7280'
const GRID = '#E5E7EB'
const PRIMARY = '#1E3FC4'
const PRIMARY_LIGHT = '#D6E0FF'
const SECONDARY = '#0891B2'
const SECONDARY_LIGHT = '#CFFAFE'

const EngagementModelsDiagram: FC = () => {
  const groups = [
    { label: 'Staff Augmentation', mgmt: 90, handoff: 15, x: 90 },
    { label: 'Dedicated Team', mgmt: 55, handoff: 55, x: 300 },
    { label: 'Outsourcing', mgmt: 15, handoff: 90, x: 510 },
  ]
  const baseline = 280
  const top = 60
  const scale = (baseline - top) / 100
  const barWidth = 34
  const gap = 10

  return (
    <Box component='svg' viewBox='0 0 640 340' sx={{ width: '100%', height: 'auto', display: 'block' }}>
      {[0, 25, 50, 75, 100].map((tick) => {
        const y = baseline - tick * scale
        return (
          <React.Fragment key={tick}>
            <line x1={60} y1={y} x2={600} y2={y} stroke={GRID} strokeWidth={1} />
            <text x={50} y={y + 4} fontSize={11} fill={MUTED} textAnchor='end'>
              {tick}%
            </text>
          </React.Fragment>
        )
      })}

      {groups.map((g) => {
        const mgmtHeight = g.mgmt * scale
        const handoffHeight = g.handoff * scale
        const mgmtX = g.x - barWidth - gap / 2
        const handoffX = g.x + gap / 2
        return (
          <React.Fragment key={g.label}>
            <rect x={mgmtX} y={baseline - mgmtHeight} width={barWidth} height={mgmtHeight} fill={PRIMARY} />
            <text x={mgmtX + barWidth / 2} y={baseline - mgmtHeight - 8} fontSize={12} fontWeight={700} fill={INK} textAnchor='middle'>
              {g.mgmt}%
            </text>
            <rect x={handoffX} y={baseline - handoffHeight} width={barWidth} height={handoffHeight} fill={SECONDARY} />
            <text x={handoffX + barWidth / 2} y={baseline - handoffHeight - 8} fontSize={12} fontWeight={700} fill={INK} textAnchor='middle'>
              {g.handoff}%
            </text>
            <text x={g.x} y={baseline + 24} fontSize={13} fontWeight={700} fill={INK} textAnchor='middle'>
              {g.label}
            </text>
          </React.Fragment>
        )
      })}

      <line x1={60} y1={baseline} x2={600} y2={baseline} stroke={INK} strokeWidth={1.5} />

      <rect x={140} y={10} width={12} height={12} fill={PRIMARY} />
      <text x={158} y={20} fontSize={12} fill={INK}>
        Day-to-day management you keep
      </text>
      <rect x={400} y={10} width={12} height={12} fill={SECONDARY} />
      <text x={418} y={20} fontSize={12} fill={INK}>
        How self-contained the engagement is
      </text>
    </Box>
  )
}

const VettingOrderDiagram: FC = () => {
  const steps = [
    { n: '1', title: 'Technical depth', sub: 'Reasons through a real, messy problem' },
    { n: '2', title: 'Communication', sub: 'Explains thinking clearly, without back-and-forth' },
    { n: '3', title: 'Fit', sub: 'Collaborates the way the team actually works' },
  ]
  const boxWidth = 175
  const boxHeight = 130
  const gapX = 45
  const startX = 20
  const y = 40

  return (
    <Box component='svg' viewBox='0 0 640 190' sx={{ width: '100%', height: 'auto', display: 'block' }}>
      {steps.map((step, i) => {
        const x = startX + i * (boxWidth + gapX)
        return (
          <React.Fragment key={step.n}>
            <rect x={x} y={y} width={boxWidth} height={boxHeight} fill='#fff' stroke={GRID} strokeWidth={1.5} />
            <rect x={x} y={y} width={boxWidth} height={4} fill={PRIMARY} />
            <circle cx={x + 28} cy={y + 34} r={16} fill={PRIMARY_LIGHT} />
            <text x={x + 28} y={y + 39} fontSize={14} fontWeight={800} fill={PRIMARY} textAnchor='middle'>
              {step.n}
            </text>
            <text x={x + 16} y={y + 66} fontSize={15} fontWeight={800} fill={INK}>
              {step.title}
            </text>
            {wrapText(step.sub, 24).map((line, li) => (
              <text key={li} x={x + 16} y={y + 88 + li * 16} fontSize={11.5} fill={MUTED}>
                {line}
              </text>
            ))}
            {i < steps.length - 1 && (
              <path
                d={`M ${x + boxWidth + 8} ${y + boxHeight / 2} L ${x + boxWidth + gapX - 8} ${y + boxHeight / 2}`}
                stroke={SECONDARY}
                strokeWidth={2.5}
                markerEnd='url(#arrowhead)'
              />
            )}
          </React.Fragment>
        )
      })}
      <defs>
        <marker id='arrowhead' markerWidth={8} markerHeight={8} refX={6} refY={4} orient='auto'>
          <path d='M0,0 L8,4 L0,8 Z' fill={SECONDARY} />
        </marker>
      </defs>
    </Box>
  )
}

const AutomateAssistMatrixDiagram: FC = () => {
  const size = 150
  const originX = 150
  const originY = 360
  const top = originY - 2 * size
  return (
    <Box component='svg' viewBox='0 0 640 400' sx={{ width: '100%', height: 'auto', display: 'block' }}>
      <rect x={originX} y={originY - size} width={size} height={size} fill={SECONDARY_LIGHT} />
      <rect x={originX + size} y={originY - size} width={size} height={size} fill='#FEE2E2' />
      <rect x={originX} y={top} width={2 * size} height={size} fill='#FEE2E2' />

      <text x={originX + size / 2} y={originY - size / 2 - 6} fontSize={14} fontWeight={800} fill={SECONDARY} textAnchor='middle'>
        AUTOMATE
      </text>
      <text x={originX + size / 2} y={originY - size / 2 + 14} fontSize={11} fill='#0E7490' textAnchor='middle'>
        low cost, fast to notice
      </text>

      <text x={originX + size + size / 2} y={originY - size / 2} fontSize={13} fontWeight={800} fill='#991B1B' textAnchor='middle'>
        KEEP HUMAN
      </text>
      <text x={originX + size} y={top + size / 2} fontSize={13} fontWeight={800} fill='#991B1B' textAnchor='middle'>
        KEEP HUMAN
      </text>

      <line x1={originX} y1={originY} x2={originX} y2={top} stroke={INK} strokeWidth={1.5} />
      <line x1={originX} y1={originY} x2={originX + 2 * size} y2={originY} stroke={INK} strokeWidth={1.5} />

      <text x={originX + size} y={originY + 28} fontSize={12.5} fontWeight={700} fill={INK} textAnchor='middle'>
        Cost of a wrong output &#8594;
      </text>
      <text x={originX - 12} y={originY - size} fontSize={12.5} fontWeight={700} fill={INK} textAnchor='end' transform={`rotate(-90 ${originX - 12} ${originY - size})`}>
        Speed to notice a mistake &#8594;
      </text>

      <text x={originX} y={originY + 16} fontSize={11} fill={MUTED} textAnchor='start'>
        Low
      </text>
      <text x={originX + 2 * size} y={originY + 16} fontSize={11} fill={MUTED} textAnchor='end'>
        High
      </text>
    </Box>
  )
}

const wrapText = (text: string, maxChars: number): string[] => {
  const words = text.split(' ')
  const lines: string[] = []
  let current = ''
  words.forEach((word) => {
    if ((current + ' ' + word).trim().length > maxChars) {
      lines.push(current.trim())
      current = word
    } else {
      current = `${current} ${word}`.trim()
    }
  })
  if (current) lines.push(current.trim())
  return lines
}

export const articleDiagrams: Record<string, { Component: FC; caption: string }> = {
  'engagement-models-comparison': {
    Component: EngagementModelsDiagram,
    caption: 'The real difference between the three models isn’t cost or skill level — it’s how much day-to-day management you keep versus how much you hand off.',
  },
  'vetting-order': {
    Component: VettingOrderDiagram,
    caption: 'Technical depth, communication, and fit are evaluated in a fixed order — not as three equally-weighted, independent checks.',
  },
  'automate-assist-matrix': {
    Component: AutomateAssistMatrixDiagram,
    caption: 'The automate-versus-assist test in one picture: only the low-cost, fast-to-notice quadrant is safe to fully automate.',
  },
}
