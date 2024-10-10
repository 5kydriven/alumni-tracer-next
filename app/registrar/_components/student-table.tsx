"use client";

import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
} from "@nextui-org/react";

export default function StudentTable() {
  const data = [
    { name: "Tony Reichert", position: "CEO", status: "Active" },
    { name: "Zoey Lang", position: "Technical Lead", status: "Paused" },
    { name: "Jane Fisher", position: "Senior Developer", status: "Active" },
    { name: "Jane Fisher", position: "Senior Developer", status: "Active" },
    { name: "Jane Fisher", position: "Senior Developer", status: "Active" },
    { name: "Jane Fisher", position: "Senior Developer", status: "Active" },
    { name: "Jane Fisher", position: "Senior Developer", status: "Active" },
    { name: "Jane Fisher", position: "Senior Developer", status: "Active" },
    { name: "Jane Fisher", position: "Senior Developer", status: "Active" },
    { name: "Jane Fisher", position: "Senior Developer", status: "Active" },
    { name: "Jane Fisher", position: "Senior Developer", status: "Active" },
    { name: "Jane Fisher", position: "Senior Developer", status: "Active" },
    { name: "Jane Fisher", position: "Senior Developer", status: "Active" },
    { name: "Jane Fisher", position: "Senior Developer", status: "Active" },
    { name: "Jane Fisher", position: "Senior Developer", status: "Active" },
    { name: "Jane Fisher", position: "Senior Developer", status: "Active" },
    { name: "Jane Fisher", position: "Senior Developer", status: "Active" },
    { name: "Jane Fisher", position: "Senior Developer", status: "Active" },
    { name: "Jane Fisher", position: "Senior Developer", status: "Active" },
    { name: "Jane Fisher", position: "Senior Developer", status: "Active" },
    { name: "Jane Fisher", position: "Senior Developer", status: "Active" },
    { name: "Jane Fisher", position: "Senior Developer", status: "Active" },
    { name: "Jane Fisher", position: "Senior Developer", status: "Active" },
    { name: "Jane Fisher", position: "Senior Developer", status: "Active" },
    {
      name: "William Howard",
      position: "Community Manager",
      status: "Vacation",
    },
  ];
  return (
    <Table
      isHeaderSticky
      removeWrapper
      aria-label="Example static collection table"
      classNames={{
        wrapper:
          "p-0 rounded-sm bg-black after:bg-foreground after:text-background text-background ",
        th: "  rounded-none first:rounded-none last:rounded-none ",
        tbody: "divide-y divide-gray-800",
        base: "h-[calc(100vh-110px)] overflow-y-auto",
      }}
    >
      <TableHeader>
        <TableColumn>NAME</TableColumn>
        <TableColumn>ROLE</TableColumn>
        <TableColumn>STATUS</TableColumn>
      </TableHeader>

      <TableBody>
        {data.map((row, index) => (
          <TableRow key={index}>
            <TableCell>{row.name}</TableCell>
            <TableCell>{row.position}</TableCell>
            <TableCell>{row.status}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
