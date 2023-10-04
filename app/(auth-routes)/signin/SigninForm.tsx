"use client"
import { motion } from "framer-motion"
import { signIn, useSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import { SyntheticEvent, useState } from "react"
import { TailSpin } from "react-loader-spinner"

export default function SignupForm() {
  const [signinUser, setSigninUser] = useState({
    email: "",
    password: "",
  })
  const { status } = useSession()
  const [errorCredentials, setErrorCredentials] = useState("")

  const router = useRouter()

  const Login = async (event: SyntheticEvent) => {
    event.preventDefault()

    const result = await signIn("credentials", {
      email: signinUser.email,
      password: signinUser.password,
      redirect: false,
    })
    if (result?.error) {
      setErrorCredentials(result.error)
      return
    }

    router.replace("/")
  }

  return (
    <form className="flex flex-col" onSubmit={Login}>
      <label htmlFor="femail" className="mt-8 font-semibold text-xs">
        EMAIL
        <span className="text-red-700 p-1">*</span>
      </label>
      <input
        id="femail"
        type="email"
        placeholder="Email"
        className="border-[1px] border-black p-4 mt-1"
        value={signinUser.email}
        onChange={(e) =>
          setSigninUser({ ...signinUser, email: e.target.value })
        }
      />

      <label htmlFor="fpassword" className="mt-8 font-semibold text-xs">
        PASSWORD
        <span className="text-red-700 p-1">*</span>
      </label>
      <input
        id="fpassword"
        type="password"
        placeholder="Password"
        className="border-[1px] border-black p-4 mt-1"
        value={signinUser.password}
        onChange={(e) =>
          setSigninUser({ ...signinUser, password: e.target.value })
        }
      />

      {errorCredentials && (
        <span className="text-red-600 py-4">Invalid email and/or password</span>
      )}

      <motion.button
        type="submit"
        className="
        bg-stone-800 mt-6 p-4 text-lg 
        font-semibold text-white
        flex justify-center relative
        "
        whileHover={{
          backgroundColor: "#433633",
          color: "#fff",
          transition: { duration: 0.5 },
        }}
      >
        LOGIN
        {status == "loading" && (
          <div className="absolute right-7">
            <TailSpin
              height="30"
              width="30"
              color="#fff"
              ariaLabel="tail-spin-loading"
              radius="3"
              wrapperStyle={{}}
              wrapperClass=""
              visible={true}
            />
          </div>
        )}
      </motion.button>
    </form>
  )
}
