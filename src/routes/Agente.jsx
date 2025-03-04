import React, { useState } from "react";
import {
  FaCheckCircle,
  FaTimesCircle,
  FaHeadset,
  FaLightbulb,
  FaCommentDots,
} from "react-icons/fa";
import "../styles/Agente.css";

const preguntas = [
  {
    pregunta: "📌 ¿Cuál es el problema más reportado por los clientes?",
    opciones: {
      A: "Demoras en la entrega",
      B: "Mal servicio al cliente",
      C: "Errores en la facturación",
      D: "Fallas en el sistema",
    },
    correcta: "A",
  },
  {
    pregunta: "📢 ¿Cuál es la mejor manera de comunicarse con los camioneros?",
    opciones: {
      A: "Llamadas telefónicas",
      B: "Correos electrónicos",
      C: "Aplicaciones de mensajería",
      D: "Notas en papel",
    },
    correcta: "C",
  },
  {
    pregunta: "💡 ¿Qué tecnología mejoraría la atención al cliente?",
    opciones: {
      A: "Chatbots de IA",
      B: "Más llamadas en espera",
      C: "Menos comunicación",
      D: "Uso de fax",
    },
    correcta: "A",
  },
];

const Agente = () => {
  const [respuestas, setRespuestas] = useState({});
  const [mostrarResultados, setMostrarResultados] = useState(false);

  const handleRespuesta = (index, opcion) => {
    setRespuestas({ ...respuestas, [index]: opcion });
  };

  return (
    <div className="agente-container">
      <h1 className="titulo">
        📞 Encuesta para Agentes de Servicio al Cliente
      </h1>
      {preguntas.map((item, index) => (
        <section key={index} className="pregunta-container">
          <h2>
            {index === 0 && <FaCommentDots />}
            {index === 1 && <FaHeadset />}
            {index === 2 && <FaLightbulb />}
            {item.pregunta}
          </h2>
          {Object.entries(item.opciones).map(([letra, opcion]) => (
            <label
              key={letra}
              className={`opcion ${
                respuestas[index] === letra
                  ? letra === item.correcta
                    ? "correcta"
                    : "incorrecta"
                  : ""
              }`}
            >
              <input
                type="radio"
                name={`pregunta-${index}`}
                onChange={() => handleRespuesta(index, letra)}
              />
              {letra}) {opcion}
            </label>
          ))}
        </section>
      ))}
      <button onClick={() => setMostrarResultados(true)}>
        📌 Ver resultados
      </button>
      {mostrarResultados && (
        <div className="resultados">
          <h2>📋 Resultados</h2>
          {preguntas.map((item, index) => (
            <p key={index}>
              {item.pregunta} -{" "}
              <strong>
                {item.correcta === respuestas[index] ? (
                  <span className="correcto">
                    ✅ Correcto ({item.correcta})
                  </span>
                ) : (
                  <span className="incorrecto">
                    ❌ Incorrecto (Correcta: {item.correcta})
                  </span>
                )}
              </strong>
            </p>
          ))}
        </div>
      )}
    </div>
  );
};

export default Agente;
