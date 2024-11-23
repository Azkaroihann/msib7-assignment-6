import React, { useState } from "react";

function Search({ onSearch }) {
  const [input, setInput] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(input);
    setInput(""); // Reset input field
  };

  return (
    <form className="d-flex my-3" onSubmit={handleSearch}>
      <div className="input-group">
        <input
          type="text"
          className="form-control"
          placeholder="Search movies..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button className="btn btn-dark" type="submit">
          Search
        </button>
      </div>
    </form>
  );
}

export default Search;
