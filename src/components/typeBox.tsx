import transformations from "../assets/Data/hiragana";
import React from "react";
import "./app.css";

//Props for TypeBox//
type TypeBoxProps = {
  input: string;
  setInput: React.Dispatch<React.SetStateAction<string>>;
};

//converts romanji to hiragana//
function transformString(input: string) {
  // removes hiragana characters from the input//
  let letters: string = input.replace(/[^a-zA-Z]/g, "");
  let existingHiragana: string = input.replace(/[a-zA-Z]/g, "");

  const char = letters.toLowerCase();
  const mappedLetters = transformations[char];
//compare the event key to any of the elements of an array of all the numbers

  const blockedSymbols = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9","_","=","+","[","]","{","}","|",";",":","'","<",">","?","/",".",",","!","@","#","$","%","^","&","*","(",")","~","`","_","-"," ","'",'"',"\\"];

  window.addEventListener('keypress', function(event) {
    if (blockedSymbols.includes(event.key)) {
      event.preventDefault();
    }
  });


  // makes unmatching inputs be the same as the input//
  if (transformations[char] === undefined) {
    return input;
  }
  return existingHiragana + mappedLetters;
}

//TypeBox component//
function TypeBox({ input, setInput }: TypeBoxProps) {
  //watches the input value and sets it to the input state//
  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    setInput(transformString(event.target.value));
  }

  return (
    <>
      <input
        id="typeBox"
        className="w-1/2 h-10 p-2 text-2xl text-cente decoration-black"
        onChange={handleInputChange}
        type="text"
        value={transformString(input)}
        placeholder="Type here"
      />
    </>
  );
}

export default TypeBox;
