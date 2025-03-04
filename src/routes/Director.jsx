import React, { useState } from "react";
import "../styles/Director.css"; // Asegúrate de crear este archivo CSS

const preguntas = [
  {
    pregunta: "🖥️ ¿Cuál es el principal problema con la tecnología actual?",
    opciones: {
      A: "Falta de integración entre sistemas",
      B: "Alto costo de mantenimiento",
      C: "Dificultad de uso para los empleados",
      D: "No presenta problemas significativos",
    },
    correcta: "A",
  },
  {
    pregunta: "🚀 ¿Qué mejora es más importante en el nuevo sistema?",
    opciones: {
      A: "Mayor velocidad y rendimiento",
      B: "Interfaz más intuitiva",
      C: "Mejor seguridad y control de accesos",
      D: "Compatibilidad con otros sistemas",
    },
    correcta: "C",
  },
  {
    pregunta: "📊 ¿Cuál es la principal limitación del sistema actual?",
    opciones: {
      A: "Falta de personalización",
      B: "Problemas de escalabilidad",
      C: "No se actualiza con frecuencia",
      D: "No cumple con las necesidades del negocio",
    },
    correcta: "B",
  },
  {
    pregunta:
      "📌 ¿Cuál es el mayor desafío en la implementación del nuevo sistema?",
    opciones: {
      A: "Resistencia al cambio",
      B: "Costo elevado",
      C: "Tiempo de adaptación",
      D: "Falta de capacitación",
    },
    correcta: "A",
  },
  {
    pregunta: "📚 ¿Existe un plan de capacitación para los empleados?",
    opciones: {
      A: "Sí, ya está en marcha",
      B: "Se está planificando",
      C: "No, pero es necesario",
      D: "No se considera necesario",
    },
    correcta: "B",
  },
];

const Director = () => {
  const [respuestas, setRespuestas] = useState({});
  const [mostrarCorrectas, setMostrarCorrectas] = useState(false);

  const handleRespuesta = (index, opcion) => {
    setRespuestas({ ...respuestas, [index]: opcion });
  };

  return (
    <div className="director-container">
      <h1 className="titulo">📌 Encuesta para Director de TI</h1>

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

export default Director;
