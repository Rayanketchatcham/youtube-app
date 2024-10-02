"use client";
import Image from "next/image";
import React, { useState } from "react";
import { IoIosArrowForward, IoIosMenu } from "react-icons/io";
import logo from "../assets/logo.png";
import {
  MdHomeFilled,
  MdOutlineSubscriptions,
  MdPlaylistPlay,
} from "react-icons/md";
import { SiYoutubeshorts } from "react-icons/si";
import { GoHistory } from "react-icons/go";

import { FiClock } from "react-icons/fi";
import { AiOutlineLike } from "react-icons/ai";
import { PiMusicNote } from "react-icons/pi";
import Link from "next/link";

export default function SideBar() {
  const [isopen, setIsopen] = useState(true);

  return (
    <div
      className={` h-screen relative duration-300 py-3 bg-black ${
        isopen ? "w-56 px-4" : "w-16 items-center justify-center"
      } `}
    >
      <div className="flex items-center px-2 pb-6  gap-3">
        <IoIosMenu onClick={() => setIsopen(!isopen)} className="text-2xl" />
        <Image
          src={logo}
          alt="logo"
          width={80}
          className={` ${!isopen && "hidden"}`}
        />
      </div>
      <span>
        <div className="flex  gap-4 hover:bg-zinc-800 rounded-md px-2 py-2 ">
          <MdHomeFilled className={`text-xl `} />
          <Link href="/">
            {" "}
            <h3 className={`text-sm ${!isopen ? "hidden" : "block"}`}>
              Accueil
            </h3>
          </Link>
        </div>
        <div className="flex  gap-4 hover:bg-zinc-800 rounded-md px-2 py-2 ">
          <SiYoutubeshorts className="text-xl " />
          <Link href="/short">
            <h3 className={`text-sm  ${!isopen && "scale-0"}`}>Shorts</h3>
          </Link>
        </div>
        <div className="flex  gap-4 hover:bg-zinc-800 rounded-md px-2 py-2">
          <MdOutlineSubscriptions className="text-xl " />
          <Link href="/abonnements">
            <h3 className={`text-sm  ${!isopen && "scale-0"}`}>Abonnements</h3>
          </Link>
        </div>
      </span>

      <hr className="my-3" />
      <span>
        <div className="flex  gap-4 hover:bg-zinc-800 rounded-md px-2 py-2 ">
          <h3 className={`text-sm  ${!isopen && "scale-0"}`}>Vous</h3>
          <IoIosArrowForward className="text-xl " />
        </div>
        <div className="flex  gap-4 hover:bg-zinc-800 rounded-md px-2 py-2 ">
          <MdHomeFilled className="text-xl " />
          <h3 className={`text-sm  ${!isopen && "scale-0"}`}>Votre chaine</h3>
        </div>
        <div className="flex  gap-4 hover:bg-zinc-800 rounded-md px-2 py-2 ">
          <GoHistory className="text-xl " />
          <h3 className={`text-sm  ${!isopen && "scale-0"}`}>Historique</h3>
        </div>
        <div className="flex  gap-4 hover:bg-zinc-800 rounded-md px-2 py-2 ">
          <MdPlaylistPlay className="text-xl " />
          <h3 className={`text-sm  ${!isopen && "scale-0"}`}>Playlist</h3>
        </div>
        <div className="flex  gap-4 hover:bg-zinc-800 rounded-md px-2 py-2">
          <FiClock className="text-xl " />
          <h3 className={`text-sm  ${!isopen && "scale-0"}`}>
            A regarder plus tard
          </h3>
        </div>
        <div className="flex  gap-4 hover:bg-zinc-800 rounded-md px-2 py-2">
          <AiOutlineLike className="text-xl " />
          <h3 className={`text-sm  ${!isopen && "scale-0"}`}>
            Videos "J'aime"
          </h3>
        </div>
      </span>

      <hr className="my-3" />
      <span>
        <p className="text-sm px-2">Abonnements</p>
      </span>

      <hr className="my-3" />
      <span>
        <p className="text-sm px-2">Explorer</p>
        <div className="flex  gap-4 hover:bg-zinc-800 rounded-md px-2 py-2 ">
          <MdHomeFilled className="text-xl " />
          <h3 className={`text-sm  ${!isopen && "scale-0"}`}> Tendances</h3>
        </div>
        <div className="flex  gap-4 hover:bg-zinc-800 rounded-md px-2 py-2 ">
          <PiMusicNote className="text-xl " />
          <h3 className={`text-sm  ${!isopen && "scale-0"}`}>Musiques</h3>
        </div>
        <div className="flex  gap-4 hover:bg-zinc-800 rounded-md px-2 py-2 ">
          <SiYoutubeshorts className="text-xl " />
          <h3 className={`text-sm  ${!isopen && "scale-0"}`}>Direct</h3>
        </div>
        <div className="flex  gap-4 hover:bg-zinc-800 rounded-md px-2 py-2">
          <MdOutlineSubscriptions className="text-xl " />
          <h3 className={`text-sm  ${!isopen && "scale-0"}`}>Jeux Video</h3>
        </div>
        <div className="flex  gap-4 hover:bg-zinc-800 rounded-md px-2 py-2 ">
          <MdHomeFilled className="text-xl " />
          <h3 className={`text-sm  ${!isopen && "scale-0"}`}> Actualites</h3>
        </div>
        <div className="flex  gap-4 hover:bg-zinc-800 rounded-md px-2 py-2 ">
          <MdHomeFilled className="text-xl " />
          <h3 className={`text-sm  ${!isopen && "scale-0"}`}>Sport</h3>
        </div>
        <div className="flex  gap-4 hover:bg-zinc-800 rounded-md px-2 py-2 ">
          <SiYoutubeshorts className="text-xl " />
          <h3 className={`text-sm  ${!isopen && "scale-0"}`}>
            Savoirs & Cultures
          </h3>
        </div>
        <div className="flex  gap-4 hover:bg-zinc-800 rounded-md px-2 py-2">
          <MdOutlineSubscriptions className="text-xl " />
          <h3 className={`text-sm  ${!isopen && "scale-0"}`}>Mode et Beaute</h3>
        </div>
      </span>
    </div>
  );
}
