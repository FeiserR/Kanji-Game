

class CorrectAnswerBlock{

    question: string;
    answer: string;


    constructor(
        question: string,
        answer: string = ""
    ) {
        this.question = question;
        this.answer = answer;
        this.render()
    }


  render() {
    return (
      <div className=" bg-gray-200 text-center rounded-lg shadow-lg">
        <h3>{this.question}</h3>
        <p>{this.answer}</p>
      </div>
    );
  }
}

export default CorrectAnswerBlock;