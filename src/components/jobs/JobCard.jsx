"use client";

import { useDispatch, useSelector } from "react-redux";
import { saveJob, removeSavedJob } from "../../store/jobsSlice";

export default function JobCard({ job }) {
  const dispatch = useDispatch();
  const savedJobs = useSelector((state) => state.jobs.savedJobs);

  const isSaved = savedJobs.some((j) => j.id === job.id);

  return (
    <div className="job-card">

      {/* LEFT */}
      <div className="job-card-left">
        <span className={`job-badge ${job.type.toLowerCase().replace(" ", "-")}`}>
          {job.type}
        </span>

        <h3 className="job-title">{job.title}</h3>

        <div className="job-meta">
          <span>{job.company}</span>
          <span>{job.location}</span>
        </div>

        <div className="job-extra">
          <span>{job.experience}</span>
          <span>{job.salary}</span>
        </div>

        <p className="job-desc">{job.description}</p>
      </div>

      {/* RIGHT */}
      <div className="job-card-actions">
        <button className="apply-btn">Apply Job</button>

        <button
          className="save-btn"
          onClick={() =>
            isSaved
              ? dispatch(removeSavedJob(job.id))
              : dispatch(saveJob(job))
          }
        >
          {isSaved ? "Saved" : "Save"}
        </button>
      </div>
    </div>
  );
}


// "use client";

// import { useDispatch, useSelector } from "react-redux";
// import { saveJob, removeSavedJob } from "../../store/jobsSlice";

// export default function JobCard({ job }) {
//   const dispatch = useDispatch();
//   const savedJobs = useSelector((state) => state.jobs.savedJobs);

//   const isSaved = savedJobs.some((j) => j.id === job.id);

//   return (
//     <div className="job-card">
//       <h3>{job.title}</h3>
//       <p>{job.company} • {job.location}</p>
//       <p>{job.type} • {job.experience}</p>
//       <p><strong>{job.salary}</strong></p>

//       <p className="job-desc">{job.description}</p>

//       <button
//         className="primary-btn"
//         onClick={() =>
//           isSaved
//             ? dispatch(removeSavedJob(job.id))
//             : dispatch(saveJob(job))
//         }
//       >
//         {isSaved ? "Remove from Saved" : "Save Job"}
//       </button>
//     </div>
//   );
// }
