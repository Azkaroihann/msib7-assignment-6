import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Search from "./components/Search";
import Movie from "./components/Movie";

const API_URL = " http://www.omdbapi.com/?i=tt3896198&apikey=b97dc42a";

function App() {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState("Batman");

  useEffect(() => {
    fetchMovies(query);
  }, [query]);

  const fetchMovies = async (searchQuery) => {
    const response = await fetch(`${API_URL}&s=${searchQuery}`);
    const data = await response.json();
    if (data.Search) {
      setMovies(data.Search);
    }
  };

  return (
    <div>
      <Header title="Movies List App" />
      <div className="container">
        <Search onSearch={setQuery} />
        <div className="row">
          {movies.map((movie) => (
            <Movie key={movie.imdbID} movie={movie} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
