import Answer from "./Answer";
import questionsData from "../../data/questions.json";
import questionStyle from "./Question.module.css";
import { useState } from "react";

function Question() {
  const [indexToShow, setIndexToShow] = useState(0);
  const currentQuestion = questionsData.questions[indexToShow];
  const answers = currentQuestion.answer;
  const correctAnswerId = currentQuestion.correctAnswerId;

  const [clicked, setClicked] = useState(null);
  const [checked, setChecked] = useState(false);
  const [showCheckButton, setShowCheckButton] = useState(true);

  const handleAnswerClick = (id) => {
    setClicked(id);
  };

  const handleCheckClick = () => {
    setChecked(true);
    setShowCheckButton(false);
  };
  const isAnswerSelected = clicked !== null;

  const handleNextClick = () => {
    setIndexToShow(indexToShow + 1);
    setChecked(false);
    setShowCheckButton(true);
    setClicked(null);
  };

  return (
    <section className={questionStyle.container}>
      <div className={questionStyle.question}>{currentQuestion.question}</div>
      {answers.map((answer) => (
        <Answer
          key={answer.id}
          answer={answer}
          isCorrect={checked ? answer.id === correctAnswerId : null}
          clicked={clicked}
          handleAnswerClick={handleAnswerClick}
          checked={checked}
        />
      ))}
      {isAnswerSelected && showCheckButton ? (
        <button className={questionStyle.navigateBtn} onClick={handleCheckClick}>Check</button>
      ) : null}
      {checked ? <button className={questionStyle.navigateBtn} onClick={handleNextClick}>Next</button> : null}
    </section>
  );
}

export default Question;
