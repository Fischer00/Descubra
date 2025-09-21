import React, { useState } from 'react';
import { Brain, CheckCircle, XCircle, RotateCcw, Trophy } from 'lucide-react';
import { quizQuestions } from '../data/quiz';

const Quiz: React.FC = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [userAnswers, setUserAnswers] = useState<string[]>([]);
  const [isNextDisabled, setIsNextDisabled] = useState(false); // ✅ trava cliques múltiplos

  const handleAnswerSelect = (letter: string) => {
    if (showResult) return;
    setSelectedAnswer(letter);
  };

  const handleNextQuestion = () => {
    if (!selectedAnswer || isNextDisabled) return;

    setIsNextDisabled(true); // ✅ trava ao clicar

    const currentQ = quizQuestions[currentQuestion];
    const selectedOption = currentQ.options.find(opt => opt.letter === selectedAnswer);
    const newAnswers = [...userAnswers, selectedAnswer];
    setUserAnswers(newAnswers);

    if (selectedOption?.correct) {
      setScore((prev) => prev + 1);
    }

    setShowResult(true);

    setTimeout(() => {
      if (currentQuestion < quizQuestions.length - 1) {
        setCurrentQuestion((prev) => prev + 1);
        setSelectedAnswer(null);
        setShowResult(false);
      } else {
        setQuizCompleted(true);
      }
      setIsNextDisabled(false); // ✅ libera para próxima
    }, 2000);
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setScore(0);
    setQuizCompleted(false);
    setUserAnswers([]);
    setIsNextDisabled(false);
  };

  const getScoreMessage = () => {
    const percentage = (score / quizQuestions.length) * 100;
    if (percentage >= 80) return { message: "Excelente! Você domina o assunto!", color: "text-green-600" };
    if (percentage >= 60) return { message: "Muito bom! Continue estudando!", color: "text-blue-600" };
    return { message: "Continue aprendendo! A prática leva à perfeição!", color: "text-orange-600" };
  };

  if (quizCompleted) {
    const scoreMessage = getScoreMessage();
    return (
      <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
        <div className="mb-6">
          <Trophy className="w-16 h-16 text-yellow-500 mx-auto mb-4" />
          <h3 className="text-3xl font-bold text-gray-800 mb-2">Quiz Concluído!</h3>
          <div className="text-5xl font-bold text-blue-600 mb-2">
            {score}/{quizQuestions.length}
          </div>
          <p className={`text-lg ${scoreMessage.color} font-semibold`}>
            {scoreMessage.message}
          </p>
        </div>
        
        <div className="bg-gray-50 rounded-lg p-4 mb-6">
          <h4 className="font-semibold text-gray-800 mb-3">Sua pontuação:</h4>
          <div className="text-2xl font-bold text-blue-600">
            {Math.round((score / quizQuestions.length) * 100)}%
          </div>
        </div>
        
        <button
          onClick={resetQuiz}
          className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-300 flex items-center gap-2 mx-auto"
        >
          <RotateCcw className="w-5 h-5" />
          Tentar Novamente
        </button>
      </div>
    );
  }

  const currentQ = quizQuestions[currentQuestion];
  const selectedOption = currentQ.options.find(opt => opt.letter === selectedAnswer);

  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Brain className="w-8 h-8" />
            <h3 className="text-2xl font-bold">Quiz dos Minerais</h3>
          </div>
          <div className="text-lg font-semibold">
            {currentQuestion + 1}/{quizQuestions.length}
          </div>
        </div>
        
        <div className="mt-4 bg-white/20 rounded-full h-2">
          <div 
            className="bg-green-400 h-2 rounded-full transition-all duration-500"
            style={{ width: `${((currentQuestion + 1) / quizQuestions.length) * 100}%` }}
          ></div>
        </div>
      </div>

      <div className="p-8">
        <h4 className="text-xl font-semibold text-gray-800 mb-6">
          {currentQ.question}
        </h4>

        <div className="space-y-3 mb-6">
          {currentQ.options.map((option) => {
            let buttonClass = "w-full p-4 text-left rounded-lg border-2 transition-all duration-300 ";
            
            if (!showResult) {
              buttonClass += selectedAnswer === option.letter 
                ? "border-blue-500 bg-blue-50 text-blue-700"
                : "border-gray-200 hover:border-blue-300 hover:bg-blue-50";
            } else {
              if (option.correct) {
                buttonClass += "border-green-500 bg-green-50 text-green-700";
              } else if (selectedAnswer === option.letter && !option.correct) {
                buttonClass += "border-red-500 bg-red-50 text-red-700";
              } else {
                buttonClass += "border-gray-200 text-gray-500";
              }
            }

            return (
              <button
                key={option.letter}
                onClick={() => handleAnswerSelect(option.letter)}
                className={buttonClass}
                disabled={showResult}
              >
                <div className="flex items-center gap-3">
                  <span className="font-bold text-lg min-w-[2rem]">
                    {option.letter})
                  </span>
                  <span className="flex-1">{option.text}</span>
                  {showResult && option.correct && (
                    <CheckCircle className="w-6 h-6 text-green-600" />
                  )}
                  {showResult && selectedAnswer === option.letter && !option.correct && (
                    <XCircle className="w-6 h-6 text-red-600" />
                  )}
                </div>
              </button>
            );
          })}
        </div>

        {showResult && (
          <div className={`p-4 rounded-lg mb-6 ${selectedOption?.correct ? 'bg-green-50 border border-green-200' : 'bg-red-50 border border-red-200'}`}>
            <p className={`font-semibold mb-2 ${selectedOption?.correct ? 'text-green-800' : 'text-red-800'}`}>
              {selectedOption?.correct ? '✅ Correto!' : '❌ Incorreto!'}
            </p>
            <p className="text-gray-700">{currentQ.explanation}</p>
          </div>
        )}

        <div className="flex justify-between items-center">
          <div className="text-sm text-gray-500">
            Pontuação: {score}/{currentQuestion + (showResult ? 1 : 0)}
          </div>
          
          <button
            onClick={handleNextQuestion}
            disabled={!selectedAnswer || isNextDisabled}
            className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
              selectedAnswer && !isNextDisabled
                ? 'bg-gradient-to-r from-green-600 to-green-700 text-white hover:from-green-700 hover:to-green-800' 
                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
            }`}
          >
            {currentQuestion === quizQuestions.length - 1 ? 'Finalizar' : 'Próxima'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Quiz;
