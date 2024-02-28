import './App.css'
import QuestionBox from './questionBox'
import TypeBox from './typeBox'
import React, {useState} from 'react'

function App() {
  
  const [input, setInput] = useState('')


  return (
    <>
    <div className=' bg-gradient-to-r from-green-400 to-blue-500 h-screen justify-center items-center w-screen flex flex-col gap-10'>
     <QuestionBox input = {input} />
     <TypeBox input = {input} setInput = {setInput}/>
     </div>
    </>

    )
}


export default App
