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

      <Answer answers={answers} correctAnswerId={currentQuestion.correctAnswerId} />
    </section>
  );
}

export default Question;
