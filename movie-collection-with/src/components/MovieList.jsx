import React, { useEffect, useState } from "react";
import initialMovies from "../data";
import { useNavigate, Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as solidStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as regularStar } from "@fortawesome/free-regular-svg-icons";

function MovieList() {
  const navigate = useNavigate();
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("movies"));

    if (stored) {
      setMovies(stored);
    } else {
      setMovies(initialMovies);
      localStorage.setItem("movies", JSON.stringify(initialMovies));
    }
  }, []);

  const renderStars = (rating) => {
    const totalStars = 5;
    let stars = [];

    for (let i = 1; i <= totalStars; i++) {
      stars.push(
        <FontAwesomeIcon
          key={i}
          icon={i <= rating ? solidStar : regularStar}
          style={{ color: i <= rating ? "gold" : "lightgray" }}
        />
      );
    }

    return stars;
  };

  return (
    <div className="container mt-4">
      <h1>Movie Collection With Rating</h1>

      <button
        className="btn btn-primary mb-3"
        onClick={() => navigate("/add")}
      >
        + Add Movie
      </button>

      <ul className="list-group">
        {movies.map((movie) => (
          <li
            key={movie.id}
            className="list-group-item d-flex justify-content-between"
          >
            <Link to={`/movie/${movie.id}`}>
              {movie.title}
            </Link>

            <span>{renderStars(movie.rating)}</span>


            <button
        className="btn btn-primary mb-3"
        onClick={() => navigate("/update")}
      >
        Update
      </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MovieList;