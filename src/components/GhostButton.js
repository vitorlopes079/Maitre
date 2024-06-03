'use client'

import React from "react";
import styles from "../styles/GhostButton.module.css";
import Link from "next/link";


const GhostButton = ({ text }) => {
  const handleScroll = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Link href="#about" onClick={(e) => handleScroll(e, "about")}>
      <button className={styles.button}>{text}</button>
    </Link>
  );
};

export default GhostButton;
