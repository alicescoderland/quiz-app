import classNames from "classnames/bind";
import answerStyles from "./Answer.module.css";
import Button from "../button/Button";

let cN = classNames.bind(answerStyles);

function Answer({ answer, handleAnswerClick, checked, isCorrect, clicked }) {
  let className = cN({
    correct: checked && isCorrect,
    unCorrect: checked && !isCorrect && clicked === answer,
    click: clicked === answer && !checked,
  });

  return (
    <section className={answerStyles.container}>
      <Button
        className={className}
        key={answer}
        onClick={() => {
          handleAnswerClick(answer);
        }}
      >
        <div dangerouslySetInnerHTML={{ __html: answer }}></div>
      </Button>
    </section>
  );
}
export default Answer;
