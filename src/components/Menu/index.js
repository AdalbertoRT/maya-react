import React from "react";
import { Dropdown } from "react-bootstrap";
import { MenuComponent } from "./style";

const Menu = () => {
  return (
    <MenuComponent className="nav">
      <ul height={100}>
        <li>
          <a href="#/action-1">home</a>
        </li>
        <li>
          <a href="#/action-2">portifólio</a>
        </li>
        <li>
          <a href="#/action-3">contato</a>
        </li>
      </ul>
    </MenuComponent>
  );
};

export default Menu;
