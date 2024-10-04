"use client";

import { Input } from "@nextui-org/react";

export default function Page() {
  return (
    <div>
      <h1 className="text-2xl">Post Jobs</h1>
      <div className="w-full">
        <label className="text-lg">Job Information</label>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Input
            type="text"
            label="Job Title"
            placeholder="Who do you need?"
            labelPlacement="outside"
          />
          <Input
            type="text"
            label="Job Title"
            placeholder="Who do you need?"
            labelPlacement="outside"
          />
          <Input
            type="text"
            label="Job Title"
            placeholder="Who do you need?"
            labelPlacement="outside"
          />
          <Input
            type="text"
            label="Job Title"
            placeholder="Who do you need?"
            labelPlacement="outside"
          />
        </div>
      </div>
    </div>
  );
}
