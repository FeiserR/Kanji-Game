type ScoreBarProps = {
  score: number;
};

function ScoreBar({ score }: ScoreBarProps) {
  return (
    <div className="p-5 rounded-lg text-center w-1/4 m-8">
      <p className="text-2xl font-bold white">Score: {score}</p>
    </div>
  );
}

export default ScoreBar;
