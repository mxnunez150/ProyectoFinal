import React from 'react';
import { FaFacebook, FaLinkedin } from 'react-icons/fa';
import { IoMdMail } from 'react-icons/io';
import './Footer.css'; 

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="social-icons">
        <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
          <FaFacebook />
        </a>
        <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a href="mailto:correo@dominio.com">
          <IoMdMail />
        </a>
      </div>
      <p>&copy; Estudiante Marbelis Nuñez. Todos los derechos reservados.</p>
    </footer>
  );
};

export default Footer;
