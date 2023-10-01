import * as React from "react"
import { motion } from "framer-motion"
import { MenuMobileItems } from "./MenuMobileItems"

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
}

type NavigationProps = {
  items: {
    icon?: React.ReactElement
    title: string
    url: string
  }[]
}

export const Navigation = ({ items }: NavigationProps) => (
  <motion.ul variants={variants} className="w-ful">
    {items?.map((i) => (
      <MenuMobileItems i={i.title} key={i.title} url={i.url}>
        {i.icon}
      </MenuMobileItems>
    ))}
  </motion.ul>
)
