import React from 'react'
import styles from "./Footer.module.css"

export default function Footer() {
  return (
    <footer className={styles.footer} id="footer">
        <div className={styles.img_footer}>
          <img
            src={require("../../assets/footer-logo.png")}
            alt="Little Lemon logo"
          ></img>
        </div>
        <div className={styles.contact}>
          <h1 className={styles.footer_header}>Navigation</h1>
          <ul className={styles.footer_links}>
            <a href="#">Home</a>
            <a href="/about">About</a>
            <a
              href={require("../../assets/menu.webp")}
              target="_blank"
              rel="noreferrer"
            >
              Menu
            </a>
            <a href="/reservations">Reservations</a>
            <a href="/order">Order</a>
            <a href="/login">Login</a>
          </ul>
        </div>

        <div>
          <h1 className={styles.footer_header}>Contact</h1>
          <ul className={styles.footer_links}>
            <li>2395 Maldove Way,</li>
            <li>Chicago Illinois</li>
            <br></br>
            <li>(629)-243-6827</li>
            <br></br>
            <a
              href="mailto: info@littlelemon.com"
              target="_blank"
              rel="noreferrer"
            >
              info@littlelemon.com
            </a>
          </ul>
        </div>
        <div>
          <h1 className={styles.footer_header}>Connect</h1>
          <ul className={styles.footer_links}>
            <a
              href="https://www.facebook.com/thelittlelemonshop/"
              target="_blank"
              rel="noreferrer"
            >
              Facebook
            </a>
            <a
              href="https://www.instagram.com/littlelemonmoon/"
              target="_blank"
              rel="noreferrer"
            >
              Instagram
            </a>
            <a
              href="https://www.youtube.com/watch?v=3Li-FfypZYE"
              target="_blank"
              rel="noreferrer"
            >
              Join us!
            </a>
          </ul>
        </div>
    </footer>
  );
}


