import React from 'react';
import Yo from '../assets/Yo.svg';
import Karate from '../assets/karate.svg';
import Scouts from '../assets/scouts.svg';

function About() {
  return (
    <section
      id="about"
      className="py-5"
      style={{
        background: 'linear-gradient(135deg,rgba(17, 203, 194, 0.47) 0%,rgb(23, 121, 108) 100%)',
        color: '',
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
            <div className="mt-2">
              <h5 className="mb-1">Matias Santiago Linares Postigo</h5>
              <p className="small">Desarrollador Frontend</p>
            </div>
            {/* Habilidades personales */}
            <div className="mt-4">
              <h4 className="mb-3">Habilidades Personales</h4>
              <div
                className="d-flex flex-row flex-wrap gap-4 justify-content-center"
                style={{ rowGap: 24 }}
              >
                {/* Karate */}
                <div
                  className="card shadow-sm border-0 d-flex flex-row align-items-center p-3"
                  style={{
                    minWidth: 220,
                    maxWidth: 320,
                    width: "100%",
                    flex: "1 1 260px"
                  }}
                >
                  <img
                    src={Karate}
                    alt="Karate"
                    className="rounded-circle shadow me-3"
                    style={{
                      width: 80,
                      height: 80,
                      objectFit: "cover",
                      border: "3px solid #fff"
                    }}
                  />
                  <div>
                    <h6 className="card-title mb-1">Karate</h6>
                    <p className="card-text small mb-0">
                      Disciplina, perseverancia y trabajo en equipo.
                    </p>
                  </div>
                </div>
                {/* Scouts */}
                <div
                  className="card shadow-sm border-0 d-flex flex-row align-items-center p-3"
                  style={{
                    minWidth: 220,
                    maxWidth: 320,
                    width: "100%",
                    flex: "1 1 260px"
                  }}
                >
                  <img
                    src={Scouts}
                    alt="Scouts"
                    className="rounded-circle shadow me-3"
                    style={{
                      width: 80,
                      height: 80,
                      objectFit: "cover",
                      border: "3px solid #fff"
                    }}
                  />
                  <div>
                    <h6 className="card-title mb-1">Scouts</h6>
                    <p className="card-text small mb-0">
                      Liderazgo, servicio y habilidades al aire libre.
                    </p>
                  </div>
                </div>
                {/* Puedes agregar más habilidades personales aquí */}
              </div>
            </div>
          </div>

          <div className="col-md-8">
            <div className="text-bg-primary p-3">
              <h2 className="mb-3">Sobre mí</h2>
              <p>
                ¡Hola! Soy un desarrollador apasionado por la tecnología, el diseño y la creación de soluciones web.
                Me encanta trabajar con React y mejorar cada día mis habilidades como frontend developer.
              </p>
              <p>
                Actualmente me encuentro construyendo proyectos personales para fortalecer mi portafolio y aprender nuevas tecnologías como Bootstrap, Firebase y más.
              </p>
            </div>
            {/* Habilidades */}
            <div className="mt-4">
              <h2 className="mb-4">Habilidades</h2>
              <div className="d-flex flex-wrap gap-4 justify-content-start">
                <div className="text-center">
                  <i className="fab fa-html5 fa-3x" style={{ color: "#e44d26" }}></i>
                  <div style={{ color: "#e44d26", fontWeight: "bold" }}>HTML5</div>
                </div>
                <div className="text-center">
                  <i className="fab fa-css3-alt fa-3x" style={{ color: "#1572b6" }}></i>
                  <div style={{ color: "#1572b6", fontWeight: "bold" }}>CSS3</div>
                </div>
                <div className="text-center">
                  <i className="fab fa-python fa-3x" style={{ color: "#3776ab" }}></i>
                  <div style={{ color: "#3776ab", fontWeight: "bold" }}>Python</div>
                </div>
                <div className="text-center">
                  <i className="fab fa-php fa-3x" style={{ color: "#7377ad" }}></i>
                  <div style={{ color: "#7377ad", fontWeight: "bold" }}>PHP</div>
                </div>
                <div className="text-center">
                  <i
                    className="fab fa-react fa-3x react-spin"
                    style={{ color: "#61dafb" }}
                  ></i>
                  <div style={{ color: "#61dafb", fontWeight: "bold" }}>React</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style>
        {`
          .react-spin {
            animation: spin 2s linear infinite;
          }
          @keyframes spin {
            100% { transform: rotate(360deg); }
          }
        `}
      </style>
      <style>
        {`
          @media (max-width: 767px) {
            #about .d-flex.flex-row.flex-wrap.gap-4.justify-content-center {
              flex-direction: column !important;
              align-items: center !important;
            }
            #about .card.shadow-sm {
              min-width: 180px !important;
              max-width: 100% !important;
              width: 90vw !important;
              margin-left: auto;
              margin-right: auto;
            }
          }
        `}
      </style>
    </section>
  );
}

export default About;

