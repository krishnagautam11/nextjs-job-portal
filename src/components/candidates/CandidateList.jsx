import candidates from "@/data/candidates";
import CandidateCard from "./CandidateCard";

export default function CandidateList() {
  return (
    <div className="candidate-list">
      {candidates.map((item) => (
        <CandidateCard key={item.id} data={item} />
      ))}
    </div>
  );
}
