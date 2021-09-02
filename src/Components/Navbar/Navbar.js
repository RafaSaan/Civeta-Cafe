import React, { useState } from "react";
import "./Navbar.css";
import * as IoIcons from "react-icons/io";
import NavMenu from "./NavMenu";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = () => setIsOpen(!isOpen);
  return (
    <nav className="nav ">
      <div className="logo">
        <img
          src="https://firebasestorage.googleapis.com/v0/b/civeta-san.appspot.com/o/civetaLogo.png?alt=media&token=27e5c001-1cf3-4d39-a77a-9061069dcab2"
          alt="logo"
        />
      </div>
      <IoIcons.IoIosMenu className="burger" onClick={handleOpen} />

      <NavMenu isOpen={isOpen} dark={false} />
    </nav>
  );
};

export default Navbar;
