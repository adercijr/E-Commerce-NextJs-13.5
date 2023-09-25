"use client"
import axios from "axios"
import { motion } from "framer-motion"
import { useState } from "react"
import { useRouter } from "next/navigation"

export default function SignInForm() {
  const [signupUser, setSignupUser] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
  })

  const router = useRouter()

  const Register = () => {
    const data = {
      first_name: signupUser.first_name,
      last_name: signupUser.last_name,
      email: signupUser.email,
      password: signupUser.password,
    }
    axios
      .post("api/register", data)
      .then((response) => {
        console.log(response)
      })
      .catch((err) => {
        console.log(err)
      })
      .finally(() => {
        router.push("/")
      })
  }
  return (
    <div className="flex flex-col">
      <label htmlFor="" className="mt-8 font-semibold text-xs">
        FIRST NAME
        <span className="text-red-700 p-1">*</span>
      </label>
      <input
        type="text"
        placeholder="First Name"
        className="border-[1px] border-black p-4 mt-1"
        value={signupUser.first_name}
        onChange={(e) =>
          setSignupUser({ ...signupUser, first_name: e.target.value })
        }
      />

      <label htmlFor="" className="mt-8 font-semibold text-xs">
        LAST NAME
        <span className="text-red-700 p-1">*</span>
      </label>
      <input
        type="text"
        placeholder="Last Name"
        className="border-[1px] border-black p-4 mt-1"
        value={signupUser.last_name}
        onChange={(e) =>
          setSignupUser({ ...signupUser, last_name: e.target.value })
        }
      />

      <label htmlFor="" className="mt-8 font-semibold text-xs">
        EMAIL
        <span className="text-red-700 p-1">*</span>
      </label>
      <input
        type="text"
        placeholder="Email"
        className="border-[1px] border-black p-4 mt-1"
        value={signupUser.email}
        onChange={(e) =>
          setSignupUser({ ...signupUser, email: e.target.value })
        }
      />

      <label htmlFor="" className="mt-8 font-semibold text-xs">
        PASSWORD
        <span className="text-red-700 p-1">*</span>
      </label>
      <input
        type="text"
        placeholder="Password"
        className="border-[1px] border-black p-4 mt-1"
        value={signupUser.password}
        onChange={(e) =>
          setSignupUser({ ...signupUser, password: e.target.value })
        }
      />
      <motion.button
        onClick={Register}
        className="bg-stone-800 mt-6 p-4 text-lg font-semibold text-white"
        whileHover={{
          backgroundColor: "#433633",
          color: "#fff",
          transition: { duration: 0.5 },
        }}
      >
        REGISTER
      </motion.button>
    </div>
  )
}
