import React from "react";
import "./HomeBtn.css";
import { Link } from "react-router-dom";

const HomeBtn = () => {
  return (
    <div className="">
      <Link to="/aboutUs" className="home__btn">
        Ver más
      </Link>
    </div>
  );
};

export default HomeBtn;
