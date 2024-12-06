'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { ReactNode } from 'react'

interface AnimationProps {
  children: ReactNode
  delay?: number
  duration?: number
}

export const FadeIn: React.FC<AnimationProps & { direction?: 'up' | 'down' | 'left' | 'right' }> = ({ 
  children, 
  delay = 0, 
  duration = 0.5, 
  direction = 'up' 
}) => {
  const directions = {
    up: { y: 20 },
    down: { y: -20 },
    left: { x: 20 },
    right: { x: -20 }
  }

  return (
    <motion.div
      initial={{ opacity: 0, ...directions[direction] }}
      animate={{ opacity: 1, y: 0, x: 0 }}
      transition={{ duration, delay }}
    >
      {children}
    </motion.div>
  )
}

export const ScaleIn: React.FC<AnimationProps> = ({ 
  children, 
  delay = 0, 
  duration = 0.5 
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration, delay }}
    >
      {children}
    </motion.div>
  )
}

export const FloatingElement: React.FC<AnimationProps & { yOffset?: number }> = ({ 
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

export const ParallaxScroll: React.FC<AnimationProps & { speed?: number }> = ({ 
  children, 
  speed = 0.5 
}) => {
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], ['0%', `${speed * 100}%`])

  return (
    <motion.div style={{ y }}>
      {children}
    </motion.div>
  )
}

