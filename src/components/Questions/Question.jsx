import { useState } from "react";
import Answer from "./Answer";
import questionsData from "../../data/questions.json";
import questionStyle from "./Question.module.css";

const getRandomQuestion = (questions) => {
  const randomQuestionArray = [...questions];
  for (let i = randomQuestionArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [randomQuestionArray[i], randomQuestionArray[j]] = [
      randomQuestionArray[j],
      randomQuestionArray[i],
    ];
  }
  return randomQuestionArray;
};

function Question({ setQuizState }) {
  const [randomQuestion] = useState(getRandomQuestion(questionsData.questions));
  const [indexToShow, setIndexToShow] = useState(0);
  const [clicked, setClicked] = useState(null);
  const [checked, setChecked] = useState(false);
  const [showCheckButton, setShowCheckButton] = useState(true);
  const [score, setScore] = useState(0);
  const [_, setRestart] = useState(false);

  const currentQuestion = randomQuestion[indexToShow];
  const answers = currentQuestion?.answer;
  const correctAnswerId = currentQuestion?.correctAnswerId;
  const isLastQuestion = indexToShow === randomQuestion.length - 1;
  const questionsLength = randomQuestion.length;
  const isAnswerSelected = clicked !== null;

  const handleAnswerClick = (id) => {
    if (!checked) {
      setClicked(id);
    }
  };

  const handleCheckClick = () => {
    if (isAnswerSelected) {
      setChecked(true);
      setShowCheckButton(false);
      if (clicked === correctAnswerId) {
        setScore(score + 1);
      }
    } else {
      setChecked(null);
    }
  };

  const handleNextClick = () => {
    if (isAnswerSelected) {
      if (indexToShow + 1 === randomQuestion.length) {
      }
      setIndexToShow(indexToShow + 1);
      setChecked(false);
      setShowCheckButton(true);
      setClicked(null);
    } else {
      setQuizState("score");
      setChecked(null);
      setRestart(true);
      setIndexToShow(0);
      setScore(0);
    }
  };

  return (
    <section className={questionStyle.container}>
      {currentQuestion ? (
        <>
          <div className={questionStyle.questionNubmers}>
            question {indexToShow + 1} of {questionsLength}
          </div>
          <div className={questionStyle.question}>
            {currentQuestion.question}
          </div>

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
        </>
      ) : (
        <>
          <div className={questionStyle.score}>
            <p>Your score: </p>
            <p>
              {score}/{questionsLength}
            </p>
          </div>
          <button
            className={questionStyle.navigateBtn}
            onClick={handleNextClick}
          >
            {isLastQuestion ? "SHOW SCORE" : "Try Again"}
          </button>
        </>
      )}

      {isAnswerSelected && showCheckButton ? (
        <button
          className={questionStyle.navigateBtn}
          onClick={handleCheckClick}
        >
          Check
        </button>
      ) : null}

      {checked ? (
        <button className={questionStyle.navigateBtn} onClick={handleNextClick}>
          {isLastQuestion ? "SHOW SCORE" : "Next"}
        </button>
      ) : null}
    </section>
  );
}
export default Question;
