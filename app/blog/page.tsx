'use client'

import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { FadeIn, ScaleIn } from '@/components/animations'

// This would typically come from a database or CMS
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

export default function BlogPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <FadeIn>
        <h1 className="text-4xl font-bold mb-8">Aringa Secondary School Blog</h1>
      </FadeIn>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogPosts.map((post, index) => (
          <FadeIn key={post.id} delay={index * 0.1}>
            <ScaleIn delay={index * 0.1}>
              <Card className="card-hover">
                <CardHeader>
                  <CardTitle>{post.title}</CardTitle>
                  <CardDescription>{post.date}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">{post.date}</span>
                    <Link href={`/blog/${post.id}`} className="text-primary hover:underline">
                      Read more
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </ScaleIn>
          </FadeIn>
        ))}
      </div>
    </div>
  )
}

