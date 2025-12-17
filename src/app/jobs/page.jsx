import { jobs } from "@/data/jobs";
import JobCard from "@/components/JobCard";

export default function JobsPage() {
  return (
    <main className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Available Jobs</h1>

      <div className="grid gap-6 md:grid-cols-2">
        {jobs.map((job) => (
          <JobCard key={job.id} job={job} />
        ))}
      </div>
    </main>
  );
}
