import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Play, Clock, User, ArrowRight, TrendingUp, Headphones, Video, FileText, Camera } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { UserAuthButton } from "@/components/user-auth-button"

export default function HomePage() {
  const featuredStories = [
    {
      id: 1,
      title: "The Future of Digital Journalism in 2025",
      excerpt:
        "Exploring how AI and emerging technologies are reshaping the media landscape and changing how we consume news.",
      image: "/placeholder.svg?height=300&width=500",
      category: "Technology",
      author: "Sarah Johnson",
      date: "Jan 15, 2025",
      readTime: "5 min read",
    },
    {
      id: 2,
      title: "Climate Change: Stories from the Frontlines",
      excerpt: "In-depth reporting from communities directly affected by climate change around the world.",
      image: "/placeholder.svg?height=300&width=500",
      category: "Environment",
      author: "Michael Chen",
      date: "Jan 14, 2025",
      readTime: "8 min read",
    },
    {
      id: 3,
      title: "The Rise of Independent Media Creators",
      excerpt: "How content creators are building sustainable media businesses outside traditional frameworks.",
      image: "/placeholder.svg?height=300&width=500",
      category: "Business",
      author: "Emma Rodriguez",
      date: "Jan 13, 2025",
      readTime: "6 min read",
    },
  ]

  const categories = [
    { name: "Technology", icon: TrendingUp, count: 45, color: "bg-blue-500" },
    { name: "Politics", icon: FileText, count: 32, color: "bg-red-500" },
    { name: "Culture", icon: Camera, count: 28, color: "bg-purple-500" },
    { name: "Business", icon: TrendingUp, count: 38, color: "bg-green-500" },
    { name: "Environment", icon: FileText, count: 22, color: "bg-teal-500" },
    { name: "Sports", icon: TrendingUp, count: 19, color: "bg-orange-500" },
  ]

  const featuredVideo = {
    title: "Inside the Newsroom: How Stories Come to Life",
    thumbnail: "/placeholder.svg?height=400&width=600",
    duration: "12:34",
    views: "2.3K views",
  }

  const featuredPodcast = {
    title: "Media Matters: Weekly News Analysis",
    episode: "Episode 47: The State of Press Freedom",
    thumbnail: "/placeholder.svg?height=200&width=200",
    duration: "45:22",
  }

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
              <Link href="/" className="text-black font-medium hover:text-blue-600 transition-colors">
                Home
              </Link>
              <Link href="/stories" className="text-gray-600 hover:text-blue-600 transition-colors">
                Stories
              </Link>
              <Link href="/videos" className="text-gray-600 hover:text-blue-600 transition-colors">
                Videos & Podcasts
              </Link>
              <Link href="/about" className="text-gray-600 hover:text-blue-600 transition-colors">
                About
              </Link>
              <Link href="/contact" className="text-gray-600 hover:text-blue-600 transition-colors">
                Contact
              </Link>
              <Link href="/admin/dashboard" className="text-gray-700 hover:text-blue-600">
                Admin
              </Link>
            </nav>

            <div className="flex items-center space-x-4">
              <Input placeholder="Search stories..." className="hidden md:block w-64 bg-gray-50 border-gray-200" />
              <UserAuthButton />
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-black to-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Stories That
              <span className="text-blue-400"> Matter</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Kech Media delivers compelling journalism, in-depth analysis, and multimedia storytelling that informs,
              inspires, and connects communities worldwide.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/stories">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-3">
                  Read Latest Stories
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link href="/videos">
                <Button
                  size="lg"
                  variant="outline"
                  className="text-lg px-8 py-3 border-white text-white hover:bg-white hover:text-black bg-transparent"
                >
                  Watch Videos
                  <Play className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Stories */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-4xl font-bold text-black">Featured Stories</h2>
            <Link href="/stories">
              <Button
                variant="outline"
                className="border-black text-black hover:bg-black hover:text-white bg-transparent"
              >
                View All Stories
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredStories.map((story) => (
              <Card key={story.id} className="group hover:shadow-xl transition-shadow duration-300 border-0 shadow-lg">
                <div className="relative overflow-hidden">
                  <Image
                    src={story.image || "/placeholder.svg"}
                    alt={story.title}
                    width={500}
                    height={300}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <Badge className="absolute top-4 left-4 bg-blue-600 text-white">{story.category}</Badge>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-black group-hover:text-blue-600 transition-colors">
                    <Link href={`/stories/${story.id}`}>{story.title}</Link>
                  </CardTitle>
                  <CardDescription className="text-gray-600 line-clamp-2">{story.excerpt}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center space-x-4">
                      <span className="flex items-center">
                        <User className="w-4 h-4 mr-1" />
                        {story.author}
                      </span>
                      <span className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {story.readTime}
                      </span>
                    </div>
                    <span>{story.date}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Media Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-black text-center mb-12">Featured Media</h2>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Featured Video */}
            <Card className="border-0 shadow-lg">
              <div className="relative">
                <Image
                  src={featuredVideo.thumbnail || "/placeholder.svg"}
                  alt={featuredVideo.title}
                  width={600}
                  height={400}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                  <Button size="lg" className="bg-white text-black hover:bg-gray-100 rounded-full w-16 h-16">
                    <Play className="w-8 h-8" />
                  </Button>
                </div>
                <Badge className="absolute bottom-4 right-4 bg-black text-white">{featuredVideo.duration}</Badge>
              </div>
              <CardHeader>
                <div className="flex items-center space-x-2 mb-2">
                  <Video className="w-5 h-5 text-blue-600" />
                  <span className="text-sm font-medium text-blue-600">FEATURED VIDEO</span>
                </div>
                <CardTitle className="text-xl font-bold text-black">{featuredVideo.title}</CardTitle>
                <CardDescription className="text-gray-600">{featuredVideo.views} • 2 days ago</CardDescription>
              </CardHeader>
            </Card>

            {/* Featured Podcast */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <div className="flex items-center space-x-2 mb-4">
                  <Headphones className="w-5 h-5 text-blue-600" />
                  <span className="text-sm font-medium text-blue-600">FEATURED PODCAST</span>
                </div>
                <div className="flex items-center space-x-4">
                  <Image
                    src={featuredPodcast.thumbnail || "/placeholder.svg"}
                    alt={featuredPodcast.title}
                    width={200}
                    height={200}
                    className="w-20 h-20 rounded-lg object-cover"
                  />
                  <div className="flex-1">
                    <CardTitle className="text-xl font-bold text-black mb-2">{featuredPodcast.title}</CardTitle>
                    <CardDescription className="text-gray-600 mb-2">{featuredPodcast.episode}</CardDescription>
                    <Badge variant="outline" className="text-xs">
                      {featuredPodcast.duration}
                    </Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex items-center space-x-4">
                  <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                    <Play className="w-4 h-4 mr-2" />
                    Play Episode
                  </Button>
                  <Button size="sm" variant="outline">
                    Subscribe
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-black text-center mb-12">Explore Categories</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category) => (
              <Link key={category.name} href={`/stories?category=${category.name.toLowerCase()}`}>
                <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg cursor-pointer">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className={`w-12 h-12 ${category.color} rounded-lg flex items-center justify-center`}>
                        <category.icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-black group-hover:text-blue-600 transition-colors">
                          {category.name}
                        </h3>
                        <p className="text-gray-600">{category.count} stories</p>
                      </div>
                      <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-blue-600 transition-colors" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-black text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">Stay Informed</h2>
          <p className="text-xl text-gray-300 mb-8">
            Get the latest stories, analysis, and insights delivered directly to your inbox.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input placeholder="Enter your email address" className="flex-1 bg-white text-black border-0" />
            <Button className="bg-blue-600 hover:bg-blue-700 px-8">Subscribe</Button>
          </div>

          <p className="text-sm text-gray-400 mt-4">Join 50,000+ readers. Unsubscribe anytime.</p>
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
              <div className="flex space-x-4">
                <Button
                  size="sm"
                  variant="outline"
                  className="border-gray-600 text-gray-400 hover:text-white bg-transparent"
                >
                  Twitter
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  className="border-gray-600 text-gray-400 hover:text-white bg-transparent"
                >
                  Facebook
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  className="border-gray-600 text-gray-400 hover:text-white bg-transparent"
                >
                  Instagram
                </Button>
              </div>
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
                <li>
                  <Link href="/stories" className="hover:text-white transition-colors">
                    Analysis
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
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Press Kit
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
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Cookie Policy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Editorial Guidelines
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
