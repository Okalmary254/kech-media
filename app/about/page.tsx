import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Mail, Download, Users, Target, Award, Globe } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function AboutPage() {
  const teamMembers = [
    {
      name: "Adero David",
      role: "Editor-in-Chief",
      bio: "Award-winning journalist with 15 years of experience in digital media and investigative reporting.",
      image: "/placeholder.svg?height=300&width=300",
      expertise: ["Investigative Journalism", "Digital Strategy", "Editorial Leadership"],
    },
    {
      name: "Odero Arnold",
      role: "Senior Reporter",
      bio: "Specializes in technology and business reporting, with a focus on emerging markets and innovation.",
      image: "/placeholder.svg?height=300&width=300",
      expertise: ["Technology", "Business", "Data Analysis"],
    },
    {
      name: "Emma Waithira",
      role: "Video Producer",
      bio: "Documentary filmmaker and video journalist passionate about visual storytelling and multimedia content.",
      image: "/placeholder.svg?height=300&width=300",
      expertise: ["Video Production", "Documentary", "Visual Storytelling"],
    },
    {
      name: "Julius Mburu",
      role: "Podcast Host",
      bio: "Radio veteran and podcast creator known for in-depth interviews and compelling audio narratives.",
      image: "/placeholder.svg?height=300&width=300",
      expertise: ["Audio Production", "Interviewing", "Narrative Podcasting"],
    },
    {
      name: "John Mary",
      role: "Data Journalist",
      bio: "Combines journalism with data science to uncover stories hidden in numbers and statistics.",
      image: "/placeholder.svg?height=300&width=300",
      expertise: ["Data Visualization", "Statistical Analysis", "Research"],
    },
    {
      name: "James Wilson",
      role: "Social Media Editor",
      bio: "Digital native focused on community engagement and social media strategy for news organizations.",
      image: "/placeholder.svg?height=300&width=300",
      expertise: ["Social Media", "Community Management", "Digital Engagement"],
    },
  ]

  const values = [
    {
      icon: Target,
      title: "Truth & Accuracy",
      description: "We are committed to factual reporting and rigorous fact-checking in all our content.",
    },
    {
      icon: Users,
      title: "Community Focus",
      description: "Our stories serve the communities we cover, amplifying voices that need to be heard.",
    },
    {
      icon: Globe,
      title: "Global Perspective",
      description: "We bring international perspectives to local stories and local insights to global issues.",
    },
    {
      icon: Award,
      title: "Editorial Excellence",
      description: "We maintain the highest standards of journalism ethics and editorial integrity.",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-black rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">K</span>
              </div>
              <span className="text-2xl font-bold text-black">Kech Media</span>
            </Link>

            <nav className="hidden md:flex space-x-8">
              <Link href="/" className="text-gray-600 hover:text-blue-600 transition-colors">
                Home
              </Link>
              <Link href="/stories" className="text-gray-600 hover:text-blue-600 transition-colors">
                Stories
              </Link>
              <Link href="/videos" className="text-gray-600 hover:text-blue-600 transition-colors">
                Videos & Podcasts
              </Link>
              <Link href="/about" className="text-black font-medium hover:text-blue-600 transition-colors">
                About
              </Link>
              <Link href="/contact" className="text-gray-600 hover:text-blue-600 transition-colors">
                Contact
              </Link>
              <Link href="/admin/dashboard" className="text-gray-700 hover:text-blue-600">
                Admin
              </Link>
            </nav>

            <Button className="bg-blue-600 hover:bg-blue-700">Subscribe</Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-black to-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            About <span className="text-blue-400">Kech Media</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Independent journalism that connects communities, uncovers truth, and drives meaningful conversations.
          </p>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-8">Our Mission</h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              At Kech Media, we believe in the power of storytelling to create understanding, drive change, and build
              stronger communities. Our mission is to deliver high-quality, independent journalism that informs,
              inspires, and empowers our readers to engage with the world around them.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-black mb-6">What We Do</h3>
              <ul className="space-y-4 text-gray-600">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Produce in-depth investigative reporting on issues that matter</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Create multimedia content including videos, podcasts, and interactive stories</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Amplify underrepresented voices and perspectives</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Provide analysis and context to help readers understand complex issues</span>
                </li>
              </ul>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-black mb-4">By the Numbers</h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
                  <div className="text-sm text-gray-600">Stories Published</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">50K+</div>
                  <div className="text-sm text-gray-600">Monthly Readers</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">25+</div>
                  <div className="text-sm text-gray-600">Countries Covered</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">5</div>
                  <div className="text-sm text-gray-600">Awards Won</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-4">Our Values</h2>
            <p className="text-xl text-gray-600">The principles that guide everything we do</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center border-0 shadow-lg">
                <CardHeader>
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold text-black">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">{value.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-600">The journalists and creators behind Kech Media</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <div className="p-6">
                  <div className="text-center mb-6">
                    <Image
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      width={300}
                      height={300}
                      className="w-32 h-32 rounded-full object-cover mx-auto mb-4"
                    />
                    <h3 className="text-xl font-bold text-black mb-1">{member.name}</h3>
                    <p className="text-blue-600 font-medium mb-3">{member.role}</p>
                    <p className="text-gray-600 text-sm leading-relaxed">{member.bio}</p>
                  </div>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {member.expertise.map((skill, skillIndex) => (
                      <Badge key={skillIndex} variant="secondary" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact & Press Kit Section */}
      <section className="py-20 bg-black text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-8">Get in Touch</h2>
          <p className="text-xl text-gray-300 mb-12">
            Have a story tip, partnership inquiry, or press request? We'd love to hear from you.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-gray-900 border-gray-800 text-white">
              <CardHeader>
                <Mail className="w-8 h-8 text-blue-400 mx-auto mb-4" />
                <CardTitle className="text-xl">Editorial Contact</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-4">For story tips, editorial inquiries, and news submissions</p>
                <Button
                  variant="outline"
                  className="border-blue-600 text-blue-400 hover:bg-blue-600 hover:text-white bg-transparent"
                >
                  editorial@kechmedia.com
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-gray-900 border-gray-800 text-white">
              <CardHeader>
                <Download className="w-8 h-8 text-blue-400 mx-auto mb-4" />
                <CardTitle className="text-xl">Press Kit</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-4">Download our media kit with logos, bios, and company information</p>
                <Button
                  variant="outline"
                  className="border-blue-600 text-blue-400 hover:bg-blue-600 hover:text-white bg-transparent"
                >
                  Download Press Kit
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12">
            <Link href="/contact">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                Contact Us Directly
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                  <span className="text-black font-bold">K</span>
                </div>
                <span className="text-xl font-bold">Kech Media</span>
              </div>
              <p className="text-gray-400 mb-4">
                Independent journalism that matters. Stories that connect, inform, and inspire.
              </p>
            </div>

            <div>
              <h3 className="font-bold mb-4">Content</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/stories" className="hover:text-white transition-colors">
                    Latest Stories
                  </Link>
                </li>
                <li>
                  <Link href="/videos" className="hover:text-white transition-colors">
                    Videos
                  </Link>
                </li>
                <li>
                  <Link href="/videos" className="hover:text-white transition-colors">
                    Podcasts
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/about" className="hover:text-white transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-white transition-colors">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Careers
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold mb-4">Legal</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Kech Media. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
