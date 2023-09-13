import Image from "next/image";
import React from "react";
import { MdOutlineOndemandVideo, MdOutlineSearch } from "react-icons/md";
import { HiMenuAlt4 } from "react-icons/hi";

export default function () {
  return (
    <div className="flex justify-around items-center py-10">
      <div className="flex gap-8">
        <div className="w-10 h-10 bg-[#BE123C] text-white rounded-full flex items-center justify-center">
          <MdOutlineOndemandVideo size={20} />
        </div>
        <h3 className="text-white text-[24px] font-bold break-words">
          Movie Box
        </h3>
      </div>

      <div class="relative w-[526px]">
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
      <div className="flex gap-8">
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
