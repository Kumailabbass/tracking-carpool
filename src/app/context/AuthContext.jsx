'use client'
// Authentication context using react context api
import { SessionProvider } from "next-auth/react"
export const AuthContextProvider = ({children})=>{
    return (
        <SessionProvider>
            {children}
        </SessionProvider>
    )
}