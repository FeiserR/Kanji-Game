import './App.css'
import transformations from './assets/hiragana'

//Props for TypeBox//
type TypeBoxProps = {
  input: string;
  setInput: React.Dispatch<React.SetStateAction<string>>
}

  //converts romanji to hiragana//
  function transformString (input: string) {
  
    // removes hiragana characters from the input//
    let letters: string = input.replace(/[^a-zA-Z]/g, '')
    let existingHiragana: string = input.replace(/[a-zA-Z]/g, '')

    const char= letters.toLowerCase()
    const mappedLetters = transformations[char]
  
    // makes unmatching inputs be the same as the input//
    if (transformations[char] === undefined) {
      return input
    }
    return existingHiragana + mappedLetters

  }


//TypeBox component//
function TypeBox({input, setInput}: TypeBoxProps) {
  
  //watches the input value and sets it to the input state//
  function handleInputChange (event: React.ChangeEvent<HTMLInputElement>) { 
    setInput(transformString(event.target.value))
   }

  return (
    <>
    <input 
      className='outline-none border-none border-gray-300 px-3 rounded-lg shadow-xl min-w-80 min-h-10 placeholder-white bg-opacity-30 bg-black' 
      onChange={handleInputChange} 
      type="text"
      value={transformString(input)} 
      placeholder='Type here' 
    />
    </>
  )
}

export default TypeBox
