import { notFound } from 'next/navigation'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

const newsAndEvents = [
  {
    id: 1,
    title: "Annual Science Fair",
    content: "Our annual science fair is a highlight of the academic year, showcasing the innovative projects and experiments of our talented students. This year's fair will feature projects across various scientific disciplines, including biology, chemistry, physics, and environmental science. Students will present their findings to a panel of judges, competing for top honors and the chance to represent our school at the national level. The event is open to parents and the community, providing an excellent opportunity to witness the creativity and scientific acumen of our students.",
    date: "2023-05-15",
    category: "Event"
  },
  {
    id: 2,
    title: "Parent-Teacher Conference",
    content: "We invite all parents to attend our bi-annual parent-teacher conference. This is a valuable opportunity to discuss your child's academic progress, social development, and any concerns you may have. Our dedicated teachers will be available to provide detailed insights into your child's performance and offer strategies for continued success. We believe in the power of strong home-school partnerships, and these conferences play a crucial role in fostering that connection. Please book your time slots in advance to ensure you can meet with all relevant teachers.",
    date: "2023-06-05",
    category: "Event"
  },
  {
    id: 3,
    title: "Sports Day",
    content: "Get ready for a day of excitement and friendly competition at our annual Sports Day! Students will participate in a variety of athletic events, including track and field, team sports, and fun recreational activities. This event is not just about winning; it's about fostering school spirit, teamwork, and physical fitness. We encourage all students to participate and all parents to attend and cheer for our young athletes. There will be refreshments available, and we'll end the day with an awards ceremony to celebrate all participants.",
    date: "2023-07-10",
    category: "Event"
  }
]

export default function EventPage({ params }: { params: { id: string } }) {
  const event = newsAndEvents.find(event => event.id === parseInt(params.id))

  if (!event) {
    notFound()
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-4">{event.title}</h1>
      <p className="text-muted-foreground mb-8">{event.date} - {event.category}</p>
      <div className="prose max-w-none mb-8">
        <p>{event.content}</p>
      </div>
      <Button asChild>
        <Link href="/news-and-events">
        
        <Button 
              type="submit" 
              className="w-full md:w-auto px-8" 
              style={{ backgroundColor: '#3498db', color: 'white', borderRadius: '8px' }}
>               Back to News & Events
              
            </Button>
        </Link>
      </Button>
    </div>
  )
}

