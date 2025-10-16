"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Lock, User, Search, MessageSquare, Send, Users, BookOpen } from "lucide-react"

// Mock member data
const mockMembers = [
  {
    id: 1,
    name: "Sarah Johnson",
    email: "sarah.johnson@email.com",
    avatar: "/woman-farmer.jpg",
    role: "Hemp Farmer",
    location: "Oregon",
  },
  {
    id: 2,
    name: "Michael Chen",
    email: "michael.chen@email.com",
    avatar: "/man-farmer.jpg",
    role: "Agricultural Consultant",
    location: "California",
  },
  {
    id: 3,
    name: "Elena Rodriguez",
    email: "elena.rodriguez@email.com",
    avatar: "/woman-agriculture.jpg",
    role: "Seed Supplier",
    location: "Colorado",
  },
  {
    id: 4,
    name: "James Wilson",
    email: "james.wilson@email.com",
    avatar: "/man-agriculture.jpg",
    role: "Equipment Specialist",
    location: "Washington",
  },
  {
    id: 5,
    name: "Maria Garcia",
    email: "maria.garcia@email.com",
    avatar: "/woman-farming.jpg",
    role: "Hemp Processor",
    location: "New Mexico",
  },
  {
    id: 6,
    name: "David Kim",
    email: "david.kim@email.com",
    avatar: "/man-farming.jpg",
    role: "Co-op Coordinator",
    location: "Montana",
  },
]

// Mock community blog posts
const mockBlogPosts = [
  {
    id: 1,
    author: "Sarah Johnson",
    authorAvatar: "/woman-farmer.jpg",
    title: "My First Hemp Harvest: Lessons Learned",
    content:
      "After months of preparation, I finally completed my first hemp harvest. Here are the key lessons I learned about timing, equipment, and post-harvest processing...",
    date: "2 days ago",
    likes: 24,
    comments: 8,
  },
  {
    id: 2,
    author: "Michael Chen",
    authorAvatar: "/man-farmer.jpg",
    title: "Soil Testing Results and Recommendations",
    content:
      "I recently completed comprehensive soil testing across my 50-acre hemp operation. The results revealed some interesting patterns about nutrient distribution...",
    date: "5 days ago",
    likes: 18,
    comments: 12,
  },
  {
    id: 3,
    author: "Elena Rodriguez",
    authorAvatar: "/woman-agriculture.jpg",
    title: "New Seed Varieties Available for Spring 2025",
    content:
      "Excited to announce we have three new certified hemp seed varieties available for the spring planting season. These varieties show improved disease resistance...",
    date: "1 week ago",
    likes: 31,
    comments: 15,
  },
]

// Mock messages
const mockMessages = [
  {
    id: 1,
    from: "Sarah Johnson",
    fromAvatar: "/woman-farmer.jpg",
    message: "Hi! I saw your post about equipment sharing. Do you have the harvester available next month?",
    time: "10:30 AM",
    unread: true,
  },
  {
    id: 2,
    from: "Michael Chen",
    fromAvatar: "/man-farmer.jpg",
    message: "Thanks for the soil testing recommendations. I'll try those amendments this season.",
    time: "Yesterday",
    unread: false,
  },
]

