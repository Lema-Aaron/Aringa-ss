'use client'

import { useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react';
import { LucideProps } from 'lucide-react';
import { motion, useAnimation, useScroll, useTransform } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { BookOpen, Users, Trophy, GraduationCap, Clock, MapPin, Mail, Phone, Heart, Star, Sun } from 'lucide-react'

// Define the types for props explicitly
type FadeInWhenVisibleProps = {
  children: React.ReactNode; // This will type children properly
  delay?: number; // Optional delay prop, default is 0
};

const FadeInWhenVisible: React.FC<FadeInWhenVisibleProps> = ({ children, delay = 0 }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      transition={{ duration: 0.5, delay }}
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 20 },
      }}
    >
      {children}
    </motion.div>
  );
};
// Define the types for props explicitly
type ParallaxSectionProps = {
  children: React.ReactNode; // Type the children prop as React.ReactNode
};

const ParallaxSection: React.FC<ParallaxSectionProps> = ({ children }) => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <motion.div style={{ y }} className="relative">
      {children}
    </motion.div>
  );
};


interface FloatingIconProps {
  icon: React.ComponentType<LucideProps>; // Use LucideProps directly
}

const FloatingIcon: FC<FloatingIconProps> = ({ icon: Icon }) => {
  return (
    <motion.div
      animate={{
        y: [0, -10, 0],
        transition: {
          duration: 2,
          repeat: Infinity,
          repeatType: "reverse"
        }
      }}
      className="absolute"
      style={{
        top: `${Math.random() * 80}%`,
        left: `${Math.random() * 80}%`,
        opacity: 0.2
      }}
    >
      <Icon size={32} /> {/* Pass the size prop to the Icon */}
    </motion.div>
  );
};

