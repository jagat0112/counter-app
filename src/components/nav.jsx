import React from "react";

const Navbar = ({ counters }) => {
  return (
    <nav className="navbar navbar-light bg-light">
      <span className="navbar-brand mb-0 h1">
        Navbar <span className="badge-dark">{counters}</span>
      </span>
    </nav>
  );
};

export default Navbar;
