import Link from "next/link";

export default function JobCard({ job }) {
  return (
    <div className="border rounded-lg p-5 hover:shadow transition">
      <h2 className="text-xl font-semibold">{job.title}</h2>
      <p className="text-gray-600">{job.company}</p>

      <div className="text-sm text-gray-500 mt-2">
        {job.location} • {job.type}
      </div>

      <Link
        href={`/jobs/${job.id}`}
        className="inline-block mt-4 text-blue-600 hover:underline"
      >
        View Details →
      </Link>
    </div>
  );
}
