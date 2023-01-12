import React from 'react'
import { Socket } from 'socket.io-client'
import { Peer } from 'peerjs'
import { v4 as uuidv4 } from 'uuid'
import { DefaultEventsMap } from 'socket.io/dist/typed-events'

type SocketType = Socket<DefaultEventsMap, DefaultEventsMap> | null
type SessionType = { socket: SocketType, id: string, peer: Peer } | null
export const SessionContext = React.createContext<{ session: SessionType, setSession: React.Dispatch<React.SetStateAction<SessionType>>} | null>(null)

export default function SocketProvider({ children }: { children: React.ReactNode}) {
    const [session, setSession] = React.useState<SessionType>(null)
    return <SessionContext.Provider value={{ session, setSession }}>
        {children}
    </SessionContext.Provider>
}