export default function MembersPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [userEmail, setUserEmail] = useState("")
  const [isLoading, setIsLoading] = useState(true)
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedMember, setSelectedMember] = useState<(typeof mockMembers)[0] | null>(null)
  const [messageText, setMessageText] = useState("")
  const [newPostTitle, setNewPostTitle] = useState("")
  const [newPostContent, setNewPostContent] = useState("")
  const router = useRouter()

  useEffect(() => {
    // Check if user is logged in
    const loggedIn = localStorage.getItem("isLoggedIn") === "true"
    const email = localStorage.getItem("userEmail") || ""

    setIsLoggedIn(loggedIn)
    setUserEmail(email)
    setIsLoading(false)

    // Redirect to login if not logged in
    if (!loggedIn) {
      router.push("/login")
    }
  }, [router])

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn")
    localStorage.removeItem("userEmail")
    router.push("/")
  }

  const filteredMembers = mockMembers.filter(
    (member) =>
      member.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      member.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      member.role.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  const handleSendMessage = () => {
    if (messageText.trim() && selectedMember) {
      alert(`Encrypted message sent to ${selectedMember.name}: ${messageText}`)
      setMessageText("")
    }
  }

  const handleCreatePost = () => {
    if (newPostTitle.trim() && newPostContent.trim()) {
      alert(`Blog post created: ${newPostTitle}`)
      setNewPostTitle("")
      setNewPostContent("")
    }
  }

  if (isLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="text-lg">Loading...</div>
      </div>
    )
  }

  if (!isLoggedIn) {
    return null
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Banner */}
      <div className="relative h-[300px] w-full overflow-hidden md:h-[400px]">
        <img
          src="/industrial-hemp-bud-close-up-natural-lighting.jpg"
          alt="Members area banner"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <div className="mb-4 flex items-center justify-center gap-2">
              <Lock className="h-8 w-8 text-white" />
              <Badge variant="secondary" className="text-sm">
                Members Only
              </Badge>
            </div>
            <h1 className="font-serif text-4xl font-bold text-white drop-shadow-lg md:text-6xl">Welcome Back</h1>
            <p className="mt-4 text-lg text-white/90 drop-shadow-md md:text-xl">Connect, Learn, and Grow Together</p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-12">
        {/* User Info */}
        <div className="mb-8 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <User className="h-5 w-5 text-muted-foreground" />
            <span className="text-sm text-muted-foreground">Logged in as: {userEmail}</span>
          </div>
          <Button variant="outline" onClick={handleLogout}>
            Log Out
          </Button>
        </div>

        <Tabs defaultValue="blog" className="space-y-8">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="blog" className="flex items-center gap-2">
              <BookOpen className="h-4 w-4" />
              Community Blog
            </TabsTrigger>
            <TabsTrigger value="members" className="flex items-center gap-2">
              <Users className="h-4 w-4" />
              Member Directory
            </TabsTrigger>
            <TabsTrigger value="messages" className="flex items-center gap-2">
              <MessageSquare className="h-4 w-4" />
              Messages
              <Badge variant="destructive" className="ml-1">
                1
              </Badge>
            </TabsTrigger>
          </TabsList>

          {/* Community Blog Tab */}
          <TabsContent value="blog" className="space-y-6">
            <div>
              <h2 className="mb-2 font-serif text-3xl font-bold text-foreground">Community Blog</h2>
              <p className="text-muted-foreground">Share your experiences and learn from fellow co-op members</p>
            </div>

            {/* Create New Post */}
            <Card>
              <CardHeader>
                <CardTitle>Create a New Post</CardTitle>
                <CardDescription>Share your knowledge with the community</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Input
                  placeholder="Post title..."
                  value={newPostTitle}
                  onChange={(e) => setNewPostTitle(e.target.value)}
                />
                <Textarea
                  placeholder="Share your thoughts, experiences, or questions..."
                  value={newPostContent}
                  onChange={(e) => setNewPostContent(e.target.value)}
                  rows={4}
                />
                <Button onClick={handleCreatePost} className="w-full">
                  Publish Post
                </Button>
              </CardContent>
            </Card>

            {/* Blog Posts */}
            <div className="space-y-4">
              {mockBlogPosts.map((post) => (
                <Card key={post.id}>
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <Avatar>
                        <AvatarImage src={post.authorAvatar || "/placeholder.svg"} alt={post.author} />
                        <AvatarFallback>{post.author[0]}</AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-semibold">{post.author}</p>
                            <p className="text-sm text-muted-foreground">{post.date}</p>
                          </div>
                        </div>
                        <CardTitle className="mt-2">{post.title}</CardTitle>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{post.content}</p>
                    <div className="mt-4 flex items-center gap-4 text-sm text-muted-foreground">
                      <button className="flex items-center gap-1 hover:text-foreground">
                        <span>👍</span>
                        <span>{post.likes}</span>
                      </button>
                      <button className="flex items-center gap-1 hover:text-foreground">
                        <MessageSquare className="h-4 w-4" />
                        <span>{post.comments} comments</span>
                      </button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Member Directory Tab */}
          <TabsContent value="members" className="space-y-6">
            <div>
              <h2 className="mb-2 font-serif text-3xl font-bold text-foreground">Member Directory</h2>
              <p className="text-muted-foreground">Connect with fellow co-op members</p>
            </div>

            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Search members by name, email, or role..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>

            {/* Members Grid */}
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {filteredMembers.map((member) => (
                <Card key={member.id} className="overflow-hidden">
                  <CardHeader className="pb-4">
                    <div className="flex items-start gap-4">
                      <Avatar className="h-16 w-16">
                        <AvatarImage src={member.avatar || "/placeholder.svg"} alt={member.name} />
                        <AvatarFallback>{member.name[0]}</AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <CardTitle className="text-lg">{member.name}</CardTitle>
                        <p className="text-sm text-muted-foreground">{member.role}</p>
                        <p className="text-xs text-muted-foreground">{member.location}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-2 pt-0">
                    <p className="text-sm text-muted-foreground">{member.email}</p>
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full bg-transparent"
                      onClick={() => setSelectedMember(member)}
                    >
                      <MessageSquare className="mr-2 h-4 w-4" />
                      Send Message
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Messages Tab */}
          <TabsContent value="messages" className="space-y-6">
            <div>
              <h2 className="mb-2 font-serif text-3xl font-bold text-foreground">Direct Messages</h2>
              <p className="text-muted-foreground">End-to-end encrypted communication with co-op members</p>
            </div>

            <div className="grid gap-6 lg:grid-cols-3">
              {/* Message List */}
              <Card className="lg:col-span-1">
                <CardHeader>
                  <CardTitle>Conversations</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  {mockMessages.map((msg) => (
                    <button
                      key={msg.id}
                      className="flex w-full items-start gap-3 rounded-lg p-3 text-left hover:bg-muted"
                      onClick={() => setSelectedMember(mockMembers.find((m) => m.name === msg.from) || null)}
                    >
                      <Avatar>
                        <AvatarImage src={msg.fromAvatar || "/placeholder.svg"} alt={msg.from} />
                        <AvatarFallback>{msg.from[0]}</AvatarFallback>
                      </Avatar>
                      <div className="flex-1 overflow-hidden">
                        <div className="flex items-center justify-between">
                          <p className="font-semibold">{msg.from}</p>
                          {msg.unread && <Badge variant="destructive" className="h-2 w-2 rounded-full p-0" />}
                        </div>
                        <p className="truncate text-sm text-muted-foreground">{msg.message}</p>
                        <p className="text-xs text-muted-foreground">{msg.time}</p>
                      </div>
                    </button>
                  ))}
                </CardContent>
              </Card>

              {/* Message Compose */}
              <Card className="lg:col-span-2">
                <CardHeader>
                  <CardTitle>{selectedMember ? `Message ${selectedMember.name}` : "Select a conversation"}</CardTitle>
                  {selectedMember && (
                    <CardDescription className="flex items-center gap-2">
                      <Lock className="h-3 w-3" />
                      End-to-end encrypted
                    </CardDescription>
                  )}
                </CardHeader>
                <CardContent>
                  {selectedMember ? (
                    <div className="space-y-4">
                      <div className="flex items-start gap-3 rounded-lg bg-muted p-4">
                        <Avatar>
                          <AvatarImage src={selectedMember.avatar || "/placeholder.svg"} alt={selectedMember.name} />
                          <AvatarFallback>{selectedMember.name[0]}</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-semibold">{selectedMember.name}</p>
                          <p className="text-sm text-muted-foreground">{selectedMember.email}</p>
                          <p className="text-sm text-muted-foreground">{selectedMember.role}</p>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Textarea
                          placeholder="Type your encrypted message..."
                          value={messageText}
                          onChange={(e) => setMessageText(e.target.value)}
                          rows={6}
                        />
                        <Button onClick={handleSendMessage} className="w-full">
                          <Send className="mr-2 h-4 w-4" />
                          Send Encrypted Message
                        </Button>
                      </div>

                      <div className="rounded-lg border border-primary/20 bg-primary/5 p-4">
                        <p className="text-sm text-muted-foreground">
                          <Lock className="mr-2 inline h-4 w-4" />
                          Your messages are encrypted end-to-end. Only you and {selectedMember.name} can read them.
                        </p>
                      </div>
                    </div>
                  ) : (
                    <div className="flex h-64 items-center justify-center text-muted-foreground">
                      Select a member to start messaging
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
        {/* </CHANGE> */}
      </div>
    </div>
  )
}
