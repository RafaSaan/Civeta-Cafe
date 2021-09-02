import React from "react";
import "./AboutUs.css";
import History from "../Components/Au/History";
import NavbarDark from "../Components/Navbar/NavbarDark";
import Services from "../Components/Au/Services";

const AboutUs = () => {
  return (
    <div className="aboutUs">
      <header className="header nav-dark">
        <NavbarDark />
      </header>
      <History />
      <Services />
    </div>
  );
};

export default AboutUs;
