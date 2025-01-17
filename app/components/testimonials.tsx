'use client'

import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '@/app/components/ui/avatar'

const testimonials = [
  {
    name: 'John Doe',
    role: 'Parent',
    image: '/placeholder.svg?height=100&width=100',
    content: 'Aringa Secondary School has provided an excellent education for my child. The teachers are dedicated and the facilities are top-notch.',
  },
  {
    name: 'Hamim Jibril',
    role: 'Alumni',
    image: '/jibril.jpg?height=100&width=100',
    content: 'My years at Aringa Secondary School prepared me well for university and beyond. I\'m grateful for the strong foundation I received here.',
  },
  {
    name: 'Hope Sharon',
    role: 'Current Student',
    image: '/sharon.jpg?height=100&width=100',
    content: 'I love the diverse range of activities and clubs available at Aringa. It\'s helped me discover new interests and make great friends.',
  },
]

export default function Testimonials() {
  return (
    <section className="bg-muted py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">What People Say</h2>
          <p className="text-xl text-muted-foreground">Hear from our community about their experiences at Aringa Secondary School</p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <Avatar className="w-24 h-24 mb-4">
                    <AvatarImage src={testimonial.image} alt={testimonial.name} />
                    <AvatarFallback>{testimonial.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  <p className="mb-4 italic">&ldquo;{testimonial.content}&rdquo;</p>
                  <div className="mt-auto">
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

