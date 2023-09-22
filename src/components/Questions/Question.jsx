import Answer from "./Answer";
import questionsData from "../../data/questions.json";

function Question() {
  const indexToShow = 0;
  const currentQuestion = questionsData.questions[indexToShow];
  const answers = currentQuestion.answer;

  return (
    <section>
      <div>
        <p>{currentQuestion.question}</p>
      </div>
      {answers.map((answer) => (
        <Answer key={answer.id} answer={answer} />
      ))}
    </section>
  );
}

export default Question;
