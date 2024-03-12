import { useEffect } from 'react';
import CorrectAnswersDisplayProps from '../classes/types/CorrectAnswersDisplayProps';
import CorrectAnswerBlock from '../classes/typingBox/CorrectAnswerBlock';
import createAnaswerBlock from '../functions/createAnswerBlock';
 
 
 function CorrectAnswersDisplay({previousQuestion, correctAnswer, answerCorrect}: CorrectAnswersDisplayProps) {
     const answersDictionary: { [key: string]: CorrectAnswerBlock } = {}
     console.log(previousQuestion)
    useEffect(() => {
    if (answerCorrect) {
        //create a new answer block with the previous question and the correct answer in 
        console.log(previousQuestion)

        const display: HTMLElement = document.getElementById("display")!;
        let block = document.createElement("div");
        block.classList.add("block");
        
        answersDictionary[previousQuestion] = createAnaswerBlock(previousQuestion, correctAnswer);

        let question= document.createElement("h1");
        question.classList.add("question");

        let answer = document.createElement("p");
        answer.classList.add("answer");
           
        
        question.textContent = answersDictionary[previousQuestion].question;
        answer.textContent = answersDictionary[previousQuestion].answer;

        block.appendChild(question);
        block.appendChild(answer);
        display.appendChild(block);


    }
    } , [answerCorrect])




        return (
            <div id='display' className=' rounded-2xl border-2 border-black flex text-center fit-content gap-5 p-2 flex-wrap bg-neutral-900 overflow-auto h-96 items-start'>

            </div>
        )

 }


 
 export default CorrectAnswersDisplay;
