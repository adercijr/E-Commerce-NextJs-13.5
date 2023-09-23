"use client"
import Image from "next/image"
import Link from "next/link"
import { useRef, useState } from "react"
import { CiShoppingCart } from "react-icons/ci"
import { motion, sync, useCycle } from "framer-motion"
import { MenuToggle } from "./MenuToggle"
import { Navigation } from "./Navigation"

const container = {
  open: {
    width: "100vw",
    height: "100vh",
    transition: {
      delay: 0.001,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
  closed: {
    width: "50px",
    height: "10vh",
    transition: {
      delay: 1,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
}

const sidebar = {
  open: (height = 1000) => ({
    scale: 150,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    scale: 1,
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
}

type UserBarProps = {
  isToggleOpen: Boolean
  setToggleOpen: Function
}

export const UserBar = ({ isToggleOpen, setToggleOpen }: UserBarProps) => {
  return (
    <div className="flex gap-4 px-2 items-center">
      <Link href={"/cart"}>
        <CiShoppingCart size="2rem" />
      </Link>
      <Image
        src="/assets/generic-user.jpg"
        alt=""
        className="rounded-full"
        width={32}
        height={32}
      />
      <motion.nav
        initial={false}
        animate={isToggleOpen ? "open" : "closed"}
        className="block lg:hidden"
      >
        <motion.div
          className={"top-0 right-0 max-w-md absolute overflow-hidden"}
          variants={container}
        >
          <motion.div
            className="bg-blue-100 top-[14px] right-[14px]
          w-9 h-9 rounded-full absolute"
            variants={sidebar}
          />
          <Navigation />
          <MenuToggle toggle={() => setToggleOpen(!isToggleOpen)} />
        </motion.div>
      </motion.nav>
    </div>
  )
}
