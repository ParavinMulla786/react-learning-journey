



// In your GadgetSection.js file
import './GadgetSection.css';
import { gadgets } from './Info';  // Named import for gadgets

function GadgetSection() {
  return (
    <section className="gadget-section">
      <h2 className="gadget-title">
        Famous Gadgets ⭐
      </h2>

      {gadgets.length === 0 ? (
        <p className="gadget-empty">No gadgets available</p>
      ) : (
        <div className="gadget-scroll">
          {gadgets.map((gadget, index) => (
            <div key={index} className="gadget-card">
              {/* IMAGE */}
              <div className="gadget-img">
                <img
                  src={gadget.img}
                  alt={gadget.name || "Doraemon gadget"}
                  loading="lazy"
                />
              </div>

              {/* NAME */}
              <h5 className="gadget-name">
                {gadget.name}
              </h5>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

export default GadgetSection;