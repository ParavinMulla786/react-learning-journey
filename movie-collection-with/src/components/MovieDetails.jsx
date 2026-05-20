import React from "react";
import { useParams, useNavigate } from "react-router-dom";

function MovieDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const movies = JSON.parse(localStorage.getItem("movies")) || [];
  const movie = movies.find((m) => m.id === parseInt(id));

  const renderStars = (rating) => {
    let stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span
          key={i}
          style={{ color: i <= rating ? "gold" : "lightgray" }}
        >
          ★
        </span>
      );
    }
    return stars;
  };

  if (!movie) return <h3>Movie not found</h3>;

  return (
    <div className="container mt-4">
      <h2>{movie.title}</h2>
      <p>{movie.description}</p>

      <h5>
        Rating: {renderStars(movie.rating)}
      </h5>

      <button
        className="btn btn-secondary mt-3"
        onClick={() => navigate("/")}
      >
        ⬅ Back
      </button>
    </div>
  );
}

export default MovieDetail;