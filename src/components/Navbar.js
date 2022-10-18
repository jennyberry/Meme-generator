import React from "react";

export default function Navbar() {
  return (
    <nav>
      <div className="nav-group">
        <img
          src={require("../images/clown.png")}
          alt="icon"
          className="nav-icon"
        />
        <h2 className="nav--title">Meme Generator</h2>
      </div>
      <h3 className="nav--project">React Course - Project 3</h3>
    </nav>
  );
}
