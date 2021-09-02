import React, { useState } from "react";
import * as IoIcons from "react-icons/io";
import NavMenu from "./NavMenu";

const NavbarDark = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = () => setIsOpen(!isOpen);
  return (
    <div className="nav">
      <div className="logo">
        <img
          src="https://firebasestorage.googleapis.com/v0/b/civeta-san.appspot.com/o/CivetaLogoDark.png?alt=media&token=ffa015ac-8d68-4f4f-840c-32ba12569386"
          alt="logo"
        />
      </div>
      <IoIcons.IoIosMenu className="burger burger-dark" onClick={handleOpen} />

      <NavMenu isOpen={isOpen} dark={true} />
    </div>
  );
};

export default NavbarDark;
