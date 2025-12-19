"use client";

import { useSelector } from "react-redux";
import JobCard from "./JobCard";

export default function JobList() {
  const { jobs, search } = useSelector((state) => state.jobs);

  const filteredJobs = jobs.filter((job) =>
    job.title.toLowerCase().includes(search.toLowerCase()) ||
    job.company.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section className="job-list-wrapper">
      {filteredJobs.length === 0 && <p>No jobs found</p>}

      {filteredJobs.map((job) => (
        <JobCard key={job.id} job={job} />
      ))}
    </section>
  );
}
