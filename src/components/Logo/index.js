import React from "react";
import { LogoComponent } from "./style";

// async function LogoImg() {
//     const request = async fetch("https://www.mayacomunicacao.com.br/wp-content/uploads/2021/02/logo-mobi.png");
//     const response = async request.blob();
//     return response
// }

const Logo = () => {
  return (
    <LogoComponent>
      <img src="https://www.mayacomunicacao.com.br/wp-content/uploads/2021/02/logo-mobi.png" />
    </LogoComponent>
  );
};

export default Logo;
