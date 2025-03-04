import React, { useState } from "react";
import "../styles/Camionero.css"; // Asegúrate de crear este archivo CSS

const preguntas = [
  {
    pregunta:
      "📌 ¿Cuál es el mayor problema con la tecnología en la carretera?",
    opciones: {
      A: "Falta de cobertura de internet",
      B: "Sistemas poco intuitivos",
      C: "Fallas constantes en los dispositivos",
      D: "No tengo problemas tecnológicos",
    },
    correcta: "A",
  },
  {
    pregunta: "💡 ¿Qué tecnología mejoraría tu experiencia de trabajo?",
    opciones: {
      A: "Aplicaciones de rastreo en tiempo real",
      B: "Mejores sistemas de comunicación con la empresa",
      C: "Asistentes de voz para reportes",
      D: "No creo que necesitemos mejoras tecnológicas",
    },
    correcta: "B",
  },
  {
    pregunta: "📄 ¿Qué método prefieres para recibir órdenes de trabajo?",
    opciones: {
      A: "Llamadas telefónicas",
      B: "Mensajes de texto",
      C: "Aplicaciones móviles",
      D: "Correos electrónicos",
    },
    correcta: "C",
  },
];

const Camionero = () => {
  const [respuestas, setRespuestas] = useState({});
  const [mostrarCorrectas, setMostrarCorrectas] = useState(false);

  const handleRespuesta = (index, opcion) => {
    setRespuestas({ ...respuestas, [index]: opcion });
  };

  return (
    <div className="camionero-container">
      <h1 className="titulo">🚛 Encuesta para Camioneros</h1>

      {preguntas.map((item, index) => (
        <section key={index}>
          <h2>{item.pregunta}</h2>
          {Object.entries(item.opciones).map(([letra, texto]) => (
            <label
              key={letra}
              className={`opcion ${
                respuestas[index] === letra ? "seleccionada" : ""
              }`}
            >
              <input
                type="radio"
                name={`pregunta-${index}`}
                value={letra}
                onChange={() => handleRespuesta(index, letra)}
              />
              <span className="letra">{letra}.</span> {texto}
            </label>
          ))}
          {mostrarCorrectas && (
            <p
              className={`respuesta-correcta ${
                respuestas[index] === item.correcta ? "correcta" : "incorrecta"
              }`}
            >
              Respuesta correcta: {item.correcta}
            </p>
          )}
        </section>
      ))}

      <button
        className="boton-verificar"
        onClick={() => setMostrarCorrectas(true)}
      >
        ✅ Ver respuestas correctas
      </button>
    </div>
  );
};

export default Camionero;
