// Aboutus.jsx
import doraemonTribute from './Data';
import './About.css';



// Aboutus.jsx


function Aboutus() {
  return (
    <section className="about-section">
      <div className="about-container">

        {/* TITLE */}
        <div className="about-title-wrapper">
          <h2 className="about-title">
            Who is Doraemon?
          </h2>
        </div>

        {/* MAIN CONTENT */}
        <div className="about-main">

          {/* LEFT SIDE */}
          <div className="about-left">
            <div className="image-wrapper">

              <div className="image-wrapper">

  <img
    src={doraemonTribute.image}
    className="about-img"
    alt="Doraemon"
  />

</div>

{/* QUOTE BELOW IMAGE */}
<div className="image-quote">
  “I am Doraemon, the robot cat from the future!”
</div>

            </div>
          </div>

          {/* RIGHT SIDE */}
         {/* RIGHT SIDE */}
<div className="about-right">
  <div className="info-card">

    {/* HEADER */}
    <div className="about-right-header">
      <h3>About Doraemon</h3>
      <p className="sub-text">
        A beloved robotic cat from the future who changed childhoods forever.
      </p>
    </div>

    {/* INFO GRID */}
    <div className="info-grid">
      <div className="info-item">
        <span className="info-label">Name</span>
        <span className="info-value">{doraemonTribute.name}</span>
      </div>

      <div className="info-item">
        <span className="info-label">Creator</span>
        <span className="info-value">{doraemonTribute.creator}</span>
      </div>

      <div className="info-item">
        <span className="info-label">First Appearance</span>
        <span className="info-value">{doraemonTribute.firstAppearance}</span>
      </div>

      <div className="info-item">
        <span className="info-label">Origin</span>
        <span className="info-value">{doraemonTribute.origin}</span>
      </div>
    </div>

    {/* DESCRIPTION */}
    <div className="description-box">
      <h4>Story</h4>
      <p className="description-text">
        {doraemonTribute.description}
      </p>
    </div>

    


    {/* EXTRA ABOUT SECTION */}
    <div className="extra-about">
      <h4>Why People Love Doraemon ❤️</h4>
      <ul>
        <li>Teaches friendship and kindness</li>
        <li>Fun futuristic gadgets</li>
        <li>Relatable stories for all ages</li>
        <li>Iconic anime character worldwide</li>
      </ul>
    </div>

  </div>
</div>

        </div>

      </div>
    </section>
  );
}

export default Aboutus;