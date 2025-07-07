"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, Clock, User, Share2, BookOpen, Filter } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function StoriesPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [sortBy, setSortBy] = useState("latest")

  const categories = [
    { value: "all", label: "All Categories" },
    { value: "technology", label: "Technology" },
    { value: "politics", label: "Politics" },
    { value: "culture", label: "Culture" },
    { value: "business", label: "Business" },
    { value: "environment", label: "Environment" },
    { value: "sports", label: "Sports" },
  ]

  const stories = [
    {
      id: 1,
      title: "The Future of Digital Journalism in 2025",
      excerpt:
        "Exploring how AI and emerging technologies are reshaping the media landscape and changing how we consume news. This comprehensive analysis looks at the challenges and opportunities ahead.",
      image: "/placeholder.svg?height=300&width=500",
      category: "Technology",
      author: "Sarah Johnson",
      date: "Jan 15, 2025",
      readTime: "5 min read",
      featured: true,
    },
    {
      id: 2,
      title: "Climate Change: Stories from the Frontlines",
      excerpt:
        "In-depth reporting from communities directly affected by climate change around the world, highlighting both challenges and innovative solutions.",
      image: "/placeholder.svg?height=300&width=500",
      category: "Environment",
      author: "Michael Chen",
      date: "Jan 14, 2025",
      readTime: "8 min read",
      featured: true,
    },
    {
      id: 3,
      title: "The Rise of Independent Media Creators",
      excerpt:
        "How content creators are building sustainable media businesses outside traditional frameworks and what this means for the industry.",
      image: "/placeholder.svg?height=300&width=500",
      category: "Business",
      author: "Emma Rodriguez",
      date: "Jan 13, 2025",
      readTime: "6 min read",
      featured: false,
    },
    {
      id: 4,
      title: "Election 2025: What Voters Need to Know",
      excerpt:
        "A comprehensive guide to the upcoming elections, key issues, and candidate positions on major policy areas.",
      image: "/placeholder.svg?height=300&width=500",
      category: "Politics",
      author: "David Kim",
      date: "Jan 12, 2025",
      readTime: "10 min read",
      featured: false,
    },
    {
      id: 5,
      title: "The Cultural Impact of Streaming Platforms",
      excerpt:
        "How streaming services are changing entertainment consumption and cultural discourse in the digital age.",
      image: "/placeholder.svg?height=300&width=500",
      category: "Culture",
      author: "Lisa Thompson",
      date: "Jan 11, 2025",
      readTime: "7 min read",
      featured: false,
    },
    {
      id: 6,
      title: "Tech Giants and Data Privacy: A Deep Dive",
      excerpt:
        "Investigating how major technology companies handle user data and what new regulations mean for consumers.",
      image: "/placeholder.svg?height=300&width=500",
      category: "Technology",
      author: "James Wilson",
      date: "Jan 10, 2025",
      readTime: "9 min read",
      featured: false,
    },
    {
      id: 7,
      title: "Small Business Recovery Post-Pandemic",
      excerpt: "Stories of resilience and adaptation from small business owners navigating the post-pandemic economy.",
      image: "/placeholder.svg?height=300&width=500",
      category: "Business",
      author: "Sarah Johnson",
      date: "Jan 9, 2025",
      readTime: "6 min read",
      featured: false,
    },
    {
      id: 8,
      title: "Sports Analytics: Changing the Game",
      excerpt: "How data analytics is revolutionizing sports strategy, player development, and fan engagement.",
      image: "/placeholder.svg?height=300&width=500",
      category: "Sports",
      author: "Michael Chen",
      date: "Jan 8, 2025",
      readTime: "5 min read",
      featured: false,
    },
  ]

  const filteredStories = stories.filter((story) => {
    const matchesSearch =
      story.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      story.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === "all" || story.category.toLowerCase() === selectedCategory
    return matchesSearch && matchesCategory
  })

  const sortedStories = [...filteredStories].sort((a, b) => {
    if (sortBy === "latest") {
      return new Date(b.date).getTime() - new Date(a.date).getTime()
    } else if (sortBy === "popular") {
      return b.id - a.id // Simplified popularity sort
    }
    return 0
  })

  const featuredStories = sortedStories.filter((story) => story.featured)
  const regularStories = sortedStories.filter((story) => !story.featured)

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
              <Link href="/stories" className="text-black font-medium hover:text-blue-600 transition-colors">
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

            <Button className="bg-blue-600 hover:bg-blue-700">Subscribe</Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-black to-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Latest <span className="text-blue-400">Stories</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              In-depth journalism, analysis, and reporting on the issues that matter most
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Sidebar */}
          <aside className="lg:w-80 space-y-8">
            {/* Search */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center text-lg">
                  <Search className="w-5 h-5 mr-2" />
                  Search Stories
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Input
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full"
                />
              </CardContent>
            </Card>

            {/* Filters */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center text-lg">
                  <Filter className="w-5 h-5 mr-2" />
                  Filter & Sort
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="text-sm font-medium text-gray-700 mb-2 block">Category</label>
                  <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                    <SelectTrigger>
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
                <div>
                  <label className="text-sm font-medium text-gray-700 mb-2 block">Sort By</label>
                  <Select value={sortBy} onValueChange={setSortBy}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="latest">Latest First</SelectItem>
                      <SelectItem value="popular">Most Popular</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
            </Card>

            {/* Categories */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center text-lg">
                  <BookOpen className="w-5 h-5 mr-2" />
                  Categories
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {categories.slice(1).map((category) => (
                    <button
                      key={category.value}
                      onClick={() => setSelectedCategory(category.value)}
                      className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${
                        selectedCategory === category.value
                          ? "bg-blue-600 text-white"
                          : "hover:bg-gray-100 text-gray-700"
                      }`}
                    >
                      {category.label}
                    </button>
                  ))}
                </div>
              </CardContent>
            </Card>
          </aside>

          {/* Main Content */}
          <main className="flex-1">
            {/* Featured Stories */}
            {featuredStories.length > 0 && (
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-black mb-8">Featured Stories</h2>
                <div className="grid md:grid-cols-2 gap-8">
                  {featuredStories.map((story) => (
                    <Card
                      key={story.id}
                      className="group hover:shadow-xl transition-shadow duration-300 border-0 shadow-lg"
                    >
                      <div className="relative overflow-hidden">
                        <Image
                          src={story.image || "/placeholder.svg"}
                          alt={story.title}
                          width={500}
                          height={300}
                          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <Badge className="absolute top-4 left-4 bg-blue-600 text-white">{story.category}</Badge>
                        <Badge className="absolute top-4 right-4 bg-black text-white">Featured</Badge>
                      </div>
                      <CardHeader>
                        <CardTitle className="text-xl font-bold text-black group-hover:text-blue-600 transition-colors">
                          <Link href={`/stories/${story.id}`}>{story.title}</Link>
                        </CardTitle>
                        <CardDescription className="text-gray-600 line-clamp-3">{story.excerpt}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-4 text-sm text-gray-500">
                            <span className="flex items-center">
                              <User className="w-4 h-4 mr-1" />
                              {story.author}
                            </span>
                            <span className="flex items-center">
                              <Clock className="w-4 h-4 mr-1" />
                              {story.readTime}
                            </span>
                          </div>
                          <Button size="sm" variant="outline" className="border-gray-300 bg-transparent">
                            <Share2 className="w-4 h-4" />
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </section>
            )}

            {/* All Stories */}
            <section>
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-3xl font-bold text-black">
                  {selectedCategory === "all"
                    ? "All Stories"
                    : `${categories.find((c) => c.value === selectedCategory)?.label} Stories`}
                </h2>
                <p className="text-gray-600">{sortedStories.length} articles found</p>
              </div>

              <div className="grid gap-8">
                {regularStories.map((story) => (
                  <Card
                    key={story.id}
                    className="group hover:shadow-lg transition-shadow duration-300 border-0 shadow-md"
                  >
                    <div className="md:flex">
                      <div className="md:w-80 relative overflow-hidden">
                        <Image
                          src={story.image || "/placeholder.svg"}
                          alt={story.title}
                          width={500}
                          height={300}
                          className="w-full h-48 md:h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <Badge className="absolute top-4 left-4 bg-blue-600 text-white">{story.category}</Badge>
                      </div>
                      <div className="flex-1 p-6">
                        <CardHeader className="p-0 mb-4">
                          <CardTitle className="text-2xl font-bold text-black group-hover:text-blue-600 transition-colors mb-2">
                            <Link href={`/stories/${story.id}`}>{story.title}</Link>
                          </CardTitle>
                          <CardDescription className="text-gray-600 line-clamp-3">{story.excerpt}</CardDescription>
                        </CardHeader>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-4 text-sm text-gray-500">
                            <span className="flex items-center">
                              <User className="w-4 h-4 mr-1" />
                              {story.author}
                            </span>
                            <span>{story.date}</span>
                            <span className="flex items-center">
                              <Clock className="w-4 h-4 mr-1" />
                              {story.readTime}
                            </span>
                          </div>
                          <Button size="sm" variant="outline" className="border-gray-300 bg-transparent">
                            <Share2 className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>

              {sortedStories.length === 0 && (
                <div className="text-center py-12">
                  <p className="text-gray-500 text-lg">No stories found matching your criteria.</p>
                  <Button
                    onClick={() => {
                      setSearchTerm("")
                      setSelectedCategory("all")
                    }}
                    className="mt-4 bg-blue-600 hover:bg-blue-700"
                  >
                    Clear Filters
                  </Button>
                </div>
              )}
            </section>
          </main>
        </div>
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
