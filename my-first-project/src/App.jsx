import './App.css'
import image from './assets/image.jpg'
import CoinCollector from "./CoinCollector/CoinCollector";

function App() {
  return (

<div>
      <CoinCollector />
  


    <main className="app-container">
      <div>
        <h1 id="title">My First React Project</h1>
      </div>

      <section className="profile-card">
        <img src={image} alt="Paravin Mulla" className="profile-image" />

        <div className="profile-details">
          <h2>Hello, I'm Paravin Mulla</h2>
          <p><strong>Email - </strong>paravinmulla2004@gmail.com</p>
          <p><strong>Mob.No. - </strong> +91 9890245341</p>
          <p><strong>Address - </strong>A/P : Bavachi , Tal : Walawa , Dist : Sangli</p>
        </div>
      </section>

      <section className="about-card">
        <h2>About Me</h2>
        <p>
          I am a React developer who loves building modern and responsive websites.
          I enjoy learning new technologies and improving my skills every day.
        </p>
      </section>

      <section className="edu-card">
        <h2>Educational Details</h2>

        <div className="edu-list">
          <article className="edu-card">
            <h3>B.Tech</h3>
            <p>Nanasaheb Mahadik College Of Engineering Peth</p>
            <p>CGPA : 8.5</p>
            <p>2022-2026</p>
          </article>

          <article className="edu-card">
            <h3>12th</h3>
            <p>Arts, Commerce And Science Junior College, Gotkhindi</p>
            <p>Percentage : 63</p>
          </article>

          <article className="edu-card">
            <h3>10th</h3>
            <p>Shivaji Highschool Bavachi</p>
            <p>Percentage : 91</p>
          </article>
        </div>
      </section>

      <section className="about-card">
        <h2>Skills</h2>

        <p>
          <strong>Frontend Development :</strong> HTML5, CSS3, JavaScript (ES6+), React JS
        </p>

        <p>
          <strong>Tools & Technologies :</strong> Git & GitHub, VS Code, Chrome DevTools
        </p>

        <p>
          <strong>Programming Languages :</strong> Java, Python, C
        </p>
      </section>

      <section className="projects-card">
        <h2>My Projects</h2>

        <div className="edu-list">
          <article className="project-card">
            <h3>Smart E-Waste Management System</h3>

            <p>
              Smart system for efficient collection, tracking, and recycling of
              electronic waste to reduce environmental impact.
            </p>

            <p><strong>Technologies Used :</strong></p>

            <ul>
              <li><strong>Frontend:</strong> React JS, HTML, CSS</li>
              <li><strong>Backend:</strong> Spring Boot</li>
              <li><strong>Database:</strong> MongoDB</li>
              <li><strong>APIs:</strong> Maps API</li>
            </ul>
          </article>

          <article className="project-card">
            <h3>AI Mock Interview Platform</h3>

            <p>
              This is a software project that provides an AI-driven mock interview
              experience for students and job seekers.
            </p>

            <p><strong>Technologies Used :</strong></p>

            <ul>
              <li><strong>Frontend:</strong> Next.js, React</li>
              <li><strong>AI Integration:</strong> Gemini AI</li>
              <li><strong>Backend & ORM:</strong> Drizzle ORM</li>
              <li><strong>Authentication:</strong> Clerk</li>
            </ul>
          </article>

          <article className="project-card">
            <h3>Smart Agriculture Platform</h3>
            <p>Platform for smart farming and crop monitoring.</p>
          </article>
        </div>
      </section>
    </main>

      </div>
  )
}

export default App