import Link from 'next/link'
import { MapPin, Phone, Mail, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground mt-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Aringa Secondary School</h3>
            <p className="mb-4">Give light to darkness</p>
            <div className="flex space-x-4">
              <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors duration-300 hover:underline">
                <Facebook size={24} />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors duration-300 hover:underline">
                <Twitter size={24} />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors duration-300 hover:underline">
                <Instagram size={24} />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors duration-300 hover:underline">
                <Linkedin size={24} />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/" className="hover:text-accent transition-colors duration-300 hover:underline">Home</Link></li>
              <li><Link href="/about" className="hover:text-accent transition-colors duration-300 hover:underline">About Us</Link></li>
              <li><Link href="/academics" className="hover:text-accent transition-colors duration-300 hover:underline">Academics</Link></li>
              <li><Link href="/news-and-events" className="hover:text-accent transition-colors duration-300 hover:underline">News & Events</Link></li>
              <li><Link href="/blog" className="hover:text-accent transition-colors duration-300 hover:underline">Blog</Link></li>
              <li><Link href="/contact" className="hover:text-accent transition-colors duration-300 hover:underline">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <div className="flex items-start mb-2">
              <MapPin className="mr-2 mt-1" size={18} />
              <p>P.O BOX 23, Yumbe, Uganda</p>
            </div>
            <div className="flex items-center mb-2">
              <Phone className="mr-2" size={18} />
              <p>Phone: +256 782 107336</p>
            </div>
            <div className="flex items-center mb-2">
              <Mail className="mr-2" size={18} />
              <p>Email: aringass@yahoo.com</p>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p>&copy; {new Date().getFullYear()} Aringa Secondary School. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

