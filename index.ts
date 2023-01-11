import express, { Request, Response } from 'express'
import { Server } from 'socket.io'
import * as http from 'http'

import 'dotenv/config'

const app = express()
const server =  http.createServer(app)
const io = new Server(server, {
  cors: {
    origin: ['http://127.0.0.1:5173'],
    methods: ['GET', 'POST'],
    credentials: true
  }
})

app.use(express.json())

app.get('/', (req: Request, res: Response) => {
    res.send('<h1>Hi mom</h1>')
})

const port = Number(process.env.PORT) || 5000

const start = (port: number) => { 
    server.listen(port, () => {
      process.stdout.write('Server Deployed on:')
      console.log(`\x1b[33m`, `http://localhost:${port}/`);
    })  
}

io.on('connect', (socket) => {
  console.log(`User connected with socketId: ${socket.id}`);
  socket.on('disconnect', () => {
    console.log(`User disconnected with socketId: ${socket.id}`);
  })
})

start(port)