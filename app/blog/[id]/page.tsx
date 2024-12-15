import { notFound } from 'next/navigation'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

const blogPosts = [
  {
    id: 1,
    title: "Celebrating Our Students' Academic Achievements",
    content: "We're proud to announce the outstanding results of our students in the recent national examinations. Our dedicated teachers and hardworking students have once again proven that with determination and the right support, anything is possible. Special congratulations to our top performers in various subjects...",
    date: "2023-06-15",
    image: "/images/academic-achievements.jpg", // Add a background image
  },
  {
    id: 2,
    title: "New STEM Lab Opening Next Semester",
    content: "Exciting news! We're opening a state-of-the-art STEM lab to enhance our science and technology programs. This new facility will feature cutting-edge equipment including 3D printers, robotics kits, and advanced computer systems. Students will have the opportunity to engage in hands-on experiments and projects that prepare them for the challenges of the future...",
    date: "2023-06-10",
    image: "/images/stem-lab.jpg", // Add a background image
  },
  {
    id: 3,
    title: "Alumni Spotlight: Sarah's Journey to Medical School",
    content: "In this inspiring story, we follow the journey of our alumna Sarah as she pursues her dream of becoming a doctor. Sarah graduated from Aringa Secondary School five years ago and has since completed her undergraduate studies. She credits her time at our school for instilling in her the discipline and study skills necessary for success in higher education...",
    date: "2023-06-05",
    image: "/images/alumni-spotlight.jpg", // Add a background image
  },
]

export default function BlogPost({ params }: { params: { id: string } }) {
  const post = blogPosts.find(post => post.id === parseInt(params.id))

  if (!post) {
    notFound()
  }

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${post.image})` }}
    >
      <div className="bg-white bg-opacity-80 p-8 rounded-lg shadow-lg max-w-2xl w-full">
        <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
        <p className="text-gray-500 mb-8">{post.date}</p>
        <div className="prose max-w-none mb-8">
          <p>{post.content}</p>
        </div>
        <Button asChild>
          <Link href="/blog">
            <Button className="text-white bg-gradient-to-r from-blue-500 to-purple-500 px-6 py-3 rounded-lg shadow-lg hover:from-purple-500 hover:to-blue-500 hover:scale-105 transition-transform duration-300">
              Back to Blog
            </Button>
          </Link>
        </Button>
      </div>
    </div>
  )
}
