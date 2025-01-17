'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import Gallery from './components/gallery'
import Testimonials from './components/testimonials'


const images = [
  { src: '/prefects.jpg?height=600&width=1200&text=School+Building', alt: 'Aringa Secondary School Building' },
  { src: '/students.jpg?height=600&width=1200&text=Students+in+Class', alt: 'Students in a classroom' },
  { src: '/tycondo.png?height=600&width=1200&text=Sports+Field', alt: 'School sports field' },
]

export default function Home() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div>
      {/* Hero Section with Carousel */}
      <section className="relative h-[600px] overflow-hidden">
        <AnimatePresence initial={false}>
          <motion.div
            key={currentImageIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0"
          >
            <Image
              src={images[currentImageIndex].src}
              alt={images[currentImageIndex].alt}
              fill
              style={{ objectFit: "cover" }}
              quality={100}
              priority
            />
          </motion.div>
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-secondary/80" />
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center text-white"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-4 hero-text-shadow">Welcome to Aringa Secondary School</h1>
            <p className="text-xl mb-8">Give light to darkness</p>
            <Button asChild size="lg" variant="secondary">
              <Link 
                href="#about" 
                className="text-white bg-gradient-to-r from-blue-500 to-purple-500 px-6 py-3 rounded-lg shadow-lg hover:from-purple-500 hover:to-blue-500 hover:scale-105 transform transition duration-300 ease-in-out"
  >
                  Learn More
              </Link>
            </Button>

          </motion.div>
        </div>
        {/* Carousel Indicators */}
        <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
          {images.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full ${
                index === currentImageIndex ? 'bg-white' : 'bg-white/50'
              }`}
              onClick={() => setCurrentImageIndex(index)}
              aria-label={`Go to slide ${index + 1}`}
              
            />
          ))}
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">About Our School</h2>
            <p className="text-xl text-muted-foreground">Discover the Aringa Secondary School difference</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Image src="/students4.jpg?height=400&width=600" alt="School building" width={600} height={400} className="rounded-lg" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="mb-4">At Aringa Secondary School, we are committed to providing a nurturing and challenging educational environment that empowers students to become lifelong learners and responsible global citizens.</p>
              <h3 className="text-2xl font-bold mb-4">Our Values</h3>
              <ul className="list-disc list-inside mb-4">
                <li>Excellence in Education</li>
                <li>Integrity and Character</li>
                <li>Diversity and Inclusion</li>
                <li>Community Engagement</li>
              </ul>
              <p className="mb-4">Founded in 1985, Aringa Secondary School has a rich history of academic excellence and community involvement. Our dedicated staff and state-of-the-art facilities provide students with the tools they need to succeed in the 21st century.</p>
              <Link href="/about">
                <Button 
                  variant="outline"
                  className="text-white bg-gradient-to-r from-blue-500 to-purple-500 px-6 py-3 rounded-lg shadow-lg hover:from-purple-500 hover:to-blue-500 hover:scale-105 transform transition duration-300 ease-in-out"
                  style={{ backgroundColor: '#3498db', color: 'white', borderRadius: '8px' }}
      >
                  Learn More About Us
      </Button>
    </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Academics Section */}
      <section id="academics" className="bg-white py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Our Academic Programs</h2>
            <p className="text-xl text-muted-foreground">Explore our diverse range of academic offerings</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Sciences', description: 'Our science program offers hands-on learning experiences in biology, chemistry, and physics, preparing students for careers in STEM fields.' },
              { title: 'Humanities', description: 'From literature to history and social studies, our humanities program cultivates critical thinking and communication skills.' },
              { title: 'Arts', description: 'Our arts program nurtures creativity through visual arts, music, and drama, allowing students to express themselves and develop their talents.' }
            ].map((program, index) => (
              <motion.div
                key={program.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="card-hover">
                  <CardHeader>
                    <CardTitle>{program.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>{program.description}</CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <Gallery />

      {/* News & Events Section */}
      <section id="news" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">News & Events</h2>
            <p className="text-xl text-muted-foreground">Stay up to date with the latest happenings at Aringa Secondary School</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: 'Annual Science Fair', date: 'May 15, 2023', description: 'Students showcase their innovative projects and compete for top honors in our annual science fair.' },
              { title: 'Parent-Teacher Conference', date: 'June 5, 2023', description: 'Join us for our bi-annual parent-teacher conference to discuss your child\'s progress and goals.' },
              { title: 'Sports Day', date: 'July 10, 2023', description: 'A day of friendly competition and school spirit as students participate in various athletic events.' },
            ].map((event, index) => (
              <motion.div
                key={event.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="card-hover">
                  <CardHeader>
                    <CardTitle>{event.title}</CardTitle>
                    <CardDescription>{event.date}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>{event.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <Testimonials />
      {/* CTA Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="bg-primary text-primary-foreground py-20"
      >
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Interested in Joining Aringa Secondary School?</h2>
          <p className="text-xl mb-8">Contact us to learn more about our application process and how you can become part of Aringa Secondary School.</p>
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            
            <Button 
              asChild 
              size="lg" 
              variant="secondary" 
              className="text-white bg-gradient-to-r from-blue-500 to-purple-500 px-6 py-3 rounded-lg shadow-lg hover:from-purple-500 hover:to-blue-500 hover:scale-105 transform transition duration-300 ease-in-out">
              <Link href="/contact">Contact Us</Link>
            </Button>
          </motion.div>
        </div>
      </motion.section>

      
    </div>
  )
}
