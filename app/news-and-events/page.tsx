'use client'

import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { FadeIn, ScaleIn, ParallaxScroll } from '@/components/animations'

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

export default function NewsAndEventsPage() {
  return (
    <div className="min-h-screen bg-background">
      <ParallaxScroll speed={0.5}>
        <div className="bg-primary text-primary-foreground py-20">
          <div className="container mx-auto px-4">
            <FadeIn>
              <h1 className="text-4xl font-bold mb-4"><center>Aringa Secondary School: News & Events</center></h1>
              <p className="text-xl"><center>Stay updated with the latest happenings at our school</center></p>
            </FadeIn>
          </div>
        </div>
      </ParallaxScroll>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {newsAndEvents.map((item, index) => (
            <FadeIn key={item.id} delay={index * 0.1}>
              <ScaleIn delay={index * 0.1}>
                <Card className="card-hover">
                  <CardHeader>
                    <CardTitle>{item.title}</CardTitle>
                    <CardDescription>{item.date} - {item.category}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{item.excerpt}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">{item.date}</span>
                      <Link href={`/news-and-events/${item.id}`} className="text-primary hover:underline">
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
    </div>
  )
}

