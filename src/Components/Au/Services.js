import React from "react";
import "./Services.css";
import * as GiIcons from "react-icons/gi";
const Services = () => {
  return (
    <div className="aboutUs__services">
      <h2>El Mejor Café</h2>
      <p>
        Tenemos el mejor cafe en grano nacional, calidad y servicio es lo que
        nos caracteriza.
      </p>
      <div className="services__icons">
        <div className="services">
          <GiIcons.GiCoffeeBeans className="ser-icon" />
          <p>Grano de calidad</p>
        </div>
        <div className="services">
          <GiIcons.GiCoffeeMug className="ser-icon" />
          <p>El Mejor Servicio</p>
        </div>
        <div className="services">
          <GiIcons.GiCoffeePot className="ser-icon" />
          <p>MezclaPerfecta</p>
        </div>
      </div>
      <div className="services__images">
        <img
          src="https://firebasestorage.googleapis.com/v0/b/civeta-san.appspot.com/o/procesoGrano.png?alt=media&token=333811ff-70b2-49c2-b320-9cd4d8811326"
          alt="grano-de-cafe"
          className="services-img"
        />

        <img
          src="https://firebasestorage.googleapis.com/v0/b/civeta-san.appspot.com/o/procesoMolido.png?alt=media&token=0b3748a0-8745-450d-9d64-df4ec444d754"
          alt="cafe-molido"
          className="services-img"
        />

        <img
          src="https://firebasestorage.googleapis.com/v0/b/civeta-san.appspot.com/o/procesoCafe.png?alt=media&token=896fc97d-a673-43fa-b1ec-7c09d8b5c3d2"
          alt="taza-de-cafe"
          className="services-img"
        />
      </div>
    </div>
  );
};

export default Services;
