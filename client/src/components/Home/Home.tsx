import React from 'react'
import { Link, Outlet, useParams } from 'react-router-dom'
import { SessionContext } from '../../context/Session'
import HomeForm from './HomeForm'

export default function ChatPage() {
  const sc = React.useContext(SessionContext)
  if(!sc?.session?.socket) return <div>
    Page Not Found
    <Link to = '/'>Go back</Link>
  </div>  

  const { id } = useParams()
  React.useEffect(() => {
    sc.session?.peer.on('open', id => {      
    })
    sc.session?.socket?.emit('join-room', id, sc.session.id)
    sc.session?.socket?.on('user-connected', (userId) => {
      console.log(`User joined: ${userId}`)
    })
  }, [id])

  return (
    <div>
      <HomeForm />
      <Outlet />
    </div>

  )
}
