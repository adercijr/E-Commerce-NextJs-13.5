"use client"

import { ReactNode, useState } from "react"
import { getCurrentUser, getSession } from "../lib/session"
import { redirect, usePathname, useRouter } from "next/navigation"
import { NextPageContext } from "next"
import { Header } from "@/app/components/header"
import { useSession } from "next-auth/react"
import Link from "next/link"

interface PrivateLayoutProps {
  children: ReactNode
}

export default function PrivateLayout({ children }: PrivateLayoutProps) {
  const session = useSession()

  if (!session) {
    redirect("/signin")
  }

  const pathname = usePathname().slice(usePathname().lastIndexOf("/") + 1)
  console.log(pathname)

  return (
    <>
      <Header />
      <div className=" max-w-[1600px] m-auto p-8 2xl:p-0 2xl:py-8">
        <header className="flex justify-between ">
          <Link
            href="/admin/products"
            className={
              pathname === "products"
                ? " p-4 flex-1 flex justify-center text-lg border-b-2 border-black font-bold"
                : " p-4 flex-1 flex justify-center text-lg "
            }
          >
            <button>Products</button>
          </Link>
          <Link
            href="product-colors"
            className={
              pathname === "product-colors"
                ? "  p-2 flex-1 flex justify-center text-lg border-b-2 border-black font-bold"
                : " p-2 flex-1 flex justify-center text-lg"
            }
          >
            <button>Product Colors</button>
          </Link>
          <Link
            href="product-sizes"
            className={
              pathname === "product-sizes"
                ? "w-full  p-2 flex-1 flex justify-center text-lg border-b-2 border-black font-bold"
                : " p-2 flex-1 flex justify-center text-lg"
            }
          >
            <button>Product Sizes</button>
          </Link>
          <Link
            href="categories"
            className={
              pathname === "categories"
                ? "w-full  p-2 flex-1 flex justify-center text-lg border-b-2 border-black font-bold"
                : " p-2 flex-1 flex justify-center text-lg"
            }
          >
            <button>Categories</button>
          </Link>
          <Link
            href="styles"
            className={
              pathname === "styles"
                ? "w-full  p-2 flex-1 flex justify-center text-lg border-b-2 border-black font-bold"
                : " p-2 flex-1 flex justify-center text-lg"
            }
          >
            <button>Styles</button>
          </Link>
        </header>

        {children}
      </div>
    </>
  )
}
