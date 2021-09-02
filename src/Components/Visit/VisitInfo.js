import React from "react";
import "./VisitInfo.css";
const VisitInfo = () => {
  return (
    <div className="visit__info">
      <h2 className="visit-t">Visitanos</h2>
      <p className="info-brown">Direccion</p>
      <p className="info-white">Avenida centro, centro, 1468, CDMX, México</p>
      <p className="info-brown">Horario</p>
      <p className="info-white">
        L-V 7:00 a.m - 10:00 p.m <br /> S-D 9:00 a.m - 9:00 p.m
      </p>
      <p className="info-brown">Telefono sucursal</p>
      <p className="info-white">+52 11223344</p>
    </div>
  );
};

export default VisitInfo;
