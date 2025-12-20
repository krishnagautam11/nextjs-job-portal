export default function CandidatesHeader() {
  return (
    <section className="relative h-[360px] bg-[url('/images/bg_1.jpg')] bg-cover bg-center sectionHero">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-500 opacity-90" />

      <div className="relative z-10 h-full flex flex-col items-center justify-center text-white text-center">
        <p className="text-xs tracking-widest uppercase mb-2">
          Home &gt; Job Post
        </p>
        <h1 className="text-4xl font-semibold">Hire Your Best Candidates</h1>
      </div>
    </section>

  );
}
