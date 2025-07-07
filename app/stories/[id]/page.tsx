import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, Calendar, ArrowLeft } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { StoryInteractions } from "@/components/story-interactions"
import { CommentsSection } from "@/components/comments-section"
import { UserAuthButton } from "@/components/user-auth-button"

interface StoryPageProps {
  params: {
    id: string
  }
}

export default function StoryPage({ params }: StoryPageProps) {
  const storyId = Number.parseInt(params.id)

  // In a real app, this would fetch from an API
  const story = {
    id: storyId,
    title: "The Future of Digital Journalism in 2025",
    subtitle: "How AI and emerging technologies are reshaping the media landscape",
    excerpt:
      "Exploring how AI and emerging technologies are reshaping the media landscape and changing how we consume news.",
    content: `
      <p>The digital journalism landscape is undergoing a profound transformation as we enter 2025. Artificial intelligence, machine learning, and emerging technologies are not just changing how news is produced, but fundamentally altering how audiences consume and interact with information.</p>
      
      <h2>The Rise of AI-Powered Newsrooms</h2>
      <p>Newsrooms across the globe are increasingly integrating AI tools into their workflows. From automated fact-checking systems to AI-generated summaries, these technologies are enabling journalists to focus on what they do best: investigating, analyzing, and storytelling.</p>
      
      <p>Major news organizations like Reuters, Associated Press, and Bloomberg have already implemented AI systems that can generate basic news reports from data feeds, particularly for financial and sports coverage. This automation allows human journalists to dedicate more time to complex investigative pieces and in-depth analysis.</p>
      
      <h2>Personalized News Experiences</h2>
      <p>The future of news consumption is increasingly personalized. AI algorithms are becoming more sophisticated at understanding individual reader preferences, delivering customized news feeds that balance relevance with the need for diverse perspectives.</p>
      
      <p>However, this personalization raises important questions about filter bubbles and echo chambers. News organizations are grappling with how to provide personalized experiences while ensuring readers are exposed to a broad range of viewpoints and important stories they might not naturally seek out.</p>
      
      <h2>Interactive and Immersive Storytelling</h2>
      <p>Virtual and augmented reality technologies are opening new frontiers for immersive journalism. News organizations are experimenting with VR documentaries, AR-enhanced articles, and interactive data visualizations that allow readers to explore stories in unprecedented ways.</p>
      
      <p>These technologies are particularly powerful for covering complex topics like climate change, conflict zones, and scientific discoveries, where traditional text and images may fall short of conveying the full impact of a story.</p>
      
      <h2>Challenges and Opportunities</h2>
      <p>While technology offers exciting possibilities, it also presents significant challenges. The spread of misinformation, concerns about AI bias, and the need for media literacy are more pressing than ever. News organizations must balance innovation with responsibility, ensuring that technological advancement serves the public interest.</p>
      
      <p>The future of digital journalism will be shaped by how well the industry navigates these challenges while embracing the opportunities that technology provides. Success will depend on maintaining the core values of journalism—accuracy, fairness, and public service—while adapting to an increasingly digital and interconnected world.</p>
    `,
    image: "/placeholder.svg?height=400&width=800",
    category: "Technology",
    author: {
      name: "Sarah Johnson",
      avatar: "/placeholder.svg?height=60&width=60",
      bio: "Senior Technology Reporter with 10+ years covering digital media and emerging technologies.",
    },
    publishDate: "January 15, 2025",
    readTime: "5 min read",
    tags: ["AI", "Journalism", "Technology", "Media", "Future"],
    likes: 234,
    comments: 45,
    shares: 89,
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
            </nav>

            <div className="flex items-center space-x-4">
              <UserAuthButton />
            </div>
          </div>
        </div>
      </header>

      {/* Article Content */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Back Button */}
        <div className="mb-8">
          <Link href="/stories">
            <Button variant="ghost" className="text-gray-600 hover:text-black">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Stories
            </Button>
          </Link>
        </div>

        {/* Article Header */}
        <header className="mb-8">
          <div className="flex items-center space-x-2 mb-4">
            <Badge className="bg-blue-600 text-white">{story.category}</Badge>
            {story.tags.map((tag) => (
              <Badge key={tag} variant="outline" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-black mb-4 leading-tight">{story.title}</h1>

          {story.subtitle && <p className="text-xl text-gray-600 mb-6 leading-relaxed">{story.subtitle}</p>}

          <div className="flex items-center justify-between flex-wrap gap-4 mb-8">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-3">
                <Image
                  src={story.author.avatar || "/placeholder.svg"}
                  alt={story.author.name}
                  width={60}
                  height={60}
                  className="rounded-full"
                />
                <div>
                  <p className="font-medium text-black">{story.author.name}</p>
                  <p className="text-sm text-gray-500">{story.author.bio}</p>
                </div>
              </div>
            </div>

            <div className="flex items-center space-x-4 text-sm text-gray-500">
              <span className="flex items-center">
                <Calendar className="w-4 h-4 mr-1" />
                {story.publishDate}
              </span>
              <span className="flex items-center">
                <Clock className="w-4 h-4 mr-1" />
                {story.readTime}
              </span>
            </div>
          </div>
        </header>

        {/* Featured Image */}
        <div className="mb-8">
          <Image
            src={story.image || "/placeholder.svg"}
            alt={story.title}
            width={800}
            height={400}
            className="w-full h-64 md:h-96 object-cover rounded-lg"
          />
        </div>

        {/* Story Interactions */}
        <StoryInteractions
          storyId={story.id}
          initialLikes={story.likes}
          initialComments={story.comments}
          initialShares={story.shares}
        />

        {/* Article Content */}
        <div className="prose prose-lg max-w-none mb-12" dangerouslySetInnerHTML={{ __html: story.content }} />

        {/* Author Bio */}
        <Card className="mb-12 border-0 shadow-lg">
          <CardContent className="p-6">
            <div className="flex items-start space-x-4">
              <Image
                src={story.author.avatar || "/placeholder.svg"}
                alt={story.author.name}
                width={80}
                height={80}
                className="rounded-full"
              />
              <div className="flex-1">
                <h3 className="text-xl font-bold text-black mb-2">About {story.author.name}</h3>
                <p className="text-gray-600 mb-4">{story.author.bio}</p>
                <div className="flex space-x-4">
                  <Button size="sm" variant="outline">
                    Follow
                  </Button>
                  <Button size="sm" variant="outline">
                    More Articles
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Comments Section */}
        <CommentsSection storyId={story.id} />
      </article>
    </div>
  )
}
