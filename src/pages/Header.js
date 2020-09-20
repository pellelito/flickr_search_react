import React from "react";
import { Link } from "react-router-dom";
function Header() {
  return (
    <header style={headerStyle}>
      <h1>Flickr Search Engine</h1>
      <Link style={linkStyle} to="/">
        ____Home___
      </Link>
      <Link style={linkStyle} to="/gallery">
        Gallery___
      </Link>
      <Link style={linkStyle} to="/about">
        About___
      </Link>
    </header>
  );
}

const headerStyle = {
  backgroundImage: "linear-gradient(to right, #4880EC, #019CAD)",
  color: "#fff",
  textAlign: "center",
  padding: "10px",
};
const linkStyle = {
  color: "#fff",
  textDecoration: "none",
};
export default Header;
