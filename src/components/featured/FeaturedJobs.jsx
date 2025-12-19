import JobItem from "./JobItem";
import TopRecruitments from "./TopRecruitments";
import jobs from "@/data/featuredJobs";

export default function FeaturedJobs() {
  return (
    <section className="featured-section">
      <div className="custom-container">
        <div className="featured-grid">

          {/* LEFT */}
          <div className="featured-left">
            <span className="featured-subtitle">RECENTLY ADDED JOBS</span>
            <h2 className="featured-title">
              Featured Jobs Posts For This Week
            </h2>

            <div className="featured-jobs">
              {jobs.map((job) => (
                <JobItem key={job.id} job={job} />
              ))}
            </div>
          </div>

          {/* RIGHT */}
          <TopRecruitments />
        </div>
      </div>
    </section>
  );
}
