"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Play, Headphones, Clock, Eye, Search, Filter } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function VideosPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")

  const categories = [
    { value: "all", label: "All Categories" },
    { value: "news", label: "News Analysis" },
    { value: "interviews", label: "Interviews" },
    { value: "documentaries", label: "Documentaries" },
    { value: "behind-scenes", label: "Behind the Scenes" },
  ]

  const videos = [
    {
      id: 1,
      title: "Inside the Newsroom: How Stories Come to Life",
      description: "A behind-the-scenes look at how our editorial team researches, writes, and publishes stories.",
      thumbnail: "/placeholder.svg?height=300&width=500",
      duration: "12:34",
      views: "2.3K",
      category: "behind-scenes",
      publishDate: "2 days ago",
      featured: true,
    },
    {
      id: 2,
      title: "Climate Crisis: Interview with Dr. Maria Santos",
      description:
        "Environmental scientist Dr. Maria Santos discusses the latest climate research and policy implications.",
      thumbnail: "/placeholder.svg?height=300&width=500",
      duration: "28:45",
      views: "5.1K",
      category: "interviews",
      publishDate: "1 week ago",
      featured: true,
    },
    {
      id: 3,
      title: "Election 2025: Key Issues Explained",
      description: "Breaking down the most important issues and policies in the upcoming election cycle.",
      thumbnail: "/placeholder.svg?height=300&width=500",
      duration: "15:22",
      views: "8.7K",
      category: "news",
      publishDate: "3 days ago",
      featured: false,
    },
    {
      id: 4,
      title: "The Future of Work: Remote vs Office",
      description: "Exploring how the pandemic has permanently changed workplace dynamics and employee expectations.",
      thumbnail: "/placeholder.svg?height=300&width=500",
      duration: "22:18",
      views: "3.4K",
      category: "documentaries",
      publishDate: "5 days ago",
      featured: false,
    },
    {
      id: 5,
      title: "Tech Giants and Privacy: What You Need to Know",
      description: "An in-depth analysis of data privacy policies and what they mean for everyday users.",
      thumbnail: "/placeholder.svg?height=300&width=500",
      duration: "18:56",
      views: "6.2K",
      category: "news",
      publishDate: "1 week ago",
      featured: false,
    },
    {
      id: 6,
      title: "Small Business Recovery Stories",
      description: "Inspiring stories of small business owners who adapted and thrived during challenging times.",
      thumbnail: "/placeholder.svg?height=300&width=500",
      duration: "25:43",
      views: "4.8K",
      category: "documentaries",
      publishDate: "2 weeks ago",
      featured: false,
    },
  ]

  const podcasts = [
    {
      id: 1,
      title: "Media Matters: Weekly News Analysis",
      episode: "Episode 47: The State of Press Freedom",
      description: "This week we discuss press freedom challenges around the world and their impact on democracy.",
      thumbnail: "/placeholder.svg?height=200&width=200",
      duration: "45:22",
      publishDate: "3 days ago",
      category: "news",
      featured: true,
    },
    {
      id: 2,
      title: "Tech Talk with Sarah Johnson",
      episode: "Episode 23: AI in Journalism",
      description: "Exploring how artificial intelligence is changing the way news is gathered and reported.",
      thumbnail: "/placeholder.svg?height=200&width=200",
      duration: "38:15",
      publishDate: "1 week ago",
      category: "interviews",
      featured: true,
    },
    {
      id: 3,
      title: "Culture Deep Dive",
      episode: "Episode 12: Streaming Wars Impact",
      description: "How the competition between streaming platforms is affecting content creation and consumption.",
      thumbnail: "/placeholder.svg?height=200&width=200",
      duration: "42:08",
      publishDate: "5 days ago",
      category: "interviews",
      featured: false,
    },
    {
      id: 4,
      title: "Behind the Story",
      episode: "Episode 8: Investigative Reporting Process",
      description: "Our reporters share insights into the months-long process of investigative journalism.",
      thumbnail: "/placeholder.svg?height=200&width=200",
      duration: "35:44",
      publishDate: "2 weeks ago",
      category: "behind-scenes",
      featured: false,
    },
  ]

  const filteredVideos = videos.filter((video) => {
    const matchesSearch =
      video.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      video.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === "all" || video.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const filteredPodcasts = podcasts.filter((podcast) => {
    const matchesSearch =
      podcast.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      podcast.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === "all" || podcast.category === selectedCategory
    return matchesSearch && matchesCategory
  })

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
              <Link href="/videos" className="text-black font-medium hover:text-blue-600 transition-colors">
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

            <Button className="bg-blue-600 hover:bg-blue-700">Subscribe</Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-black to-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Videos & <span className="text-blue-400">Podcasts</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Multimedia storytelling through video documentaries, interviews, and in-depth podcast discussions
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Search and Filter */}
        <div className="flex flex-col md:flex-row gap-4 mb-12">
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                placeholder="Search videos and podcasts..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>
          <div className="md:w-64">
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger>
                <Filter className="w-4 h-4 mr-2" />
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {categories.map((category) => (
                  <SelectItem key={category.value} value={category.value}>
                    {category.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Tabs for Videos and Podcasts */}
        <Tabs defaultValue="videos" className="space-y-8">
          <TabsList className="grid w-full grid-cols-2 max-w-md mx-auto">
            <TabsTrigger value="videos" className="flex items-center space-x-2">
              <Play className="w-4 h-4" />
              <span>Videos</span>
            </TabsTrigger>
            <TabsTrigger value="podcasts" className="flex items-center space-x-2">
              <Headphones className="w-4 h-4" />
              <span>Podcasts</span>
            </TabsTrigger>
          </TabsList>

          {/* Videos Tab */}
          <TabsContent value="videos" className="space-y-12">
            {/* Featured Videos */}
            {filteredVideos.filter((video) => video.featured).length > 0 && (
              <section>
                <h2 className="text-3xl font-bold text-black mb-8">Featured Videos</h2>
                <div className="grid md:grid-cols-2 gap-8">
                  {filteredVideos
                    .filter((video) => video.featured)
                    .map((video) => (
                      <Card
                        key={video.id}
                        className="group hover:shadow-xl transition-shadow duration-300 border-0 shadow-lg"
                      >
                        <div className="relative overflow-hidden">
                          <Image
                            src={video.thumbnail || "/placeholder.svg"}
                            alt={video.title}
                            width={500}
                            height={300}
                            className="w-full h-64 object-cover"
                          />
                          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                            <Button size="lg" className="bg-white text-black hover:bg-gray-100 rounded-full w-16 h-16">
                              <Play className="w-8 h-8" />
                            </Button>
                          </div>
                          <Badge className="absolute top-4 left-4 bg-blue-600 text-white">Featured</Badge>
                          <Badge className="absolute bottom-4 right-4 bg-black text-white">{video.duration}</Badge>
                        </div>
                        <CardHeader>
                          <CardTitle className="text-xl font-bold text-black group-hover:text-blue-600 transition-colors">
                            {video.title}
                          </CardTitle>
                          <CardDescription className="text-gray-600">{video.description}</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="flex items-center justify-between text-sm text-gray-500">
                            <span className="flex items-center">
                              <Eye className="w-4 h-4 mr-1" />
                              {video.views} views
                            </span>
                            <span>{video.publishDate}</span>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                </div>
              </section>
            )}

            {/* All Videos */}
            <section>
              <h2 className="text-3xl font-bold text-black mb-8">All Videos</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredVideos
                  .filter((video) => !video.featured)
                  .map((video) => (
                    <Card
                      key={video.id}
                      className="group hover:shadow-lg transition-shadow duration-300 border-0 shadow-md"
                    >
                      <div className="relative overflow-hidden">
                        <Image
                          src={video.thumbnail || "/placeholder.svg"}
                          alt={video.title}
                          width={500}
                          height={300}
                          className="w-full h-48 object-cover"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                          <Button className="bg-white text-black hover:bg-gray-100 rounded-full w-12 h-12">
                            <Play className="w-6 h-6" />
                          </Button>
                        </div>
                        <Badge className="absolute bottom-4 right-4 bg-black text-white text-xs">
                          {video.duration}
                        </Badge>
                      </div>
                      <CardHeader>
                        <CardTitle className="text-lg font-bold text-black group-hover:text-blue-600 transition-colors line-clamp-2">
                          {video.title}
                        </CardTitle>
                        <CardDescription className="text-gray-600 line-clamp-2">{video.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="flex items-center justify-between text-sm text-gray-500">
                          <span className="flex items-center">
                            <Eye className="w-4 h-4 mr-1" />
                            {video.views}
                          </span>
                          <span>{video.publishDate}</span>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
              </div>
            </section>
          </TabsContent>

          {/* Podcasts Tab */}
          <TabsContent value="podcasts" className="space-y-12">
            {/* Featured Podcasts */}
            {filteredPodcasts.filter((podcast) => podcast.featured).length > 0 && (
              <section>
                <h2 className="text-3xl font-bold text-black mb-8">Featured Episodes</h2>
                <div className="grid md:grid-cols-2 gap-8">
                  {filteredPodcasts
                    .filter((podcast) => podcast.featured)
                    .map((podcast) => (
                      <Card
                        key={podcast.id}
                        className="group hover:shadow-xl transition-shadow duration-300 border-0 shadow-lg"
                      >
                        <CardHeader>
                          <Badge className="w-fit bg-blue-600 text-white mb-2">Featured</Badge>
                          <div className="flex items-start space-x-4">
                            <Image
                              src={podcast.thumbnail || "/placeholder.svg"}
                              alt={podcast.title}
                              width={200}
                              height={200}
                              className="w-24 h-24 rounded-lg object-cover"
                            />
                            <div className="flex-1">
                              <CardTitle className="text-xl font-bold text-black mb-2">{podcast.title}</CardTitle>
                              <p className="text-blue-600 font-medium mb-2">{podcast.episode}</p>
                              <CardDescription className="text-gray-600 line-clamp-2">
                                {podcast.description}
                              </CardDescription>
                            </div>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <div className="flex items-center justify-between mb-4">
                            <div className="flex items-center space-x-4 text-sm text-gray-500">
                              <span className="flex items-center">
                                <Clock className="w-4 h-4 mr-1" />
                                {podcast.duration}
                              </span>
                              <span>{podcast.publishDate}</span>
                            </div>
                          </div>
                          <div className="flex items-center space-x-4">
                            <Button className="bg-blue-600 hover:bg-blue-700">
                              <Play className="w-4 h-4 mr-2" />
                              Play Episode
                            </Button>
                            <Button variant="outline">Subscribe</Button>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                </div>
              </section>
            )}

            {/* All Podcasts */}
            <section>
              <h2 className="text-3xl font-bold text-black mb-8">All Episodes</h2>
              <div className="space-y-6">
                {filteredPodcasts
                  .filter((podcast) => !podcast.featured)
                  .map((podcast) => (
                    <Card
                      key={podcast.id}
                      className="group hover:shadow-lg transition-shadow duration-300 border-0 shadow-md"
                    >
                      <CardContent className="p-6">
                        <div className="flex items-start space-x-4">
                          <Image
                            src={podcast.thumbnail || "/placeholder.svg"}
                            alt={podcast.title}
                            width={200}
                            height={200}
                            className="w-20 h-20 rounded-lg object-cover"
                          />
                          <div className="flex-1">
                            <h3 className="text-lg font-bold text-black group-hover:text-blue-600 transition-colors mb-1">
                              {podcast.title}
                            </h3>
                            <p className="text-blue-600 font-medium mb-2">{podcast.episode}</p>
                            <p className="text-gray-600 mb-3 line-clamp-2">{podcast.description}</p>
                            <div className="flex items-center justify-between">
                              <div className="flex items-center space-x-4 text-sm text-gray-500">
                                <span className="flex items-center">
                                  <Clock className="w-4 h-4 mr-1" />
                                  {podcast.duration}
                                </span>
                                <span>{podcast.publishDate}</span>
                              </div>
                              <div className="flex items-center space-x-2">
                                <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                                  <Play className="w-4 h-4 mr-1" />
                                  Play
                                </Button>
                                <Button size="sm" variant="outline">
                                  Subscribe
                                </Button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
              </div>
            </section>
          </TabsContent>
        </Tabs>
      </div>

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
              <p className="text-gray-400">Independent journalism that matters.</p>
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
