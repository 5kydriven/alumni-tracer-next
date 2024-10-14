"use client";

import {
  Accordion,
  AccordionItem,
  Button,
  Divider,
  Input,
  Select,
  SelectItem,
  Textarea,
} from "@nextui-org/react";

export default function ExpAccordion() {
  return (
    <>
      <Accordion
        defaultExpandedKeys={["1"]}
        variant="splitted"
        className="gap-4 px-0"
        selectionMode="multiple"
      >
        <AccordionItem
          key="1"
          aria-label="Resume objective"
          title="Resume objective"
        >
          <div className="flex flex-col gap-4">
            <Divider />
            <Textarea
              label="Description"
              placeholder="Enter your description"
            />
            <div className="flex justify-between">
              <Button>Tips</Button>
              <Button>Save</Button>
            </div>
          </div>
        </AccordionItem>
        <AccordionItem
          key="2"
          aria-label="Work experience"
          title="Work experience"
          classNames={{ content: "flex flex-col gap-4" }}
        >
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-4">
              <div className="flex gap-4">
                <Input label="Job title" />
                <Input label="City/Town" />
              </div>
              <Input label="Employer" />
            </div>
            <div className="flex gap-4 justify-between">
              <div className="flex gap-4 w-full">
                <Select
                  label="Start date"
                  labelPlacement="outside"
                  placeholder="Enter month"
                >
                  <SelectItem key="january">January</SelectItem>
                  <SelectItem key="febuary">Febuary</SelectItem>
                  <SelectItem key="march">March</SelectItem>
                </Select>
                <Select placeholder="2024">
                  <SelectItem key="2024">2024</SelectItem>
                  <SelectItem key="2025">2025</SelectItem>
                  <SelectItem key="2026">2026</SelectItem>
                </Select>
              </div>
              <div className="flex gap-4 w-full">
                <Select
                  label="End date"
                  labelPlacement="outside"
                  placeholder="Enter month"
                >
                  <SelectItem key="january">January</SelectItem>
                  <SelectItem key="febuary">Febuary</SelectItem>
                  <SelectItem key="march">March</SelectItem>
                </Select>
                <Select placeholder="2024">
                  <SelectItem key="2024">2024</SelectItem>
                  <SelectItem key="2025">2025</SelectItem>
                  <SelectItem key="2026">2026</SelectItem>
                </Select>
              </div>
            </div>
            <div className="flex justify-between">
              <Button size="sm">Tips</Button>
              <div className="flex gap-4">
                <Button size="sm">Delete</Button>
                <Button size="sm">Save</Button>
              </div>
            </div>
          </div>
          <Button>Add another work experience</Button>
        </AccordionItem>
        <AccordionItem
          key="3"
          aria-label="Education and Qualifications"
          title="Education and Qualifications"
          classNames={{ content: "flex flex-col gap-4" }}
        >
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-4">
              <div className="flex gap-4">
                <Input label="Job title" />
                <Input label="City/Town" />
              </div>
              <Input label="Employer" />
            </div>
            <div className="flex gap-4 justify-between">
              <div className="flex gap-4 w-full">
                <Select
                  label="Start date"
                  labelPlacement="outside"
                  placeholder="Enter month"
                >
                  <SelectItem key="january">January</SelectItem>
                  <SelectItem key="febuary">Febuary</SelectItem>
                  <SelectItem key="march">March</SelectItem>
                </Select>
                <Select placeholder="2024">
                  <SelectItem key="2024">2024</SelectItem>
                  <SelectItem key="2025">2025</SelectItem>
                  <SelectItem key="2026">2026</SelectItem>
                </Select>
              </div>
              <div className="flex gap-4 w-full">
                <Select
                  label="End date"
                  labelPlacement="outside"
                  placeholder="Enter month"
                >
                  <SelectItem key="january">January</SelectItem>
                  <SelectItem key="febuary">Febuary</SelectItem>
                  <SelectItem key="march">March</SelectItem>
                </Select>
                <Select placeholder="2024">
                  <SelectItem key="2024">2024</SelectItem>
                  <SelectItem key="2025">2025</SelectItem>
                  <SelectItem key="2026">2026</SelectItem>
                </Select>
              </div>
            </div>
            <div className="flex justify-between">
              <Button size="sm">Tips</Button>
              <div className="flex gap-4">
                <Button size="sm">Delete</Button>
                <Button size="sm">Save</Button>
              </div>
            </div>
          </div>
          <Button>Add another work experience</Button>
        </AccordionItem>
        <AccordionItem
          key="4"
          aria-label="Skills"
          title="Skills"
          classNames={{ content: "flex flex-col gap-4" }}
        >
          <div className="flex gap-4 justify-between">
            <Input
              label="Skill"
              labelPlacement="outside"
              placeholder="e.g. programming"
            />
            <Select
              label="Level"
              labelPlacement="outside"
              placeholder="Select level"
            >
              <SelectItem key="beginner">Beginner</SelectItem>
              <SelectItem key="intermediet">Intermediet</SelectItem>
              <SelectItem key="expert">Expert</SelectItem>
            </Select>
          </div>
          <Button>Add another work experience</Button>
        </AccordionItem>
      </Accordion>
      <Button>Next Step</Button>
    </>
  );
}
