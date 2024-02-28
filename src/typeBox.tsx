import './App.css'
import React, {useState} from 'react'

function TypeBox() {


  const [input, setInput] = useState('')

  function handleInputChange (event: React.ChangeEvent<HTMLInputElement>) { 
    setInput(event.target.value)
   }

  function transformString (input: string) {

    const transformations: {[key: string]: string} = {
      a: 'あ', e: 'え', i: 'い', u: 'う', o: 'お', ka: 'か', sa: 'さ', ta: 'た', na: 'な', ha: 'は', ma: 'ま', ya: 'や', ra: 'ら', wa: 'わ', nn: 'ん', ki: 'き', shi: 'し', chi: 'ち', ni: 'に', hi: 'ひ', mi: 'み', ri: 'り',ku: 'く', su: 'す', tsu: 'つ', nu: 'ぬ', fu: 'ふ', mu: 'む', yu: 'ゆ', ru: 'る',ke: 'け', se: 'せ', te: 'て', ne: 'ね', he: 'へ', me: 'め', re: 'れ',ko: 'こ', so: 'そ', to: 'と', no: 'の', ho: 'ほ', mo: 'も', yo: 'よ', ro: 'ろ',ga: 'が', za: 'ざ', da: 'だ', ba: 'ば', pa: 'ぱ',gi: 'ぎ', ji: 'じ', bi: 'び', pi: 'ぴ',gu: 'ぐ', zu: 'ず', du: 'づ', dsu: 'づ', bu: 'ぶ', pu: 'ぷ',ge: 'げ', ze: 'ぜ', de: 'で', be: 'べ', pe: 'ぺ',go: 'ご', zo: 'ぞ', do: 'ど', bo: 'ぼ', po: 'ぽ',kya: 'きゃ', sha: 'しゃ', cha: 'ちゃ', nya: 'にゃ', hya: 'ひゃ', mya: 'みゃ', rya: 'りゃ',kyu: 'きゅ', shu: 'しゅ', chu: 'ちゅ', nyu: 'にゅ', hyu: 'ひゅ', myu: 'みゅ', ryu: 'りゅ',kyo: 'きょ', sho: 'しょ', cho: 'ちょ', nyo: 'にょ', hyo: 'ひょ', myo: 'みょ', ryo: 'りょ',bya: 'びゃ', pya: 'ぴゃ',byu: 'びゅ', pyu: 'ぴゅ',byo: 'びょ', pyo: 'ぴょ',ja: 'じゃ', ju: 'じゅ', jo: 'じょ', 
    }
  
    // removes hiragana and katakana characters from the input//
    let letters: string = input.replace(/[^a-zA-Z]/g, '')
    let hiraKata: string = input.replace(/[a-zA-Z]/g, '')

    console.log("letters", letters)

    const char= letters.toLowerCase()
    console.log(char)
    letters = transformations[char]
  
    // makes unmatching inputs be the same as the input//
    if (transformations[char] === undefined) {
      return input
    } else {
      return hiraKata + letters
    }

  }


  return (
    <>
    <div className=' bg-gradient-to-r from-green-400 to-blue-500 h-screen justify-center items-center w-screen flex flex-col gap-10'>
    <p className='border-2 border-gray-300 p-2 rounded-lg shadow-xl min-w-80 min-h-10'>{transformString(input)}</p>
    <input className='outline-none p-2 rounded-lg shadow-xl' onChange={handleInputChange} type="text"
    value={transformString(input)} placeholder='Type here' />
    </div>
    </>
  )
}

export default TypeBox
