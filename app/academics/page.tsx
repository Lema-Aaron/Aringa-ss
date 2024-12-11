'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { BookOpen, PaintbrushIcon as PaintBrush, GraduationCap, Users, Trophy, Calendar, Microscope, Calculator, BookOpenCheck, Globe2, Code } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/app/components/ui/avatar'



const departments = [
  {
    name: 'Science',
    description: 'Explore the wonders of the natural world through our comprehensive science programs.',
    icon: Microscope,
    subjects: ['Biology', 'Chemistry', 'Physics', 'Environmental Science']
  },
  {
    name: 'Mathematics',
    description: 'Develop strong analytical and problem-solving skills with our mathematics curriculum.',
    icon: Calculator,
    subjects: ['Algebra', 'Geometry', 'Calculus', 'Statistics']
  },
  {
    name: 'Humanities',
    description: 'Gain a deeper understanding of human culture, history, and society.',
    icon: BookOpenCheck,
    subjects: ['History', 'Literature', 'Philosophy', 'Social Studies']
  },
  {
    name: 'Arts',
    description: 'Nurture your creativity and self-expression through our diverse arts programs.',
    icon: PaintBrush,
    subjects: ['Visual Arts', 'Music', 'Drama', 'Dance']
  },
  {
    name: 'Languages',
    description: 'Prepare for a globalized world with our extensive language offerings.',
    icon: Globe2,
    subjects: ['English', 'Swahili', 'French', 'Arabic']
  },
  {
    name: 'Technology',
    description: 'Develop skills for the digital age with our cutting-edge technology courses.',
    icon: Code,
    subjects: ['Computer Science', 'Information Technology', 'Digital Media', 'Robotics']
  }
]

const features = [
  { title: 'Expert Faculty', description: 'Learn from experienced and passionate educators.', icon: GraduationCap },
  { title: 'Small Class Sizes', description: 'Enjoy personalized attention in our small, interactive classes.', icon: Users },
  { title: 'Extracurricular Activities', description: 'Develop well-rounded skills through our diverse extracurricular programs.', icon: Trophy },
  { title: 'Flexible Scheduling', description: 'Balance your studies with other commitments through our flexible class schedules.', icon: Calendar },
]

const topStudents = [
  { name: "John Doe", class: "Senior One", photo: "/placeholder.svg?height=150&width=150&text=John", color: "Red" },
  { name: "Jane Smith", class: "Senior Two", photo: "/placeholder.svg?height=150&width=150&text=Jane", color: "Blue" },
  { name: "Alice Johnson", class: "Senior Three", photo: "/placeholder.svg?height=150&width=150&text=Alice", color: "Green" },
  { name: "Bob Williams", class: "Senior Four", photo: "/placeholder.svg?height=150&width=150&text=Bob", color: "Yellow" },
  { name: "Eva Brown", class: "Senior Five", photo: "/placeholder.svg?height=150&width=150&text=Eva", color: "Purple" },
  { name: "Michael Davis", class: "Senior Six", photo: "/placeholder.svg?height=150&width=150&text=Michael", color: "Orange" },
]

const testimonials = [
  {
    name: 'John Doe',
    role: 'Parent',
    image: '/placeholder.svg?height=100&width=100',
    content: 'Aringa Secondary School has provided an excellent education for my child. The teachers are dedicated and the facilities are top-notch.',
  },
  {
    name: 'Jane Smith',
    role: 'Alumni',
    image: '/placeholder.svg?height=100&width=100',
    content: 'My years at Aringa Secondary School prepared me well for university and beyond. I\'m grateful for the strong foundation I received here.',
  },
  {
    name: 'David Johnson',
    role: 'Current Student',
    image: '/placeholder.svg?height=100&width=100',
    content: 'I love the diverse range of activities and clubs available at Aringa. It\'s helped me discover new interests and make great friends.',
  },
]

const fadeInUpVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
}

const staggerContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const slideInVariants = {
  hidden: { x: -50, opacity: 0 },
  visible: { x: 0, opacity: 1 }
}

const AnimatedBackground = () => {
  const { scrollYProgress } = useScroll()
  const y1 = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])
  const y2 = useTransform(scrollYProgress, [0, 1], ['0%', '-100%'])

  return (
    <div className="fixed inset-0 z-[-1] opacity-10">
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-primary to-secondary"
        style={{ y: y1 }}
      />
      <motion.div
        className="absolute inset-0 bg-gradient-to-tr from-accent to-background"
        style={{ y: y2 }}
      />
    </div>
  )
}

