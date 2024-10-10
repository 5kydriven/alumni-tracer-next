"use client";

import { Checkbox, CheckboxGroup, Input, Slider } from "@nextui-org/react";
import { FiSearch } from "react-icons/fi";

export default function FilterBar() {
  return (
    <div className="flex flex-col bg-black border gap-4 p-4  rounded">
      <div className="w-full">
        <Input type="text" placeholder="Search" startContent={<FiSearch />} />
      </div>

      <CheckboxGroup label="Job Type">
        <Checkbox value="Full-Time">Full-Time</Checkbox>
        <Checkbox value="Part-Time">Part-Time</Checkbox>
        <Checkbox value="Intern">Intern</Checkbox>
        <Checkbox value="Contract">Contract</Checkbox>
      </CheckboxGroup>

      <CheckboxGroup label="Work Type">
        <Checkbox value="Remote">Remote</Checkbox>
        <Checkbox value="On-site">On-site</Checkbox>
        <Checkbox value="Hybrid">Hybrid</Checkbox>
      </CheckboxGroup>

      <div className="flex flex-col gap-2">
        <label className="text-xl">Salary</label>
        <Slider
          label="price range"
          size="sm"
          step={50}
          minValue={0}
          maxValue={1000}
          defaultValue={[100, 500]}
          formatOptions={{ style: "currency", currency: "USD" }}
          className="max-w-md"
        />
      </div>
    </div>
  );
}
