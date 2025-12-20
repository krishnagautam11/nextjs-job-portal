export default function TestimonialCard({ data }) {
  return (
    <div className="testimonial-card">
      <p className="testimonial-text">
        {data.message}
      </p>

      <div className="testimonial-user">
        <img src={data.image} alt={data.name} />
        <div>
          <h4>{data.name}</h4>
          <span>{data.role}</span>
        </div>
      </div>
    </div>
  );
}
