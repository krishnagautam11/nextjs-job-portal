import { jobs } from "@/data/jobs";

export default function JobDetailPage({ params }) {
  const { slug } = params;

  const job = jobs.find((job) => job.id === slug);

  if (!job) {
    return (
      <main className="container mx-auto p-6">
        <h1 className="text-2xl font-bold">Job not found</h1>
        <p className="text-gray-600 mt-2">
          The job you are looking for does not exist.
        </p>
      </main>
    );
  }

  return (
    <main className="container mx-auto p-6">
      <h1 className="text-3xl font-bold">{job.title}</h1>
      <p className="text-gray-600 mt-1">{job.company}</p>

      <div className="flex gap-4 text-sm text-gray-500 mt-3">
        <span>{job.location}</span>
        <span>{job.type}</span>
        <span>{job.experience}</span>
      </div>

      <p className="mt-6 text-gray-700">{job.description}</p>

      <button className="mt-8 px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
        Apply Now
      </button>
    </main>
  );
}
