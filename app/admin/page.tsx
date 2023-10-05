"use client"
import { redirect } from "next/navigation"
import ProductForm from "./productform"

export default function Page() {
  redirect("/admin/products")
}
