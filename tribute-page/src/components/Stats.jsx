function StatCard({ number, title }) {
  return (
    <div className="stat-card">
      <h2>{number}</h2>
      <p>{title}</p>
    </div>
  );
}

function Stats() {
  return (
    <section className="stats" id="stats">
      <h2 className="stats-heading">CAREER STATS</h2>

      <div className="stats-container">
        <StatCard number="80+" title="International Centuries" />
        <StatCard number="26K+" title="International Runs" />
        <StatCard number="70+" title="Man of the Match" />
        <StatCard number="3" title="ICC Awards" />
        <StatCard number="1B+" title="Fans Worldwide" />
      </div>
    </section>
  );
}

export default Stats;