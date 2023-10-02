import { motion } from "framer-motion"
import { Navigation } from "../Navigation"
import { MenuToggle } from "../MenuToggle"
import { AiOutlineShopping } from "react-icons/ai"
import { RxExit } from "react-icons/rx"
import { PiUserLight } from "react-icons/pi"

type SandwichButtonProps = {
  isToggleOpen: Boolean
  setToggleOpen: Function
  containerOpacity: any
}

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

export default function SandwichButton({
  isToggleOpen,
  setToggleOpen,
  containerOpacity,
}: SandwichButtonProps) {
  return (
    <motion.nav
      initial={false}
      animate={isToggleOpen ? "open" : "closed"}
      className="block lg:hidden"
    >
      <motion.div
        onClick={() => setToggleOpen(false)}
        className="absolute  
          bg-black top-0 left-0 opacity-20 "
        variants={containerOpacity}
        animate={{
          transitionEnd: { display: "none" },
        }}
      ></motion.div>
      <motion.div
        className={"top-0 right-0 max-w-md absolute overflow-hidden"}
        variants={container}
      >
        <motion.div
          className="border-2 bg-white top-[18px] right-[14px]
          w-9 h-9 rounded-full absolute"
          variants={sidebar}
        />
        <main className=" flex relative flex-col items-stretch p-10 gap-10">
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
        <MenuToggle toggle={() => setToggleOpen(!isToggleOpen)} />
      </motion.div>
    </motion.nav>
  )
}
