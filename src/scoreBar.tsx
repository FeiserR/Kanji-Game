

type ScoreBarProps = {
    score: number
    }

function ScoreBar({score}: ScoreBarProps) {


  return (
    <div>
      <p>{score}</p>
    </div>
  )
}

export default ScoreBar
