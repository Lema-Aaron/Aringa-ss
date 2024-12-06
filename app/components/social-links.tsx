import Link from 'next/link'
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'

export default function SocialLinks() {
  return (
    <div className="flex space-x-4 mt-4">
      <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary-dark">
        <Facebook size={24} />
        <span className="sr-only">Facebook</span>
      </Link>
      <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary-dark">
        <Twitter size={24} />
        <span className="sr-only">Twitter</span>
      </Link>
      <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary-dark">
        <Instagram size={24} />
        <span className="sr-only">Instagram</span>
      </Link>
      <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary-dark">
        <Linkedin size={24} />
        <span className="sr-only">LinkedIn</span>
      </Link>
    </div>
  )
}

