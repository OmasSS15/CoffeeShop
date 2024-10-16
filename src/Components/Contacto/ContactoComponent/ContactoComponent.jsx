import React from 'react';
import './ContactoComponent.css';

const ContactoComponent = () => {
  return (
    <div className="contact-form">
      <h2>Contacta con nosotros</h2>
      <form>
        <label htmlFor="name">Nombre:</label>
        <input type="text" id="name" name="name" required />
        
        <label htmlFor="email">Correo:</label>
        <input type="email" id="email" name="email" required />
        
        <label htmlFor="message">Mensaje:</label>
        <textarea id="message" name="message" required></textarea>
        
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default ContactoComponent;
