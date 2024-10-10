"use client";

import { Card, CardHeader, Divider, CardBody } from "@nextui-org/react";
import { FiUserCheck } from "react-icons/fi";
import JobInformationList from "../_components/job-information-list";

export default function JobInformation() {
  return (
    <Card className="max-w-80 rounded" radius="none">
      <CardHeader>
        <h1 className="text-xl font-semibold">Job Information</h1>
      </CardHeader>
      <Divider />
      <CardBody className="gap-4">
        <JobInformationList
          label="Employee Type"
          sub="Full Time"
          icon={<FiUserCheck className="text-3xl" />}
        />
        <JobInformationList
          label="Experience"
          sub="2+ years"
          icon={<FiUserCheck className="text-3xl" />}
        />
        <JobInformationList
          label="Type of Work"
          sub="Hybrid"
          icon={<FiUserCheck className="text-3xl" />}
        />
        <JobInformationList
          label="Salary"
          sub="TBD"
          icon={<FiUserCheck className="text-3xl" />}
        />
        <JobInformationList
          label="Date Posted"
          sub="Oct 9, 2024"
          icon={<FiUserCheck className="text-3xl" />}
        />
      </CardBody>
    </Card>
  );
}
