import React from "react";
import "./VisitUs.css";
import ContactInfo from "../Components/Contact/ContactInfo";
import Navbar from "../Components/Navbar/Navbar";
import VisitInfo from "../Components/Visit/VisitInfo";

const VisitUs = () => {
  return (
    <section className="visitUs">
      <div className="visitBlur">
        <header className="header">
          <Navbar />
        </header>
        <div className="contact__container">
          <VisitInfo />
          <ContactInfo />
        </div>
      </div>
    </section>
  );
};

export default VisitUs;
