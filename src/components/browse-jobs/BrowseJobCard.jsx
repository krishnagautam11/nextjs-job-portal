export default function BrowseJobCard({ job }) {
  return (
    <div className="browse-job-card">
      <div className="job-info">
        <span className={`job-type ${job.type.toLowerCase()}`}>
          {job.type}
        </span>

        <h3>{job.title}</h3>

        <div className="job-meta">
          <span>{job.company}</span>
          <span>{job.location}</span>
        </div>
      </div>

      <button className="apply-btn">Apply Job</button>
    </div>
  );
}
