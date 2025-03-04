import React from "react";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p>&copy; {new Date().getFullYear()} Miguel Angel Amaya Cardenas</p>
        <nav>
          <ul className="footer-links">
            <li>
              <a
                href="https://www.uts.edu.co/sitio/"
                target="_blank"
                rel="noopener noreferrer"
              >
                UTS
              </a>
            </li>
            <li>
              <a
                href="https://atena.uts.edu.co/login/index.php"
                target="_blank"
                rel="noopener noreferrer"
              >
                Atena UTS
              </a>
            </li>
            <li>
              <a
                href="https://github.com/maac31"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/miguel-angel-amaya-cardenas-378a9a213/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
