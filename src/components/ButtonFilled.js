"use client";

import React from "react";
import styles from "../styles/ButtonFilled.module.css";
import Link from "next/link";

const ButtonFilled = ({ isFooter = false, text }) => {
  const handleScroll = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Link href="#contact" onClick={(e) => handleScroll(e, "contact")}>
      <button className={`${styles.button} ${isFooter ? styles.footer : " "}`}>
        {text}
      </button>
    </Link>
  );
};

export default ButtonFilled;
