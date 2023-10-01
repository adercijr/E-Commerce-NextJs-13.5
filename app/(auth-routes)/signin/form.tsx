"use client"
import { useState } from "react"
import SignInForm from "./SigninForm"
import SignupForm from "./SignupForm"

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

      {loginMode === "signin" && <SignInForm />}
      {loginMode === "signup" && <SignupForm />}
    </div>
  )
}
