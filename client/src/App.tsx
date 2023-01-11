import { Routes, Route, Link } from 'react-router-dom'
import ChatPage from './ChatPage'
import React from 'react'
import { Socket } from 'socket.io-client'
import { DefaultEventsMap } from 'socket.io/dist/typed-events'
import Home from './Home'

export default function App() {
  const [socket, setSocket] = React.useState<Socket<DefaultEventsMap, DefaultEventsMap> | null>(null)
  console.log(socket);
    
  return (
    <>
      <Routes>
        <Route index = {true} element = {<Home />} />
        <Route path = {'/:id'} element = {<ChatPage />} />
      </Routes>
    </>
  )
}

