import './Header.css'

function Header() {
  const scrollToAbout = () => {
    const aboutSection = document.querySelector('.about-section');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="hero">
      <div className="hero-overlay"></div>
      
      <div className="hero-content">
        <h1>Doraemon – The Robot Cat from the Future</h1>
        
        <p>
          A friend, a helper, and a symbol of childhood memories
        </p>
        
        <button className="btn btn-primary" onClick={scrollToAbout}>
          Explore Journey
        </button>
      </div>
      
      {/* Optional scroll indicator */}
      <div className="scroll-indicator" onClick={scrollToAbout}>
        <span></span>
      </div>
    </header>
  )
}

export default Header