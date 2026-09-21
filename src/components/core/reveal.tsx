'use client'

import React, { FC, ReactNode } from 'react'
import { motion } from 'framer-motion'

interface RevealProps {
  children: ReactNode
  index?: number
  y?: number
  duration?: number
  once?: boolean
  amount?: number
  className?: string
}

const Reveal: FC<RevealProps> = ({
  children,
  index = 0,
  y = 28,
  duration = 0.55,
  once = true,
  amount = 0.2,
  className,
}) => {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, amount }}
      transition={{
        duration,
        delay: Math.min(index, 8) * 0.08,
        ease: [0.22, 1, 0.36, 1],
      }}
      style={{ width: '100%' }}
    >
      {children}
    </motion.div>
  )
}

export default Reveal
