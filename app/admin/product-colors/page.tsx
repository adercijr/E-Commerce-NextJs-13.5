"use client"
import { useState } from "react"

export default function ProductColor() {
  const [formData, setFormData] = useState({
    color: "",
    images: "",
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

      <label htmlFor="color">Color</label>
      <input
        type="text"
        name="color"
        onChange={handleChange}
        value={formData.color}
      />

      <label htmlFor="images">Image</label>
      <input
        type="text"
        name="images"
        onChange={handleChange}
        value={formData.images}
      />
    </>
  )
}
