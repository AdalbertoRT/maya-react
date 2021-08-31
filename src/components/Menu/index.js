import React from "react";
import { Dropdown } from "react-bootstrap";
import { FaBars } from "react-icons/fa";
import styles from "./styles.module.css";

const Menu = () => {
  return (
    <Dropdown className={styles.dropdown}>
      <Dropdown.Toggle
        variant="none"
        id="dropdown-basic"
        className={styles.dropdownButton}
      >
        <FaBars />
      </Dropdown.Toggle>

      <Dropdown.Menu className={styles.dropdownMenu}>
        <Dropdown.Item href="#/action-1">home</Dropdown.Item>
        <Dropdown.Item href="#/action-2">portifólio</Dropdown.Item>
        <Dropdown.Item href="#/action-3">contato</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default Menu;
