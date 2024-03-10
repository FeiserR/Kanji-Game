type QuestionBoxProps = {
    score: number;
    input: string;
    setInput: React.Dispatch<React.SetStateAction<string>>;
    setScore: React.Dispatch<React.SetStateAction<number>>;
    setPreviousQuestion: React.Dispatch<React.SetStateAction<string>>;
    setCorrectAnswer: React.Dispatch<React.SetStateAction<string>>;
    setAnswerCorrect: React.Dispatch<React.SetStateAction<boolean>>;
  };

  export default QuestionBoxProps;