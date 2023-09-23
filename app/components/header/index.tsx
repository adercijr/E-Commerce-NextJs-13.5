"use client"
import { useEffect, useState } from "react"
import { Navbar } from "./Navbar"
import { SearchBar } from "./SearchBar"
import { UserBar } from "./UserBar"

export const Header = () => {
  const [isSearchOpen, setSearchOpen] = useState(false)
  const [isToggleOpen, setToggleOpen] = useState(false)

  useEffect(() => {
    if (isSearchOpen) {
      setToggleOpen(false)
    }
    if (isToggleOpen) {
      setToggleOpen(true)
      setSearchOpen(false)
    }
  }, [isSearchOpen, isToggleOpen])

  return (
    <div className=" max-w-[1600px] flex items-center py-4 justify-between m-auto 2xl:px-0 md:px-8 px-2">
      <div className=" flex flex-row 2xl:gap-32 lg:gap-20 md:gap-10 w-2/6 md:w-2/5 max-w-[500px]">
        <div className="text-xl font-semibold">LOGO</div>
        <Navbar />
      </div>
      <div className="flex-1 ">
        <div className="flex justify-end mr-8 md:mr-4">
          <div className="flex flex-row gap-10 max-w-[300px]">
            <SearchBar
              isSearchOpen={isSearchOpen}
              setSearchOpen={setSearchOpen}
            />
          </div>
          <div className="flex">
            <UserBar
              isToggleOpen={isToggleOpen}
              setToggleOpen={setToggleOpen}
            />
            <div className="block sm:hidden items-center"></div>
          </div>
        </div>
      </div>
    </div>
  )
}
