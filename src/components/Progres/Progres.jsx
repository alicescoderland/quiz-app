import progresStyles from "./Progres.module.css";
import Time from "./Time";

function Progres({ indexToShow, questionsLength, handleTimeUp, time }) {
 

  return (
    <section>
      <div className={progresStyles.questionNubmers}>
        question {indexToShow + 1} of {questionsLength}
      </div>
      <div>
    <Time handleTimeUp={handleTimeUp} time={time} indexToShow={indexToShow} />
      </div>
    </section>
  );
}

export default Progres;
