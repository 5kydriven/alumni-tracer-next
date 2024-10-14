"use client";

import { Button } from "@nextui-org/react";

export default function JobDescription() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold">Job Description</h1>
        <p>
          One disadvantage of Lorum Ipsum is that in Latin certain letters
          appear more frequently than others - which creates a distinct visual
          impression. Moreover, in Latin only words at the beginning of
          sentences are capitalized.
        </p>
      </div>
      <div>
        <h1 className="text-2xl font-bold">Responsibilites and Duties</h1>
        <p>
          One disadvantage of Lorum Ipsum is that in Latin certain letters
          appear more frequently than others - which creates a distinct visual
          impression. Moreover, in Latin only words at the beginning of
          sentences are capitalized.
        </p>
      </div>
      <div>
        <h1 className="text-2xl font-bold">
          Required Experience, Skills and Qualifications
        </h1>
        <p>
          One disadvantage of Lorum Ipsum is that in Latin certain letters
          appear more frequently than others - which creates a distinct visual
          impression. Moreover, in Latin only words at the beginning of
          sentences are capitalized.
        </p>
      </div>
      <Button color="success">Apply Now</Button>
    </div>
  );
}
