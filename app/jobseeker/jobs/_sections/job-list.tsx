"use client";

import { Button, Chip } from "@nextui-org/react";
import { FiBookmark } from "react-icons/fi";

export default function JobList() {
  return (
    <div className="w-full border">
      <div className="flex justify-between">
        <div>
          <label className="text-xl flex gap-2 items-center">
            Web Designer<span className="text-sm">2 days ago</span>
          </label>
          <div className="flex gap-2">
            <Chip color="success" size="sm">
              Full Time
            </Chip>
            <Chip color="success" size="sm">
              Hybrid
            </Chip>
            <span>30k/month</span>
          </div>
        </div>
        <Button radius="full" variant="flat" isIconOnly>
          <FiBookmark />
        </Button>
      </div>
      <div>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti
          quae doloremque illo. Quisquam reprehenderit eius magnam, accusantium,
          porro doloremque praesentium cumque, quaerat aperiam provident iste
          quos ab dolores perferendis eos.
        </p>
      </div>
      <div className="flex justify-end">
        <Button>View more</Button>
      </div>
    </div>
  );
}
