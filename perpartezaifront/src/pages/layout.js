import React, { useState } from "react";
import "./Layout.css"; // We'll add some styles here

function App() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <nav className="navbar">
        <div className="logo">MyApp</div>
        <button className="hamburger" onClick={() => setOpen(!open)}>
          {/* Hamburger icon as three bars */}
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </button>
        <ul className={open ? "nav-menu open" : "nav-menu"}>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </nav>
    </div>
  );
}

export default App;