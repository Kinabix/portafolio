import React from 'react';
import Yo from '../assets/Yo.svg';

function About() {
  return (
    <section
      id="about"
      className="py-5"
      style={{
        background: 'linear-gradient(135deg, #6a11cb 0%, #C3E344 100%)',
        color: '#C3E344',
        minHeight: '100vh'
      }}
    >
      <div className="container">
        <div className="row align-items-center">
          
          {/* Foto */}
          <div className="col-md-4 text-center mb-4 mb-md-0">
            <img
              src={Yo}
              alt="Tu nombre"
              className="img-fluid rounded-circle shadow"
              style={{ border: '5px solid #fff' }}
            />
          </div>

          <div className="col-md-8">
              <div class="text-bg-primary p-3">
                <h2 className="mb-3">Sobre mí</h2>
                <p>
                  ¡Hola! Soy un desarrollador apasionado por la tecnología, el diseño y la creación de soluciones web.
                  Me encanta trabajar con React y mejorar cada día mis habilidades como frontend developer.
                </p>
                <p>
                  Actualmente me encuentro construyendo proyectos personales para fortalecer mi portafolio y aprender nuevas tecnologías como Bootstrap, Firebase y más.
                </p>
              </div> 
              
          </div>

        </div>
      </div>
    </section>
  );
}

export default About;

