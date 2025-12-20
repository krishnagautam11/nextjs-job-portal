export default function CandidateCard({ data }) {
  return (
    <div className="candidate-card">
      <div
        className="candidate-img"
        style={{ backgroundImage: `url(${data.image})` }}
      />

      <div className="candidate-info">
        <span className="candidate-location">{data.location}</span>
        <h2>{data.name}</h2>
        <span className="candidate-role">{data.role}</span>

        <p>{data.description}</p>

        <span className="candidate-active">
          Last Activity {data.lastActive}
        </span>

        <button className="btn-primary">Shortlist</button>
      </div>
    </div>
  );
}
