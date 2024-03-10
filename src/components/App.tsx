import FightField from "./fightField";
import QuestionBox from "./questionBox";
import ScoreBar from "./scoreBar";
import TypeBox from "./typeBox";
import { useState } from "react";
import CorrectAnswersDisplay from "./CorrectAnswersDisplay";

function App() {
  const [score, setScore] = useState(0);

  const [previousQuestion, setPreviousQuestion] = useState("");

  const [correctAnswer, setCorrectAnswer] = useState("");

  const [answerCorrect, setAnswerCorrect] = useState(false);

  const [input, setInput] = useState("");

  return (
    <>
      <div className="flex flex-col items-center h-screen justify-between bg-gray-800">
        <FightField />
        <div className="flex flex-col gap-10">
          <ScoreBar score={score} />

          <CorrectAnswersDisplay
          previousQuestion={previousQuestion}
          correctAnswer={correctAnswer}
          answerCorrect={answerCorrect}
          />

          <div className="flex flex-col gap-4">
            <QuestionBox
              score={score}
              input={input}
              setInput={setInput}
              setScore={setScore}
              setPreviousQuestion={setPreviousQuestion}
              setCorrectAnswer={setCorrectAnswer}
              setAnswerCorrect={setAnswerCorrect}
            />

            <TypeBox input={input} setInput={setInput} />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
