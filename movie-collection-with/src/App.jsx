import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import MovieList from "./components/MovieList";
import MovieDetails from "./components/MovieDetails";
import AddMovie from "./components/AddMovie";

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MovieList />} />

        <Route path="/movie/:id" element={<MovieDetails />} />

        <Route path="/add" element={<AddMovie />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;