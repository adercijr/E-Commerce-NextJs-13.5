import { ReactNode } from "react"
import { getCurrentUser, getSession } from "../lib/session"
import { redirect } from "next/navigation"
import { Header } from "../components/header"

interface PrivateLayoutProps {
  children: ReactNode
}

export default async function PrivateLayout({ children }: PrivateLayoutProps) {
  const session = await getCurrentUser()

  if (!session) {
    const sessions = await getCurrentUser()
    if (!sessions) {
      redirect("/signin")
    }
  }

  return (
    <>
      <Header />
      <div className="w-full max-w-[1600px] m-auto p-8 2xl:p-0 2xl:py-8">
        {children}
      </div>
    </>
  )
}
