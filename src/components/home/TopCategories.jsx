"use client";

const categories = [
  { title: "Website & Software", count: 143 },
  { title: "Education & Training", count: 143, active: true },
  { title: "Graphic & UI/UX Design", count: 143 },
  { title: "Accounting & Finance", count: 143 },
  { title: "Restaurant & Food", count: 143 },
  { title: "Health & Hospital", count: 143 },
];

export default function TopCategories() {
  return (
    <section className="topCategories-section">
      <div className="custom-container">
        <div className="topCategories-grid">
          {categories.map((item, index) => (
            <div
              key={index}
              className={`topCategory-card ${item.active ? "active" : ""}`}
            >
              <h3>{item.title}</h3>
              <p>
                <span>{item.count}</span> Open position
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
