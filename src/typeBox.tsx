import './App.css'
import React, {useState} from 'react'

type TypeBoxProps = {

  input: string;
  setInput: React.Dispatch<React.SetStateAction<string>>
  
}

function TypeBox({input, setInput}: TypeBoxProps) {

  function handleInputChange (event: React.ChangeEvent<HTMLInputElement>) { 
    setInput(event.target.value)
   }

   
   const transformations: {[key: string]: string} = {
    a: 'あ', e: 'え', i: 'い', u: 'う', o: 'お', ka: 'か', sa: 'さ', ta: 'た', na: 'な', ha: 'は', ma: 'ま', ya: 'や', ra: 'ら', wa: 'わ', nn: 'ん', ki: 'き', shi: 'し', chi: 'ち', ni: 'に', hi: 'ひ', mi: 'み', ri: 'り',ku: 'く', su: 'す', tsu: 'つ', nu: 'ぬ', fu: 'ふ', mu: 'む', yu: 'ゆ', ru: 'る',ke: 'け', se: 'せ', te: 'て', ne: 'ね', he: 'へ', me: 'め', re: 'れ',ko: 'こ', so: 'そ', to: 'と', no: 'の', ho: 'ほ', mo: 'も', yo: 'よ', ro: 'ろ',ga: 'が', za: 'ざ', da: 'だ', ba: 'ば', pa: 'ぱ',gi: 'ぎ', ji: 'じ', bi: 'び', pi: 'ぴ',gu: 'ぐ', zu: 'ず', du: 'づ', dsu: 'づ', bu: 'ぶ', pu: 'ぷ',ge: 'げ', ze: 'ぜ', de: 'で', be: 'べ', pe: 'ぺ',go: 'ご', zo: 'ぞ', do: 'ど', bo: 'ぼ', po: 'ぽ',kya: 'きゃ', sha: 'しゃ', cha: 'ちゃ', nya: 'にゃ', hya: 'ひゃ', mya: 'みゃ', rya: 'りゃ',kyu: 'きゅ', shu: 'しゅ', chu: 'ちゅ', nyu: 'にゅ', hyu: 'ひゅ', myu: 'みゅ', ryu: 'りゅ',kyo: 'きょ', sho: 'しょ', cho: 'ちょ', nyo: 'にょ', hyo: 'ひょ', myo: 'みょ', ryo: 'りょ',bya: 'びゃ', pya: 'ぴゃ',byu: 'びゅ', pyu: 'ぴゅ',byo: 'びょ', pyo: 'ぴょ',ja: 'じゃ', ju: 'じゅ', jo: 'じょ', kka: 'っか', kki: 'っき', kku: 'っく', kke: 'っけ', kko: 'っこ', kkya: 'っきゃ', kkyu: 'っきゅ', kkyo: 'っきょ', gga: 'っが', ggi: 'っぎ', ggu: 'っぐ', gge: 'っげ', ggo: 'っご', gya: 'っぎゃ', gyu: 'っぎゅ', gyo: 'っぎょ', ssa: 'っさ', ssi: 'っし', ssu: 'っす', sse: 'っせ', sso: 'っそ', ssha: 'っしゃ', sshu: 'っしゅ', ssho: 'っしょ', tta: 'った', tti: 'っち', ttu: 'っつ', tte: 'って', tto: 'っと', ccha: 'っちゃ', cchu: 'っちゅ', ccho: 'っちょ', nna: 'っな', nni: 'っに', nnu: 'っぬ', nne: 'っね', nno: 'っの', nnya: 'っにゃ', nnyu: 'っにゅ', nnyo: 'っにょ', hha: 'っは', hhi: 'っひ', hhu: 'っふ', hhe: 'っへ', hho: 'っほ', hhya: 'っひゃ', hhyu: 'っひゅ', hhyo: 'っひょ', mma: 'っま', mmi: 'っみ', mmu: 'っむ', mme: 'っめ', mmo: 'っも', mmya: 'っみゃ', mmyu: 'っみゅ', mmyo: 'っみょ', rra: 'っら', rri: 'っり', rru: 'っる', rre: 'っれ', rro: 'っろ', rrya: 'っりゃ', rryu: 'っりゅ', rryo: 'っりょ', ggya: 'っぎゃ', ggyu: 'っぎゅ', ggyo: 'っぎょ', jja: 'っじゃ', jju: 'っじゅ', jjo: 'っじょ', bba: 'っば', bbi: 'っび', bbu: 'っぶ', bbe: 'っべ', bbo: 'っぼ', bbya: 'っびゃ', bbyu: 'っびゅ', bbyo: 'っびょ', ppa: 'っぱ', ppi: 'っぴ', ppu: 'っぷ', ppe: 'っぺ', ppo: 'っぽ', ppya: 'っぴゃ', ppyu: 'っぴゅ', ppyo: 'っぴょ', cchi: 'っち', je: 'じぇ', zzu: 'っず', co: 'こ', cu: 'く', ca: 'か', cca: 'っか', cco: 'っこ', cce: 'っけ', ccu:'っく', tu:'つ', ttsu: 'っつ'
  }

  function transformString (input: string) {
  
    // removes hiragana and katakana characters from the input//
    let letters: string = input.replace(/[^a-zA-Z]/g, '')
    let hiraKata: string = input.replace(/[a-zA-Z]/g, '')

    const char= letters.toLowerCase()
    letters = transformations[char]
  
    // makes unmatching inputs be the same as the input//
    if (transformations[char] === undefined) {
      return input
    } else {
      return hiraKata + letters
    }

  }

  return (
    <input 
      className='outline-none border-none border-gray-300 px-3 rounded-lg shadow-xl min-w-80 min-h-10 placeholder-white bg-opacity-30 bg-black' 
      onChange={handleInputChange} 
      type="text"
      value={transformString(input)} 
      placeholder='Type here' 
    />
  )
}

export default TypeBox
