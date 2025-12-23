export const metadata = {
  title: "Post a Job",
  description: "Post new job openings and reach potential candidates.",
};


export default function PostJobPage() {
    return (
        <>
            {/* HERO */}
            <section className="relative h-[360px] bg-[url('/images/bg_1.jpg')] bg-cover bg-center sectionHero">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-500 opacity-90" />

                <div className="relative z-10 h-full flex flex-col items-center justify-center text-white text-center">
                    <p className="text-xs tracking-widest uppercase mb-2">
                        Home &gt; Job Post
                    </p>
                    <h1 className="text-4xl font-semibold">Post A Job</h1>
                </div>
            </section>

            {/* CONTENT */}
            <section className="post-section">
                <div className="custom-container">
                    <div className="post-grid">

                        {/* FORM */}
                        <div>
                            <form className="post-form">

                                {/* PRICING */}
                                <div className="pricing-group">
                                    <label>
                                        <input type="checkbox" />
                                        <span>
                                            <strong className="text-green-600">$500</strong> For 30 days
                                        </span>
                                    </label>

                                    <label>
                                        <input type="checkbox" />
                                        <span>
                                            <strong className="text-green-600">$300</strong> / Monthly Recurring
                                        </span>
                                    </label>
                                </div>

                                {/* JOB TITLE */}
                                <label>Job Title</label>
                                <input
                                    type="text"
                                    placeholder="eg. Professional UI/UX Designer"
                                />

                                {/* COMPANY */}
                                <label>Company</label>
                                <input
                                    type="text"
                                    placeholder="eg. Facebook, Inc."
                                />

                                {/* JOB TYPE */}
                                <h3 className="section-heading">Job Type</h3>
                                <div className="job-type-group">
                                    <label>
                                        <input type="radio" name="jobType" />
                                        Full Time
                                    </label>
                                    <label>
                                        <input type="radio" name="jobType" />
                                        Part Time
                                    </label>
                                    <label>
                                        <input type="radio" name="jobType" />
                                        Freelance
                                    </label>
                                    <label>
                                        <input type="radio" name="jobType" />
                                        Internship
                                    </label>
                                    <label>
                                        <input type="radio" name="jobType" />
                                        Temporary
                                    </label>
                                </div>

                                {/* LOCATION */}
                                <h3 className="section-heading">Location</h3>
                                <input
                                    type="text"
                                    placeholder="Western City, UK"
                                />

                                {/* DESCRIPTION */}
                                <h3 className="section-heading">Job Description</h3>
                                <textarea />

                                {/* SUBMIT */}
                                <button type="submit" className="btn-primary">
                                    Post
                                </button>
                            </form>
                        </div>

                        {/* SIDEBAR */}
                        <div>
                            <div className="post-sidebar-card">
                                <h3>Contact Info</h3>

                                <strong>Address</strong>
                                <p>203 Fake St. Mountain View, San Francisco, California, USA</p>

                                <strong>Phone</strong>
                                <p className="link">+1 232 3235 324</p>

                                <strong>Email Address</strong>
                                <p className="link">info@yoursite.com</p>
                            </div>


                        </div>

                    </div>
                </div>
            </section>
        </>
    );
}


// export default function PostJobPage() {
//   return (
//     <>
//       {/* HERO */}
//       <section
//         className="page-hero"
//         style={{
//           backgroundImage:
//             "linear-gradient(rgba(32,125,255,0.9), rgba(161,106,232,0.9)), url('/images/bg_1.jpg')",
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//         }}
//       >
//         <div className="page-hero-content">
//           <p className="text-xs tracking-widest uppercase mb-2">
//             Home &gt; Job Post
//           </p>
//           <h1>Post A Job</h1>
//         </div>
//       </section>

//       {/* CONTENT */}
//       <section className="post-section">
//         <div className="custom-container">
//           <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

//             {/* FORM */}
//             <div className="lg:col-span-8">
//               <form className="post-form">

