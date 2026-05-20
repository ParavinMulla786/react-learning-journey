import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddMovie() {
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [rating, setRating] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();

    const movies = JSON.parse(localStorage.getItem("movies")) || [];

    const newMovie = {
      id: Date.now(),
      title,
      description,
      rating: Number(rating),
    };

    const updatedMovies = [...movies, newMovie];

    localStorage.setItem("movies", JSON.stringify(updatedMovies));

    navigate("/");
  };

  return (
    <div className="container mt-4">
      <h2>Add Movie</h2>

      <form onSubmit={handleSubmit}>
        <input
          className="form-control mb-2"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <textarea
          className="form-control mb-2"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <input
          type="number"
          min="1"
          max="5"
          className="form-control mb-2"
          value={rating}
          onChange={(e) => setRating(e.target.value)}
        />

        <button className="btn btn-success">
          Save Movie
        </button>
      </form>
    </div>
  );
}

export default AddMovie;