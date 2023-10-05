import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import React, { useState } from "react"
import Product from "./products/page"
import ProductColor from "./product-colors/page"
import Category from "./categories/page"
import Link from "next/link"

export default function ProductForm() {
  const { data: session } = useSession()
  const id = session?.user.id
  const router = useRouter()

  const [createMode, setCreateMode] = useState<
    "product" | "category" | "style" | "productColor" | "productSize"
  >("product")

  return (
    <>
      <div className="py-8">
        {createMode === "product" && <Product />}
        {createMode === "productColor" && <ProductColor />}
        {createMode === "category" && <Category />}
      </div>
    </>
  )
}
