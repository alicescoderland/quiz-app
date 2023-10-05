import QuizSelection from "../QuizSelection/QuizSelection";
import homeStyles from "./Home.module.css";

function Home() {
  return (
    <section className={homeStyles.container}>
      <div className={homeStyles.title}>
        <span>Let's Try</span>
        <span>Test your knowledge!</span>
      </div>
      <QuizSelection />
    </section>
  );
}

export default Home;
