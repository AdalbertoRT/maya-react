import React from "react";
import Logo from "../Logo";
import Menu from "../Menu";
import { FaBars } from "react-icons/fa";
import { HeaderComponent, HeaderInt } from "./style";
import { useState } from "react";

const Header = () => {
  const [show, setShow] = useState(false);
  return (
    <HeaderComponent className="container" show={show}>
      <HeaderInt>
        <div className="menuMobileIcon">
          <FaBars
            className="menuIcon"
            onClick={() => setShow(!show)}
            fill={show ? "#4fd398" : "#000"}
            style={
              show
                ? { transform: "rotate(90deg)" }
                : { transform: "rotate(0deg)" }
            }
          />
        </div>
        <div class="logo">
          <Logo />
        </div>
        <div className="menu">
          <Menu />
        </div>
      </HeaderInt>
    </HeaderComponent>
  );
};

export default Header;
