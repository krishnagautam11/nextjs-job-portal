export default function CandidateFilters() {
  return (
    <aside className="sidebar">
      <div className="sidebar-box">
        <h3>Browse Category</h3>
        <input placeholder="Search..." />
        <label><input type="checkbox" defaultChecked /> Website & Software</label>
        <label><input type="checkbox" /> Education & Training</label>
        <label><input type="checkbox" /> Graphics Design</label>
      </div>

      <div className="sidebar-box">
        <h3>Select Location</h3>
        <input placeholder="Search..." />
        <label><input type="checkbox" defaultChecked /> Sydney, Australia</label>
        <label><input type="checkbox" /> New York, USA</label>
      </div>
    </aside>
  );
}
