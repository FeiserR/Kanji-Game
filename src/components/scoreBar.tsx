type ScoreBarProps = {
  score: number;
};

function ScoreBar({ score }: ScoreBarProps) {
  return (
    <div className="ScoreBar">
      <p className="ScoreBarText">Score: {score}</p>
    </div>
  );
}

export default ScoreBar;