const staffMembers = [
  { 
    name: "Dr. Sarah Namukasa", 
    position: "Principal", 
    image: "/placeholder.svg?height=200&width=200&text=Dr.+Sarah",
    email: "sarah.namukasa@aringasecondary.edu",
    phone: "+256 700 123 456",
    bio: "Dr. Namukasa has over 20 years of experience in education and holds a Ph.D. in Educational Leadership."
  },
  { 
    name: "Mr. John Okello", 
    position: "Vice Principal, Academics", 
    image: "/placeholder.svg?height=200&width=200&text=Mr.+John",
    email: "john.okello@aringasecondary.edu",
    phone: "+256 700 234 567",
    bio: "Mr. Okello specializes in curriculum development and has been with Aringa Secondary School for 15 years."
  },
  { 
    name: "Ms. Grace Atim", 
    position: "Head of Sciences", 
    image: "/placeholder.svg?height=200&width=200&text=Ms.+Grace",
    email: "grace.atim@aringasecondary.edu",
    phone: "+256 700 345 678",
    bio: "Ms. Atim is a passionate advocate for STEM education and has led our science department to national recognition."
  },
  { 
    name: "Mr. David Ochieng", 
    position: "Head of Humanities", 
    image: "/placeholder.svg?height=200&width=200&text=Mr.+David",
    email: "david.ochieng@aringasecondary.edu",
    phone: "+256 700 456 789",
    bio: "Mr. Ochieng brings a wealth of experience in literature and history, inspiring students to think critically about the world."
  },
  { 
    name: "Mrs. Elizabeth Nakato", 
    position: "Head of Mathematics", 
    image: "/placeholder.svg?height=200&width=200&text=Mrs.+Elizabeth",
    email: "elizabeth.nakato@aringasecondary.edu",
    phone: "+256 700 567 890",
    bio: "Mrs. Nakato has a knack for making complex mathematical concepts accessible and engaging for all students."
  },
  { 
    name: "Mr. Peter Ssemakula", 
    position: "Head of Languages", 
    image: "/placeholder.svg?height=200&width=200&text=Mr.+Peter",
    email: "peter.ssemakula@aringasecondary.edu",
    phone: "+256 700 678 901",
    bio: "Mr. Ssemakula is fluent in five languages and leads our robust language programs, including English, Swahili, and French."
  },
  { 
    name: "Ms. Fatima Abdu", 
    position: "Dean of Students", 
    image: "/placeholder.svg?height=200&width=200&text=Ms.+Fatima",
    email: "fatima.abdu@aringasecondary.edu",
    phone: "+256 700 789 012",
    bio: "Ms. Abdu oversees student welfare and extracurricular activities, ensuring a holistic educational experience for all learners."
  },
  { 
    name: "Mr. Robert Kizza", 
    position: "Head of ICT", 
    image: "/placeholder.svg?height=200&width=200&text=Mr.+Robert",
    email: "robert.kizza@aringasecondary.edu",
    phone: "+256 700 890 123",
    bio: "Mr. Kizza leads our efforts to integrate technology into all aspects of learning, preparing students for the digital age."
  },
  {
    name: "Mrs. Aisha Namugga",
    position: "Head of Islamic Studies",
    image: "/placeholder.svg?height=200&width=200&text=Mrs.+Aisha",
    email: "aisha.namugga@aringasecondary.edu",
    phone: "+256 700 901 234",
    bio: "Mrs. Namugga brings a wealth of knowledge in Islamic studies and plays a crucial role in integrating Islamic principles across our curriculum."
  },
  {
    name: "Dr. Ibrahim Ssekandi",
    position: "Director of Islamic Studies",
    image: "/placeholder.svg?height=200&width=200&text=Dr.+Ibrahim",
    email: "ibrahim.ssekandi@aringasecondary.edu",
    phone: "+256 700 012 345",
    bio: "Dr. Ssekandi is an expert in Islamic theology and plays a crucial role in integrating Islamic principles into our curriculum."
  },
  {
    name: "Mrs. Amina Nalweyiso",
    position: "Head of Guidance and Counseling",
    image: "/placeholder.svg?height=200&width=200&text=Mrs.+Amina",
    email: "amina.nalweyiso@aringasecondary.edu",
    phone: "+256 700 123 456",
    bio: "Mrs. Nalweyiso provides vital support to our students, helping them navigate academic and personal challenges."
  },
  {
    name: "Mr. Hassan Muwonge",
    position: "Director of Sports and Physical Education",
    image: "/placeholder.svg?height=200&width=200&text=Mr.+Hassan",
    email: "hassan.muwonge@aringasecondary.edu",
    phone: "+256 700 234 567",
    bio: "Mr. Muwonge oversees our comprehensive sports program, promoting physical fitness and teamwork among our students."
  }
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <motion.section 
        className="relative h-[50vh] overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Image
          src="/students1.jpg?height=1080&width=1920&text=Aringa+Secondary+School"
          alt="Aringa Secondary School Campus"
          layout="fill"
          objectFit="cover"
          priority
        />
        <motion.div 
          className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <div className="text-center text-white">
            <motion.h1 
              className="text-4xl md:text-6xl font-bold mb-4"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.5 }}
            >
              About Aringa Secondary School
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1, duration: 0.5 }}
            >
              Giving light to darkness since 1985
            </motion.p>
          </div>
        </motion.div>
      </motion.section>

      {/* Islamic Identity Section */}
      <motion.section 
        className="py-20 bg-gradient-to-r from-primary to-secondary text-primary-foreground overflow-hidden relative"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <FloatingIcon icon={Heart} />
        <FloatingIcon icon={Star} />
        <FloatingIcon icon={Sun} />
        <div className="container mx-auto px-4 relative z-10">
          <motion.h2 
            className="text-3xl font-bold mb-8 text-center"
            initial={{ y: -50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Our Islamic Identity
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Heart,
                title: "Faith-Based Learning",
                description: "We integrate Islamic teachings into our curriculum, fostering a deep understanding of our faith alongside academic subjects."
              },
              {
                icon: Star,
                title: "Character Development",
                description: "Our programs focus on building strong moral character based on Islamic principles, preparing students to be exemplary members of society."
              },
              {
                icon: Sun,
                title: "Inclusive Environment",
                description: "While rooted in Islamic values, we welcome students from all backgrounds, promoting understanding and respect for diversity."
              }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ x: index % 2 === 0 ? -50 : 50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              >
                <Card className="bg-white/10 backdrop-blur-lg text-primary-foreground border-none h-full">
                  <CardHeader>
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.3 + index * 0.1 }}
                    >
                      <item.icon className="w-12 h-12 mb-4" />
                    </motion.div>
                    <CardTitle className="flex items-center text-xl mb-2">
                      {item.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <motion.p
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                    >
                      {item.description}
                    </motion.p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Mission and Vision */}
      <ParallaxSection>
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <FadeInWhenVisible>
                <div>
                  <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
                  <p className="text-lg mb-6">
                    At Aringa Secondary School, our mission is to provide a nurturing and challenging educational environment that empowers students to become lifelong learners, critical thinkers, and responsible global citizens. We strive to integrate Islamic teachings into our curriculum, fostering a deep understanding of our faith alongside academic subjects.
                  </p>
                  <h2 className="text-3xl font-bold mb-6">Our Vision</h2>
                  <p className="text-lg">
                    We envision Aringa Secondary School as a beacon of academic excellence and character development, preparing students to lead and succeed in an ever-changing world. Our programs focus on building strong moral character based on Islamic principles, preparing students to be exemplary members of society.
                  </p>
                </div>
              </FadeInWhenVisible>
              <FadeInWhenVisible delay={0.2}>
                <div className="relative h-[400px]">
                  <Image
                    src="/placeholder.svg?height=400&width=600&text=Students+in+Class"
                    alt="Students in a classroom"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg"
                  />
                </div>
              </FadeInWhenVisible>
            </div>
          </div>
        </section>
      </ParallaxSection>

      {/* History */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <FadeInWhenVisible>
            <h2 className="text-3xl font-bold mb-12 text-center">Our History</h2>
          </FadeInWhenVisible>
          <div className="max-w-3xl mx-auto">
            <Tabs defaultValue="foundation" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="foundation">Foundation</TabsTrigger>
                <TabsTrigger value="growth">Growth</TabsTrigger>
                <TabsTrigger value="present">Present Day</TabsTrigger>
              </TabsList>
              <TabsContent value="foundation">
                <FadeInWhenVisible>
                  <Card>
                    <CardHeader>
                      <CardTitle>1985: The Beginning</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p>Aringa Secondary School was founded by a group of visionary educators who saw the need for quality secondary education in the region. Starting with just 50 students and 5 teachers, the school laid its foundation on the principles of academic excellence and character development.</p>
                    </CardContent>
                  </Card>
                </FadeInWhenVisible>
              </TabsContent>
              <TabsContent value="growth">
                <FadeInWhenVisible>
                  <Card>
                    <CardHeader>
                      <CardTitle>1990s-2000s: Expansion and Recognition</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p>Over the next two decades, Aringa Secondary School experienced significant growth. New facilities were added, including science laboratories, a library, and sports fields. The school&apos;s reputation for academic excellence grew, attracting students from across the country and earning national recognition for its achievements.</p>
                    </CardContent>
                  </Card>
                </FadeInWhenVisible>
              </TabsContent>
              <TabsContent value="present">
                <FadeInWhenVisible>
                  <Card>
                    <CardHeader>
                      <CardTitle>Today: A Leader in Education</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p>Today, Aringa Secondary School stands as a leader in secondary education, with state-of-the-art facilities, a diverse student body of over 1,000 learners, and a team of dedicated educators. We continue to evolve and innovate, preparing our students for the challenges and opportunities of the 21st century.</p>
                    </CardContent>
                  </Card>
                </FadeInWhenVisible>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      {/* Staff Members */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <FadeInWhenVisible>
            <h2 className="text-3xl font-bold mb-12 text-center">Our Administrators</h2>
          </FadeInWhenVisible>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {staffMembers.map((staff, index) => (
              <FadeInWhenVisible key={index} delay={index * 0.1}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg">
                    <div className="relative h-48 w-48 mx-auto mt-4">
                      <Image
                        src={staff.image}
                        alt={staff.name}
                        layout="fill"
                        objectFit="cover"
                        className="rounded-full transition-transform duration-300 hover:scale-105"
                      />
                    </div>
                    <CardHeader>
                      <CardTitle>{staff.name}</CardTitle>
                      <CardDescription>{staff.position}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="mb-4 text-sm">{staff.bio}</p>
                      <div className="flex items-center mb-2">
                        <Mail className="w-4 h-4 mr-2" />
                        <a href={`mailto:${staff.email}`} className="text-sm text-primary hover:underline">{staff.email}</a>
                      </div>
                      <div className="flex items-center">
                        <Phone className="w-4 h-4 mr-2" />
                        <a href={`tel:${staff.phone}`} className="text-sm text-primary hover:underline">{staff.phone}</a>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </FadeInWhenVisible>
            ))}
          </div>
        </div>
      </section>

      {/* Key Facts */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <FadeInWhenVisible>
            <h2 className="text-3xl font-bold mb-12 text-center">Key Facts</h2>
          </FadeInWhenVisible>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Users, title: "Student Body", description: "Over 1,000 students from diverse backgrounds" },
              { icon: GraduationCap, title: "Faculty", description: "50+ qualified and experienced teachers" },
              { icon: BookOpen, title: "Academic Programs", description: "Comprehensive curriculum covering sciences, humanities, and arts" },
              { icon: Trophy, title: "Achievements", description: "Multiple national awards in academics, sports, and arts" },
              { icon: Clock, title: "Established", description: "Proudly serving the community since 1985" },
              { icon: MapPin, title: "Location", description: "Situated on a beautiful 50-acre campus in Aringa, Uganda" },
            ].map((fact, index) => (
              <FadeInWhenVisible key={index} delay={index * 0.1}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Card className="transition-all duration-300 hover:shadow-lg">
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <fact.icon className="mr-2" />
                        {fact.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p>{fact.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              </FadeInWhenVisible>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <FadeInWhenVisible>
            <h2 className="text-3xl font-bold mb-12 text-center">Our Core Values</h2>
          </FadeInWhenVisible>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Excellence", description: "We strive for the highest standards in all our endeavors." },
              { title: "Integrity", description: "We act with honesty, ethics, and transparency in all we do." },
              { title: "Respect", description: "We value diversity and treat all individuals with dignity." },
              { title: "Innovation", description: "We embrace creativity and forward-thinking approaches to learning." },
              { title: "Community", description: "We foster a sense of belonging and mutual support." },
              { title: "Responsibility", description: "We encourage accountability for actions and decisions." },
              { title: "Faith", description: "We are guided by Islamic principles in all aspects of our work."},
              { title: "Compassion", description: "We show kindness and empathy to all members of our community."},
              { title: "Justice", description: "We strive for fairness and equity in all our interactions."}
            ].map((value, index) => (
              <FadeInWhenVisible key={index} delay={index * 0.1}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Card className="transition-all duration-300 hover:shadow-lg">
                    <CardHeader>
                      <CardTitle>{value.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription>{value.description}</CardDescription>
                    </CardContent>
                  </Card>
                </motion.div>
              </FadeInWhenVisible>
            ))}
          </div>
        </div>
      </section>

      {/* Islamic Education Highlights */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <FadeInWhenVisible>
            <h2 className="text-3xl font-bold mb-12 text-center">Islamic Education Highlights</h2>
          </FadeInWhenVisible>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { 
                title: "Quranic Studies", 
                description: "Comprehensive Quranic education including tajweed, memorization, and tafsir.",
                icon: BookOpen
              },
              { 
                title: "Islamic History", 
                description: "In-depth exploration of Islamic civilization and its contributions to the world.",
                icon: Clock
              },
              { 
                title: "Arabic Language", 
                description: "Intensive Arabic language program to enhance understanding of Islamic texts.",
                icon: GraduationCap
              },
              { 
                title: "Islamic Ethics", 
                description: "Courses on Islamic ethics and their application in contemporary contexts.",
                icon: Heart
              },
              { 
                title: "Interfaith Understanding", 
                description: "Programs promoting dialogue and understanding with other faith communities.",
                icon: Users
              },
              { 
                title: "Community Service", 
                description: "Regular community service initiatives inspired by Islamic teachings of charity and compassion.",
                icon: Trophy
              },
            ].map((highlight, index) => (
              <FadeInWhenVisible key={index} delay={index * 0.1}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Card className="transition-all duration-300 hover:shadow-lg">
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <highlight.icon className="mr-2 text-primary" />
                        {highlight.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription>{highlight.description}</CardDescription>
                    </CardContent>
                  </Card>
                </motion.div>
              </FadeInWhenVisible>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <motion.section 
        className="py-20 bg-primary text-primary-foreground"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Join Our Faith-Based Learning Community</h2>
          <p className="text-xl mb-8">Discover how Aringa Secondary School can nurture your child&apos;s faith, knowledge, and character.</p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button 
              asChild 
              size="lg" 
              variant="secondary" 
              className="text-white bg-gradient-to-r from-blue-500 to-purple-500 px-6 py-3 rounded-lg shadow-lg hover:from-purple-500 hover:to-blue-500 hover:scale-105 transform transition duration-300 ease-in-out"
              style={{ backgroundColor: '#3498db', color: 'white', borderRadius: '8px', padding: '0.5rem 2rem' }}
>   
              <Link href="/contact">Contact Us</Link>
            </Button>

          </motion.div>
        </div>
      </motion.section>
    </div>
  )
}

