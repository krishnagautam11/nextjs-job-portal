import BrowseJobsList from "./BrowseJobsList";
import BrowseJobsFilters from "./BrowseFilters";
import BrowseJobsPagination from "./Pagination";

export default function BrowseJobsLayout() {
  return (
    <section className="ftco-section bg-light">
      <div className="container">
        <div className="row">

          {/* LEFT: JOB LIST */}
          <div className="col-lg-9 pr-lg-4">
            <BrowseJobsList />
            <BrowseJobsPagination />
          </div>

          {/* RIGHT: FILTERS */}
          <div className="col-lg-3 sidebar">
            <BrowseJobsFilters />
          </div>

        </div>
      </div>
    </section>
  );
}
