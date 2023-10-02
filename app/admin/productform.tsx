import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import React, { useState } from "react"
import Product from "./Product"
import ProductColor from "./ProductColor"
import Category from "./Category"

export default function ProductForm() {
  const { data: session } = useSession()
  const id = session?.user.id
  const router = useRouter()

  const [createMode, setCreateMode] = useState<
    "product" | "category" | "style" | "productColor" | "productSize"
  >("product")

  return (
    <>
      <header className="flex justify-around ">
        <button
          className={
            createMode === "product"
              ? "w-1/2 p-4 text-lg border-b-2 border-black font-bold"
              : "w-1/2 p-4 text-lg"
          }
          onClick={() => setCreateMode("product")}
        >
          Products
        </button>
        <button
          className={
            createMode === "productColor"
              ? "w-1/2 p-2 text-lg border-b-2 border-black font-bold"
              : "w-1/2 p-2 text-lg"
          }
          onClick={() => setCreateMode("productColor")}
        >
          Product Colors
        </button>
        <button
          className={
            createMode === "productSize"
              ? "w-1/2 p-2 text-lg border-b-2 border-black font-bold"
              : "w-1/2 p-2 text-lg"
          }
          onClick={() => setCreateMode("productSize")}
        >
          Product Sizes
        </button>
        <button
          className={
            createMode === "category"
              ? "w-1/2 p-2 text-lg border-b-2 border-black font-bold"
              : "w-1/2 p-2 text-lg"
          }
          onClick={() => setCreateMode("category")}
        >
          Categories
        </button>
        <button
          className={
            createMode === "style"
              ? "w-1/2 p-2 text-lg border-b-2 border-black font-bold"
              : "w-1/2 p-2 text-lg"
          }
          onClick={() => setCreateMode("style")}
        >
          Styles
        </button>
      </header>

      <div className="py-8">
        {createMode === "product" && <Product />}
        {createMode === "productColor" && <ProductColor />}
        {createMode === "category" && <Category />}
      </div>
    </>
  )
}
