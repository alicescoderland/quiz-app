import Answer from "./Answer";
import questionsData from "../../data/questions.json";
import { useState } from "react";

function Question() {
  const indexToShow = 0;
  const currentQuestion = questionsData.questions[indexToShow];
  const answers = currentQuestion.answer;
  const correctAnswerId = currentQuestion.correctAnswerId;

  const [clicked, setClicked] = useState(null);
  const [checked, setChecked] = useState(null);

  const handleClick = (id) => {
    console.log("Kliknięto jakiś answer");
    setClicked(id);
  };

  const handleCheckClick = () => {
    console.log("Kliknięto check");
    setChecked(true);
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
          handleClick={handleClick}
          checked={checked}
        />
      ))}
      <button onClick={handleCheckClick}>Check</button>
    </section>
  );
}

export default Question;
