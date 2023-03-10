import React from 'react'
import { Link } from 'react-router-dom';
import styles from "./Nav.module.css";
const NavBar= () => {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.list}>
        <li><Link to="/">Home</Link></li>
        <li><a href="#about">About</a></li>
        <li>  <a
        href={require("../../assets/menu.webp")}
        target="_blank"
        rel="noreferrer"
      >Menu</a></li>
        <li><Link to="/booking">Resevations</Link></li>
        <li><Link to="/Order">Order Online</Link></li>
        <li><Link to="/Login">Login</Link></li>
      </ul>
    </nav>
  )
}

export default NavBar

