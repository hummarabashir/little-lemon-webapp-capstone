// import { Link } from "react-router-dom";
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
          <h1 className="footer-header">Little Lemon</h1>
          <h2>Chicago</h2>
          <p>We are a family owned Mediterranean restaurant, located on Maldove Street in Chicago, Illionis.</p>
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
