import PostJobs from "./_sections/post-jobs";

export default function Page() {
  return (
    <div>
      <div>
        <h1 className="text-2xl">Hi, Employers!</h1>

        <PostJobs />
      </div>
      <div>
        <h1 className="text-2xl">Your pinned talents</h1>

        <PostJobs />
      </div>
    </div>
  );
}
