"use client";

import { Button } from "@nextui-org/react";
import { FiPlus } from "react-icons/fi";
import { MdPostAdd } from "react-icons/md";

export default function PostJobs() {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-xl">Your Job Posts</label>
      <div className="h-96 w-full bg-white rounded flex flex-col justify-center items-center gap-3">
        <div className="text-gray-500 ">
          <MdPostAdd size={150} />
        </div>
        <label className="text-gray-500 text-xl">
          Your job post will appear here.
        </label>
        <Button>
          <FiPlus />
          Add my first job post
        </Button>
      </div>
    </div>
  );
}
