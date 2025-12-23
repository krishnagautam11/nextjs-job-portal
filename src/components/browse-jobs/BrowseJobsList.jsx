"use client";
import { useSelector } from "react-redux";
import BrowseJobCard from "./BrowseJobCard";

const JOBS_PER_PAGE = 5;

export default function BrowseJobsList() {
  const { jobs, search, location, jobType, currentPage } =
    useSelector((s) => s.jobs);

  const filtered = jobs.filter((job) => {
    const matchSearch =
      job.title.toLowerCase().includes(search.toLowerCase()) ||
      job.company.toLowerCase().includes(search.toLowerCase());

    const matchLocation = !location || job.location === location;
    const matchType = !jobType || job.type === jobType;

    return matchSearch && matchLocation && matchType;
  });

  const start = (currentPage - 1) * JOBS_PER_PAGE;
  const paginatedJobs = filtered.slice(start, start + JOBS_PER_PAGE);

  if (!paginatedJobs.length) return <p>No jobs found</p>;

  return (
    <div className="browse-jobs-list">
      {paginatedJobs.map((job) => (
        <BrowseJobCard key={job.id} job={job} />
      ))}
    </div>
  );
}
