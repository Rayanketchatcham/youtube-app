import Image from "next/image";
import React from "react";
import imageProfile from "../assets/img1.jpg";

export default function Profil() {
  return (
    <div>
      {" "}
      <Image src={imageProfile} alt="profile" className="rounded-full w-8"/>
    </div>
  );
}
