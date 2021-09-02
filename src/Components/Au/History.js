import React from "react";
import "./History.css";
const History = () => {
  return (
    <div className="aboutUs__history">
      <div className="history__info">
        <h2>Nuesta Historia</h2>

        <p>
          Marca familiar mexicana fundada en 1987, inició como un pequeño
          proyecto personal, siempre preocupandonos por la calidad del grano.
        </p>

        <p>
          Tenemos un grano traido desde Chiapas, considerado como uno de los
          mejores cafes del mundo.
        </p>
        <p>
          Civeta no solo es una marca, es calidad, es historia, es una
          experiencia que no te puedes perder.
        </p>
      </div>
      <img
        src="https://firebasestorage.googleapis.com/v0/b/civeta-san.appspot.com/o/historiaImg.png?alt=media&token=9fd10ca4-2b36-436e-8db4-6fcb13b1bf1a"
        alt="grano-de-cafe"
        className="history__img"
      />
    </div>
  );
};

export default History;
