import aboutImg from "../assets/about.png";

function About() {
  return (
    <section className="about">

      <div className="about-img">
        <img src={aboutImg} alt="Virat Kohli" />
      </div>

      <div className="about-content">
        <h4>ABOUT VIRAT KOHLI</h4>

        <h2>
          RUNS ARE TEMPORARY, <span>CLASS IS PERMANENT.</span>
        </h2>

        {/* Tribute Text */}
        <p className="about-main">
          Virat Kohli, you're not just a cricketer, you're an emotion for millions.
          Your passion, determination, and commitment inspire us to dream big and
          never give up. From chasing your dreams on the streets of Delhi to
          leading the Indian cricket team with pride, your journey is a testament
          to hard work and perseverance.
        </p>

        <p className="about-main">
          Every time you step onto the field, you carry the hopes and dreams of a
          billion hearts. Thank you for being the champion that we all look up to.
          You're not just a cricketer, you're our hero.
        </p>

        {/* Early Life */}
        <div className="early-life">
          <h3>Early Life</h3>
          <p>
            Born on November 5, 1988, in Delhi, India, Virat Kohli grew up in a
            middle-class family. His father, Prem Kohli, worked as a criminal
            lawyer, while his mother, Saroj Kohli, is a homemaker. From a young
            age, Kohli showed a keen interest in cricket, and his family
            supported his passion by enrolling him in coaching classes.
          </p>
        </div>

        <button>KNOW MORE</button>
      </div>

    </section>
  );
}

export default About;