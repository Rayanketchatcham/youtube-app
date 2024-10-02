import Image from "next/image";
import { mainContent } from "../data/main-content/data";
import { useEffect, useState } from "react";
import { clearInterval } from "timers";
import Link from "next/link";
import SkeletonLoader from "../components/SkeletonLoader";

export default function Content() {
  {
    /*
  const [isloading, setIsLoading] = useState(true);
  const [content, setContent] = useState([]);

  useEffect(() => {
    const checkDataReady = () => {
      if (mainContent.length > 0) {
      setContent(mainContent);
        setIsLoading(false);
      } else {
      }
    };
    checkDataReady();

    const interval = setInterval(checkDataReady, 1000);
    return () => clearInterval(interval);
  }, []);
  */
  }

  return (
    <div className="grid grid-cols-5 gap-3 bg-black">
      {mainContent.map((img) => (
        <div key={img.id} className="gap-3 ">
          <Link href={""}>
            <div className=" w-80 h-72 rounded-xl  ">
              <Image
                src={img.source}
                width={200}
                height={200}
                alt={img.title}
                className="w-80 h-52 rounded-xl object-cover"
              />
              <div className=" py-2  px-1 gap-3 flex flex-row items-center">
                <Image
                  src="https://th.bing.com/th/id/R.421ee1be5c5df5980c67eb3a76c4a724?rik=NSyw1HaOPYn4SQ&pid=ImgRaw&r=0"
                  width={20}
                  height={20}
                  alt={img.title}
                  className="w-8 rounded-full object-cover"
                />{" "}
                <p>{img.title}</p>
              </div>
              <div className=" text-zinc-500 text-xs px-12 gap-3 flex flex-row items-center">
                <p>{img.author}</p>
              </div>
            </div>
          </Link>
        </div>
      ))}
      <SkeletonLoader />
      <SkeletonLoader />
    </div>
  );
}
