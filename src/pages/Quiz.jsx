import React, { useEffect, useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { Quiz as QuizService } from "../services/quiz";
import quizStyles from "./Quiz.module.css";
import Question from "../components/question/Question";
import Score from "../components/progress/Score";
import Image from "../components/image/Image";
import scoreImg from "../assets/image/boy-exploding.png";
import Loading from "../components/loading/Loading";
import Error from "../components/error/Error";

function Quiz() {
  const params = useParams();
  const [loading, setLoading] = useState(true);
  const [currentQuestion, setCurrentQuestion] = useState();
  const [error, setError] = useState(false);

  const quiz = useMemo(() => {
    const service = new QuizService(params.id, params.difficulty);

    return service;
  }, [params.id, params.difficulty]);

  useEffect(() => {
    quiz.Ready.then(() => {
      setCurrentQuestion(quiz.getNextQuestion());
      setLoading(false);
    }).catch((error) => {
      setError(true);
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
      {error ? (
        <Error quizId={params.id} difficulty={params.difficulty} />
      ) : (
        <>
          {loading ? (
            <Loading />
          ) : (
            <>
              <Link to="/" className={quizStyles.link}>
                <FontAwesomeIcon icon={faX} className={quizStyles.icon} />
              </Link>

              {quiz.isCompleted ? (
                <>
                  <Image img={scoreImg} />
                  <Score
                    score={
                      quiz.calculateScore() + "/" + quiz.getQuestionsLength()
                    }
                    quizId={params.id}
                    difficulty={params.difficulty}
                  />
                </>
              ) : (
                <Question
                  {...currentQuestion}
                  onNextQuestion={onNextQuestion}
                  onAnswerSelect={onAnswerSelect}
                  questionsLength={quiz.getQuestionsLength()}
                  currentQuestionIndex={quiz.getCurrentQuestionNumber()}
                />
              )}
            </>
          )}
        </>
      )}
    </section>
  );
}

export default Quiz;
