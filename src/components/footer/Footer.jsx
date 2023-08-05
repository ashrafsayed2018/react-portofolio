import "./footer.css";
import { FaFacebookF } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { IoLogoTwitter } from "react-icons/io";

const Footer = () => {
  return (
    <footer>
      <a href="" className="footer__logo">
        logo
      </a>
      <ul className="permalinks">
        <li>
          <a href="#">home</a>
          <a href="#about">about</a>
          <a href="#experience">experience</a>
          <a href="#portofolio">portofolio</a>
          <a href="#testimonials">testimonials</a>
          <a href="#contact">contact</a>
        </li>
      </ul>
      <div className="footer__socials">
        <a href="https://facebook.com">
          <FaFacebookF />
        </a>
        <a href="https://instagram.com">
          <FiInstagram />
        </a>
        <a href="https://twitter.com">
          <IoLogoTwitter />
        </a>
      </div>
      <div className="footer__copyright">
        <small>&copy; all copy rights reserved </small>
      </div>
    </footer>
  );
};

export default Footer;
