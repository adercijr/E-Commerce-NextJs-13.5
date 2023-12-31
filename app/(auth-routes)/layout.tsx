import { ReactNode } from "react"
import { getCurrentUser, getSession } from "../lib/session"
import { redirect } from "next/navigation"

interface PrivateLayoutProps {
  children: ReactNode
}

export default async function PrivateLayout({ children }: PrivateLayoutProps) {
  const session = await getCurrentUser()

  if (session) {
    const sessions = await getCurrentUser()
    if (sessions) {
      redirect("/")
    }
  }

  return <>{children}</>
}
