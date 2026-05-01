import mainCharacters from './Info.js'
import './Maincharacters.css'

function Maincharacters() {
  return (
    <section className="maincharacters-section">

      <h2 className="maincharacters-title">Main Characters</h2>

      <div className="characters-grid">

        {mainCharacters.map((char, i) => (
          <div className="character-wrapper" key={i}>

            <div className="character-card">

              {/* IMAGE */}
              <div className="character-img">
                <img src={char.img} alt={char.name} />
              </div>

              {/* DETAILS */}
              <div className="character-body">

                <h3 className="character-name">{char.name}</h3>
                <p className="character-role">{char.role}</p>

                <div className="character-traits">
                  {char.traits.map((t, idx) => (
                    <span key={idx} className="trait-badge">
                      {t}
                    </span>
                  ))}
                </div>

              </div>

            </div>

          </div>
        ))}

      </div>

    </section>
  )
}

export default Maincharacters