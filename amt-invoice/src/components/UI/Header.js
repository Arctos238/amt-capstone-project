/* Header.jsx */
import React from "react";
import headerImage from "../../images/header.png";
import styles from "./Header.module.css";

function Header() {
  return (
    <header className={styles.header}>
      <img
        src={headerImage}
        alt="Header"
        style={{ height: `${headerImage.height}px` }}
      />
    </header>
  );
}

export default Header;
