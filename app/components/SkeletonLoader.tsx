import React from "react";

export default function SkeletonLoader() {
  return (
    <div className="flex w-80 flex-col gap-4">
      <div className="skeleton w-80 h-52"></div>
      <div className=" flex  items-center  gap-3">
        <div className="skeleton h-8 w-8 shrink-0 rounded-full"></div>
        <div className="skeleton h-4 w-full"></div>
      </div>

      <div className="skeleton h-4 w-2/3"></div>
    </div>
  );
}
