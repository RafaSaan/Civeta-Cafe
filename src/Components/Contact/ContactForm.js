import React from "react";
import { useForm } from "../Hooks/useForm";
import "./ContactForm.css";
import Loader from "./Loader";

const ContactForm = () => {
  const initialForm = {
    name: "",
    email: "",
    message: "",
  };

  const validationsForm = form => {
    let errors = {};
    let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
    let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
    let regexComments = /^.{1,255}$/;

    if (!form.name.trim()) {
      errors.name = "El campo 'Nombre' es requerido";
    } else if (!regexName.test(form.name.trim())) {
      errors.name = "El campo 'Nombre' sólo acepta letras y espacios en blanco";
    }

    if (!form.email.trim()) {
      errors.email = "El campo 'Email' es requerido";
    } else if (!regexEmail.test(form.email.trim())) {
      errors.email = "El campo 'Email' es incorrecto";
    }

    if (!form.message.trim()) {
      errors.message = "El campo 'Mensaje' es requerido";
    } else if (!regexComments.test(form.message.trim())) {
      errors.message =
        "El campo 'Comentarios' no debe exceder los 255 caracteres";
    }

    return errors;
  };
  let styles = {
    fontWeight: "bold",
    color: "#dc3545",
    fontSize: "1.2rem",
  };
  let stylesScc = {
    fontWeight: "bold",
    color: "#198754",
    fontSize: "1.5rem",
  };
  const {
    form,
    errors,
    loading,
    response,
    handleChange,
    handleBlur,
    handleSubmit,
  } = useForm(initialForm, validationsForm);

  return (
    <div className="contact__form__container">
      <h2>Correo Electronico</h2>
      <p>Por favor llena los datos con:</p>
      <p>Nombre</p>
      <p>Correo</p>
      <p>Mensaje</p>
      <form className="contact__form" onSubmit={handleSubmit}>
        <input
          type="text"
          className="contact__input"
          name="name"
          value={form.name}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="Nombre*"
          autoComplete="off"
          required
        />
        {errors.name && <p style={styles}>{errors.name}</p>}
        <input
          type="email"
          className="contact__input"
          name="email"
          placeholder="Correo Electronico*"
          value={form.email}
          onChange={handleChange}
          onBlur={handleBlur}
          autoComplete="off"
          required
        />
        {errors.email && <p style={styles}>{errors.email}</p>}
        <textarea
          name="message"
          id=""
          cols="50"
          rows="5"
          placeholder="Mensaje*"
          value={form.message}
          onChange={handleChange}
          onBlur={handleBlur}
          autoComplete="off"
          required
        ></textarea>
        {errors.message && <p style={styles}>{errors.message}</p>}
        {loading && <Loader />}
        {response && <p style={stylesScc}> Los datos han sido enviados</p>}
        <button className="contact__btn">Enviar</button>
      </form>
    </div>
  );
};

export default ContactForm;
