'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import Image from 'next/image'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="bg-primary text-primary-foreground shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="/placeholder.svg?height=40&width=40"
            alt="Aringa Secondary School Logo"
            width={40}
            height={40}
            className="rounded-full bg-white"
          />
          <span className="text-2xl font-bold">Aringa Secondary School</span>
        </Link>
        <nav className="hidden md:flex space-x-4">
          <Link href="/" className="text-primary-foreground hover:text-accent transition-colors duration-300 hover:underline">Home</Link>
          <Link href="/about" className="text-primary-foreground hover:text-accent transition-colors duration-300 hover:underline">About Us</Link>
          <Link href="/academics" className="text-primary-foreground hover:text-accent transition-colors duration-300 hover:underline">Academics</Link>
          <Link href="/news-and-events" className="text-primary-foreground hover:text-accent transition-colors duration-300 hover:underline">News & Events</Link>
          <Link href="/blog" className="text-primary-foreground hover:text-accent transition-colors duration-300 hover:underline">Blog</Link>
          <Link href="/contact" className="text-primary-foreground hover:text-accent transition-colors duration-300 hover:underline">Contact</Link>
        </nav>
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>
      {isOpen && (
        <motion.nav
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden bg-background"
        >
          <div className="container mx-auto px-4 py-2 flex flex-col space-y-2">
            <Link href="/" className="text-primary hover:text-accent transition-colors duration-300 hover:underline">Home</Link>
            <Link href="/about" className="text-primary hover:text-accent transition-colors duration-300 hover:underline">About Us</Link>
            <Link href="/academics" className="text-primary hover:text-accent transition-colors duration-300 hover:underline">Academics</Link>
            <Link href="/news-and-events" className="text-primary hover:text-accent transition-colors duration-300 hover:underline">News & Events</Link>
            <Link href="/blog" className="text-primary hover:text-accent transition-colors duration-300 hover:underline">Blog</Link>
            <Link href="/contact" className="text-primary hover:text-accent transition-colors duration-300 hover:underline">Contact</Link>
          </div>
        </motion.nav>
      )}
    </header>
  )
}

export default Header

