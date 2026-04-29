import img1 from "../assets/img1.png";
import img2 from "../assets/img2.png";
import img9 from "../assets/img9.png";
import img4 from "../assets/img4.png";

function HighlightCard({ img, title, desc }) {
  return (
    <div className="highlight-card">
      <img src={img} alt={title} />
      <div className="highlight-content">
        <h3>{title}</h3>
        <p>{desc}</p>
      </div>
    </div>
  );
}

function Highlights() {
  return (
    <section className="highlights">
      <h2>MOMENTS THAT MADE HISTORY</h2>

      <div className="grid">
        <HighlightCard
          img={img1}
          title="MATCH WINNER"
          desc="Countless times for India"
        />
        <HighlightCard
          img={img2}
          title="THE CHASER"
          desc="Master of run chases"
        />
        <HighlightCard
          img={img9}
          title="RCB CAPTAIN"
          desc="Led with passion"
        />
        <HighlightCard
          img={img4}
          title="ICC TEST NO.1"
          desc="Reached the summit"
        />
      </div>
    </section>
  );
}

export default Highlights;