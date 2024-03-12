import FightField from "./fightField";
import QuestionBox from "./questionBox";
import ScoreBar from "./scoreBar";
import TypeBox from "./typeBox";
import { useState } from "react";
import CorrectAnswersDisplay from "./CorrectAnswersDisplay";
import "./app.css";

function App() {
  const [score, setScore] = useState(0);

  const [previousQuestion, setPreviousQuestion] = useState("");

  const [correctAnswer, setCorrectAnswer] = useState("");

  const [answerCorrect, setAnswerCorrect] = useState(false);

  const [input, setInput] = useState("");

  return (
    <>
      <div className="flex flex-col h-screen justify-start bg-slate-200">
        <FightField />
        <div className="flex justify-between ">
          <div className="m-10">
            <ScoreBar score={score} />
          </div>
          <div className="correctAnswersDisplay flex flex-col gap-10 m-10 bg-neutral-900 rounded-2xl shadow-2xl justify-between content-start">
            <CorrectAnswersDisplay
              previousQuestion={previousQuestion}
              correctAnswer={correctAnswer}
              answerCorrect={answerCorrect}
            />

            <div className="flex flex-col gap-4 place-items-center m-3">
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
      </div>
    </>
  );
}

export default App;
