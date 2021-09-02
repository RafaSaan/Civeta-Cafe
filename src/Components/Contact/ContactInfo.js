import React from "react";
import "./ContactInfo.css";
const ContactInfo = () => {
  return (
    <div className="contact__info">
      <div className="blur">
        <h2>Contacto</h2>
        <p className="info-brown">Telefono</p>
        <p className="info-white">+5211223344</p>
        <p className="info-brown">Correo</p>
        <p className="info-white">civetacafe@gmail.com</p>
        <p className="info-brown">Redes</p>
        <p className="info-white">Cieva Café</p>
      </div>
    </div>
  );
};

export default ContactInfo;
