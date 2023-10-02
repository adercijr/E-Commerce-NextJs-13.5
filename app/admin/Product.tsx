"use client"
import { useState } from "react"

export default function Product() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
  })
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }
  return (
    <>
      <h1 className="font-bold text-3xl">New product</h1>

      <label htmlFor="title">Title</label>
      <input
        type="text"
        name="title"
        onChange={handleChange}
        value={formData.title}
      />

      <label htmlFor="description">Description</label>
      <input
        type="text"
        name="description"
        onChange={handleChange}
        value={formData.description}
      />
    </>
  )
}
