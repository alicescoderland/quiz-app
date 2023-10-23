import progresStyles from "./Progres.module.css";
import Time from "./Time";

function Progres({ indexToShow, questionsLength, handleTimeUp }) {
 

  return (
    <section>
      <div className={progresStyles.questionNubmers}>
        question {indexToShow + 1} of {questionsLength}
      </div>
      <div>
    <Time onTimeUp={handleTimeUp} indexToShow={indexToShow} />
      </div>
    </section>
  );
}

export default Progres;
