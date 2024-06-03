'use client'

import React from "react";
import styles from "../styles/Header.module.css";
import Link from "next/link";

const Header = () => {
  const handleScroll = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div>
      <nav className={styles.navigation}>
        <Link href="#home" onClick={(e) => handleScroll(e, "home")} className={styles.link}>
          Home
        </Link>
        <Link href="#about" onClick={(e) => handleScroll(e, "about")}  className={styles.link}>
          A Propos
        </Link>
        <Link href="#contact" onClick={(e) => handleScroll(e, "contact")}  className={styles.link}>
          Contact
        </Link>
      </nav>
      <div className={styles.logoContainer}>
        <p>MAITRE Cheik</p>
      </div>
    </div>
  );
};

export default Header;