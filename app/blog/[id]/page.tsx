import { notFound } from 'next/navigation'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

// This would typically come from a database or CMS
const blogPosts = [
  {
    id: 1,
    title: "Celebrating Our Students' Academic Achievements",
    content: "We're proud to announce the outstanding results of our students in the recent national examinations. Our dedicated teachers and hardworking students have once again proven that with determination and the right support, anything is possible. Special congratulations to our top performers in various subjects...",
    date: "2023-06-15",
  },
  {
    id: 2,
    title: "New STEM Lab Opening Next Semester",
    content: "Exciting news! We're opening a state-of-the-art STEM lab to enhance our science and technology programs. This new facility will feature cutting-edge equipment including 3D printers, robotics kits, and advanced computer systems. Students will have the opportunity to engage in hands-on experiments and projects that prepare them for the challenges of the future...",
    date: "2023-06-10",
  },
  {
    id: 3,
    title: "Alumni Spotlight: Sarah's Journey to Medical School",
    content: "In this inspiring story, we follow the journey of our alumna Sarah as she pursues her dream of becoming a doctor. Sarah graduated from Aringa Secondary School five years ago and has since completed her undergraduate studies. She credits her time at our school for instilling in her the discipline and study skills necessary for success in higher education...",
    date: "2023-06-05",
  },
]

export default function BlogPost({ params }: { params: { id: string } }) {
  const post = blogPosts.find(post => post.id === parseInt(params.id))

  if (!post) {
    notFound()
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
      <p className="text-muted-foreground mb-8">{post.date}</p>
      <div className="prose max-w-none mb-8">
        <p>{post.content}</p>
      </div>
      <Button asChild>
        <Link href="/blog">
        <Button 
              type="submit" 
              className="w-full md:w-auto px-8" 
              style={{ backgroundColor: '#3498db', color: 'white', borderRadius: '8px' }}
>               Back to Blog
              
            </Button>
        
        </Link>
      </Button>
    </div>
  )
}

