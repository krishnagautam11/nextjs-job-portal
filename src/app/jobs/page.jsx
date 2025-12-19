"use client";
import { useSelector } from "react-redux";
import JobCard from "@/components/jobs/JobCard";

export default function JobsPage() {
  const { search, jobs } = useSelector((state) => state.jobs);

  const filteredJobs = jobs.filter((job) =>
    job.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container py-10">
      <h1 className="text-2xl font-semibold mb-6">
        Showing results for {search}
      </h1>

      <div className="grid gap-6 md:grid-cols-2">
        {filteredJobs.map((job) => (
          <JobCard key={job.id} job={job} />
        ))}
      </div>
    </div>
  );
}
