'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

const blogPosts = [
  {
    id: 1,
    title: "Celebrating Our Students' Academic Achievements",
    excerpt: "We're proud to announce the outstanding results of our students in the recent national examinations...",
    date: "2023-06-15",
  },
  {
    id: 2,
    title: "New STEM Lab Opening Next Semester",
    excerpt: "Exciting news! We're opening a state-of-the-art STEM lab to enhance our science and technology programs...",
    date: "2023-06-10",
  },
  {
    id: 3,
    title: "Alumni Spotlight: Sarah's Journey to Medical School",
    excerpt: "In this inspiring story, we follow the journey of our alumna Sarah as she pursues her dream of becoming a doctor...",
    date: "2023-06-05",
  }
]

export default function BlogPreview() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Latest from Our Blog</h2>
          <p className="text-xl text-muted-foreground">Stay up to date with the latest happenings at Aringa Secondary School</p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="card-hover h-full flex flex-col">
                <CardHeader>
                  <CardTitle>{post.title}</CardTitle>
                  <CardDescription>{post.date}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="mb-4">{post.excerpt}</p>
                </CardContent>
                <CardContent className="pt-0">
                  <Link href={`/blog/${post.id}`} className="text-primary hover:underline">
                    Read more
                  </Link>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Button asChild>
            <Link href="/blog">View All Posts</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

