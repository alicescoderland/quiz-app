import { Link } from "react-router-dom";
import errorImage from "../../assets/image/error.png";
import Button from "../button/Button";
import errorStyles from "./Error.module.css";

function Error({ quizId, difficulty }) {
  return (
    <section className={errorStyles.container}>
      <img src={errorImage} alt="Error" />
      <div className={errorStyles.text}>
        <p>Error</p>
        <p>Try again after 10 second!</p>
      </div>
      <Link to={`/quiz/${quizId}/${difficulty}`} reloadDocument>
        <Button>Refresh</Button>
      </Link>
    </section>
  );
}

export default Error;
