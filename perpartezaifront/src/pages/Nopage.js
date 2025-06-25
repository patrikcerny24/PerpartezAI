import React from 'react';
import './Nopage.css';
import 'bootstrap/dist/css/bootstrap.min.css';
const Nopage = () => {
  return (
    <div className="container justify-content-center text-center bg-warning "> 
    <h1>Error 404 stránku se nepodařilo najít !</h1>
    <button><a href="/">Zpět na domovskou stránku</a></button>
    </div>
  );
}
export default Nopage;