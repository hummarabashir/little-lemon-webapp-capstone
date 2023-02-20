import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer>
      <menu>
        <li className="img-footer">
          <img
            src={require("../assets/footer-logo.png")}
            alt="Little Lemon logo"
          ></img>
        </li>
        <li className="contact">
          <h1 className="footer-header">Navigation</h1>
          <ul className="footer-links">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <a
              href={require("../assets/menu.webp")}
              target="_blank"
              rel="noreferrer"
            >
              Menu
            </a>
            <Link to="/reservations">Reservations</Link>
            <Link to="/order">Order</Link>
            <Link to="/login">Login</Link>
          </ul>
        </li>

        <li>
          <h1 className="footer-header">Contact</h1>
          <ul className="footer-links">
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
        </li>
        <li>
          <h1 className="footer-header">Connect</h1>
          <ul className="footer-links">
            <a
              href="https://www.facebook.com/thelittlelemon/"
              target="_blank"
              rel="noreferrer"
            >
              <FaFacebook size={20} />
            </a>
            <a
              href="https://www.instagram.com/thelittlelemon/"
              target="_blank"
              rel="noreferrer"
            >
              <FaInstagram size={20} />
            </a>
            <a
              href="https://www.twitter.com/thelittlelemon/"
              target="_blank"
              rel="noreferrer"
            >
              <FaTwitter size={20} />
            </a>
            <a
              href="/contact"
              target="_blank"
              rel="noreferrer"
            >
              Join Us!
            </a>
          </ul>
        </li>
      </menu>
      <p className='copyright'>
        &copy; Copyright {new Date().getFullYear()}{' '}
          Hummara Bashir
      </p>
    </footer>
  );
}
