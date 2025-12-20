export default function BrowseFilters() {
  return (
    <div className="filters-box">

      <h3>Browse Category</h3>
      <input type="text" placeholder="Search..." />

      <label><input type="checkbox" defaultChecked /> Website & Software</label>
      <label><input type="checkbox" /> Education & Training</label>
      <label><input type="checkbox" /> Graphics Design</label>
      <label><input type="checkbox" /> Accounting & Finance</label>

      <h3>Select Location</h3>
      <label><input type="checkbox" defaultChecked /> Sydney, Australia</label>
      <label><input type="checkbox" /> New York, USA</label>

      <h3>Job Type</h3>
      <label><input type="checkbox" defaultChecked /> Part Time</label>
      <label><input type="checkbox" /> Full Time</label>
      <label><input type="checkbox" /> Internship</label>
    </div>
  );
}


// export default function BrowseJobsFilters() {
//   return (
//     <>
//       {/* CATEGORY */}
//       <div className="sidebar-box bg-white p-4 mb-4">
//         <h3 className="heading-sidebar">Browse Category</h3>

//         <form className="search-form mb-3">
//           <input className="form-control" placeholder="Search..." />
//         </form>

//         <form className="browse-form">
//           <label><input type="checkbox" defaultChecked /> Website & Software</label><br />
//           <label><input type="checkbox" /> Education & Training</label><br />
//           <label><input type="checkbox" /> Graphics Design</label><br />
//           <label><input type="checkbox" /> Accounting & Finance</label><br />
//         </form>
//       </div>

//       {/* LOCATION */}
//       <div className="sidebar-box bg-white p-4 mb-4">
//         <h3 className="heading-sidebar">Select Location</h3>
//         <form className="browse-form">
//           <label><input type="checkbox" defaultChecked /> Sydney, Australia</label><br />
//           <label><input type="checkbox" /> New York, USA</label><br />
//           <label><input type="checkbox" /> Tokyo, Japan</label><br />
//         </form>
//       </div>

//       {/* JOB TYPE */}
//       <div className="sidebar-box bg-white p-4">
//         <h3 className="heading-sidebar">Job Type</h3>
//         <form className="browse-form">
//           <label><input type="checkbox" defaultChecked /> Part-time</label><br />
//           <label><input type="checkbox" /> Full-time</label><br />
//           <label><input type="checkbox" /> Internship</label><br />
//         </form>
//       </div>
//     </>
//   );
// }
