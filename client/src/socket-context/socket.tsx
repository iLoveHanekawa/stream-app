import React from 'react'
import { Socket } from 'socket.io-client'
import { DefaultEventsMap } from 'socket.io/dist/typed-events'

type SocketType = Socket<DefaultEventsMap, DefaultEventsMap> | null
export const socketContext = React.createContext<{ socket: SocketType, setSocket: React.Dispatch<React.SetStateAction<SocketType>>} | null>(null)

export default function SocketProvider({ children }: { children: React.ReactNode}) {
    const [socket, setSocket] = React.useState<SocketType>(null)
    return <socketContext.Provider value={{ socket, setSocket }}>
        {children}
    </socketContext.Provider>
}