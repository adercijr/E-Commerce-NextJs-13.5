"use client"
import { motion } from "framer-motion"
import { useRef, useState } from "react"
import { AiOutlineClose } from "react-icons/ai"
import { BiSearch } from "react-icons/bi"
import { BsChevronLeft } from "react-icons/bs"

type SearchBarProps = {
  isSearchOpen: Boolean
  setSearchOpen: Function
}

export const SearchBar = ({ isSearchOpen, setSearchOpen }: SearchBarProps) => {
  const [inputValue, setInputValue] = useState("")
  const searchInput = useRef<HTMLInputElement>(null)

  const handleSearchButton = () => {
    setSearchOpen(!isSearchOpen)
    if (searchInput.current) {
      searchInput.current.focus()
    }
  }

  const container = {
    open: {
      width: "100vw",
      height: "100vh",
      transition: {
        delay: 0.003,
        type: "spring",
        stiffness: 400,
        damping: 40,
      },
    },
    closed: {
      width: "0px",
      height: "100vh",
      transition: {
        delay: 0.3,
        type: "spring",
        stiffness: 400,
        damping: 40,
      },
    },
  }

  return (
    <div className=" flex-1 cursor-pointer  flex items-center rounded-full md:py-1 md:px-2 ">
      <button className="hidden md:block">
        <BiSearch size={20} className="opacity-50" />
      </button>

      <button
        className="flex md:hidden w-8 h-8 justify-center items-center"
        onClick={handleSearchButton}
      >
        <BiSearch size={"1.5rem"} className="opacity-50" />
      </button>

      <div className="relative w-full h-full pr-2 hidden md:flex">
        <input
          type="text"
          className="px-4 outline-none w-full bg-slate-100 md:block hidden"
          placeholder="Search"
          onChange={(e) => setInputValue(e.target.value)}
          value={inputValue}
        />
        {inputValue && (
          <button
            className="absolute right-0 top-1"
            onClick={() => setInputValue("")}
          >
            <AiOutlineClose />
          </button>
        )}
      </div>

      <motion.nav
        initial={false}
        animate={isSearchOpen ? "open" : "closed"}
        className="flex lg:hidden"
      >
        <motion.div
          className={
            "z-10 cursor-default flex top-0 left-0 max-w-md fixed overflow-hidden bg-blue-100"
          }
          variants={container}
        >
          <div className="w-full flex p-4">
            <button
              onClick={() => setSearchOpen(false)}
              className="bg-blue-400 h-8 w-8 flex items-center justify-center"
            >
              <BsChevronLeft size={"1.2rem"} />
            </button>
            <div className="relative w-full">
              <input
                type="text"
                className="outline-none px-6 w-full h-8 "
                placeholder="Search"
                ref={searchInput}
                onChange={(e) => setInputValue(e.target.value)}
                value={inputValue}
              ></input>
              {inputValue && (
                <button
                  className="absolute right-4 top-2"
                  onClick={() => setInputValue("")}
                >
                  <AiOutlineClose />
                </button>
              )}
            </div>
          </div>
        </motion.div>
      </motion.nav>
    </div>
  )
}
