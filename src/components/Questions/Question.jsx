import Answer from "./Answer";
import questionsData from "../../data/questions.json";
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
    console.log("Kliknięto jakiś answer");
    setClicked(id);
  };

  const handleCheckClick = () => {
    console.log("Kliknięto check");
    setChecked(true);
    setShowCheckButton(false);
  };
  const isAnswerSelected = clicked !== null;

  const handleNextClick = () => {
    console.log("Kliknieo next");
    setIndexToShow(indexToShow + 1)
    setChecked(false);
    setShowCheckButton(true);
    setClicked(null); 
  };

  return (
    <section>
      <div>{currentQuestion.question}</div>
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
        <button onClick={handleCheckClick}>Check</button>
      ) : null}
      {checked ? <button onClick={handleNextClick}>Next</button> : null}
    </section>
  );
}

export default Question;
