const questions = [
  {
    title: "¿Donde se ejecuta Javascript?",
    options: [
      { textoRespuesta: "Lado del cliente", isCorrect: true },
      { textoRespuesta: "Servidor", isCorrect: false },
      { textoRespuesta: "BIOS", isCorrect: false },
      { textoRespuesta: "Ninguna de las anteriores", isCorrect: false },
    ],
  },
  {
    title: "¿Qué tipo de operador es (===)?",
    options: [
      { textoRespuesta: "Igualdad", isCorrect: false },
      { textoRespuesta: "Igualdad estricta", isCorrect: true },
      { textoRespuesta: "Desigualdad", isCorrect: false },
      { textoRespuesta: "Diferente a", isCorrect: false },
    ],
  },
  {
    title: "¿Cuánto es `11`+ 1 en JavaScript?",
    options: [
      { textoRespuesta: "111", isCorrect: true },
      { textoRespuesta: "12", isCorrect: false },
      { textoRespuesta: "Syntax Error", isCorrect: false },
      { textoRespuesta: "`11`1", isCorrect: false },
    ],
  },
  {
    title: "¿En qué año fue creado JavaScript?",
    options: [
      { textoRespuesta: "1997", isCorrect: false },
      { textoRespuesta: "2001", isCorrect: false },
      { textoRespuesta: "1987", isCorrect: false },
      { textoRespuesta: "1995", isCorrect: true },
    ],
  },
];

export default questions;
