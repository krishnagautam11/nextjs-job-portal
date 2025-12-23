"use client";
import { useDispatch, useSelector } from "react-redux";
import { setPage } from "@/store/jobsSlice";

const JOBS_PER_PAGE = 5;

export default function Pagination() {
  const dispatch = useDispatch();
  const { jobs, search, location, jobType, currentPage } =
    useSelector((s) => s.jobs);

  const filteredCount = jobs.filter((job) => {
    const matchSearch =
      job.title.toLowerCase().includes(search.toLowerCase()) ||
      job.company.toLowerCase().includes(search.toLowerCase());

    const matchLocation = !location || job.location === location;
    const matchType = !jobType || job.type === jobType;

    return matchSearch && matchLocation && matchType;
  }).length;

  const totalPages = Math.ceil(filteredCount / JOBS_PER_PAGE);

  if (totalPages <= 1) return null;

  return (
    <div className="pagination">
      <button
        disabled={currentPage === 1}
        onClick={() => dispatch(setPage(currentPage - 1))}
      >
        {"<"}
      </button>

      {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
        <button
          key={page}
          className={currentPage === page ? "active" : ""}
          onClick={() => dispatch(setPage(page))}
        >
          {page}
        </button>
      ))}

      <button
        disabled={currentPage === totalPages}
        onClick={() => dispatch(setPage(currentPage + 1))}
      >
        {">"}
      </button>
    </div>
  );
}

