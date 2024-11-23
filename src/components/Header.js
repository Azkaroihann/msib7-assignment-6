import React from "react";

function Header({ title }) {
  return (
    <nav className="navbar" style={{ backgroundColor: "#e85428" }}>
      <div className="container">
        <a className="navbar-brand text-white fw-bold">{title}</a>
      </div>
    </nav>
  );
}

export default Header;
