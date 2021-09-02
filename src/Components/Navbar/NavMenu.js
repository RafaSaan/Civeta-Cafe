import React from "react";
import "./NavMenu.css";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

const NavMenu = ({ isOpen, dark }) => {
  const menuVariants = {
    opened: {
      top: 90,
      scale: 1.1,
      transition: {
        type: "tween",
      },
    },
    closed: {
      top: -460,
      scale: 1,
    },
  };
  return (
    <motion.ul
      className={dark ? "nav__menu menu-dark" : "nav__menu"}
      initial={false}
      variants={menuVariants}
      animate={isOpen ? "opened" : "closed"}
    >
      <li className="nav__item">
        {" "}
        <NavLink
          exact
          to="/"
          className={dark ? "nav__link link-dark" : "nav__link"}
          activeClassName="link-active"
        >
          Inicio
        </NavLink>{" "}
      </li>
      <li className="nav__item">
        {" "}
        <NavLink
          exact
          to="/aboutUs"
          className={dark ? "nav__link link-dark" : "nav__link"}
          activeClassName="link-active"
        >
          ¿Quiénes Somos?
        </NavLink>{" "}
      </li>
      <li className="nav__item">
        {" "}
        <NavLink
          exact
          to="/contact"
          className={dark ? "nav__link link-dark" : "nav__link"}
          activeClassName="link-active"
        >
          Contacto
        </NavLink>{" "}
      </li>
      <li className="nav__item">
        {" "}
        <NavLink
          exact
          to="/visitUs"
          className={dark ? "nav__link link-dark" : "nav__link"}
          activeClassName="link-active"
        >
          Visitanos
        </NavLink>{" "}
      </li>
    </motion.ul>
  );
};

export default NavMenu;
