import React from 'react';

function Contact() {
  return (
    <section id="contact" className="py-5 bg-light">
      <div className="container">
        <h2 className="mb-4">Contacto</h2>
        <p>Puedes contactarme a través del siguiente formulario o por mis redes sociales.</p>
        <form>
          <div className="mb-3">
            <label htmlFor="nombre" className="form-label">Nombre</label>
            <input type="text" className="form-control" id="nombre" placeholder="Tu nombre" />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Correo electrónico</label>
            <input type="email" className="form-control" id="email" placeholder="tu@email.com" />
          </div>
          <div className="mb-3">
            <label htmlFor="mensaje" className="form-label">Mensaje</label>
            <textarea className="form-control" id="mensaje" rows="3" placeholder="Escribe tu mensaje"></textarea>
          </div>
          <button type="submit" className="btn btn-primary">Enviar</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
