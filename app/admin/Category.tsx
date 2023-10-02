"use client"
import axios from "axios"
import { SyntheticEvent, useState } from "react"

export default function Category() {
  const [categoryName, setCategoryName] = useState("")

  const handleSubmit = async (event: SyntheticEvent) => {
    event.preventDefault()
    await axios.post("api/product", categoryName)
  }
  return (
    <>
      <h1 className="font-bold text-3xl">New category</h1>

      <form onSubmit={handleSubmit}>
        <label htmlFor="category">Category</label>
        <input
          type="text"
          name="category"
          itemID="category"
          onChange={(e) => setCategoryName(e.target.value)}
          value={categoryName}
        />
        <button type="submit">Create category</button>
      </form>
    </>
  )
}
