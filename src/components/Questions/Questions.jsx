import { useState } from "react";
import questionStyles from "./Question.module.css";
import Answer from "./Answer";
import Button from "../button/Button";
import Progres from "../progress/Progress";

function Question({
  id,
  question,
  answers,
  correctAnswerId,
  time,
  onNextQuestion,
  onAnswerSelect,
  currentQuestionIndex,
  questionsLength,
}) {
  const [clicked, setClicked] = useState(null);
  const [checked, setChecked] = useState(false);

  const handleAnswerClick = (id) => {
    if (!checked) {
      setClicked(id);
    }
  };

  const handleNextClick = () => {
    onNextQuestion();
    setClicked(null);
    setChecked(false);
  };

  const handleCheckClick = () => {
    if (clicked) {
      onAnswerSelect(id, clicked);
      setChecked(true);
    } else {
      setChecked(null);
    }
  };

  const getButton = () => {
    if (!clicked && !checked) {
      return null;
    }

    if (!checked && clicked) {
      return <Button onClick={handleCheckClick}>Check</Button>;
    }
    if (clicked && checked) {
      return <Button onClick={handleNextClick}>Next</Button>;
    }
  };

  return (
    <section className={questionStyles.container}>
      <Progres
        currentQuestionIndex={currentQuestionIndex}
        questionsLength={questionsLength}
        handleTimeUp={() => {
          handleNextClick();
        }}
        time={time}
      />
      <div key={id} className={questionStyles.question}>
        {question}
      </div>

      <div className={questionStyles.answers}>
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
      </div>

      {getButton()}
    </section>
  );
}
export default Question;
