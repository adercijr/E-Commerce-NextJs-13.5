import Image from "next/image"
import { Header } from "./components/header"
import { getCurrentUser } from "./lib/session"

export default async function Home() {
  return (
    <>
      <Header />
    </>
  )
}
