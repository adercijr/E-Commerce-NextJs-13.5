"use client"
import { sign } from "crypto"
import { motion } from "framer-motion"
import { useState } from "react"

export default function FormSignup() {
  const [loginMode, setLoginMode] = useState<"signin" | "signup">("signin")

  return (
    <div className=" w-[500px] flex flex-col border-2 rounded-xl shadow-2xl shadow-gray-400 p-10">
      <header className="flex justify-around ">
        <button
          className={
            loginMode === "signin"
              ? "w-1/2 p-4 text-lg border-b-2 border-black font-bold"
              : "w-1/2 p-4 text-lg"
          }
          onClick={() => setLoginMode("signin")}
        >
          Login
        </button>
        <button
          className={
            loginMode === "signup"
              ? "w-1/2 p-2 text-lg border-b-2 border-black font-bold"
              : "w-1/2 p-2 text-lg"
          }
          onClick={() => setLoginMode("signup")}
        >
          Create Account
        </button>
      </header>

      {loginMode === "signup" && (
        <div className="flex flex-col">
          <label htmlFor="" className="mt-8 font-semibold text-xs">
            FIRST NAME
            <span className="text-red-700 p-1">*</span>
          </label>
          <input
            type="text"
            placeholder="First Name"
            className="border-[1px] border-black p-4 mt-1"
          />

          <label htmlFor="" className="mt-8 font-semibold text-xs">
            LAST NAME
            <span className="text-red-700 p-1">*</span>
          </label>
          <input
            type="text"
            placeholder="Last Name"
            className="border-[1px] border-black p-4 mt-1"
          />

          <label htmlFor="" className="mt-8 font-semibold text-xs">
            EMAIL
            <span className="text-red-700 p-1">*</span>
          </label>
          <input
            type="text"
            placeholder="Email"
            className="border-[1px] border-black p-4 mt-1"
          />

          <label htmlFor="" className="mt-8 font-semibold text-xs">
            PASSWORD
            <span className="text-red-700 p-1">*</span>
          </label>
          <input
            type="text"
            placeholder="Password"
            className="border-[1px] border-black p-4 mt-1"
          />
          <motion.button
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
      )}

      {loginMode === "signin" && (
        <div className="flex flex-col">
          <label htmlFor="" className="mt-8 font-semibold text-xs">
            EMAIL
            <span className="text-red-700 p-1">*</span>
          </label>
          <input
            type="text"
            placeholder="Email"
            className="border-[1px] border-black p-4 mt-1"
          />

          <label htmlFor="" className="mt-8 font-semibold text-xs">
            PASSWORD
            <span className="text-red-700 p-1">*</span>
          </label>
          <input
            type="text"
            placeholder="Password"
            className="border-[1px] border-black p-4 mt-1"
          />

          <motion.button
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
      )}
    </div>
  )
}
