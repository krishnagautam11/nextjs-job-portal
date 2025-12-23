import BrowseJobsHeader from "../../components/browse-jobs/BrowseJobsHeader";
import BrowseJobsList from "../../components/browse-jobs/BrowseJobsList";
import BrowseFilters from "../../components/browse-jobs/BrowseFilters";
import Pagination from "../../components/common/Pagination";

// import BrowseJobsHeader from "@/components/browse-jobs/BrowseJobsHeader";
// import BrowseJobsList from "@/components/browse-jobs/BrowseJobsList";
// import BrowseFilters from "@/components/browse-jobs/BrowseFilters";
// import Pagination from "@/components/common/Pagination";

// import Newsletter from "@/components/common/Newsletter";




export default function BrowseJobsPage() {
  return (
    <>
      <BrowseJobsHeader />

      <section className="browse-section">
        <div className="custom-container">
          <div className="browse-grid">

            {/* LEFT – JOB LIST */}
            <div className="browse-left">
              <BrowseJobsList />
              <Pagination />
            </div>

            {/* RIGHT – FILTERS */}
            <aside className="browse-right">
              <BrowseFilters />
            </aside>

          </div>
        </div>
      </section>

    
    </>
  );
}


// import BrowseJobsHero from "@/components/browse-jobs/BrowseJobsHero";
// import BrowseJobsLayout from "@/components/browse-jobs/BrowseJobsLayout";

// export default function BrowseJobsPage() {
//   return (
//     <>
//       <BrowseJobsHero />
//       <BrowseJobsLayout />
//     </>
//   );
// }
