import CorrectAnswerBlock from "../classes/typingBox/CorrectAnswerBlock"


function createAnswerBlock (question:string, answer:string = "") {

    let answerBlock = new CorrectAnswerBlock(question, answer)

    return (answerBlock);
    }


export default createAnswerBlock;