'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

const newsAndEvents = [
  {
    id: 1,
    title: "Annual Science Fair",
    excerpt: "Students showcase their innovative projects and compete for top honors in our annual science fair.",
    date: "2023-05-15",
    category: "Event"
  },
  {
    id: 2,
    title: "Parent-Teacher Conference",
    excerpt: "Join us for our bi-annual parent-teacher conference to discuss your child's progress and goals.",
    date: "2023-06-05",
    category: "Event"
  },
  {
    id: 3,
    title: "Sports Day",
    excerpt: "A day of friendly competition and school spirit as students participate in various athletic events.",
    date: "2023-07-10",
    category: "Event"
  }
]

export default function NewsAndEvents() {
  return (
    <section className="py-20 bg-muted">
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
          {newsAndEvents.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="card-hover h-full flex flex-col">
                <CardHeader>
                  <CardTitle>{item.title}</CardTitle>
                  <CardDescription>{item.date} - {item.category}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="mb-4">{item.excerpt}</p>
                </CardContent>
                <CardContent className="pt-0">
                  <Link href={`/news-and-events/${item.id}`} className="text-primary hover:underline">
                    Read more
                  </Link>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Button asChild>
            <Link href="/news-and-events">View All News & Events</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

