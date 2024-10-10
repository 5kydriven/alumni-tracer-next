import FilterBar from "./_sections/filter-bar";
import JobList from "./_sections/job-list";

export default function Page() {
  return (
    <div className="flex borderflex gap-4 items-start">
      <div className="sticky top-[97px] w-80">
        <FilterBar />
      </div>
      <div className="flex-1 flex flex-col gap-4">
        <JobList />
        <JobList />
        <JobList />
        <JobList />
        <JobList />
        <JobList />
        <JobList />
        <JobList />
        <JobList />
        <JobList />
        <JobList />
      </div>
    </div>
  );
}
