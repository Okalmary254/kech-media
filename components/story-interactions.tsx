"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Heart, MessageCircle, Share2, Bookmark } from "lucide-react"
import { useUserAuth } from "./user-auth-context"

interface StoryInteractionsProps {
  storyId: number
  initialLikes: number
  initialComments: number
  initialShares: number
}

export function StoryInteractions({ storyId, initialLikes, initialComments, initialShares }: StoryInteractionsProps) {
  const { user } = useUserAuth()
  const [likes, setLikes] = useState(initialLikes)
  const [comments, setComments] = useState(initialComments)
  const [shares, setShares] = useState(initialShares)
  const [isLiked, setIsLiked] = useState(false)
  const [isBookmarked, setIsBookmarked] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    if (user) {
      // Load user interactions from localStorage
      const interactions = JSON.parse(localStorage.getItem("kech_user_interactions") || "{}")
      setIsLiked(interactions[`story_${storyId}_liked`] || false)
      setIsBookmarked(interactions[`story_${storyId}_bookmarked`] || false)
    }
  }, [user, storyId])

  const saveInteraction = (key: string, value: boolean) => {
    if (user) {
      const interactions = JSON.parse(localStorage.getItem("kech_user_interactions") || "{}")
      interactions[key] = value
      localStorage.setItem("kech_user_interactions", JSON.stringify(interactions))
    }
  }

  const handleLike = async () => {
    if (!user) {
      // Redirect to login with return URL
      window.location.href = `/auth/user/login?returnUrl=${encodeURIComponent(window.location.pathname)}`
      return
    }

    setIsLoading(true)
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 500))

      const newLikedState = !isLiked
      setIsLiked(newLikedState)
      setLikes((prev) => (newLikedState ? prev + 1 : prev - 1))
      saveInteraction(`story_${storyId}_liked`, newLikedState)
    } catch (error) {
      console.error("Failed to like story:", error)
    } finally {
      setIsLoading(false)
    }
  }

  const handleBookmark = async () => {
    if (!user) {
      window.location.href = `/auth/user/login?returnUrl=${encodeURIComponent(window.location.pathname)}`
      return
    }

    setIsLoading(true)
    try {
      await new Promise((resolve) => setTimeout(resolve, 500))

      const newBookmarkedState = !isBookmarked
      setIsBookmarked(newBookmarkedState)
      saveInteraction(`story_${storyId}_bookmarked`, newBookmarkedState)
    } catch (error) {
      console.error("Failed to bookmark story:", error)
    } finally {
      setIsLoading(false)
    }
  }

  const handleShare = async () => {
    if (!user) {
      window.location.href = `/auth/user/login?returnUrl=${encodeURIComponent(window.location.pathname)}`
      return
    }

    try {
      if (navigator.share) {
        await navigator.share({
          title: document.title,
          url: window.location.href,
        })
      } else {
        // Fallback to clipboard
        await navigator.clipboard.writeText(window.location.href)
        alert("Link copied to clipboard!")
      }

      // Update share count
      setShares((prev) => prev + 1)
    } catch (error) {
      console.error("Failed to share:", error)
    }
  }

  return (
    <div className="flex items-center justify-between py-6 border-y border-gray-200 mb-8">
      <div className="flex items-center space-x-6">
        <Button
          variant="ghost"
          size="sm"
          onClick={handleLike}
          disabled={isLoading}
          className={`flex items-center space-x-2 ${
            isLiked ? "text-red-600 hover:text-red-700" : "text-gray-600 hover:text-red-600"
          }`}
        >
          <Heart className={`w-5 h-5 ${isLiked ? "fill-current" : ""}`} />
          <span>{likes}</span>
        </Button>

        <div className="flex items-center space-x-2 text-gray-600">
          <MessageCircle className="w-5 h-5" />
          <span>{comments}</span>
        </div>

        <Button
          variant="ghost"
          size="sm"
          onClick={handleShare}
          className="flex items-center space-x-2 text-gray-600 hover:text-blue-600"
        >
          <Share2 className="w-5 h-5" />
          <span>{shares}</span>
        </Button>
      </div>

      <Button
        variant="ghost"
        size="sm"
        onClick={handleBookmark}
        disabled={isLoading}
        className={`${isBookmarked ? "text-blue-600 hover:text-blue-700" : "text-gray-600 hover:text-blue-600"}`}
      >
        <Bookmark className={`w-5 h-5 ${isBookmarked ? "fill-current" : ""}`} />
      </Button>
    </div>
  )
}
