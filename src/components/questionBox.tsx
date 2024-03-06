import { useState, useEffect } from "react";
import questions from "../assets/Data/kanken_10k.json";
import QuestionBoxProps from "../classes/types/QuestionBoxProps.tsx";
import Question from "../classes/types/Question.tsx";

const defaultQuestion: Question = {
  question: "",
  answer: [],
  translation: "",
};

function QuestionBox({ score, setScore, input, setInput }: QuestionBoxProps) {
  const [currentQuestion, setCurrentQuestion] = useState(defaultQuestion);

  function goToNextQuestion() {
    // don't allow the same question to be asked twice in a row//

    let nextQuestion = getRandomQuestion();
    while (nextQuestion === currentQuestion) {
      nextQuestion = getRandomQuestion();
    }
    setInput("");
    setCurrentQuestion(nextQuestion);
  }

  // verify if the input is correct and then change the question//
  useEffect(() => {
    currentQuestion.answer.forEach((answer) => {
      if (input === answer) {
        setScore(score + 1);
        goToNextQuestion();
      }
    });
  }, [input]);

  //this useeffect has no deppendencies so it only runs once//
  useEffect(() => {
    goToNextQuestion();
  }, []);

  function getRandomQuestion(): Question {
    const randomIndex = Math.floor(Math.random() * questions.length);

    return questions[randomIndex];
  }

  return (
    <div className=" text-center rounded-lg p-3 w-3/4 mx-auto max-w-3xl h-96 flex flex-col justify-center">
      {/* <p>currentQuestion length {currentQuestion.answer.length}</p> */}
      <p className="w-3/4 mx-auto font-bold  text-9xl">
        {currentQuestion.question}
      </p>
    </div>
  );
}

export default QuestionBox;
