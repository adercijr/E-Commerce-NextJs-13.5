"use-client"

import { useState } from "react"
import { motion } from "framer-motion"
import { AiOutlineShopping } from "react-icons/ai"

interface MenuMobileItemsProps {
  i: string
  key: string
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

export const MenuMobileItems = ({ i }: MenuMobileItemsProps) => {
  const [hover, setHover] = useState(Boolean)
  return (
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
          <AiOutlineShopping
            size={"1.5rem"}
            className={hover ? "opacity-100" : "opacity-20"}
          />
        </div>
        <div className="text-placeholder">{i}</div>
      </div>
    </motion.li>
  )
}
