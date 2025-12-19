import companies from "@/data/topRecruitments";

export default function TopRecruitments() {
  return (
    <aside className="featured-sidebar">
      <h3 className="sidebar-title">Top Recruitments</h3>

      {companies.map((company) => (
        <div key={company.id} className="company-card">
          <img src={company.logo} alt={company.name} />
          <h4>{company.name}</h4>
          <p>
            <span>{company.openings}</span> Open position
          </p>
        </div>
      ))}
    </aside>
  );
}
