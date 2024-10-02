"use client"; // Indique que ce composant est un composant client

import Image from "next/image";
import { mainContent } from "../data/main-content/data";
import { useEffect, useState } from "react";
import SkeletonLoader from "./SkeletonLoader";
import { useRouter } from "next/navigation";

export default function MainContent() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      router.push("/home-content");
    }, 700);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div className="grid grid-cols-5 gap-3 bg-black">
      {isLoading ? (
        <>
          {mainContent.map((img) => (
            <div key={img.id} className="gap-3">
              <SkeletonLoader />
            </div>
          ))}
          <SkeletonLoader />
        </>
      ) : (
        <>
          {mainContent.map((img) => (
            <div key={img.id} className="gap-3">
              <SkeletonLoader />
            </div>
          ))}
          <SkeletonLoader />
        </>
      )}
    </div>
  );
}
