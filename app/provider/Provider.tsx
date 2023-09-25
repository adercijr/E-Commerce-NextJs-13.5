"use client"
import { SessionProvider } from "next-auth/react"
import { ReactNode } from "react"

type ProvidderProps = {
  children: ReactNode
}

export default function Provider({ children }: ProvidderProps) {
  return <SessionProvider>{children}</SessionProvider>
}
