import React from "react";
import SearchBar from "./SearchBar";
import { AiFillAudio } from "react-icons/ai";
import { IoIosNotificationsOutline } from "react-icons/io";
import { MdVideoCameraBack } from "react-icons/md";
import Profil from "./Profil";
import Link from "next/link";
import { suggestion } from "../data/suggestions/data";

export default function Header() {
  return (
    <div className="fixed flex flex-col pb-3 bg-black ">
      <div className=" flex flex-row  justify-between pl-20  h-24 w-full ">
        <div className="flex flex-row items-center gap-3 ml-96 mr-60  w-2/6">
          <SearchBar />
          <AiFillAudio className=" bg-zinc-800 rounded-full text-white text-4xl   mx-2 px-2" />
        </div>
        <div className="flex flex-row gap-4 items-center pl-56 w-2/6">
          <MdVideoCameraBack className="text-xl " />
          <IoIosNotificationsOutline className="text-2xl " />
          <Profil />
        </div>
      </div>
      <div className="flex  gap-2 text-nowrap">
        {suggestion.map((sug) => {
          return (
            <div key={sug.id}>
              <Link
                href={sug.name}
                className=" bg-zinc-800 text-white text-sm py-1 px-2 rounded-md"
              >
                {sug.name}
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
