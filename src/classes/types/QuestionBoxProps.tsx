type QuestionBoxProps = {
    score: number;
    input: string;
    setInput: React.Dispatch<React.SetStateAction<string>>;
    setScore: React.Dispatch<React.SetStateAction<number>>;
  };

  export default QuestionBoxProps;