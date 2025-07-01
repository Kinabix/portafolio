import React from 'react';

const proyectos = [
  {
    titulo: "Portafolio Web",
    descripcion: "Mi portafolio personal hecho con React y Bootstrap.",
    link: "https://tusitio.com",
    repo: "https://github.com/tuusuario/portafolio"
  },
  // Agrega más proyectos aquí
];

function Projects() {
  return (
    <section id="projects" className="py-5 bg-light">
      <div className="container">
        <h2 className="mb-4">Proyectos</h2>
        <div className="row">
          {proyectos.map((proyecto, idx) => (
            <div className="col-md-4 mb-4" key={idx}>
              <div className="card h-100 shadow">
                <div className="card-body">
                  <h5 className="card-title">{proyecto.titulo}</h5>
                  <p className="card-text">{proyecto.descripcion}</p>
                </div>
                <div className="card-footer">
                  <a href={proyecto.link} className="btn btn-primary btn-sm me-2" target="_blank" rel="noopener noreferrer">Ver Demo</a>
                  <a href={proyecto.repo} className="btn btn-outline-secondary btn-sm" target="_blank" rel="noopener noreferrer">Código</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
