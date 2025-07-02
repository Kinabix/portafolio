import React from 'react';

function Footer() {
  return (
    <footer className="bg-dark text-light py-3 mt-5 text-center">
      <div>
        <small>
          © {new Date().getFullYear()} Matías Santiago Linares Postigo | Desarrollador Frontend
        </small>
      </div>
      <div className="mt-2 d-flex justify-content-center gap-3">
        <a href="mailto:matiassantiagolinarrspostigo@gmail.com" className="text-light fs-4" title="Email">
          <i className="fas fa-envelope"></i>
        </a>
        <a href="https://github.com/Kinabix" target="_blank" rel="noopener noreferrer" className="text-light fs-4" title="GitHub">
          <i className="fab fa-github"></i>
        </a>
        <a href="https://www.linkedin.com/in/santiago-matias-linares-postigo-a74842372/" target="_blank" rel="noopener noreferrer" className="text-light fs-4" title="LinkedIn">
          <i className="fab fa-linkedin"></i>
        </a>
      </div>
    </footer>
  );
}

export default Footer;
