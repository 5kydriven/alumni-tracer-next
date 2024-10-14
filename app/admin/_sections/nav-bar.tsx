"use client";

import { Button, Input } from "@nextui-org/react";
import { usePathname } from "next/navigation";
import { FiPlus, FiSearch } from "react-icons/fi";

export default function NavBar() {
  const pathname = usePathname();

  return (
    <nav className="w-full h-16  border-b border-gray-800 ">
      <div className="flex items-center h-full px-3 justify-between">
        <div className="flex items-center">
          <button
            data-drawer-target="logo-sidebar"
            data-drawer-toggle="logo-sidebar"
            aria-controls="logo-sidebar"
            type="button"
            className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          >
            <span className="sr-only">Open sidebar</span>
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                clipRule="evenodd"
                fillRule="evenodd"
                d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
              ></path>
            </svg>
          </button>

          <label className="text-lg">
            {pathname == "/registrar" ? "Home" : "Students"}
          </label>
        </div>

        <div
          className={` gap-2 items-center ${
            pathname == "/registrar" ? "hidden" : "flex"
          }`}
        >
          <div>
            <Input
              type="text"
              placeholder="Search a student"
              radius="sm"
              variant="faded"
              className="hidden sm:block"
              endContent={<FiSearch />}
            />
          </div>
          <Button size="sm" variant="faded" endContent={<FiPlus />}>
            Add Student
          </Button>
        </div>
      </div>
    </nav>
  );
}
