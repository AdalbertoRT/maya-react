import React from "react";
import Logo from "../Logo";
import Menu from "../Menu";
import { HeaderComponent, HeaderInt } from "./style";

const Header = () => {
  return (
    <HeaderComponent>
      <HeaderInt className="container">
        <Menu />
        <Logo />
      </HeaderInt>
    </HeaderComponent>
  );
};

export default Header;
