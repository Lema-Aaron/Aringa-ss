'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface FloatingElementProps {
  children: ReactNode
  duration?: number
  yOffset?: number
}

export const FloatingElement: React.FC<FloatingElementProps> = ({ 
  children, 
  duration = 2, 
  yOffset = 10 
}) => {
  return (
    <motion.div
      animate={{
        y: [-yOffset, yOffset, -yOffset],
      }}
      transition={{
        duration: duration,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut"
      }}
    >
      {children}
    </motion.div>
  )
}