//                 {/* PRICING */}
//                 <div className="space-y-3 mb-8">
//                   <label className="flex items-center gap-2 text-sm">
//                     <input type="checkbox" />
//                     <span>
//                       <span className="text-green-600 font-semibold">$500</span>{" "}
//                       For 30 days
//                     </span>
//                   </label>

//                   <label className="flex items-center gap-2 text-sm">
//                     <input type="checkbox" />
//                     <span>
//                       <span className="text-green-600 font-semibold">$300</span>{" "}
//                       / Monthly Recurring
//                     </span>
//                   </label>
//                 </div>

//                 {/* JOB TITLE */}
//                 <div className="mb-6">
//                   <label>Job Title</label>
//                   <input
//                     type="text"
//                     placeholder="eg. Professional UI/UX Designer"
//                     className="form-input"
//                   />
//                 </div>

//                 {/* COMPANY */}
//                 <div className="mb-8">
//                   <label>Company</label>
//                   <input
//                     type="text"
//                     placeholder="eg. Facebook, Inc."
//                     className="form-input"
//                   />
//                 </div>

//                 {/* JOB TYPE */}
//                 <div className="mb-8">
//                   <h3 className="font-semibold mb-3">Job Type</h3>

//                   {/* IMPORTANT FIX */}
//                   <div className="job-type-group">
//                     {[
//                       "Full Time",
//                       "Part Time",
//                       "Freelance",
//                       "Internship",
//                       "Temporary",
//                     ].map((type) => (
//                       <label key={type}>
//                         <input type="radio" name="jobType" />
//                         {type}
//                       </label>
//                     ))}
//                   </div>
//                 </div>

//                 {/* LOCATION */}
//                 <div className="mb-8">
//                   <h3 className="font-semibold mb-2">Location</h3>
//                   <input
//                     type="text"
//                     placeholder="Western City, UK"
//                     className="form-input"
//                   />
//                 </div>

//                 {/* DESCRIPTION */}
//                 <div className="mb-8">
//                   <h3 className="font-semibold mb-2">Job Description</h3>
//                   <textarea className="form-textarea" />
//                 </div>

//                 {/* SUBMIT */}
//                 <button type="submit" className="btn-primary px-8 py-2">
//                   Post
//                 </button>
//               </form>
//             </div>

//             {/* SIDEBAR */}
//             <div className="lg:col-span-4 space-y-6">

//               <div className="post-sidebar-card">
//                 <h3>Contact Info</h3>

//                 <p className="font-semibold">Address</p>
//                 <p className="text-sm text-gray-600 mb-4">
//                   203 Fake St. Mountain View, San Francisco, California, USA
//                 </p>

//                 <p className="font-semibold">Phone</p>
//                 <p className="text-sm text-blue-600 mb-4">
//                   +1 232 3235 324
//                 </p>

//                 <p className="font-semibold">Email Address</p>
//                 <p className="text-sm text-blue-600">
//                   info@yoursite.com
//                 </p>
//               </div>

//               <div className="post-sidebar-card">
//                 <h3>More Info</h3>
//                 <p className="text-sm text-gray-600 mb-4">
//                   Lorem ipsum dolor sit amet, consectetur adipisicing elit.
//                   Ipsa ad iure porro mollitia architecto hic consequuntur.
//                 </p>
//                 <button className="btn-primary px-6 py-2 text-sm">
//                   Learn More
//                 </button>
//               </div>

//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }


// export default function PostJobPage() {
//   return (
//     <>
//       {/* HERO */}
//       <section className="page-hero">
//         <div className="page-hero-overlay" />
//         <div className="page-hero-content">
//           <p className="text-xs tracking-widest uppercase mb-2">
//             Home &gt; Job Post
//           </p>
//           <h1>Post A Job</h1>
//         </div>
//       </section>