export default function AcademicsPage() {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <AnimatedBackground />
      {/* Hero Section */}
<motion.section
  initial="hidden"
  animate="visible"
  variants={fadeInUpVariants}
  transition={{ duration: 0.5 }}
  className="relative bg-primary text-primary-foreground py-20 min-h-[60vh] flex items-center"
>
  <div className="absolute inset-0 z-0">
    <Image
      src="/placeholder.svg?height=1080&width=1920&text=Aringa+Secondary+School"
      alt="Aringa Secondary School Building"
      layout="fill"
      objectFit="cover"
      priority
    />
    <div className="absolute inset-0 bg-black opacity-50"></div>
  </div>
  <div className="container mx-auto px-4 relative z-10">
    <div className="max-w-3xl mx-auto text-center">
      <motion.h1
        className="text-4xl md:text-5xl font-bold mb-6"
        variants={fadeInUpVariants}
        transition={{ delay: 0.2 }}
      >
        Academic Excellence at Aringa Secondary School
      </motion.h1>
      <motion.p
        className="text-xl md:text-2xl mb-8"
        variants={fadeInUpVariants}
        transition={{ delay: 0.4 }}
      >
        Giving light to darkness through innovative education
      </motion.p>
      <motion.div
        variants={fadeInUpVariants}
        transition={{ delay: 0.6 }}
      >
      </motion.div>
    </div>
  </div>
</motion.section>

      {/* Departments Section */}
      <section id="departments" className="py-20">
        <div className="container mx-auto px-4">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUpVariants}
            className="text-3xl font-bold mb-12 text-center"
          >
            Our Academic Departments
          </motion.h2>
          <Tabs defaultValue={departments[0].name} className="w-full">
            <motion.div
              variants={staggerContainerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <TabsList className="grid w-full grid-cols-2 md:grid-cols-3 lg:grid-cols-6 mb-8">
                {departments.map((dept) => (
                  <motion.div key={dept.name} variants={slideInVariants}>
                    <TabsTrigger value={dept.name} className="text-sm md:text-base">
                      {dept.name}
                    </TabsTrigger>
                  </motion.div>
                ))}
              </TabsList>
            </motion.div>
            {departments.map((dept, _index) => (
              <TabsContent key={dept.name} value={dept.name}>
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeInUpVariants}
                  transition={{ duration: 0.5, delay: 0.1 * _index}}
                >
                  <Card>
                    <CardHeader>
                      <div className="flex items-center space-x-4">
                        <motion.div
                          initial={{ scale: 0, rotate: -180 }}
                          animate={{ scale: 1, rotate: 0 }}
                          transition={{ type: "spring", stiffness: 260, damping: 20 }}
                        >
                          <dept.icon className="w-10 h-10 text-primary" />
                        </motion.div>
                        <CardTitle>{dept.name}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base mb-4">{dept.description}</CardDescription>
                      <h4 className="font-semibold mb-2">Key Subjects:</h4>
                      <motion.ul
                        className="grid grid-cols-2 gap-2"
                        variants={staggerContainerVariants}
                        initial="hidden"
                        animate="visible"
                      >
                        {dept.subjects.map((subject) => (
                          <motion.li key={subject} variants={slideInVariants} className="flex items-center">
                            <BookOpen className="w-4 h-4 mr-2 text-primary" />
                            {subject}
                          </motion.li>
                        ))}
                      </motion.ul>
                    </CardContent>
                  </Card>
                </motion.div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Top Performing Students Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUpVariants}
            className="text-3xl font-bold mb-12 text-center"
          >
            Our Academic Giants
          </motion.h2>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {topStudents.map((student, _index) => (
              <motion.div
                key={student.name}
                variants={slideInVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Card className="overflow-hidden">
                  <CardHeader className="p-0">
                    <motion.div
                      className="relative h-32 w-32 mx-auto"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.8 * _index}}
                    >
                      <Image
                        src={student.photo}
                        alt={student.name}
                        width={120}
                        height={120}
                        className="object-cover w-full h-full rounded-full"
                      />
                    </motion.div>
                  </CardHeader>
                  <CardContent className="p-4">
                    <CardTitle>{student.name}</CardTitle>
                    <CardDescription>{student.class}</CardDescription>
                    <div className="mt-2 flex items-center">
                      <span className="font-semibold mr-2">Color:</span>
                      <motion.span
                        className={`inline-block w-4 h-4 rounded-full bg-${student.color.toLowerCase()}-500`}
                        whileHover={{ scale: 1.5 }}
                      ></motion.span>
                      <span className="ml-2">{student.color}</span>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUpVariants}
            className="text-3xl font-bold mb-12 text-center"
          >
            Why Choose Us
          </motion.h2>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            variants={staggerContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {features.map((feature, _index) => (
              <motion.div
                key={feature.title}
                variants={slideInVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Card className="transition-all duration-300 hover:shadow-lg">
                  <CardHeader>
                    <div className="flex items-center space-x-4">
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", stiffness: 260, damping: 20 * _index}}
                      >
                        <feature.icon className="w-8 h-8 text-primary" />
                      </motion.div>
                      <CardTitle>{feature.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>{feature.description}</CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Academic Resources Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUpVariants}
            className="text-3xl font-bold mb-12 text-center"
          >
            Academic Resources
          </motion.h2>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              {
                title: "State-of-the-Art Laboratories",
                description: "Our modern labs are equipped with the latest technology to support hands-on learning in sciences and technology subjects."
              },
              {
                title: "Extensive Library",
                description: "Access a vast collection of books, journals, and digital resources to support your research and studies."
              },
              {
                title: "Online Learning Platforms",
                description: "Benefit from our integrated online learning systems that complement classroom instruction and facilitate remote learning."
              }
            ].map((resource) => (
              <motion.div
                key={resource.title}
                variants={slideInVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Card>
                  <CardHeader>
                    <CardTitle>{resource.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>{resource.description}</CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-muted">
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

      {/* CTA Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUpVariants}
        className="bg-primary text-primary-foreground py-20"
      >
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Interested in Joining Our Academic Community?</h2>
          <p className="text-xl mb-8">Contact us to learn more about our application process and how you can become part of Aringa Secondary School.</p>
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            
            <Button 
              asChild 
              size="lg" 
              variant="secondary" 
              className="bg-[#3498db] text-white rounded-lg w-full md:w-auto px-8">
              <Link href="/contact">Contact Us</Link>
            </Button>
          </motion.div>
        </div>
      </motion.section>
    </div>
  )
}

