import { Link } from "react-router-dom";
import Button from "../button/Button";
import scoreStyles from "./Score.module.css";

function Score({ score, quizId, difficulty }) {
  return (
    <section className={scoreStyles.container}>
      <div className={scoreStyles.score}>
        <p>Your score: </p>
        <p>{score}</p>
      </div>

      <div className={scoreStyles.buttons}>
        <Link to={`/quiz/${quizId}/${difficulty}`} reloadDocument>
          <Button>Try again</Button>
        </Link>
        <Link to="/">
          <Button>Go to menu</Button>
        </Link>
      </div>
    </section>
  );
}

export default Score;
