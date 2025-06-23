import "bootstrap/dist/css/bootstrap.min.css";
import "./Menu.css";
 import React, { useState } from 'react';
import { List, X } from 'react-bootstrap-icons';

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(prev => !prev);
  };

  return (
    <div className="container-fluid mt-3 mr-3 div-menu">
  <button
    className="btn btn-primary d-flex align-items-center justify-content-center"
    type="button"
    onClick={toggleMenu}
    aria-expanded={isOpen}
    aria-controls="menuCollapse"
    aria-label={isOpen ? 'Close menu' : 'Open menu'}
  >
    {isOpen ? <X size={24} /> : <List size={24} />}
  </button>

  <div
    className={`collapse ${isOpen ? 'show' : ''}`}
    id="menuCollapse"
  >
    <div className="card card-body mt-3">
      <ul className="list-unstyled mb-0">
        <li><a href="#item1" className="d-block py-2">Item 1</a></li>
        <li><a href="#item2" className="d-block py-2">Item 2</a></li>
        <li><a href="#item3" className="d-block py-2">Item 3</a></li>
      </ul>
    </div>
  </div>
</div>
  );
};

export default Menu;