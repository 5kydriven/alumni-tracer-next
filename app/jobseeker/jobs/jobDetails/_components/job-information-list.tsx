"use client";

import { ReactNode } from "react";

export default function JobInformationList({
  label,
  sub,
  icon,
}: {
  label: string;
  sub: string;
  icon: ReactNode;
}) {
  return (
    <div className="flex items-center gap-4">
      {icon}
      <div className="flex flex-col">
        <label className="text-lg">{label}</label>
        <span>{sub}</span>
      </div>
    </div>
  );
}
