import progressStyles from "./Progress.module.css";
import Time from "./Time";

function Progres({
  currentQuestionIndex,
  questionsLength,
  time,
  handleTimeUp,
}) {
  return (
    <section>
      <div className={progressStyles.questionNubmers}>
        question {currentQuestionIndex} of {questionsLength}
      </div>
      <div>
        <Time
          handleTimeUp={handleTimeUp}
          time={time}
          currentQuestionIndex={currentQuestionIndex}
        />
      </div>
    </section>
  );
}

export default Progres;
