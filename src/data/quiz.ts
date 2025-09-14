export interface Question {
  id: number;
  question: string;
  options: {
    letter: string;
    text: string;
    correct: boolean;
  }[];
  explanation: string;
}

export const quizQuestions: Question[] = [
  {
    id: 1,
    question: "Qual mineral é essencial para a produção dos hormônios da tireoide?",
    options: [
      { letter: "A", text: "Ferro", correct: false },
      { letter: "B", text: "Iodo", correct: true },
      { letter: "C", text: "Cálcio", correct: false },
      { letter: "D", text: "Zinco", correct: false }
    ],
    explanation: "O iodo é fundamental para a síntese dos hormônios T3 e T4 pela glândula tireoide."
  },
  {
    id: 2,
    question: "A deficiência de qual mineral pode causar anemia?",
    options: [
      { letter: "A", text: "Magnésio", correct: false },
      { letter: "B", text: "Potássio", correct: false },
      { letter: "C", text: "Ferro", correct: true },
      { letter: "D", text: "Cromo", correct: false }
    ],
    explanation: "O ferro é essencial para formar a hemoglobina, responsável pelo transporte de oxigênio."
  },
  {
    id: 3,
    question: "Qual mineral é mais importante para a saúde óssea?",
    options: [
      { letter: "A", text: "Cálcio", correct: true },
      { letter: "B", text: "Zinco", correct: false },
      { letter: "C", text: "Potássio", correct: false },
      { letter: "D", text: "Cromo", correct: false }
    ],
    explanation: "O cálcio é o principal mineral dos ossos e dentes, essencial para sua formação e manutenção."
  },
  {
    id: 4,
    question: "O zinco é especialmente importante para qual função do organismo?",
    options: [
      { letter: "A", text: "Digestão", correct: false },
      { letter: "B", text: "Sistema imunológico", correct: true },
      { letter: "C", text: "Visão noturna", correct: false },
      { letter: "D", text: "Audição", correct: false }
    ],
    explanation: "O zinco fortalece o sistema imunológico e ajuda na cicatrização de feridas."
  },
  {
    id: 5,
    question: "Qual mineral ajuda a regular a pressão arterial?",
    options: [
      { letter: "A", text: "Ferro", correct: false },
      { letter: "B", text: "Iodo", correct: false },
      { letter: "C", text: "Potássio", correct: true },
      { letter: "D", text: "Magnésio", correct: false }
    ],
    explanation: "O potássio ajuda a equilibrar os níveis de sódio e manter a pressão arterial saudável."
  },
  {
    id: 6,
    question: "Em quantas reações enzimáticas o magnésio participa aproximadamente?",
    options: [
      { letter: "A", text: "Mais de 300", correct: true },
      { letter: "B", text: "Cerca de 100", correct: false },
      { letter: "C", text: "Aproximadamente 50", correct: false },
      { letter: "D", text: "Menos de 20", correct: false }
    ],
    explanation: "O magnésio é cofator em mais de 300 reações enzimáticas no corpo humano."
  }
];