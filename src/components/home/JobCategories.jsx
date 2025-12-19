"use client";

const categories = [
  ["Web Development", 354, "Graphic Designer", 143, "Multimedia", 100, "Advertising", 90],
  ["Education & Training", 100, "English", 200, "Social Media", 300, "Writing", 150],
  ["PHP Programming", 400, "Project Management", 100, "Finance Management", 222, "Office & Admin", 123],
  ["Web Designer", 324, "Customer Service", 564, "Marketing & Sales", 234, "Software Development", 425],
];

export default function JobCategories() {
  return (
    <section className="jobCategories-section">
      <div className="custom-container">

        {/* Heading */}
        <div className="jobCategories-heading">
          <span>JOB CATEGORIES</span>
          <h2>Top Categories</h2>
        </div>

        {/* Grid */}
        <div className="jobCategories-grid">
          {categories.map((column, i) => (
            <ul key={i} className="jobCategory-column">
              {column.reduce((acc, _, idx, arr) => {
                if (idx % 2 === 0) {
                  acc.push(
                    <li key={idx} className="jobCategory-item">
                      <a href="#">
                        <div>
                          <h4>{arr[idx]}</h4>
                          <p>
                            <span>{arr[idx + 1]}</span> Open position
                          </p>
                        </div>
                        <span className="arrow">›</span>
                      </a>
                    </li>
                  );
                }
                return acc;
              }, [])}
            </ul>
          ))}
        </div>

      </div>
    </section>
  );
}
