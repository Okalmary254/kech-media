"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  BarChart3,
  FileText,
  Video,
  Headphones,
  Eye,
  TrendingUp,
  Plus,
  Settings,
  LogOut,
  Edit,
  Trash2,
  Search,
} from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"

export default function AdminDashboard() {
  const router = useRouter()
  const [user, setUser] = useState<any>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const token = localStorage.getItem("kech_admin_token")
    const userData = localStorage.getItem("kech_admin_user")

    if (!token || !userData) {
      router.push("/auth/login")
      return
    }

    setUser(JSON.parse(userData))
    setIsLoading(false)
  }, [router])

  const handleLogout = () => {
    localStorage.removeItem("kech_admin_token")
    localStorage.removeItem("kech_admin_user")
    router.push("/auth/login")
  }

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center mx-auto mb-4">
            <span className="text-white font-bold text-xl">K</span>
          </div>
          <p className="text-gray-600">Loading dashboard...</p>
        </div>
      </div>
    )
  }

  const stats = [
    { title: "Total Articles", value: "156", change: "+12%", icon: FileText, color: "text-blue-600" },
    { title: "Total Videos", value: "43", change: "+8%", icon: Video, color: "text-purple-600" },
    { title: "Podcast Episodes", value: "28", change: "+15%", icon: Headphones, color: "text-green-600" },
    { title: "Monthly Views", value: "89.2K", change: "+23%", icon: Eye, color: "text-orange-600" },
  ]

  const recentArticles = [
    {
      id: 1,
      title: "The Future of Digital Journalism in 2025",
      status: "published",
      author: "Sarah Karanja",
      date: "Jan 15, 2025",
      views: "2.3K",
      category: "Technology",
    },
    {
      id: 2,
      title: "Climate Change: Stories from the Frontlines",
      status: "published",
      author: "Michael Oduor",
      date: "Jan 14, 2025",
      views: "5.1K",
      category: "Environment",
    },
    {
      id: 3,
      title: "Election 2025: What Voters Need to Know",
      status: "draft",
      author: "David Njuguna",
      date: "Jan 13, 2025",
      views: "0",
      category: "Politics",
    },
    {
      id: 4,
      title: "Tech Giants and Data Privacy",
      status: "review",
      author: "Lisa Kwamboka",
      date: "Jan 12, 2025",
      views: "0",
      category: "Technology",
    },
  ]

  const recentMedia = [
    {
      id: 1,
      title: "Inside the Newsroom: How Stories Come to Life",
      type: "video",
      duration: "12:34",
      views: "2.3K",
      status: "published",
      date: "Jan 15, 2025",
    },
    {
      id: 2,
      title: "Media Matters: Weekly News Analysis",
      type: "podcast",
      duration: "45:22",
      views: "1.8K",
      status: "published",
      date: "Jan 14, 2025",
    },
    {
      id: 3,
      title: "Climate Crisis Interview",
      type: "video",
      duration: "28:45",
      views: "0",
      status: "processing",
      date: "Jan 13, 2025",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-4">
              <Link href="/" className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-black rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">K</span>
                </div>
                <span className="text-2xl font-bold text-black">Kech Media</span>
              </Link>
              <Badge variant="secondary" className="ml-4">
                Admin Dashboard
              </Badge>
            </div>

            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-600">Welcome, {user?.name}</span>
              <Button variant="outline" size="sm">
                <Settings className="w-4 h-4 mr-2" />
                Settings
              </Button>
              <Button variant="outline" size="sm" onClick={handleLogout}>
                <LogOut className="w-4 h-4 mr-2" />
                Logout
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-black mb-2">Dashboard</h1>
          <p className="text-gray-600">Manage your content and monitor performance</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <Card key={index} className="border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                    <p className="text-3xl font-bold text-black mt-2">{stat.value}</p>
                    <p className="text-sm text-green-600 mt-1">{stat.change} from last month</p>
                  </div>
                  <div className={`w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center`}>
                    <stat.icon className={`w-6 h-6 ${stat.color}`} />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid md:grid-cols-4 gap-4 mb-8">
          <Link href="/admin/articles/new">
            <Button className="w-full bg-blue-600 hover:bg-blue-700 h-12">
              <Plus className="w-4 h-4 mr-2" />
              New Article
            </Button>
          </Link>
          <Link href="/admin/videos/new">
            <Button variant="outline" className="w-full h-12 bg-transparent">
              <Video className="w-4 h-4 mr-2" />
              Upload Video
            </Button>
          </Link>
          <Link href="/admin/podcasts/new">
            <Button variant="outline" className="w-full h-12 bg-transparent">
              <Headphones className="w-4 h-4 mr-2" />
              New Podcast
            </Button>
          </Link>
          <Link href="/admin/analytics">
            <Button variant="outline" className="w-full h-12 bg-transparent">
              <BarChart3 className="w-4 h-4 mr-2" />
              Analytics
            </Button>
          </Link>
        </div>

        <Tabs defaultValue="articles" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3 max-w-md">
            <TabsTrigger value="articles">Articles</TabsTrigger>
            <TabsTrigger value="media">Media</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
          </TabsList>

          <TabsContent value="articles">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <div className="flex justify-between items-center">
                  <div>
                    <CardTitle>Recent Articles</CardTitle>
                    <CardDescription>Manage your published and draft articles</CardDescription>
                  </div>
                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm">
                      <Search className="w-4 h-4 mr-2" />
                      Search
                    </Button>
                    <Link href="/admin/articles/new">
                      <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                        <Plus className="w-4 h-4 mr-2" />
                        New Article
                      </Button>
                    </Link>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentArticles.map((article) => (
                    <div
                      key={article.id}
                      className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <h3 className="font-semibold text-black">{article.title}</h3>
                          <Badge
                            variant={
                              article.status === "published"
                                ? "default"
                                : article.status === "draft"
                                  ? "secondary"
                                  : "outline"
                            }
                            className={
                              article.status === "published"
                                ? "bg-green-600"
                                : article.status === "draft"
                                  ? "bg-gray-600"
                                  : "bg-yellow-600"
                            }
                          >
                            {article.status}
                          </Badge>
                          <Badge variant="outline">{article.category}</Badge>
                        </div>
                        <div className="flex items-center space-x-4 text-sm text-gray-600">
                          <span>By {article.author}</span>
                          <span>{article.date}</span>
                          <span>{article.views} views</span>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Button variant="outline" size="sm">
                          <Edit className="w-4 h-4" />
                        </Button>
                        <Button variant="outline" size="sm">
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="media">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <div className="flex justify-between items-center">
                  <div>
                    <CardTitle>Media Content</CardTitle>
                    <CardDescription>Manage videos and podcast episodes</CardDescription>
                  </div>
                  <div className="flex space-x-2">
                    <Link href="/admin/videos/new">
                      <Button variant="outline" size="sm">
                        <Video className="w-4 h-4 mr-2" />
                        Upload Video
                      </Button>
                    </Link>
                    <Link href="/admin/podcasts/new">
                      <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                        <Headphones className="w-4 h-4 mr-2" />
                        New Podcast
                      </Button>
                    </Link>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentMedia.map((media) => (
                    <div
                      key={media.id}
                      className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      <div className="flex items-center space-x-4">
                        <div className="w-16 h-12 bg-gray-200 rounded flex items-center justify-center">
                          {media.type === "video" ? (
                            <Video className="w-6 h-6 text-gray-500" />
                          ) : (
                            <Headphones className="w-6 h-6 text-gray-500" />
                          )}
                        </div>
                        <div>
                          <div className="flex items-center space-x-3 mb-1">
                            <h3 className="font-semibold text-black">{media.title}</h3>
                            <Badge
                              variant={media.status === "published" ? "default" : "secondary"}
                              className={media.status === "published" ? "bg-green-600" : "bg-yellow-600"}
                            >
                              {media.status}
                            </Badge>
                          </div>
                          <div className="flex items-center space-x-4 text-sm text-gray-600">
                            <span>{media.duration}</span>
                            <span>{media.views} views</span>
                            <span>{media.date}</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Button variant="outline" size="sm">
                          <Edit className="w-4 h-4" />
                        </Button>
                        <Button variant="outline" size="sm">
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="analytics">
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle>Content Performance</CardTitle>
                  <CardDescription>Top performing articles this month</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentArticles
                      .filter((a) => a.status === "published")
                      .map((article, index) => (
                        <div key={article.id} className="flex items-center justify-between">
                          <div className="flex items-center space-x-3">
                            <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                              <span className="text-sm font-bold text-blue-600">{index + 1}</span>
                            </div>
                            <div>
                              <p className="font-medium text-black line-clamp-1">{article.title}</p>
                              <p className="text-sm text-gray-600">{article.views} views</p>
                            </div>
                          </div>
                          <TrendingUp className="w-4 h-4 text-green-600" />
                        </div>
                      ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle>Traffic Overview</CardTitle>
                  <CardDescription>Website analytics summary</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm text-gray-600">Page Views</span>
                        <span className="text-sm font-medium">89.2K</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-blue-600 h-2 rounded-full" style={{ width: "75%" }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm text-gray-600">Unique Visitors</span>
                        <span className="text-sm font-medium">45.6K</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-green-600 h-2 rounded-full" style={{ width: "60%" }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm text-gray-600">Bounce Rate</span>
                        <span className="text-sm font-medium">32%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-orange-600 h-2 rounded-full" style={{ width: "32%" }}></div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
