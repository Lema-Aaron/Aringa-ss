import { Server } from 'socket.io'
import { NextApiResponseServerIO } from '@/types/next'
import { NextRequest } from 'next/server'

export default function SocketHandler(req: NextRequest, res: NextApiResponseServerIO) {
  if (!res.socket.server.io) {
    const io = new Server(res.socket.server)
    res.socket.server.io = io

    io.on('connection', (socket) => {
      console.log('New client connected')

      socket.on('disconnect', () => {
        console.log('Client disconnected')
      })
    })
  }

  res.end()
}

export const config = {
  api: {
    bodyParser: false,
  },
}

