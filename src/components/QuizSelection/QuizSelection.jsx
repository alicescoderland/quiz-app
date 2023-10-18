import React from "react";
import { Link } from "react-router-dom";
import quizSelectionStyles from "./QuizSelection.module.css";
import quizSelectionData from "../../data/quizSelectionData";

function ElementMenu() {
  return (
    <section className={quizSelectionStyles.container}>
      {quizSelectionData.map((quizSelectionDataItem) => (
        
        <div className={quizSelectionStyles.content}><Link
          key={quizSelectionDataItem.id}
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

export default ElementMenu;
