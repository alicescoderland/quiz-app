import Menu from "../components/menu/Menu";
import homeStyles from "./Home.module.css";

function Home() {
  return (
    <section className={homeStyles.container}>
      <div className={homeStyles.title}>
        <span>Let's Try</span>
        <span>Test your knowledge!</span>
      </div>
      <Menu />
    </section>
  );
}

export default Home;
