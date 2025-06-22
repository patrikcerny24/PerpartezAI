import React, { useState } from 'react';
import './Menu.css';


const Menu = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="hamburger-menu">
      <button
        className={`hamburger-btn ${open ? 'open' : ''}`}
        onClick={() => setOpen(prev => !prev)}
        aria-label="Toggle menu"
        aria-expanded={open}
      >
        <span />
        <span />
        <span />
      </button>

      <div className={`menu ${open ? 'open' : ''}`}>
        <ul>
          <li><a href="./Home"rel="noopener noreferrer">Domů</a></li>
          <li><a href="./Aboutus"rel="noopener noreferrer">O nás</a></li>
          <li><a href="./Login"rel="noopener noreferrer">Přihlášení</a></li>
          <li><a href="./Register"rel="noopener noreferrer">Registrace</a></li>
  </ul>
      </div>
    </nav>
    
  );
};

export default Menu;