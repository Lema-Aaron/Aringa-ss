'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import io from 'socket.io-client';

interface Message {
  id: string;
  name: string;
  email: string;
  message: string;
  status: 'READ' | 'UNREAD';
  createdAt: string;
}

export default function AdminMessagesPage() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [selectedMessage, setSelectedMessage] = useState<Message | null>(null);
  const [reply, setReply] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [unreadCount, setUnreadCount] = useState(0);
  const { toast } = useToast();
  const router = useRouter();

  const fetchMessages = async () => {
    const response = await fetch('/api/admin/messages');
    const data = await response.json();
    setMessages(data);
    setUnreadCount(data.filter((message: Message) => message.status === 'UNREAD').length);
  };

  useEffect(() => {
    fetchMessages();
    const socket = io();

    socket.on('newMessage', (message) => {
      toast({
        title: 'New Message',
        description: `New message from ${message.name}`,
      });
      fetchMessages();
    });

    return () => {
      socket.disconnect();
    };
  }, [toast]);

  const handleSelectMessage = (message: Message) => {
    setSelectedMessage(message);
    setReply('');
  };

  const handleReply = async () => {
    if (!selectedMessage) return;

    try {
      const response = await fetch('/api/admin/reply', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          messageId: selectedMessage.id,
          reply,
        }),
      });

      if (response.ok) {
        toast({
          title: 'Reply sent successfully',
          description: 'The user has been notified via email.',
        });
        setReply('');
        fetchMessages();
      } else {
        throw new Error('Failed to send reply');
      }
    } catch (error) {
      console.error(error);
      toast({
        title: 'Error',
        description: 'Failed to send reply. Please try again.',
        variant: 'destructive',
      });
    }
  };

  const handleLogout = async () => {
    await fetch('/api/admin/logout', { method: 'POST' });
    router.push('/admin/login');
  };

  const filteredMessages = messages.filter(
    (message) =>
      message.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      message.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      message.message.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mx-auto px-6 py-12">
      <div className="flex justify-between items-center mb-10">
        <h1 className="text-4xl font-extrabold text-gray-800">Admin Messages</h1>
        <div className="flex items-center space-x-4">
          <Badge variant="secondary">{unreadCount} Unread</Badge>
          <Button onClick={handleLogout} className="bg-red-500 text-white hover:bg-red-600">
            Logout
          </Button>
        </div>
      </div>
      <div className="mb-6">
        <Input
          type="text"
          placeholder="Search messages..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="shadow-md hover:shadow-lg transition-shadow">
          <CardHeader>
            <CardTitle className="text-xl font-semibold">Message List</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              {filteredMessages.map((message) => (
                <li
                  key={message.id}
                  className={`p-4 rounded-lg cursor-pointer transition-colors ${
                    message.status === 'UNREAD' ? 'bg-blue-100 hover:bg-blue-200' : 'hover:bg-gray-100'
                  }`}
                  onClick={() => handleSelectMessage(message)}
                >
                  <p className="font-medium">{message.name}</p>
                  <p className="text-sm text-gray-500">{message.email}</p>
                  <p className="text-sm text-gray-700">{message.message.substring(0, 50)}...</p>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
        <Card className="shadow-md hover:shadow-lg transition-shadow">
          <CardHeader>
            <CardTitle className="text-xl font-semibold">Selected Message</CardTitle>
          </CardHeader>
          <CardContent>
            {selectedMessage ? (
              <div>
                <div className="mb-6">
                  <p>
                    <span className="font-medium">From:</span> {selectedMessage.name}
                  </p>
                  <p>
                    <span className="font-medium">Email:</span> {selectedMessage.email}
                  </p>
                  <p>
                    <span className="font-medium">Date:</span>{' '}
                    {new Date(selectedMessage.createdAt).toLocaleString()}
                  </p>
                  <p className="mt-4">{selectedMessage.message}</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-3">Reply</h3>
                  <Textarea
                    value={reply}
                    onChange={(e) => setReply(e.target.value)}
                    className="w-full mb-4"
                    rows={6}
                    placeholder="Type your reply here..."
                  />
                  <Button onClick={handleReply} className="bg-blue-600 text-white hover:bg-blue-700">
                    Send Reply
                  </Button>
                </div>
              </div>
            ) : (
              <p className="text-gray-500">Select a message to view details and reply.</p>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
