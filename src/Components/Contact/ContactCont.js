import React from "react";
import "./ContactCont.css";
import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";

const ContactCont = () => {
  return (
    <div className="contact__container">
      <ContactForm />
      <ContactInfo />
    </div>
  );
};

export default ContactCont;
