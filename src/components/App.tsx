import FightField from "./fightField";
import QuestionBox from "./questionBox";
import ScoreBar from "./scoreBar";
import TypeBox from "./typeBox";
import { useState } from "react";
import background from "../assets/pictures/Background.png";

function App() {
  const [score, setScore] = useState(0);

  const [input, setInput] = useState("");

  return (
    <>
      {/* make the background image fit in the page rather than making the page bigger */}
      <div
        className=" bg-center h-screen w-screen bg-no-repeat bg-fixed bg-contain overflow-hidden"
        style={{ backgroundImage: `url(${background})` }}
      >
        {/* every value that is passed to a component needs to be passed as a prop, so
       it's necessary to include it in the props of the component */}
        <FightField />
        <div className="flex">
          <ScoreBar score={score} />

          <div className="pl-96 flex flex-col justify-center items-center">
            <QuestionBox
              score={score}
              input={input}
              setInput={setInput}
              setScore={setScore}
            />

            <TypeBox input={input} setInput={setInput} />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
