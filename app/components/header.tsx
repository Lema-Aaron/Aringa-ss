'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import Image from 'next/image'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="bg-[#0088FF] text-white shadow-md">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-4">
          <div className="relative w-12 h-12 bg-white rounded-full overflow-hidden flex items-center justify-center">
            <Image
              src="/logo.png?height=48&width=48"
              alt="Aringa Secondary School Logo"
              width={48}
              height={48}
              className="object-cover"
            />
          </div>
          <span className="text-2xl font-bold tracking-tight">Aringa Secondary School</span>
        </Link>
        <nav className="hidden md:flex items-center space-x-8">
          <Link 
            href="/" 
            className="text-white hover:text-white/90 transition-colors duration-200 text-sm font-medium hover:underline underline-offset-4"
          >
            Home
          </Link>
          <Link 
            href="/about" 
            className="text-white hover:text-white/90 transition-colors duration-200 text-sm font-medium hover:underline underline-offset-4"
          >
            About Us
          </Link>
          <Link 
            href="/academics" 
            className="text-white hover:text-white/90 transition-colors duration-200 text-sm font-medium hover:underline underline-offset-4"
          >
            Academics
          </Link>
          <Link 
            href="/news-and-events" 
            className="text-white hover:text-white/90 transition-colors duration-200 text-sm font-medium hover:underline underline-offset-4"
          >
            News & Events
          </Link>
          <Link 
            href="/blog" 
            className="text-white hover:text-white/90 transition-colors duration-200 text-sm font-medium hover:underline underline-offset-4"
          >
            Blog
          </Link>
          <Link 
            href="/contact" 
            className="text-white hover:text-white/90 transition-colors duration-200 text-sm font-medium hover:underline underline-offset-4"
          >
            Contact
          </Link>
        </nav>
        <button 
          className="md:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {isOpen && (
        <motion.nav
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden bg-white border-t"
        >
          <div className="container mx-auto px-6 py-4 flex flex-col space-y-4">
            <Link 
              href="/" 
              className="text-gray-900 hover:text-[#0088FF] transition-colors duration-200 hover:underline underline-offset-4"
            >
              Home
            </Link>
            <Link 
              href="/about" 
              className="text-gray-900 hover:text-[#0088FF] transition-colors duration-200 hover:underline underline-offset-4"
            >
              About Us
            </Link>
            <Link 
              href="/academics" 
              className="text-gray-900 hover:text-[#0088FF] transition-colors duration-200 hover:underline underline-offset-4"
            >
              Academics
            </Link>
            <Link 
              href="/news-and-events" 
              className="text-gray-900 hover:text-[#0088FF] transition-colors duration-200 hover:underline underline-offset-4"
            >
              News & Events
            </Link>
            <Link 
              href="/blog" 
              className="text-gray-900 hover:text-[#0088FF] transition-colors duration-200 hover:underline underline-offset-4"
            >
              Blog
            </Link>
            <Link 
              href="/contact" 
              className="text-gray-900 hover:text-[#0088FF] transition-colors duration-200 hover:underline underline-offset-4"
            >
              Contact
            </Link>
          </div>
        </motion.nav>
      )}
    </header>
  )
}

export default Header

