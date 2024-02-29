

type ScoreBarProps = {
    score: number
    }

function ScoreBar({score}: ScoreBarProps) {


  return (
    <div className='bg-white p-5 rounded-lg shadow-lg text-center w-1/4 mx-auto' >
      <p className='text-2xl font-bold text-black'>Score: {score}</p>
    </div>
  )
}

export default ScoreBar
