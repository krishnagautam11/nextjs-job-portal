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


// export default function BrowseJobCard({ job }) {
//   return (
//     <div className="job-post-item p-4 d-block d-lg-flex align-items-center mb-4">

//       {/* LEFT */}
//       <div className="one-third mb-4 mb-md-0">
//         <div className="job-post-item-header align-items-center">
//           <span className="subadge">{job.type}</span>
//           <h2 className="mr-3 text-black">
//             <a href="#">{job.title}</a>
//           </h2>
//         </div>

//         <div className="job-post-item-body d-block d-md-flex">
//           <div className="mr-3">
//             <span className="icon-layers"></span> {job.company}
//           </div>
//           <div>
//             <span className="icon-my_location"></span> {job.location}
//           </div>
//         </div>
//       </div>

//       {/* RIGHT */}
//       <div className="one-forth ml-auto d-flex align-items-center mt-4 md-md-0">
//         <div>
//           <a
//             href="#"
//             className="icon text-center d-flex justify-content-center align-items-center mr-2"
//           >
//             <span className="icon-heart"></span>
//           </a>
//         </div>

//         <a href="#" className="btn btn-primary py-2">
//           Apply Job
//         </a>
//       </div>

//     </div>
//   );
// }
