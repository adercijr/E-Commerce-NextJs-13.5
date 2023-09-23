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

export const Navigation = () => (
  <motion.ul variants={variants} className="p-6 absolute top-24 w-11/12">
    {itemIds.map((i) => (
      <MenuMobileItems i={i} key={i} />
    ))}
  </motion.ul>
)

const itemIds = ["Shop", "Filters", "My Products"]
