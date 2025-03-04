import React from "react";
import { Link } from "react-router-dom";
import "../styles/Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <h1 className="header-title">Entrevista</h1>
        <nav>
          <ul className="nav-list">
            <li>
              <Link to="/" className="nav-link">
                Inicio
              </Link>
            </li>
            <li>
              <Link to="/Director" className="nav-link">
                Director
              </Link>
            </li>
            <li>
              <Link to="/Camionero" className="nav-link">
                Camionero
              </Link>
            </li>
            <li>
              <Link to="/Agente" className="nav-link">
                Agente
              </Link>
            </li>
            <li>
              <Link to="/Presidente" className="nav-link">
                Presidente
              </Link>
            </li>
            <li>
              <Link to="/Contacto" className="nav-link">
                Contacto
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
