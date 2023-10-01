"use-client"

import { useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import LogoutButton from "./UserButton/LogoutButton"

interface MenuMobileItemsProps {
  i: string
  url: string
  key: string
  children: React.ReactElement
}

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
}

export const MenuMobileItems = ({ i, children, url }: MenuMobileItemsProps) => {
  const [hover, setHover] = useState(Boolean)
  return (
    <Link href={url ? url : "#"} key={i}>
      {url === "/signin" && <LogoutButton i={i}>{children}</LogoutButton>}
      {url !== "/signin" && (
        <motion.li
          variants={variants}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mb-5 
      flex 
      cursor-pointer 
      w-full
    "
          onHoverStart={() => setHover(true)}
          onHoverEnd={() => setHover(false)}
        >
          <div className="flex items-center">
            <div className="icon-placeholder flex justify-center items-center">
              {children}
            </div>
            <div className="text-placeholder">{i}</div>
          </div>
        </motion.li>
      )}
    </Link>
  )
}
