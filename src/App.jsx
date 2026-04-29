import './App.css'
<<<<<<< HEAD
import image from './assets/image.jpg'

function App() {
  return (


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
            <h3>B.tech</h3>
            <p>Nanasaheb Mahadik College Of Engineering Peth</p>
            <p>CGPA : 8.5</p>
            <p>2022-2026</p>
          </article>

          <article className="edu-card">
            <h3>12th </h3>
            <p>Arts , Commerce And Science Junior College , Gotkhindi</p>
            <p>Pecentage : 63</p>
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

        <p><strong>Frontend Development : HTML5
          CSS3
          JavaScript (ES6+)
          React JS</strong>
        </p>
        <p><strong>Tools & Technologies :</strong>
          Git & GitHub
          VS Code
          Chrome DevTools
        </p>
        <p><strong>Programming Languages :</strong> Java, Python , C</p>

      </section>

      <section className="projects-card">
        <h2>My Projects</h2>
        <div className="edu-list">
          <article className="project-card">
            <h3>Smart E-Waste Management System</h3>
            <p>Smart system for efficient collection, tracking, and recycling of electronic waste to reduce environmental impact.</p>
            <p><strong>Technologies Used :</strong></p>
            <ul>
              <li><strong>Frontend:</strong> React JS, HTML, CSS</li>
              <li><strong>Backend:</strong> Spring Boot</li>
              <li><strong>Database:</strong> MongoDB</li>
              <li><strong>APIs:</strong> Maps API</li>
            </ul>

          </article>

          <article className="project-card">
            <h3>Ai Mock Interview Platform</h3>
            <p>This is a Software project that provides an AI-driven mock interview experience for students and job seekers.</p>
            <p> <strong>Technologies Used :</strong>
              <ul>
                <li><strong>Frontend:</strong> Next.js, React</li>
                <li><strong>AI Integration:</strong> Gemini AI</li>
                <li><strong>Backend & ORM:</strong> Drizzle ORM</li>
                <li><strong>Authentication:</strong> Clerk</li>
              </ul>


            </p>

          </article>

          <article className="project-card">
            <h3>Smart Agriculture Platform</h3>
            <p></p>
          </article>
        </div>
      </section>
    </main>
  )
}

export default App



=======
import Header from './components/Header'
import Button from './components/Button'
import Profile from './components/Profile'

import profileImg from './assets/profileimg1.png'
import profileImg2 from './assets/profileimg2.png'
import image from './assets/image.png'
import './components/Button.css'

import './components/Profile.css'
import './components/Header.css'

function App() {
  return (
    <div className='container'>

      <div className='header'>
        <Header 
          title="Users Information" 
          subtitle="Manage and view all registered users"
        />
      </div>

      <div className='button'>
        <Button btn="Login"/>
        <Button btn="SignUp"/>
        <Button btn="See All Users"/>
        <Button btn="Contact Us"/>
        <Button btn="Logout"/>
      </div>

      <div className='profile-card'>
        <h2>Users</h2>

        <div className='profile-cardu'>
          <Profile 
            name="Paravin"
            email="paravinmulla2004@gmail.com"
            cNum="9890245341"
            img={profileImg}
          />
        </div>

        <div className='profile-cardu'>
          <Profile 
            name="ABC"
            email="abc123@gmail.com"
            cNum="1234567890"
            img={profileImg2}
          />
        </div>

        <div className='profile-cardu'>
          <Profile 
            name="XYZ"
            email="xyz098@gmail.com"
            cNum="0987654321"
            img={image}
          />
        </div>

      </div>

    </div>
  )
}

export default App
>>>>>>> 90cda7723de422631fae63e44420a4ca69b5e6bd
