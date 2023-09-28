import React, { useState } from "react";
import Image from "./components/Image/Image";
import Question from "./components/Questions/Question";
import jsImg from "./assets/image/javascript-logo.png";
import scoreImg from "./assets/image/boy-exploding-party.png";

function App() {
  const [quizState, setQuizState] = useState("quiz");
  
  const updateQuizState = (newState) => {
    setQuizState(newState);
  };
  return (
    <React.Fragment>
      <Image img={quizState === "quiz" ? jsImg : scoreImg} />
      <Question updateQuizState={updateQuizState}/>
    </React.Fragment>
  );
}

export default App;
