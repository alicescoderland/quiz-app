import React, { useEffect, useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { Quiz as QuizService } from "../services/quiz";
import quizStyles from "./Quiz.module.css";
import Questions from "../components/questions/Questions";
import Image from "../components/image/Image";
import scoreImg from "../assets/image/boy-exploding.png";
import Score from "../components/progress/Score";

function Quiz() {
  const params = useParams();
  const [loading, setLoading] = useState(true);
  const [currentQuestion, setCurrentQuestion] = useState();

  const quiz = useMemo(() => {
    const service = new QuizService(params.id, params.difficulty);

    return service;
  }, [params.id, params.difficulty]);

  useEffect(() => {
    quiz.Ready.then(() => {
      setCurrentQuestion(quiz.getNextQuestion());
      setLoading(false);
    }).catch((error) => {
      console.log("error");
    });
  }, []);

  const onNextQuestion = () => {
    setCurrentQuestion(quiz.getNextQuestion());
  };

  const onAnswerSelect = (questionId, answer) => {
    quiz.submmitAnswer(questionId, answer);
  };

  return (
    <section className={quizStyles.container}>
      {loading ? (
        <span>Loading </span>
      ) : (
        <>
          <Link to="/" className={quizStyles.link}>
            <FontAwesomeIcon icon={faX} className={quizStyles.icon} />
          </Link>

          {quiz.isCompleted ? (
            <>
              <Image img={scoreImg} />
              <Score
                score={quiz.calculateScore() + "/" + quiz.getQuestionsLength()}
                quizId={params.id} difficulty={params.difficulty}
              />
            </>
          ) : (
            <Questions
              {...currentQuestion}
              onNextQuestion={onNextQuestion}
              onAnswerSelect={onAnswerSelect}
              questionsLength={quiz.getQuestionsLength()}
              currentQuestionIndex={quiz.getCurrentQuestionNumber()}
            />
          )}
        </>
      )}
    </section>
  );
}

export default Quiz;
