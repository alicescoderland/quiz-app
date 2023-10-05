import React from "react";
import quizSelectionStyles from "./QuizSelection.module.css";
import quizSelectionData from "../../data/quizSelectionData";

function ElementMenu() {
  return (
    <section className={quizSelectionStyles.container}>
      {quizSelectionData.map((quizSelectionDataItem) => (
        <div
          key={quizSelectionDataItem.id}
          className={quizSelectionStyles.content}
        >
          <div className={quizSelectionStyles.elements}>
            <img src={quizSelectionDataItem.img} alt="logo" />
            <span>{quizSelectionDataItem.level}</span>
            <span>{quizSelectionDataItem.name}</span>
          </div>
        </div>
      ))}
    </section>
  );
}

export default ElementMenu;
