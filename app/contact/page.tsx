'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Facebook, Twitter, Instagram, Linkedin, MapPin, Phone, Mail } from 'lucide-react';
import Link from 'next/link';
import emailjs from 'emailjs-com';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    emailjs
      .send(
        'service_pf4f378', 
        'template_b2wc928', 
        formData,
        'lhy4juQIQE_KMEzo3' 
      )
      .then(() => {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' }); 
      })
      .catch(() => {
        setSubmitStatus('error');
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

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
            <p>P.O BOX 23, Yumbe, Uganda</p>
          </div>
          <div className="flex items-center mb-4">
            <Phone className="mr-2 text-primary" />
            <p>Phone: +256 782 107336</p>
          </div>
          <div className="flex items-center mb-4">
            <Mail className="mr-2 text-primary" />
            <p>Email: aringasecondarysch@gmail.com</p>
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
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name" className="block text-lg mb-2">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full p-3 border rounded-md"
                value={formData.name}
                onChange={handleChange}
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
                value={formData.email}
                onChange={handleChange}
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
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <Button
              type="submit"
              className="text-white bg-gradient-to-r from-blue-500 to-purple-500 px-6 py-3 rounded-lg shadow-lg hover:from-purple-500 hover:to-blue-500 hover:scale-105 transform transition duration-300 ease-in-out"
              style={{ backgroundColor: '#3498db', color: 'white', borderRadius: '8px' }}
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </Button>
          </form>

          {submitStatus === 'success' && (
            <div className="mt-4 p-4 bg-green-100 text-green-700 rounded-md">
              <p className="font-bold">Message sent successfully!</p>
              <p>Thank you for contacting Aringa Secondary School. We have received your message and will get back to you shortly.</p>
            </div>
          )}

          {submitStatus === 'error' && (
            <div className="mt-4 p-4 bg-red-100 text-red-700 rounded-md">
              <p className="font-bold">Failed to send message</p>
              <p>We are sorry, but there was an error sending your message. Please try again later or contact us directly via phone or email.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

