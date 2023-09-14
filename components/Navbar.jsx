"use client"
import { MdOutlineOndemandVideo, MdOutlineSearch } from "react-icons/md";
import { HiMenuAlt4 } from "react-icons/hi";
import {BiMenu} from "react-icons/bi"
import {AiOutlineClose} from "react-icons/ai"

import { useState } from "react";


export default function () {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
      setMobileMenuOpen(!isMobileMenuOpen);
    };
  return (
    <div className="flex justify-around items-center py-10 bg-black">
      <div className="flex gap-8">
        <div className="w-10 h-10 bg-[#BE123C] text-white rounded-full flex items-center justify-center">
          <MdOutlineOndemandVideo size={20} />
        </div>
        <h3 className="text-white text-[24px] font-bold break-words">
          Movie Box
        </h3>
      </div>

        {/* Mobile Menu Toggle Button */}
        {/* <div className="md:hidden">
          <button
            className="text-white focus:outline-none"
            onClick={toggleMobileMenu}
          >
            {isMobileMenuOpen ? (
              <AiOutlineClose className="w-6 h-6" />
            ) : (
              <BiMenu className="w-6 h-6" />
            )}
          </button>
        </div>

        <div
          className={`${
            isMobileMenuOpen ? 'block' : 'hidden'
          } md:flex md:space-x-8 items-center`}
        >     
        </div> */}

      <div class="relative w-[526px] hidden md:flex">
        <div class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
          <MdOutlineSearch className="w-6 h-6 text-gray-500" />
        </div>
        <input
          type="search"
          id="default-search"
          class="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:outline-none focus:ring-red focus:border-red "
          placeholder="What do you want to watch?"
          required
        />
      </div>
      <div className="hidden gap-8 md:flex">
        <h3 className="text-white text-[24px] font-bold break-words">
          Sign in
        </h3>
        <div className="w-10 h-10 bg-[#BE123C] text-white rounded-full flex items-center justify-center">
          <HiMenuAlt4 size={20} />
        </div>
      </div>
    </div>
  );
}
