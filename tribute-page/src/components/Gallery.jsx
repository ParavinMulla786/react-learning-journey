import img1 from "../assets/img1.png";
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.png";
import img4 from "../assets/img4.png";
import img5 from "../assets/img5.png";
import img6 from "../assets/img6.png";

function GalleryItem({ img }) {
  return (
    <div className="gallery-item">
      <img src={img} alt="Virat Kohli" />
    </div>
  );
}

function Gallery() {
  return (
    <section className="gallery">
      <h2>GALLERY</h2>

      <div className="gallery-grid">
        <GalleryItem img={img1} />
        <GalleryItem img={img2} />
        <GalleryItem img={img3} />
        <GalleryItem img={img4} />
        <GalleryItem img={img5} />
        <GalleryItem img={img6} />
      </div>
    </section>
  );
}

export default Gallery;