import React from "react";
import "../styles/Contacto.css";

const Contacto = () => {
  return (
    <div className="contacto-container">
      <h1 className="titulo">📄 Hoja de Vida - Miguel Ángel Amaya</h1>

      <section>
        <h2>👤 Sobre Mí</h2>
        <p>
          Soy un desarrollador apasionado por la tecnología y la innovación, con
          experiencia en el desarrollo de aplicaciones web. Me encanta aprender
          cosas nuevas y enfrentar retos que me ayuden a crecer
          profesionalmente.
        </p>
      </section>

      <section>
        <h2>📌 Datos Personales</h2>
        <p>
          <strong>Nombre:</strong> Miguel Ángel Amaya Cárdenas
        </p>
        <p>
          <strong>Email:</strong>{" "}
          <a href="mailto:miguelangelamaya31@gmail.com">
            miguelangelamaya31@gmail.com
          </a>
        </p>
        <p>
          <strong>Teléfono:</strong>{" "}
          <a href="tel:+573144474920">+57 314 447 4920</a>
        </p>
        <p>
          <strong>Ubicación:</strong> Bucaramanga, Santander, Colombia
        </p>
      </section>

      <section>
        <h2>🎓 Educación</h2>
        <p>
          <strong>Unidades Tecnológicas de Santander</strong> - Ingeniería de
          Sistemas (2024 - 2029)
        </p>
        <p>
          <strong>Universidad Autónoma de Bucaramanga</strong> - Tecnólogo en
          Desarrollo de Software (2019 - 2021)
        </p>
        <p>
          <strong>SENA</strong> - Técnico en Operaciones Contables (2020 - 2022)
        </p>
      </section>

      <section>
        <h2>💼 Experiencia Laboral</h2>
        <p>
          <strong>Desarrollador Full Stack</strong> - Asistencia Movil (2024 -
          Presente)
        </p>
        <ul>
          <li>Desarrollo de interfaces atractivas e interactivas con React.</li>
          <li>Optimización de rendimiento y experiencia de usuario.</li>
          <li>
            Colaboración con equipos de diseño y backend para mejorar productos
            digitales.
          </li>
        </ul>
      </section>

      <section>
        <h2>🛠 Habilidades Técnicas</h2>
        <ul>
          <li>JavaScript (ES6+), React.js, Node.js</li>
          <li>HTML5, CSS3, Tailwind CSS</li>
          <li>MongoDB, MySQL</li>
          <li>Git, GitHub, CI/CD</li>
        </ul>
      </section>

      <section>
        <h2>🌟 Habilidades Blandas</h2>
        <ul>
          <li>Trabajo en equipo y comunicación efectiva.</li>
          <li>Adaptabilidad y aprendizaje continuo.</li>
          <li>Resolución de problemas y pensamiento lógico.</li>
        </ul>
      </section>

      <section>
        <h2>🎯 Intereses</h2>
        <p>
          Me apasiona la tecnología, el desarrollo web, la inteligencia
          artificial y la automatización de procesos. Además, me gusta la música
          y la lectura.
        </p>
      </section>
    </div>
  );
};

export default Contacto;
