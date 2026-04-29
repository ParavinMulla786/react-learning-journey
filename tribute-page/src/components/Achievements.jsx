function AchievementCard({ icon, title, desc }) {
  return (
    <div className="achievement-card">
      <h1>{icon}</h1>
      <h3>{title}</h3>
      <p>{desc}</p>
    </div>
  );
}

function Achievements() {
  return (
    <section className="achievements">
      <h2>ACHIEVEMENTS</h2>

      <div className="achievement-grid">
        <AchievementCard icon="🏏" title="80+ Centuries" desc="Across all formats" />
        <AchievementCard icon="⚡" title="Fastest 10K ODI Runs" desc="World record holder" />
        <AchievementCard icon="👑" title="ICC Cricketer of the Year" desc="2017 & 2018" />
        <AchievementCard icon="🔥" title="20,000+ Runs" desc="Avg above 50" />
        <AchievementCard icon="💪" title="Fitness Icon" desc="Changed team culture" />
      </div>
    </section>
  );
}

export default Achievements;