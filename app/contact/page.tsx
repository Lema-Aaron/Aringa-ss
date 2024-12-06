import { Button } from '@/components/ui/button'
import { Facebook, Twitter, Instagram, Linkedin, MapPin, Phone, Mail } from 'lucide-react'
import Link from 'next/link'

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-12 min-h-screen">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
        <p className="text-xl text-gray-600">Get in touch with Aringa Secondary School</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Contact Information */}
        <div>
          <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
          <div className="flex items-start mb-4">
            <MapPin className="mr-2 mt-1 text-primary" />
            <p>123 School Street, Aringa, Uganda</p>
          </div>
          <div className="flex items-center mb-4">
            <Phone className="mr-2 text-primary" />
            <p>+256 123 456 789</p>
          </div>
          <div className="flex items-center mb-4">
            <Mail className="mr-2 text-primary" />
            <p>info@aringasecondary.edu</p>
          </div>
          
          <h2 className="text-2xl font-bold mt-8 mb-6">Office Hours</h2>
          <p className="mb-2">Monday - Friday: 8:00 AM - 4:00 PM</p>
          <p className="mb-2">Saturday: 9:00 AM - 12:00 PM</p>
          <p className="mb-6">Sunday: Closed</p>
          
          <div className="flex space-x-4">
  <Link href="https://facebook.com/aringasecondary" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-primary transition-colors">
    <Facebook size={24} />
    <span className="sr-only">Facebook</span>
  </Link>
  <Link href="https://twitter.com/aringasecondary" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-primary transition-colors">
    <Twitter size={24} />
    <span className="sr-only">Twitter</span>
  </Link>
  <Link href="https://instagram.com/aringasecondary" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-primary transition-colors">
    <Instagram size={24} />
    <span className="sr-only">Instagram</span>
  </Link>
  <Link href="https://linkedin.com/company/aringa-secondary-school" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-primary transition-colors">
    <Linkedin size={24} />
    <span className="sr-only">LinkedIn</span>
  </Link>
</div>
        </div>

        {/* Contact Form */}
        <div>
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-lg mb-2">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full p-3 border rounded-md"
                required
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-lg mb-2">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full p-3 border rounded-md"
                required
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-lg mb-2">Message</label>
              <textarea
                id="message"
                name="message"
                rows={6}
                className="w-full p-3 border rounded-md"
                required
              ></textarea>
            </div>
            
            <Button type="submit" className="w-full md:w-auto px-8">
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </div>
  )
}

