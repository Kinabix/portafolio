import React from 'react';

function Header() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
        <div className="container">
          <a className="navbar-brand" href="#">Matías Linares</a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link" href="#about">Sobre mí</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#projects">Proyectos</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">Contacto</a>
              </li>
            </ul>
          </div>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link" href="#about">Sobre mí</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#projects">Proyectos</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">Contacto</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="bg-dark text-light py-2 text-center">
        <p className="mb-0">
          Soy Matías Santiago Linares Postigo, desarrollador Frontend junior especializado en React y diseño web moderno.
        </p>
      </div>
    </>
  );
}

export default Header;


