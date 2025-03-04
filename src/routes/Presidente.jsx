import React, { useState } from "react";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa"; // Importar iconos
import "../styles/Presidente.css";

const preguntas = [
  {
    pregunta: "¿Cuál es la principal ventaja de modernizar el sistema?",
    opciones: {
      A: "Mayor eficiencia operativa",
      B: "Más papeleo",
      C: "Mayor gasto innecesario",
      D: "Desorganización",
    },
    correcta: "A",
  },
  {
    pregunta: "¿Cuál es el mayor reto de la transformación digital?",
    opciones: {
      A: "Falta de recursos económicos",
      B: "Resistencia al cambio",
      C: "Demasiada rapidez",
      D: "Todo es automático",
    },
    correcta: "B",
  },
  {
    pregunta: "¿Qué tecnología es clave para el futuro del transporte?",
    opciones: {
      A: "Inteligencia Artificial",
      B: "Máquinas de escribir",
      C: "Fax",
      D: "Palomas mensajeras",
    },
    correcta: "A",
  },
  {
    pregunta: "¿Qué factor es clave para el éxito de una empresa?",
    opciones: {
      A: "Estructura organizativa",
      B: "Falta de comunicación",
      C: "Aumento de burocracia",
      D: "Desconocimiento del mercado",
    },
    correcta: "A",
  },
  {
    pregunta: "¿Cómo mejorar la eficiencia de los procesos internos?",
    opciones: {
      A: "Automatización de tareas repetitivas",
      B: "Ignorar los problemas",
      C: "Aumentar el número de reuniones",
      D: "Eliminar los reportes",
    },
    correcta: "A",
  },
];

const Presidente = () => {
  const [respuestas, setRespuestas] = useState({});
  const [mostrarResultados, setMostrarResultados] = useState(false);

  const handleRespuesta = (index, opcion) => {
    setRespuestas({ ...respuestas, [index]: opcion });
  };

  return (
    <div className="presidente-container">
      <h1 className="titulo">📊 Encuesta para Presidente de la Compañía</h1>
      {preguntas.map((item, index) => (
        <section key={index} className="pregunta-container">
          <h2>{item.pregunta}</h2>
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

export default Presidente;
