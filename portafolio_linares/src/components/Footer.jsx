import React from 'react';

function Footer() {
  return (
    <footer className="bg-dark text-light py-3 mt-5 text-center">
      <div>
        <small>
          © {new Date().getFullYear()} Matías Santiago Linares Postigo | Desarrollador Frontend
        </small>
      </div>
      <div className="mt-2">
        <a href="mailto:matiassantiagolinarrspostigo@gmail.com" className="text-light me-3">Email</a>
        <a href="https://github.com/Kinabix" target="_blank" rel="noopener noreferrer" className="text-light me-3">GitHub</a>
        <a href="https://www.linkedin.com/in/santiago-matias-linares-postigo-a74842372/" target="_blank" rel="noopener noreferrer" className="text-light">LinkedIn</a>
      </div>
    </footer>
  );
}

export default Footer;
