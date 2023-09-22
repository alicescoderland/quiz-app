import Answer from "./Answer";
import questionsData from "../../data/questions.json";
import { useState } from "react";

function Question() {
  const indexToShow = 0;
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
    setChecked(false);
    setShowCheckButton(true);
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
      {isAnswerSelected && showCheckButton ? ( // Pokaż przycisk "Check" tylko jeśli wybrano odpowiedź
        <button onClick={handleCheckClick}>Check</button>
      ) : null}
      {checked ? <button onClick={handleNextClick}>Next</button> : null}
    </section>
  );
}

export default Question;
