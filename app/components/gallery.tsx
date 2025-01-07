'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const images = [
  { src: '/schoolBuilding.jpg?height=400&width=600', alt: 'School building' },
  { src: '/studentsInClass.jpg?height=400&width=600', alt: 'Students in classroom' },
  { src: '/sports.jpg?height=400&width=600', alt: 'sports' },
  { src: '/prefects.jpg?height=400&width=600', alt: 'prefects' },
  { src: '/library.jpg?height=400&width=600', alt: 'Library' },
  { src: '/tycondo.png?height=400&width=600', alt: 'sports' },
]

export default function Gallery() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">School Gallery</h2>
          <p className="text-xl text-muted-foreground">Take a visual tour of our facilities and student life</p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative aspect-video overflow-hidden rounded-lg"
            >
              <Image
                src={image.src}
                alt={image.alt}
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-300 hover:scale-110"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

