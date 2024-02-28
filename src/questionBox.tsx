import React, { useState, useEffect } from 'react'
import questions from './assets/questions.json'

type QuestionBoxProps = {
  input: string
}

type Question = {
  question: string
  answer: string
  translation: string
}



function QuestionBox({input}: QuestionBoxProps) {

  const [question, setQuestion] = useState('')

  

  useEffect(() => { 
    const nextQuestion = getRandomQuestion()
    console.log(nextQuestion)
    setQuestion(nextQuestion.question) 
  
  }, [])

   

  function getRandomQuestion(): Question {
      
      const randomIndex = Math.floor(Math.random() * questions.length)

    return questions[randomIndex]
  }
  

  return (

      <div className=" text-center text-white shadow-lg shadow-blue-500/50 bg-gradient-to-r from-blue-400 to-purple-600 rounded-lg p-3 w-3/4 mx-auto max-w-3xl h-96 flex flex-col justify-center">
  
      <p className="w-3/4 mx-auto font-bold  text-9xl">{question}</p>
      </div>

    )
}

export default QuestionBox