import React from "react";
import { Link } from "react-router-dom";
import menuStyles from "./Menu.module.css";
import quizesData from "../../data/quizesData";

function Menu() {
  return (
    <section className={menuStyles.container}>
      {quizesData.map((quizesDataItem) => (
        <div className={menuStyles.content} key={quizesDataItem.id}>
          <Link to={`/quiz/${quizesDataItem.id}`} className={menuStyles.link}>
            <div className={menuStyles.elements}>
              <img src={quizesDataItem.img} alt="logo" />
              <span>{quizesDataItem.level}</span>
              <span>{quizesDataItem.name}</span>
            </div>
          </Link>
        </div>
      ))}
    </section>
  );
}

export default Menu;
