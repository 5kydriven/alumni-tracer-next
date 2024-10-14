"use client";

import {
  Dropdown,
  DropdownTrigger,
  Button,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/react";
import { FiCheckCircle, FiChevronDown } from "react-icons/fi";
import { VscSettings } from "react-icons/vsc";

export default function SubNavBar() {
  return (
    <nav className="w-full h-12  border-b border-gray-800">
      <div className=" flex items-center h-full px-3 gap-2">
        <Dropdown>
          <div>
            <DropdownTrigger>
              <Button
                variant="faded"
                size="sm"
                startContent={<FiCheckCircle />}
                endContent={<FiChevronDown />}
              >
                Status
              </Button>
            </DropdownTrigger>
          </div>
          <DropdownMenu aria-label="Static Actions">
            <DropdownItem key="employed">Employed</DropdownItem>
            <DropdownItem key="unemployed">Unemployed</DropdownItem>
            <DropdownItem key="unknown">Unknown</DropdownItem>
          </DropdownMenu>
        </Dropdown>

        <Dropdown>
          <div>
            <DropdownTrigger>
              <Button
                variant="faded"
                size="sm"
                startContent={<VscSettings />}
                endContent={<FiChevronDown />}
              >
                Status
              </Button>
            </DropdownTrigger>
          </div>
          <DropdownMenu aria-label="Static Actions">
            <DropdownItem key="id">ID</DropdownItem>
            <DropdownItem key="name">Name</DropdownItem>
            <DropdownItem key="course">Course</DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </div>
    </nav>
  );
}
