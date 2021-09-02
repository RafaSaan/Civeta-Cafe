import React from "react";
import "./Contact.css";
import ContactCont from "../Components/Contact/ContactCont";
import NavbarDark from "../Components/Navbar/NavbarDark";

const Contact = () => {
  return (
    <section className="contact">
      <header className="header nav-dark">
        <NavbarDark />
      </header>
      <ContactCont />
    </section>
  );
};

export default Contact;
