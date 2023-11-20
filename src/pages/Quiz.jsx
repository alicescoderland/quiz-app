import React, { useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import questionsData from "../data/questionsData";
import { Quiz as QuizService } from "../services/quiz";
import quizStyles from "./Quiz.module.css";
import Questions from "../components/questions/Questions";
import Image from "../components/image/Image";
import scoreImg from "../assets/image/boy-exploding.png";
import Score from "../components/progress/Score";

function Quiz() {
  const params = useParams();

  const [currentQuestion, setCurrentQuestion] = useState();

  const quiz = useMemo(() => {
    const service = new QuizService(params.id);
    setCurrentQuestion(service.getNextQuestion());
    return service;
  }, [params.id]);

  const onNextQuestion = () => {
    setCurrentQuestion(quiz.getNextQuestion());
  };

  const onAnswerSelect = (questionId, answerId) => {
    quiz.submmitAnswer(questionId, answerId);
  };

  const categoryData = questionsData[params.id];
  const categoryImg = categoryData ? categoryData.img : null;

  return (
    <section className={quizStyles.container}>
      <Link to="/" className={quizStyles.link}>
        <FontAwesomeIcon icon={faX} className={quizStyles.icon} />
      </Link>
      <Image img={quiz.isCompleted === true ? scoreImg : categoryImg} />
      {quiz.isCompleted ? (
        <Score
          score={quiz.calculateScore() + "/" + quiz.getQuestionsLength()}
          paramsId={params.id}
        />
      ) : (
        <Questions
          {...currentQuestion}
          onNextQuestion={onNextQuestion}
          onAnswerSelect={onAnswerSelect}
          questionsLength={quiz.getQuestionsLength()}
          currentQuestionIndex={quiz.getCurrentQuestionNumber()}
        />
      )}
    </section>
  );
}

export default Quiz;
