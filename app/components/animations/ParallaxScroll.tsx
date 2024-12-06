'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { ReactNode } from 'react'

interface ParallaxScrollProps {
  children: ReactNode
  speed?: number
}

export const ParallaxScroll: React.FC<ParallaxScrollProps> = ({ 
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

