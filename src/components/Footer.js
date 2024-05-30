import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import "./styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>Ahnaf Ahmad 2024</p>
        <div className="footer-links">
          <a
            href="https://github.com/ahnafahmad0425"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub size={30} />
          </a>
          <a
            href="https://www.linkedin.com/in/ahnaf-ahmad-8006b4249/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin size={30} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
