import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import quizStyles from "./Quiz.module.css";
import Image from "../Image/Image";
import scoreImg from "../../assets/image/boy-exploding.png";
import Question from "../Questions/Question";
import questionsData from "../../data/questionsData";

function Quiz() {
  const params = useParams();
  const [quizState, setQuizState] = useState("quiz");

  const handleQuizState = (state) => {
    setQuizState(state);
  };

  const categoryData = questionsData[params.id];
  const categoryImg = categoryData ? categoryData.img : null;

  return (
    <section className={quizStyles.container}>
      <Link to="/" className={quizStyles.link}>
        <FontAwesomeIcon icon={faX} className={quizStyles.icon} />
      </Link>
      <Image img={quizState === "quiz" ? categoryImg : scoreImg} />
      <Question setQuizState={handleQuizState} id={params.id} />
    </section>
  );
}

export default Quiz;
