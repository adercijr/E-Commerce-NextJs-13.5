import { motion } from "framer-motion"
import { signOut } from "next-auth/react"
import { useRouter } from "next/navigation"

interface LogoutButtonProps {
  i: string
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

export default function LogoutButton({ i, children }: LogoutButtonProps) {
  const router = useRouter()
  async function Logout() {
    await signOut({
      redirect: false,
    })
    router.refresh()
    router.replace("/")
  }

  return (
    <motion.li
      key={i}
      onClick={Logout}
      variants={variants}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="mb-5 
      flex 
      cursor-pointer 
      w-full
    "
    >
      <div className="flex items-center">
        <div className="icon-placeholder flex justify-center items-center">
          {children}
        </div>
        <div className="text-placeholder">{i}</div>
      </div>
    </motion.li>
  )
}
