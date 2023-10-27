import { useState } from "react";
import { Link } from "react-router-dom";
import Answer from "./Answer";
import questionsData from "../../data/questionsData";
import questionStyles from "./Question.module.css";
import Progres from "../Progres/Progres";

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

function Question({ setQuizState, id }) {
  const [randomQuestion] = useState(getRandomQuestion(questionsData[id].questions));
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
        setQuizState("score");
      }
      nextQuestion();
    } else {
      setChecked(null);
      setRestart(true);
      setIndexToShow(0);
      setScore(0);
      setQuizState("quiz");
    }
  };

  const nextQuestion = () => {
    setIndexToShow(indexToShow + 1);
    setChecked(false);
    setShowCheckButton(true);
    setClicked(null);
  };

  return (
    <>
      <section className={questionStyles.container}>
        {currentQuestion ? (
          <>
            <Progres
              indexToShow={indexToShow}
              questionsLength={questionsLength}
              handleTimeUp={() => {
                nextQuestion();
              }}
              time={currentQuestion.time}
            />
            <div className={questionStyles.question}>
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
            <div className={questionStyles.score}>
              <p>Your score: </p>
              <p>
                {score}/{questionsLength}
              </p>
            </div>
            <Link to="/">
              <button className={questionStyles.goToMenuBtn}>Go to menu</button>{" "}
            </Link>
            <button
              className={questionStyles.navigateBtn}
              onClick={handleNextClick}
            >
              {isLastQuestion ? "SHOW SCORE" : "Try Again"}
            </button>
          </>
        )}

        {isAnswerSelected && showCheckButton ? (
          <button
            className={questionStyles.navigateBtn}
            onClick={handleCheckClick}
          >
            Check
          </button>
        ) : null}

        {checked ? (
          <button
            className={questionStyles.navigateBtn}
            onClick={handleNextClick}
          >
            {isLastQuestion ? "SHOW SCORE" : "Next"}
          </button>
        ) : null}
      </section>
    </>
  );
}
export default Question;
