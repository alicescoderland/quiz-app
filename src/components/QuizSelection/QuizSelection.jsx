import React from "react";
import { Link } from "react-router-dom";
import quizSelectionStyles from "./QuizSelection.module.css";
import quizSelectionData from "../../data/quizSelectionData";

function QuizSelection() {
  return (
    <section className={quizSelectionStyles.container}>
      {quizSelectionData.map((quizSelectionDataItem) => (
        
        <div className={quizSelectionStyles.content}  key={quizSelectionDataItem.id}><Link
        
          to={`/quiz/${quizSelectionDataItem.id}`}
          className={quizSelectionStyles.link}
        >
          
            <div className={quizSelectionStyles.elements}>
              <img src={quizSelectionDataItem.img} alt="logo" />
              <span>{quizSelectionDataItem.level}</span>
              <span>{quizSelectionDataItem.name}</span>
            </div>
        </Link>
          </div>
      ))}
    </section>
  );
}

export default QuizSelection;
