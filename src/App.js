import { useEffect, useState } from "react";
import questions from "./questions";

function App() {
  const [preguntaActual, setPreguntaActual] = useState(0);
  const [puntuacion, setPuntuacion] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const [tiempoRestante, setTiempoRestante] = useState(10);
  const [areDisabled, setAreDisabled] = useState(false);
  const [answersShown, setAnswersShow] = useState(false);

  const handleAnswerSubmit = (isCorrect, e) => {
    if (isCorrect) setPuntuacion(puntuacion + 1);

    e.target.classList.add(isCorrect ? "correct" : "incorrect");
    setTimeout(() => {
      if (preguntaActual === questions.length - 1) {
        setIsFinished(true);
      } else {
        setPreguntaActual(preguntaActual + 1);
      }
    }, 1500);
  };

  useEffect(() => {
    const intervalo = setInterval(() => {
      if (tiempoRestante > 0) setTiempoRestante((prev) => prev - 1);
      if (tiempoRestante === 0) setAreDisabled(true);
    }, 1000);

    return () => clearInterval(intervalo);
  }, [tiempoRestante]);

  if (isFinished) {
    return (
      <div className="App">
        <div className="juego-terminado">
          <span>
            Obtuviste {puntuacion} de {questions.length}
          </span>
          <button onClick={() => (window.location.href = "/")}>
            Volver a jugar
          </button>
          <button
            onClick={() => {
              setIsFinished(false);
              setAnswersShow(true);
              setPreguntaActual(0);
            }}
          >
            Ver respuestas
          </button>
        </div>
      </div>
    );
  }

  if (answersShown) {
    return (
      <div className="App">
        <div className="lado-izquierdo">
          <div className="numero-pregunta">
            <span>Pregunta {preguntaActual + 1} de </span> {questions.length}
          </div>
          <div className="titulo-pregunta">
            {questions[preguntaActual].title}
          </div>
          <div>
            {
              questions[preguntaActual].options.filter(
                (opcion) => opcion.isCorrect
              )[0].textoRespuesta
            }
          </div>
          <button
            onClick={() => {
              if (preguntaActual === questions.length - 1) {
                window.location.href = "/";
              } else {
                setPreguntaActual(preguntaActual + 1);
              }
            }}
          >
            {preguntaActual === preguntaActual.length - 1
              ? "Volver a jugar"
              : "Siguiente"}
          </button>
        </div>
      </div>
    );
  }

  return (
    <>
      <h1 className="titulo">Comprueba tus habilidades</h1>

      <div className="App">
        <div className="lado-izquierdo">
          <div className="numero-pregunta">
            <span>Pregunta {preguntaActual + 1} de </span> {questions.length}
          </div>
          <div className="titulo-pregunta">
            {questions[preguntaActual].title}
          </div>
          <div>
            {!areDisabled ? (
              <span className="tiempo-restante">
                Tiempo restante: {tiempoRestante}
              </span>
            ) : (
              <button
                onClick={() => {
                  setTiempoRestante(10);
                  setAreDisabled(false);
                  setPreguntaActual(preguntaActual + 1);
                }}
              >
                Continuar
              </button>
            )}
          </div>
        </div>
        <div className="lado-derecho">
          {questions[preguntaActual].options.map((respuesta) => (
            <button
              disabled={areDisabled}
              key={respuesta.textoRespuesta}
              onClick={(e) => handleAnswerSubmit(respuesta.isCorrect, e)}
            >
              {respuesta.textoRespuesta}
            </button>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
