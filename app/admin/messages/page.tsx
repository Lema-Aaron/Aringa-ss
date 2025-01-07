'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { useToast } from '@/components/ui/use-toast'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import io from 'socket.io-client'

interface Message {
  id: string
  name: string
  email: string
  message: string
  createdAt: string
}

export default function AdminMessagesPage() {
  const [messages, setMessages] = useState<Message[]>([])
  const [selectedMessage, setSelectedMessage] = useState<Message | null>(null)
  const [reply, setReply] = useState('')
  const [searchTerm, setSearchTerm] = useState('')
  const { toast } = useToast()
  const router = useRouter()

  useEffect(() => {
    const socket = io()

    socket.on('newMessage', (message) => {
      toast({
        title: 'New Message',
        description: `New message from ${message.name}`,
      })
      setMessages(prevMessages => [message, ...prevMessages])
    })

    return () => {
      socket.disconnect()
    }
  }, [])

  const handleReply = async () => {
    if (!selectedMessage) return

    try {
      const response = await fetch('/api/admin/reply', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          to: selectedMessage.email,
          subject: 'Re: Your message to Aringa Secondary School',
          message: reply,
        }),
      })

      if (response.ok) {
        toast({
          title: 'Reply sent successfully',
          description: 'The user has been notified via email.',
        })
        setReply('')
      } else {
        throw new Error('Failed to send reply')
      }
    } catch (error) {
      console.error(error)
      toast({
        title: 'Error',
        description: 'Failed to send reply. Please try again.',
        variant: 'destructive',
      })
    }
  }

  const handleLogout = async () => {
    await fetch('/api/admin/logout', { method: 'POST' })
    router.push('/admin/login')
  }

  const filteredMessages = messages.filter(
    (message) =>
      message.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      message.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      message.message.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Admin Messages</h1>
        <div className="flex items-center">
          <Badge variant="secondary" className="mr-4">
            {messages.length} Messages
          </Badge>
          <Button onClick={handleLogout} variant="outline">Logout</Button>
        </div>
      </div>
      <div className="mb-4">
        <Input
          type="text"
          placeholder="Search messages..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle>Message List</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-4">
              {filteredMessages.map((message) => (
                <li
                  key={message.id}
                  className="p-4 border rounded cursor-pointer"
                  onClick={() => setSelectedMessage(message)}
                >
                  <p className="font-semibold">{message.name}</p>
                  <p className="text-sm text-gray-600">{message.email}</p>
                  <p className="text-sm">{message.message.substring(0, 50)}...</p>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Selected Message</CardTitle>
          </CardHeader>
          <CardContent>
            {selectedMessage ? (
              <div>
                <div className="mb-4">
                  <p><strong>From:</strong> {selectedMessage.name}</p>
                  <p><strong>Email:</strong> {selectedMessage.email}</p>
                  <p><strong>Date:</strong> {new Date(selectedMessage.createdAt).toLocaleString()}</p>
                  <p><strong>Message:</strong></p>
                  <p className="mt-2">{selectedMessage.message}</p>
                </div>
                <div className="mt-4">
                  <h3 className="text-xl font-semibold mb-2">Reply</h3>
                  <Textarea
                    value={reply}
                    onChange={(e) => setReply(e.target.value)}
                    className="w-full mb-4"
                    rows={6}
                    placeholder="Type your reply here..."
                  />
                  <Button onClick={handleReply}>Send Reply</Button>
                </div>
              </div>
            ) : (
              <p>Select a message to view details and reply.</p>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

