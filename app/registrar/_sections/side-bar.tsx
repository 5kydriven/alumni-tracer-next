"use client";

import {
  Avatar,
  Button,
  Divider,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/react";
import Link from "next/link";
import { FiHome, FiUsers } from "react-icons/fi";
import { PiDotsThreeOutlineVerticalFill } from "react-icons/pi";

export default function SideBar() {
  return (
    <aside className="w-[200px] lg:w-[300px] flex-col transition-transform -translate-x-full bg-white border-r border-gray-800 sm:translate-x-0 dark:bg-black hidden md:flex">
      <div className="h-16 flex items-center px-4">Logo</div>

      <div className="flex flex-col px-4 py-2 justify-between h-full">
        <div className=" overflow-y-auto bg-white dark:bg-black">
          <ul className="space-y-2 font-medium">
            <li>
              <Link
                href="/registrar"
                className="flex items-center text-black rounded-lg dark:text-white hover:bg-black dark:hover:bg-black group"
              >
                <FiHome />
                <span className="ms-3">Home</span>
              </Link>
            </li>
            <li>
              <Link
                href="/registrar/students"
                className="flex items-center text-black rounded-lg dark:text-white hover:bg-black dark:hover:bg-black group"
              >
                <FiUsers />
                <span className="ms-3">Students</span>
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <Divider className="my-1.5" />
          <Dropdown
            classNames={{ content: "lg:min-w-[270px] min-w-[170px] rounded" }}
          >
            <DropdownTrigger>
              <div
                className="flex items-center gap-2  p-2"
                aria-expanded="false"
              >
                <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />

                <label>Registrar</label>
                <PiDotsThreeOutlineVerticalFill className="ml-auto" />
              </div>
            </DropdownTrigger>
            <DropdownMenu aria-label="Static Actions">
              <DropdownItem key="new">New file</DropdownItem>
              <DropdownItem key="copy">Copy link</DropdownItem>
              <DropdownItem key="edit">Edit file</DropdownItem>
              <DropdownItem key="delete" className="text-danger" color="danger">
                Delete file
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </div>
      </div>
    </aside>
  );
}
