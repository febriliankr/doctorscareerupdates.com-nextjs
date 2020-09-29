import Link from "next/link";
import { FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="footer__container">
      <div className="social-icons">
        <a href="https://www.instagram.com/dcufkui/">
          <FaInstagram />
        </a>
      </div>
      <div>Doctors' Career Updates 2020</div>
    </div>
  );
}
