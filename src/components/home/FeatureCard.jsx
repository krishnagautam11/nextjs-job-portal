import JobCard from "@/components/jobs/JobCard";
import Link from "next/link";

export const FeatureCard = ({ jobs }) => {
    return (
        <section className="container mx-auto px-6 py-16">
            <h2 className="text-2xl font-bold mb-8 text-center">
                Featured Job Openings
            </h2>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {jobs.map((job) => (
                    <JobCard key={job.id} job={job} />
                ))}
            </div>

            <div className="text-center mt-10">
                <Link href="/jobs" className="text-blue-600 hover:underline">
                    View all jobs →
                </Link>
            </div>
        </section>
    );
}
