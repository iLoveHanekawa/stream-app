import { v4 as uuidv4 } from 'uuid'
import React from 'react'

const id = uuidv4()
export const IdContext = React.createContext(id)

export default function IdContextProvider({ children }: { children: React.ReactNode }) {
    return <IdContext.Provider value = {id}>
        {children}
    </IdContext.Provider>
}