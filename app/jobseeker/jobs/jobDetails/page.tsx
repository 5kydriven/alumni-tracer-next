import JobDescription from "./_sections/job-description";
import JobInformation from "./_sections/job-information";

export default function Page() {
  return (
    <div className="flex borderflex gap-4 items-start">
      <div className="sticky top-[97px] w-80">
        <JobInformation />
      </div>
      <div className="flex-1 flex flex-col gap-4">
        <JobDescription />
      </div>
    </div>
  );
}
