import classNames from "classnames/bind";
import answerStyles from "./Answer.module.css";

let cN = classNames.bind(answerStyles);

function Answer({ answer, handleAnswerClick, checked, isCorrect, clicked }) {
  let className = cN({
    correct: checked && isCorrect,
    unCorrect: checked && !isCorrect && clicked === answer.id,
    click: clicked === answer.id && !checked,
  });

  return (
    <section className={answerStyles.container}>
      <button
        className={className}
        key={answer.id}
        onClick={() => {
          handleAnswerClick(answer.id);
        }}
      >
        {answer.answer}
      </button>
    </section>
  );
}
export default Answer;
