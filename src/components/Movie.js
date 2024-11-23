import React from "react";

function Movie({ movie }) {
  return (
    <div style={{ width: "20%" }} className="p-3">
      <div className="card">
        <img src={movie.Poster} className="card-img-top" alt={movie.Title} />
        <div className="card-body" style={{ backgroundColor: "#e85428" }}>
          <p className="card-text text-white text-center">{movie.Title}</p>
        </div>
      </div>
    </div>
  );
}

export default Movie;
