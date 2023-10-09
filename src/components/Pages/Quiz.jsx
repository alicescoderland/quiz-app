import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import Image from "../Image/Image";
import Question from "../Questions/Question";
import jsImg from "../../assets/image/javascript-logo.png";
import scoreImg from "../../assets/image/boy-exploding.png";
import quizStyles from "./Quiz.module.css";

function Quiz() {
  const [quizState, setQuizState] = useState("quiz");

  const handleQuizState = (state) => {
    setQuizState(state);
  };
  return (
    <section className={quizStyles.container}>
      <Link to="/" className={quizStyles.link}> 
        <FontAwesomeIcon icon={faX} className={quizStyles.icon} />
      </Link>
      <Image img={quizState === "quiz" ? jsImg : scoreImg} />
      <Question setQuizState={handleQuizState} />
    </section>
  );
}

export default Quiz;
