import { Link } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid'
import { io } from 'socket.io-client'
import { socketContext } from './socket-context/socket'
import React from 'react'

export default function Home() {
  const sc = React.useContext(socketContext)

  React.useEffect(() => {
    if(sc?.socket) sc.socket.disconnect()
  }, [])
  
  const id = uuidv4()
  return (
    <Link onClick = {() => {
      const socket = io('http://localhost:5000', {
        withCredentials: true
      })
      sc?.setSocket(socket)
    }} to = {`/${id}`} >Go</Link>
  )
}
