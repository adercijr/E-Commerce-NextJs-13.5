"use client"
import axios from "axios"
import useAxios from "axios-hooks"
import { SyntheticEvent, useEffect, useState } from "react"
import Popup from "reactjs-popup"

interface ICategories {
  id: number
  name: string
}

export default function Category() {
  const [categoryInput, setCategoryInput] = useState("")
  const [categoryDelete, setCategoryDelete] = useState<Number>()
  const [alredyExist, setAlredyExist] = useState(false)
  const [editingCategoryId, setEditingCategoryId] = useState<Number>()
  const [mode, setMode] = useState<"create" | "edit">("create")
  const [{ data: categories, loading, error }, refetch] = useAxios<
    ICategories[]
  >("api/product/categories")

  const [open, setOpen] = useState(false)
  const closeModal = () => setOpen(false)
  function openModal(id: number) {
    setOpen(true)
    setCategoryDelete(id)
  }

  const clean = () => {
    setMode("create")
    setCategoryInput("")
    setEditingCategoryId(undefined)
  }

  const checkCategoryAlredyExists = async (category: string) => {
    const { data } = await axios.get(`api/product/category/${category}`)
    if (data) {
      setAlredyExist(true)
      return true
    } else {
      setAlredyExist(false)
      return false
    }
  }

  const handleCreateSubmit = async (event: SyntheticEvent) => {
    event.preventDefault()
    const exists = await checkCategoryAlredyExists(categoryInput)
    if (exists) {
      return
    } else {
      await axios.post("api/product/category", { name: categoryInput })
      refetch()
      clean()
    }
  }
  const handleUpadteSubmit = async (event: SyntheticEvent) => {
    event.preventDefault()
    const exists = await checkCategoryAlredyExists(categoryInput)
    if (exists) {
      return
    } else {
      await axios.put("api/product/category", {
        id: editingCategoryId,
        name: categoryInput,
      })
      clean()
      refetch()
    }
  }

  function handleEditMode(id: number, name: string) {
    setCategoryInput(name)
    setEditingCategoryId(id)
    setMode("edit")
  }
  async function handleDelete(id: number | undefined) {
    await axios.delete("api/product/category", {
      params: { id },
    })
    closeModal()
    refetch()
  }

  return (
    <div className="gap-10 flex flex-col shadow-2xl p-10 ">
      <div className="gap-10 flex flex-col">
        <h1 className="font-bold text-3xl">
          {mode === "create" ? " New category" : "Edit category"}
        </h1>

        <form
          onSubmit={mode === "create" ? handleCreateSubmit : handleUpadteSubmit}
          className="flex gap-5 flex-col"
        >
          <div className="w-full">
            <input
              placeholder="Create a new category"
              className="w-1/3 border-2 py-1 px-2 mr-6"
              type="text"
              name="category"
              itemID="category"
              onChange={(e) => setCategoryInput(e.target.value)}
              value={categoryInput}
            />
            {mode === "create" && (
              <button type="submit" className="bg-green-700 text-gray-200  p-2">
                Create
              </button>
            )}
            {mode === "edit" && (
              <>
                <button type="submit" className="bg-yellow-500 py-2 px-4 mr-3">
                  Edit
                </button>
                <button
                  type="reset"
                  className="bg-stone-300 py-2 px-4"
                  onClick={clean}
                >
                  Cancel
                </button>
              </>
            )}
          </div>
          {alredyExist && (
            <span className="text-red-600">The category already exists</span>
          )}
        </form>
      </div>

      <hr />

      <table className="shadow-md">
        <tr className="bg-stone-700 text-gray-200 h-10">
          <th>Name</th>
          <th className="">Actions</th>
        </tr>
        {categories &&
          categories.map((cat) => {
            return (
              <tr key={cat.id} className="h-10 border-y-2 hover:bg-stone-200 ">
                <th className="font-semibold">{cat.name}</th>
                <th className="gap-2 flex justify-center">
                  <button
                    className="bg-yellow-500 active:bg-yellow-600 px-5 font-semibold"
                    onClick={() => handleEditMode(cat.id, cat.name)}
                  >
                    Edit
                  </button>
                  <button
                    className="bg-red-400 
                  active:bg-red-500 py-1 px-4 font-semibold"
                    onClick={() => openModal(cat.id)}
                  >
                    Delete
                  </button>
                </th>
              </tr>
            )
          })}
      </table>

      <Popup open={open} closeOnDocumentClick onClose={closeModal}>
        <div
          className="bg-white  rounded-md
                          w-full max-w-md p-5 my-[-25vh]
                          flex flex-col gap-5 text-stone-800
                          "
        >
          <span>Are you sure you want to delete the category?</span>

          <div className="flex justify-around">
            <button
              className="bg-green-300 py-2 px-6"
              onClick={() => handleDelete(categoryDelete)}
            >
              Yes
            </button>
            <button className="bg-red-400 py-2 px-6" onClick={closeModal}>
              No
            </button>
          </div>
        </div>
      </Popup>

      {open && (
        <div
          className="absolute w-full h-full 
              bg-black top-0 left-0 opacity-20 "
        ></div>
      )}
    </div>
  )
}
