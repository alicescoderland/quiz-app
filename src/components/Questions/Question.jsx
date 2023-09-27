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

function Question() {
  const [randomQuestion] = useState(getRandomQuestion(questionsData.questions));
  const [indexToShow, setIndexToShow] = useState(0);
  const [clicked, setClicked] = useState(null);
  const [checked, setChecked] = useState(false);
  const [showCheckButton, setShowCheckButton] = useState(true);
  const [score, setScore] = useState(0);

  const currentQuestion = randomQuestion[indexToShow];
  const answers = currentQuestion?.answer;
  const correctAnswerId = currentQuestion?.correctAnswerId;
  const isLastQuestion = indexToShow === randomQuestion.length - 1;
  const questionsLength = randomQuestion.length;

  const handleAnswerClick = (id) => {
    setClicked(id);
  };

  const handleCheckClick = () => {
    setChecked(true);
    setShowCheckButton(false);
    if (clicked === correctAnswerId) {
      setScore(score + 1);
    }
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
      {currentQuestion ? (
        <>
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
        <div className={questionStyle.score}>
          <p>Your score: </p>
          <p>{score}/{questionsLength}</p>
        </div>
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
