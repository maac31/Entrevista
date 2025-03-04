import React from "react";
import "../styles/Inicio.css";

const equipo = [
  {
    nombre: "Christian Leonardo Durán Lizarazo",
    rol: "Presidente de Maverick Transport",
    descripcion: "Lidera la compañía y define su estrategia de crecimiento.",
  },
  {
    nombre: "Andrés Fonseca Mandon",
    rol: "Director de Tecnología de la Información",
    descripcion:
      "Supervisa la infraestructura tecnológica y las soluciones digitales.",
  },
  {
    nombre: "Juan David Salazar Gutierrez",
    rol: "Despachador",
    descripcion:
      "Coordina el envío de mercancía y optimiza rutas de transporte.",
  },
  {
    nombre: "Jhon Freddy Barbosa Nuñez",
    rol: "Agente de Servicio al Cliente",
    descripcion:
      "Atiende a los clientes y resuelve inquietudes sobre los envíos.",
  },
  {
    nombre: "Sergio Andres Rodríguez Gómez",
    rol: "Camionero",
    descripcion:
      "Transporta mercancía asegurando entregas puntuales y seguras.",
  },
  {
    nombre: "Esteban Ávila Corredor",
    rol: "Analista de Sistemas",
    descripcion:
      "Elabora preguntas de entrevista y analiza las necesidades del sistema.",
  },
  {
    nombre: "Jacob Piedrahita",
    rol: "Analista de Sistemas",
    descripcion:
      "Identifica requerimientos técnicos y propone soluciones informáticas.",
  },
  {
    nombre: "Miguel Ángel Amaya Cárdenas",
    rol: "Desarrollador Web",
    descripcion:
      "Recopiló las ideas del equipo y creó la plataforma web funcional.",
    especial: true,
  },
];

function Inicio() {
  return (
    <div className="inicio-container">
      <main className="inicio-main">
        <h1 className="titulo">Bienvenido a Nuestra Plataforma</h1>
        <p>
          Este proyecto se desarrolló con base en entrevistas a usuarios clave
          del sistema de Maverick Transport. Cada miembro del equipo asumió un
          rol específico para simular el proceso de análisis de requerimientos.
        </p>
        <p>
          **Miguel Ángel Amaya Cárdenas** consolidó todos los aportes del equipo
          y los convirtió en una plataforma web funcional.
        </p>

        <h2 className="subtitulo">Equipo de Trabajo</h2>
        <div className="equipo-container">
          {equipo.map((miembro, index) => (
            <div
              key={index}
              className={`tarjeta ${
                miembro.especial ? "tarjeta-especial" : ""
              }`}
            >
              <h3>{miembro.nombre}</h3>
              <p className="rol">{miembro.rol}</p>
              <p className="descripcion">{miembro.descripcion}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default Inicio;
