import CandidatesHeader from "@/components/candidates/CandidatesHeader";
import CandidateList from "@/components/candidates/CandidateList";
import CandidateFilters from "@/components/candidates/CandidateFilters";
import CandidatesPagination from "@/components/common/Pagination";



export default function CandidatesPage() {
  return (
    <>
      <CandidatesHeader />

      <section className="candidates-section">
        <div className="custom-container candidates-grid">
          {/* LEFT */}
          <CandidateList />

          {/* RIGHT */}
          <CandidateFilters />
        </div>

        <CandidatesPagination />
      </section>

      {/* <Newsletter /> */}
      
    </>
  );
}
