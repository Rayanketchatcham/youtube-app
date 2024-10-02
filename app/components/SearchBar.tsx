import React from "react";
import { CiSearch } from "react-icons/ci";

export default function SearchBar() {
  return (
    <div className="flex items-center bg-zinc-800 border-zinc-400 rounded-full w-5/6 ">
      <input
        type="search"
        placeholder="Rechercher"
        className="bg-black rounded-l-full px-4 py-1 outline-none w-full text-sm text-white border h-9 border-zinc-400"
      />
      <CiSearch className="text-white text-4xl   mx-2 py-1  " />
    </div>
  );
}
