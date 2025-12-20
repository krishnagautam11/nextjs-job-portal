"use client";

import {jobs} from "@/data/jobs";
import BrowseJobCard from "./BrowseJobCard";

export default function BrowseJobsList() {
  return (
    <div className="browse-jobs-list">
      {jobs.map((job) => (
        <BrowseJobCard key={job.id} job={job} />
      ))}
    </div>
  );
}


// "use client";

// import { useSelector } from "react-redux";
// import BrowseJobCard from "./BrowseJobCard";

// export default function BrowseJobsList() {
//   const jobs = useSelector((state) => state.jobs.jobs); 

//   if (!jobs || jobs.length === 0) {
//     return <p>No jobs found</p>;
//   }

//   return (
//     <div className="row">
//       {jobs.map((job) => (
//         <div key={job.id} className="col-md-12">
//           <BrowseJobCard job={job} />
//         </div>
//       ))}
//     </div>
//   );
// }
