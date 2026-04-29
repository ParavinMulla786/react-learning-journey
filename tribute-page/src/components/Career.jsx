function CareerCard({ year, title, desc }) {
  return (
    <div className="career-card">
      <h3>{year}</h3>
      <h4>{title}</h4>
      <p>{desc}</p>
    </div>
  );
}

function Career() {
  return (
    <section className="career">
      <h2>CAREER JOURNEY</h2>

      <div className="career-container">
        <CareerCard
          year="2006"
          title="Domestic Debut"
          desc="Made first-class debut for Delhi."
        />

        <CareerCard
          year="2008"
          title="U-19 World Cup"
          desc="Led India to victory as captain."
        />

        <CareerCard
          year="2008"
          title="International Debut"
          desc="Started career for India."
        />

        <CareerCard
          year="2013"
          title="ODI Vice-Captain"
          desc="Became a key leader in the team."
        />

        <CareerCard
          year="2017"
          title="Captain of India"
          desc="Led team in all formats."
        />

        <CareerCard
          year="2023"
          title="World Cup Hero"
          desc="Outstanding ICC performances."
        />
      </div>
    </section>
  );
}

export default Career;