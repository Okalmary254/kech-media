"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent } from "@/components/ui/card"
import { Heart, Reply, Send } from "lucide-react"
import { useUserAuth } from "./user-auth-context"
import Link from "next/link"

interface Comment {
  id: number
  author: {
    name: string
    avatar?: string
    initials: string
  }
  content: string
  timestamp: string
  likes: number
  isLiked: boolean
  replies?: Comment[]
}

interface CommentsSectionProps {
  storyId: number
}

export function CommentsSection({ storyId }: CommentsSectionProps) {
  const { user } = useUserAuth()
  const [comments, setComments] = useState<Comment[]>([])
  const [newComment, setNewComment] = useState("")
  const [replyingTo, setReplyingTo] = useState<number | null>(null)
  const [replyContent, setReplyContent] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)

  useEffect(() => {
    // Load demo comments
    const demoComments: Comment[] = [
      {
        id: 1,
        author: {
          name: "Alice Johnson",
          avatar: "/placeholder.svg?height=40&width=40",
          initials: "AJ",
        },
        content:
          "This is a fascinating look at the future of journalism. The integration of AI tools is already changing how we consume news, and I think we're just at the beginning of this transformation.",
        timestamp: "2 hours ago",
        likes: 12,
        isLiked: false,
        replies: [
          {
            id: 2,
            author: {
              name: "Bob Smith",
              initials: "BS",
            },
            content:
              "I agree! The personalization aspect is particularly interesting. Though I do worry about filter bubbles becoming even more pronounced.",
            timestamp: "1 hour ago",
            likes: 5,
            isLiked: false,
          },
        ],
      },
      {
        id: 3,
        author: {
          name: "Carol Davis",
          initials: "CD",
        },
        content:
          "Great article! As someone working in media, I can confirm that AI tools are becoming essential in our daily workflow. The key is finding the right balance between automation and human judgment.",
        timestamp: "4 hours ago",
        likes: 8,
        isLiked: false,
      },
      {
        id: 4,
        author: {
          name: "David Wilson",
          avatar: "/placeholder.svg?height=40&width=40",
          initials: "DW",
        },
        content:
          "The section on immersive storytelling really caught my attention. VR journalism could be a game-changer for covering complex global issues.",
        timestamp: "6 hours ago",
        likes: 15,
        isLiked: false,
      },
    ]
    setComments(demoComments)
  }, [])

  const handleSubmitComment = async () => {
    if (!user) {
      window.location.href = `/auth/user/login?returnUrl=${encodeURIComponent(window.location.pathname)}`
      return
    }

    if (!newComment.trim()) return

    setIsSubmitting(true)
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000))

      const comment: Comment = {
        id: Date.now(),
        author: {
          name: `${user.firstName} ${user.lastName}`,
          avatar: user.avatar,
          initials: `${user.firstName[0]}${user.lastName[0]}`,
        },
        content: newComment,
        timestamp: "Just now",
        likes: 0,
        isLiked: false,
      }

      setComments((prev) => [comment, ...prev])
      setNewComment("")
    } catch (error) {
      console.error("Failed to post comment:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleSubmitReply = async (parentId: number) => {
    if (!user) {
      window.location.href = `/auth/user/login?returnUrl=${encodeURIComponent(window.location.pathname)}`
      return
    }

    if (!replyContent.trim()) return

    setIsSubmitting(true)
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000))

      const reply: Comment = {
        id: Date.now(),
        author: {
          name: `${user.firstName} ${user.lastName}`,
          avatar: user.avatar,
          initials: `${user.firstName[0]}${user.lastName[0]}`,
        },
        content: replyContent,
        timestamp: "Just now",
        likes: 0,
        isLiked: false,
      }

      setComments((prev) =>
        prev.map((comment) => {
          if (comment.id === parentId) {
            return {
              ...comment,
              replies: [...(comment.replies || []), reply],
            }
          }
          return comment
        }),
      )

      setReplyContent("")
      setReplyingTo(null)
    } catch (error) {
      console.error("Failed to post reply:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleLikeComment = async (commentId: number, isReply = false, parentId?: number) => {
    if (!user) {
      window.location.href = `/auth/user/login?returnUrl=${encodeURIComponent(window.location.pathname)}`
      return
    }

    if (isReply && parentId) {
      setComments((prev) =>
        prev.map((comment) => {
          if (comment.id === parentId) {
            return {
              ...comment,
              replies: comment.replies?.map((reply) => {
                if (reply.id === commentId) {
                  return {
                    ...reply,
                    isLiked: !reply.isLiked,
                    likes: reply.isLiked ? reply.likes - 1 : reply.likes + 1,
                  }
                }
                return reply
              }),
            }
          }
          return comment
        }),
      )
    } else {
      setComments((prev) =>
        prev.map((comment) => {
          if (comment.id === commentId) {
            return {
              ...comment,
              isLiked: !comment.isLiked,
              likes: comment.isLiked ? comment.likes - 1 : comment.likes + 1,
            }
          }
          return comment
        }),
      )
    }
  }

  const CommentComponent = ({
    comment,
    isReply = false,
    parentId,
  }: {
    comment: Comment
    isReply?: boolean
    parentId?: number
  }) => (
    <div className={`${isReply ? "ml-12 mt-4" : ""}`}>
      <div className="flex space-x-3">
        <Avatar className="h-10 w-10">
          <AvatarImage src={comment.author.avatar || "/placeholder.svg"} alt={comment.author.name} />
          <AvatarFallback className="bg-gray-200 text-gray-700">{comment.author.initials}</AvatarFallback>
        </Avatar>
        <div className="flex-1">
          <div className="bg-gray-50 rounded-lg p-4">
            <div className="flex items-center space-x-2 mb-2">
              <span className="font-medium text-sm">{comment.author.name}</span>
              <span className="text-xs text-gray-500">{comment.timestamp}</span>
            </div>
            <p className="text-gray-800 text-sm leading-relaxed">{comment.content}</p>
          </div>
          <div className="flex items-center space-x-4 mt-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => handleLikeComment(comment.id, isReply, parentId)}
              className={`text-xs ${comment.isLiked ? "text-red-600" : "text-gray-500"} hover:text-red-600`}
            >
              <Heart className={`w-4 h-4 mr-1 ${comment.isLiked ? "fill-current" : ""}`} />
              {comment.likes}
            </Button>
            {!isReply && (
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setReplyingTo(replyingTo === comment.id ? null : comment.id)}
                className="text-xs text-gray-500 hover:text-blue-600"
              >
                <Reply className="w-4 h-4 mr-1" />
                Reply
              </Button>
            )}
          </div>

          {replyingTo === comment.id && (
            <div className="mt-4 space-y-3">
              <Textarea
                placeholder="Write a reply..."
                value={replyContent}
                onChange={(e) => setReplyContent(e.target.value)}
                className="min-h-[80px]"
              />
              <div className="flex space-x-2">
                <Button
                  size="sm"
                  onClick={() => handleSubmitReply(comment.id)}
                  disabled={isSubmitting || !replyContent.trim()}
                >
                  <Send className="w-4 h-4 mr-1" />
                  Reply
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => {
                    setReplyingTo(null)
                    setReplyContent("")
                  }}
                >
                  Cancel
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>

      {comment.replies &&
        comment.replies.map((reply) => (
          <CommentComponent key={reply.id} comment={reply} isReply={true} parentId={comment.id} />
        ))}
    </div>
  )

  return (
    <div className="space-y-8">
      <div className="border-t border-gray-200 pt-8">
        <h3 className="text-2xl font-bold text-black mb-6">
          Comments ({comments.length + comments.reduce((acc, comment) => acc + (comment.replies?.length || 0), 0)})
        </h3>

        {/* Comment Form */}
        <Card className="mb-8 border-0 shadow-sm">
          <CardContent className="p-6">
            {user ? (
              <div className="space-y-4">
                <div className="flex space-x-3">
                  <Avatar className="h-10 w-10">
                    <AvatarImage src={user.avatar || "/placeholder.svg"} alt={user.firstName} />
                    <AvatarFallback className="bg-blue-600 text-white">
                      {user.firstName[0]}
                      {user.lastName[0]}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <Textarea
                      placeholder="Share your thoughts..."
                      value={newComment}
                      onChange={(e) => setNewComment(e.target.value)}
                      className="min-h-[100px] border-gray-200"
                    />
                  </div>
                </div>
                <div className="flex justify-end">
                  <Button
                    onClick={handleSubmitComment}
                    disabled={isSubmitting || !newComment.trim()}
                    className="bg-blue-600 hover:bg-blue-700"
                  >
                    <Send className="w-4 h-4 mr-2" />
                    {isSubmitting ? "Posting..." : "Post Comment"}
                  </Button>
                </div>
              </div>
            ) : (
              <div className="text-center py-8">
                <p className="text-gray-600 mb-4">Sign in to join the conversation</p>
                <div className="space-x-4">
                  <Link href={`/auth/user/login?returnUrl=${encodeURIComponent(window.location?.pathname || "")}`}>
                    <Button className="bg-blue-600 hover:bg-blue-700">Sign In</Button>
                  </Link>
                  <Link href={`/auth/user/signup?returnUrl=${encodeURIComponent(window.location?.pathname || "")}`}>
                    <Button variant="outline">Sign Up</Button>
                  </Link>
                </div>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Comments List */}
        <div className="space-y-6">
          {comments.map((comment) => (
            <CommentComponent key={comment.id} comment={comment} />
          ))}
        </div>

        {comments.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500">No comments yet. Be the first to share your thoughts!</p>
          </div>
        )}
      </div>
    </div>
  )
}
