"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Mail, Phone, MapPin, Clock, Send, MessageCircle, FileText, Users } from "lucide-react"
import Link from "next/link"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    category: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsSubmitted(true)
    setIsSubmitting(false)
  }

  const contactMethods = [
    {
      icon: Mail,
      title: "Email Us",
      description: "Send us an email and we'll respond within 24 hours",
      contact: "hello@kechmedia.com",
      action: "mailto:okalmohn18@gmailo.com",
    },
    {
      icon: Phone,
      title: "Call Us",
      description: "Speak directly with our editorial team",
      contact: "+2547 4387 4690",
      action: "tel:+254743874690",
    },
    // {
    //   icon: MapPin,
    //   title: "Visit Us",
    //   description: "Our newsroom is open for meetings by appointment",
    //   contact: "123 Media Street, News City, NC 12345",
    //   action: "#",
    // },
    {
      icon: Clock,
      title: "Business Hours",
      description: "We're available during these hours",
      contact: "Mon-Fri: 9AM-6PM EAT",
      action: "#",
    },
  ]

  const departments = [
    {
      icon: FileText,
      title: "Editorial",
      description: "Story tips, press releases, and editorial inquiries",
      email: "editorial@kechmedia.com",
      action: "mailto: okalmohn18@gmail.com"
    },
    {
      icon: Users,
      title: "Partnerships",
      description: "Business partnerships and collaboration opportunities",
      email: "partnerships@kechmedia.com",
      action: "mailto: okalmohn18@gmail.com"
    },
    {
      icon: MessageCircle,
      title: "General Inquiries",
      description: "General questions and information requests",
      email: "info@kechmedia.com",
      action: "mailto: okalmohn18@gmail.com"
    },
  ]

  if (isSubmitted) {
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
                <Link href="/about" className="text-gray-600 hover:text-blue-600 transition-colors">
                  About
                </Link>
                <Link href="/contact" className="text-black font-medium hover:text-blue-600 transition-colors">
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

        <div className="min-h-screen flex items-center justify-center bg-gray-50">
          <Card className="max-w-md w-full mx-4">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Send className="w-8 h-8 text-green-600" />
              </div>
              <CardTitle className="text-2xl text-green-600">Message Sent!</CardTitle>
              <CardDescription>Thank you for contacting Kech Media</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-green-50 p-4 rounded-lg">
                <h3 className="font-semibold text-green-800 mb-2">What happens next?</h3>
                <ul className="text-sm text-green-700 space-y-1">
                  <li>• We'll review your message within 24 hours</li>
                  <li>• Our team will respond to your inquiry</li>
                  <li>• For urgent matters, call us directly</li>
                </ul>
              </div>
              <div className="flex space-x-4">
                <Link href="/" className="flex-1">
                  <Button variant="outline" className="w-full bg-transparent">
                    Back to Home
                  </Button>
                </Link>
                <Link href="/contact" className="flex-1">
                  <Button
                    className="w-full"
                    onClick={() => {
                      setIsSubmitted(false)
                      setFormData({
                        name: "",
                        email: "",
                        subject: "",
                        category: "",
                        message: "",
                      })
                    }}
                  >
                    Send Another
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    )
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
              <Link href="/stories" className="text-gray-600 hover:text-blue-600 transition-colors">
                Stories
              </Link>
              <Link href="/videos" className="text-gray-600 hover:text-blue-600 transition-colors">
                Videos & Podcasts
              </Link>
              <Link href="/about" className="text-gray-600 hover:text-blue-600 transition-colors">
                About
              </Link>
              <Link href="/contact" className="text-black font-medium hover:text-blue-600 transition-colors">
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
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Get in <span className="text-blue-400">Touch</span>
          </h1>
          <p className="text-xl text-gray-300">
            Have a story tip, question, or want to collaborate? We'd love to hear from you.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-black">Send us a Message</CardTitle>
                <CardDescription>
                  Fill out the form below and we'll get back to you as soon as possible.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        placeholder="Enter your full name"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        placeholder="Enter your email"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="category">Category</Label>
                      <Select value={formData.category} onValueChange={(value) => handleInputChange("category", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a category" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="editorial">Editorial Inquiry</SelectItem>
                          <SelectItem value="partnership">Partnership</SelectItem>
                          <SelectItem value="press">Press Inquiry</SelectItem>
                          <SelectItem value="technical">Technical Support</SelectItem>
                          <SelectItem value="general">General Question</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="subject">Subject *</Label>
                      <Input
                        id="subject"
                        value={formData.subject}
                        onChange={(e) => handleInputChange("subject", e.target.value)}
                        placeholder="Brief subject line"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                      placeholder="Tell us more about your inquiry..."
                      rows={6}
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={
                      isSubmitting || !formData.name || !formData.email || !formData.subject || !formData.message
                    }
                    className="w-full bg-blue-600 hover:bg-blue-700"
                  >
                    {isSubmitting ? (
                      "Sending Message..."
                    ) : (
                      <>
                        <Send className="w-4 h-4 mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Methods */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-black">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {contactMethods.map((method, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <method.icon className="w-5 h-5 text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-black mb-1">{method.title}</h3>
                      <p className="text-sm text-gray-600 mb-2">{method.description}</p>
                      {method.action.startsWith("#") ? (
                        <p className="text-sm font-medium text-blue-600">{method.contact}</p>
                      ) : (
                        <a
                          href={method.action}
                          className="text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors"
                        >
                          {method.contact}
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Departments */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-black">Departments</CardTitle>
                <CardDescription>Contact the right team for your specific needs</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {departments.map((dept, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <dept.icon className="w-5 h-5 text-gray-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-black mb-1">{dept.title}</h3>
                      <p className="text-sm text-gray-600 mb-2">{dept.description}</p>
                      <a href={`mailto:${dept.email}`}
                        className="text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors">
                        {dept.email}
                      </a>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Quick Links */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-black">Quick Links</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Link href="/about" className="block text-blue-600 hover:text-blue-700 transition-colors">
                  About Kech Media
                </Link>
                <Link href="#" className="block text-blue-600 hover:text-blue-700 transition-colors">
                  Press Kit Download
                </Link>
                <Link href="#" className="block text-blue-600 hover:text-blue-700 transition-colors">
                  Editorial Guidelines
                </Link>
                <Link href="#" className="block text-blue-600 hover:text-blue-700 transition-colors">
                  Privacy Policy
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Map Section (Optional) */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-black mb-4">Visit Our Newsroom</h2>
            <p className="text-xl text-gray-600">
              Located in the heart of the media district, our doors are open for scheduled meetings
            </p>
          </div>

          <div className="bg-gray-300 h-96 rounded-lg flex items-center justify-center">
            <div className="text-center">
              <MapPin className="w-12 h-12 text-gray-500 mx-auto mb-4" />
              <p className="text-gray-600">Interactive map would be embedded here</p>
              <p className="text-sm text-gray-500 mt-2">1574 Kisumu</p>
            </div>
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
