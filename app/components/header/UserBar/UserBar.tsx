"use client"
import Link from "next/link"
import { useState } from "react"
import { CiShoppingCart } from "react-icons/ci"
import { motion } from "framer-motion"
import { MenuToggle } from "./MenuToggle"
import { Navigation } from "./Navigation"
import { PiUserLight } from "react-icons/pi"
import { useSession } from "next-auth/react"
import SandwichButton from "./SandwichButton"
import UserButton from "./UserButton"

const containerOpacity = {
  open: {
    width: "100vw",
    height: "100vh",
    transition: {
      delay: 0.00001,
      duration: 0.001,
    },
  },
  closed: {
    width: "0px",
    height: "0vh",
    transition: {
      delay: 1,
      duration: 0.001,
    },
  },
}

type UserBarProps = {
  isToggleOpen: Boolean
  setToggleOpen: Function
}

export const UserBar = ({ isToggleOpen, setToggleOpen }: UserBarProps) => {
  const { data: session } = useSession()
  const [userButton, setUserButton] = useState(false)
  return (
    <div className="flex gap-4 px-2 items-center">
      <Link href={"/cart"}>
        <CiShoppingCart size="2rem" />
      </Link>

      <div
        className="relative hidden lg:block"
        onClick={() => setUserButton(!userButton)}
      >
        <Link href={session?.user ? "#" : "/signin"}>
          <PiUserLight size="1.9rem" />
        </Link>
      </div>

      <UserButton
        containerOpacity={containerOpacity}
        setUserButton={setUserButton}
        userButton={userButton}
      />

      <SandwichButton
        containerOpacity={containerOpacity}
        isToggleOpen={isToggleOpen}
        setToggleOpen={setToggleOpen}
      />
    </div>
  )
}
