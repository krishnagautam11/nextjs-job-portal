"use client";

import { useDispatch, useSelector } from "react-redux";
import { saveJob, removeSavedJob } from "../../store/jobsSlice";

export default function JobCard({ job }) {
  const dispatch = useDispatch();
  const savedJobs = useSelector((state) => state.jobs.savedJobs);

  const isSaved = savedJobs.some((j) => j.id === job.id);

  return (
    <div className="job-card">
      <h3>{job.title}</h3>
      <p>{job.company} • {job.location}</p>
      <p>{job.type} • {job.experience}</p>
      <p><strong>{job.salary}</strong></p>

      <p className="job-desc">{job.description}</p>

      <button
        className="primary-btn"
        onClick={() =>
          isSaved
            ? dispatch(removeSavedJob(job.id))
            : dispatch(saveJob(job))
        }
      >
        {isSaved ? "Remove from Saved" : "Save Job"}
      </button>
    </div>
  );
}
