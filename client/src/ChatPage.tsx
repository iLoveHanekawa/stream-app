import React from 'react'
import { socketContext } from './socket-context/socket'

export default function ChatPage() {
  const sc = React.useContext(socketContext)
  console.log(sc);
  
  return (
    <div>ChatPage</div>
  )
}
