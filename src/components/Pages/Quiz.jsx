import React, { useState } from "react";
import Image from "../Image/Image";
import Question from "../Questions/Question";
import jsImg from "../../assets/image/javascript-logo.png";
import scoreImg from "../../assets/image/boy-exploding.png";

function Quiz() {
  const [quizState] = useState("quiz");

  return (
    <>
      <Image img={quizState === "quiz" ? jsImg : scoreImg} />
      <Question />
    </>
  );
}

export default Quiz;