//       {/* CONTENT */}
//       <section className="bg-gray-50 py-20">
//         <div className="custom-container">
//           <div className="grid lg:grid-cols-12 gap-8">

//             {/* FORM */}
//             <div className="lg:col-span-8">
//               <form className="bg-white p-8 rounded-md shadow-sm post-form">

//                 {/* PRICING */}
//                 <div className="space-y-3 mb-8">
//                   <label className="flex items-center gap-2 text-sm">
//                     <input type="checkbox" />
//                     <span>
//                       <span className="text-green-600 font-semibold">$500</span>{" "}
//                       For 30 days
//                     </span>
//                   </label>

//                   <label className="flex items-center gap-2 text-sm">
//                     <input type="checkbox" />
//                     <span>
//                       <span className="text-green-600 font-semibold">$300</span>{" "}
//                       / Monthly Recurring
//                     </span>
//                   </label>
//                 </div>

//                 {/* JOB TITLE */}
//                 <div className="mb-6">
//                   <label className="block font-semibold mb-2">Job Title</label>
//                   <input
//                     type="text"
//                     placeholder="eg. Professional UI/UX Designer"
//                     className="form-input"
//                   />
//                 </div>

//                 {/* COMPANY */}
//                 <div className="mb-8">
//                   <label className="block font-semibold mb-2">Company</label>
//                   <input
//                     type="text"
//                     placeholder="eg. Facebook, Inc."
//                     className="form-input"
//                   />
//                 </div>

//                 {/* JOB TYPE */}
//                 <div className="mb-8">
//                   <h3 className="font-semibold mb-3">Job Type</h3>
//                   <div className="space-y-2 text-sm">
//                     {[
//                       "Full Time",
//                       "Part Time",
//                       "Freelance",
//                       "Internship",
//                       "Temporary",
//                     ].map((type) => (
//                       <label key={type} className="flex items-center gap-2">
//                         <input type="radio" name="jobType" />
//                         {type}
//                       </label>
//                     ))}
//                   </div>
//                 </div>

//                 {/* LOCATION */}
//                 <div className="mb-8">
//                   <h3 className="font-semibold mb-2">Location</h3>
//                   <input
//                     type="text"
//                     placeholder="Western City, UK"
//                     className="form-input"
//                   />
//                 </div>

//                 {/* DESCRIPTION */}
//                 <div className="mb-8">
//                   <h3 className="font-semibold mb-2">Job Description</h3>
//                   <textarea
//                     rows="5"
//                     className="form-textarea"
//                   />
//                 </div>

//                 {/* SUBMIT */}
//                 <button className="btn-primary px-8 py-2">
//                   Post
//                 </button>
//               </form>
//             </div>

//             {/* SIDEBAR */}
//             <div className="lg:col-span-4 space-y-6">

//               <div className="bg-white p-6 rounded-md shadow-sm">
//                 <h3 className="font-semibold mb-4">Contact Info</h3>

//                 <p className="font-semibold">Address</p>
//                 <p className="text-sm text-gray-600 mb-4">
//                   203 Fake St. Mountain View, San Francisco, California, USA
//                 </p>

//                 <p className="font-semibold">Phone</p>
//                 <p className="text-sm text-blue-600 mb-4">
//                   +1 232 3235 324
//                 </p>

//                 <p className="font-semibold">Email Address</p>
//                 <p className="text-sm text-blue-600">
//                   info@yoursite.com
//                 </p>
//               </div>

//               <div className="bg-white p-6 rounded-md shadow-sm">
//                 <h3 className="font-semibold mb-3">More Info</h3>
//                 <p className="text-sm text-gray-600 mb-4">
//                   Lorem ipsum dolor sit amet, consectetur adipisicing elit.
//                   Ipsa ad iure porro mollitia architecto hic consequuntur.
//                 </p>
//                 <button className="btn-primary px-6 py-2 text-sm">
//                   Learn More
//                 </button>
//               </div>

//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }
