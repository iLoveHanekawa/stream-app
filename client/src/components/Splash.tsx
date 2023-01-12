import { Link } from 'react-router-dom'
import { io } from 'socket.io-client'
import { SessionContext } from '../context/Session'
import React from 'react'
import { Peer } from 'peerjs'
import { IdContext } from '../context/Id'

export default function Splash() {
  const sc = React.useContext(SessionContext)
  const ic = React.useContext(IdContext)  

  React.useEffect(() => {
    if(sc?.session?.socket) sc.session.socket.disconnect()
  }, [])

  return (
    <Link onClick = {() => {
      const socket = io('http://localhost:5000', {
        withCredentials: true
      })
      const peer = new Peer(ic, {
        host: 'localhost',
        port: 3000,
        path: '/peerjs'
      })
      sc?.setSession(i => ({ id: ic, peer, socket }))
    }} to = {`/home/${ic}`} >Go</Link>
  )
}
