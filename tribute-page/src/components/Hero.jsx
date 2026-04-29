import heroImg from "../assets/hero.png";

function Hero() {
  return (
    <section className="hero">
      
      <div className="hero-text">
        <h4>CHAMPION. LEADER. LEGEND.</h4>

        <h1>
          VIRAT <span>KOHLI</span>
        </h1>

        <p>
          A journey of passion, commitment and unmatched dedication to the game.
        </p>

        <div className="hero-buttons">
          <button className="primary-btn">EXPLORE JOURNEY</button>
          <button className="secondary-btn">WATCH HIGHLIGHTS</button>
        </div>
      </div>

      <div className="hero-img">
        <img src={heroImg} alt="Virat Kohli" />
      </div>

    </section>
  );
}

export default Hero;