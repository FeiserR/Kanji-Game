import './App.css'
import QuestionBox from './questionBox'
import ScoreBar from './scoreBar';
import TypeBox from './typeBox'
import {useState} from 'react'

function App() {
  const [score, setScore] = useState(0)
  
  const [input, setInput] = useState('')

  return (
    <>
    <div className=' bg-gradient-to-r from-green-400 to-blue-500 h-screen justify-center items-center w-screen flex flex-col gap-10'>
      {/* every value that is passed to a component needs to be passed as a prop, so
       it's necessary to include it in the props of the component */}
      <ScoreBar
      score = {score}
      />       
      <QuestionBox 
      score = {score}
      input = {input} 
      setInput = {setInput} 
      setScore = {setScore} 
      />


      <TypeBox 
      input = {input} 
      setInput = {setInput}
      />
     </div>
    </>

    )
}


export default App
