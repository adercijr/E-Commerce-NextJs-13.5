import Image from "next/image"
import FormSignup from "./form"
import Link from "next/link"

export default function SignUp() {
  return (
    <div className="flex-col h-screen relative flex justify-center items-center">
      <Link href={"/"}>
        <Image
          src="/assets/logo.png"
          width={300}
          height={300}
          alt={"Fino Luxo"}
        />
      </Link>
      <FormSignup />
    </div>
  )
}
