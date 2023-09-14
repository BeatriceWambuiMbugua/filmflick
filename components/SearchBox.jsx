"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { MdOutlineSearch } from "react-icons/md";

export default function SearchBox() {
  const [search, setSearch] = useState("");
  const router = useRouter();
  function handleSubmit(e) {
    e.preventDefault();
    if (!search) return;
    router.push(`/search/${search}`);
  }
  return (
    <form className="relative w-full hidden md:flex" onSubmit={handleSubmit}>
      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        type="text"
        placeholder="What do you want to watch?"
        className="block w-full p-2 pl-10 text-sm text-white border border-gray-400 bg-transparent rounded-lg focus:outline-none focus:ring-white focus:border-white"
      />
      <button
        type="submit"
        className="absolute inset-y-0 right-0 flex items-center pr-3"
        disabled={!search}
      >
        <MdOutlineSearch className="w-6 h-6 text-gray-200" />
      </button>
    </form>
  );
}
