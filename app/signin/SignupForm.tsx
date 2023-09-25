import { motion } from "framer-motion"
import { signIn } from "next-auth/react"
import { useState } from "react"

export default function SignupForm() {
  const [signinUser, setSigninUser] = useState({
    email: "",
    password: "",
  })

  const Login = () => {
    try {
      signIn("credentials", {
        email: signinUser.email,
        password: signinUser.password,
        redirect: true,
        callbackUrl: "/",
      })
    } catch {
      console.log("Error while logging in")
    }
  }

  return (
    <div className="flex flex-col">
      <label htmlFor="" className="mt-8 font-semibold text-xs">
        EMAIL
        <span className="text-red-700 p-1">*</span>
      </label>
      <input
        type="email"
        placeholder="Email"
        className="border-[1px] border-black p-4 mt-1"
        value={signinUser.email}
        onChange={(e) =>
          setSigninUser({ ...signinUser, email: e.target.value })
        }
      />

      <label htmlFor="" className="mt-8 font-semibold text-xs">
        PASSWORD
        <span className="text-red-700 p-1">*</span>
      </label>
      <input
        type="password"
        placeholder="Password"
        className="border-[1px] border-black p-4 mt-1"
        value={signinUser.password}
        onChange={(e) =>
          setSigninUser({ ...signinUser, password: e.target.value })
        }
      />

      <motion.button
        onClick={Login}
        className="bg-stone-800 mt-6 p-4 text-lg font-semibold text-white"
        whileHover={{
          backgroundColor: "#433633",
          color: "#fff",
          transition: { duration: 0.5 },
        }}
      >
        LOGIN
      </motion.button>
    </div>
  )
}
