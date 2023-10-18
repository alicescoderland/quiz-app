import progresStyles from "./Progres.module.css";

function Progres({ indexToShow, questionsLength }) {
  return (
    <section>
      <div className={progresStyles.questionNubmers}>
        question {indexToShow + 1} of {questionsLength}
      </div>
    </section>
  );
}

export default Progres;
