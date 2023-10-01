import { motion } from "framer-motion"
import { Navigation } from "../Navigation"
import { AiOutlineClose, AiOutlineShopping } from "react-icons/ai"
import { useSession } from "next-auth/react"
import { PiUserLight } from "react-icons/pi"
import { RxExit } from "react-icons/rx"

type UserButtonProps = {
  userButton: Boolean
  setUserButton: Function
  containerOpacity: any
}

const navUser = {
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
    width: "0px",
    height: "100vh",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
}

export default function UserButton({
  userButton,
  setUserButton,
  containerOpacity,
}: UserButtonProps) {
  const { data: session } = useSession()

  return (
    <motion.nav
      initial={false}
      animate={userButton ? "open" : "closed"}
      className="hidden lg:block"
    >
      <motion.div
        onClick={() => setUserButton(false)}
        className="absolute  
              bg-black top-0 left-0 opacity-20 "
        variants={containerOpacity}
        animate={{
          transitionEnd: { display: "none" },
        }}
      ></motion.div>
      <motion.div
        className={"top-0 right-0 bg-white max-w-sm absolute overflow-hidden"}
        variants={navUser}
      >
        <main className=" flex flex-col items-stretch p-10 gap-10">
          <header className="flex justify-between">
            <h1 className="text-xl font-bold">YOUR ACCOUNT</h1>
            <div
              onClick={() => setUserButton(false)}
              className=" 
                z-50flex justify-center 
                items-center cursor-pointer"
            >
              <AiOutlineClose size="1.5rem" />
            </div>
          </header>
          <div>
            <h1 className="text-xl font-bold">Hi {session?.user.name}</h1>
          </div>
          <Navigation
            items={[
              {
                title: "MyOrders",
                icon: <AiOutlineShopping />,
                url: "/myorders",
              },
              { title: "Profile", icon: <PiUserLight />, url: "/profile" },
              {
                title: "Sign Out",
                icon: <RxExit />,
                url: "/signin",
              },
            ]}
          />
        </main>
      </motion.div>
    </motion.nav>
  )
}
