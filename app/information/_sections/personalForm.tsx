"use client";

import {
  Card,
  CardHeader,
  CardBody,
  Input,
  DateInput,
  Select,
  SelectItem,
  Button,
} from "@nextui-org/react";

import { CalendarDate } from "@internationalized/date";

export default function PersonalForm() {
  return (
    <>
      <Card className=" px-4 gap-4">
        <CardHeader className="p-0 py-4 border-b">
          <label>Personal Information</label>
        </CardHeader>
        <CardBody className="p-0 pb-4">
          <div className="flex flex-col gap-4">
            <div className="flex gap-4">
              <label
                htmlFor="dropzone-file"
                className="flex flex-col items-center justify-center w-32 h-32 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-gray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
              >
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                  <svg
                    className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 16"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                    />
                  </svg>
                  <p className=" text-xs text-center text-gray-500 dark:text-gray-400">
                    <span className="font-semibold">Click to upload</span> or
                    drag and drop
                  </p>
                </div>
                <input id="dropzone-file" type="file" className="hidden" />
              </label>
              <div className="flex flex-col gap-4 flex-1">
                <Input label="First name" />
                <Input label="Last name" />
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <div className="flex justify-between gap-4">
                <Input label="Email address" />
                <Input label="Phone number" />
              </div>
              <Input label="address" />
            </div>
            <div className="flex flex-col gap-4">
              <div className="flex justify-between gap-4">
                <Input label="Zip code" />
                <Input label="City/town" />
              </div>
              <div className="flex justify-between gap-4">
                <DateInput
                  label="Birth date"
                  placeholderValue={new CalendarDate(1995, 11, 6)}
                  className="max-w-sm"
                />
                <Input label="Place of birth" />
              </div>
              <div className="flex justify-between gap-4">
                <Select label="Gender">
                  <SelectItem key="male"> Male</SelectItem>
                  <SelectItem key="female"> Female</SelectItem>
                </Select>
                <Input label="Marital status" />
              </div>
            </div>
          </div>
        </CardBody>
      </Card>
      <Button>Next Step</Button>
    </>
  );
}
