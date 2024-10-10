"use client";

import { Avatar } from "@nextui-org/react";

export default function Page() {
  return (
    <div className="border">
      <div className="m-8">
        <div className="relative h-80">
          <div className="h-52 bg-blue-500"></div>

          <Avatar
            src="https://i.pravatar.cc/150?u=a04258114e29026708c"
            className="w-40 h-40 text-large absolute bottom-9 left-9"
          />
        </div>
        <div className="px-10">
          <div className="flex flex-col">
            <label className="text-2xl">Name</label>
            <span>Address</span>
          </div>
        </div>
      </div>
    </div>
  );
}
