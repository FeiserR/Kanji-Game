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
        let block = document.createElement("p");
        block.classList.add("block");
        
        answersDictionary[previousQuestion] = createAnaswerBlock(previousQuestion, correctAnswer );
           
        
        block.textContent = answersDictionary[previousQuestion].question;
        block.textContent += answersDictionary[previousQuestion].answer;

        display.appendChild(block);


    }
    } , [answerCorrect])




        return (
            <div id='display' className='flex absolute'>

            </div>
        )

 }


 
 export default CorrectAnswersDisplay;
