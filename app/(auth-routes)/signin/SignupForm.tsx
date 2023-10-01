"use client"
import axios from "axios"
import { motion } from "framer-motion"
import { SyntheticEvent, useState } from "react"
import { useRouter } from "next/navigation"
import { signIn } from "next-auth/react"
import { TailSpin } from "react-loader-spinner"

export default function SignInForm() {
  const [signupUser, setSignupUser] = useState({
    name: "",
    last_name: "",
    email: "",
    password: "",
  })
  const [submited, setSubmited] = useState(false)
  const [loading, setLoading] = useState(false)
  const [existUser, setExistUser] = useState(false)

  const router = useRouter()

  const Register = async (event: SyntheticEvent) => {
    event.preventDefault()
    setSubmited(true)
    const data = {
      name: signupUser.name,
      last_name: signupUser.last_name,
      email: signupUser.email,
      password: signupUser.password,
    }

    if (data.name.length == 0) {
      console.log("nome vazio")
      return
    }
    if (data.last_name.length == 0) {
      console.log("lastname vazio")
      return
    }
    if (data.email.length == 0) {
      console.log("email vazio")
      return
    }
    if (data.password.length == 0) {
      console.log("password vazio")
      return
    }
    setLoading(true)

    await axios.get(`/api/user/${signupUser.email}`).then((res) => {
      if (res.data) {
        setLoading(false)
        return setExistUser(true)
      } else {
        return axios
          .post("api/user/register", data)
          .then((response) => {
            if (response.status === 200) {
              signIn("credentials", {
                email: signupUser.email,
                password: signupUser.password,
                redirect: false,
              })
            }
          })
          .catch((err) => {
            // console.log(err)
          })
          .finally(() => {
            router.push("/")
            setLoading(false)
          })
      }
    })
  }
  return (
    <form className="flex flex-col" onSubmit={Register}>
      <label htmlFor="f_firstname" className="mt-8 font-semibold text-xs">
        FIRST NAME
        <span className="text-red-700 p-1">*</span>
      </label>
      <input
        id="f_firstname"
        type="text"
        placeholder="First Name"
        className="border-[1px] border-black p-4 mt-1"
        value={signupUser.name}
        onChange={(e) => setSignupUser({ ...signupUser, name: e.target.value })}
      />
      {submited && signupUser.name.length === 0 && (
        <span className="text-red-500 text-sm pt-1">
          Please enter a valid name
        </span>
      )}

      <label htmlFor="f_lastname" className="mt-8 font-semibold text-xs">
        LAST NAME
        <span className="text-red-700 p-1">*</span>
      </label>
      <input
        id="f_lastname"
        type="text"
        placeholder="Last Name"
        className="border-[1px] border-black p-4 mt-1"
        value={signupUser.last_name}
        onChange={(e) =>
          setSignupUser({ ...signupUser, last_name: e.target.value })
        }
      />
      {submited && signupUser.last_name.length === 0 && (
        <span className="text-red-500 text-sm pt-1">
          Please enter a valid last name
        </span>
      )}

      <label htmlFor="f_email" className="mt-8 font-semibold text-xs">
        EMAIL
        <span className="text-red-700 p-1">*</span>
      </label>
      <input
        id="f_email"
        type="email"
        placeholder="Email"
        className="border-[1px] border-black p-4 mt-1"
        value={signupUser.email}
        onChange={(e) =>
          setSignupUser({ ...signupUser, email: e.target.value })
        }
      />
      {submited && signupUser.email.length === 0 && (
        <span className="text-red-500 text-sm pt-1">
          Please enter a valid email
        </span>
      )}
      {existUser && (
        <span className="text-red-500 text-sm pt-1">Email already used</span>
      )}

      <label htmlFor="f_password" className="mt-8 font-semibold text-xs">
        PASSWORD
        <span className="text-red-700 p-1">*</span>
      </label>
      <input
        id="f_password"
        type="password"
        placeholder="Password"
        className="border-[1px] border-black p-4 mt-1"
        value={signupUser.password}
        onChange={(e) =>
          setSignupUser({ ...signupUser, password: e.target.value })
        }
      />
      {submited && signupUser.password.length === 0 && (
        <span className="text-red-500 text-sm pt-1">
          Please enter a valid password
        </span>
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
        REGISTER
        {loading == true && (
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
