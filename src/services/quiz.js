// utworzenie nowego quiz ktory zawiera pytania i odp. Cała logika.
import data from "../data/questionsData";

export class Quiz {
  #id;
  #isCompleted = false;
  #questions;
  #answers = new Map();
  #currentQuestionIndex = 0;

  get id() {
    return this.#id;
  }

  get isCompleted() {
    return this.#isCompleted;
  }

  constructor(id) {
    if (!id) {
      throw new Error("missing id parameter");
    }
    this.#id = id;
    this.#questions = this.#randomize(data[this.#id].questions);
  }

  getQuestionsLength() {
    return this.#questions.length;
  }

  getCurrentQuestionNumber() {
    return this.#currentQuestionIndex;
  }

  getNextQuestion() {
    const currentQuestion = this.#questions[this.#currentQuestionIndex];

    if (this.#currentQuestionIndex === this.#questions.length) {
      this.#isCompleted = true;
    }

    this.#currentQuestionIndex++;

    return currentQuestion;
  }

  submmitAnswer(questionId, answerId) {
    this.#answers.set(questionId, answerId);
  }

  calculateScore() {
    let score = 0;
    this.#questions.forEach((question) => {
      const selectedAnswer = this.#answers.get(question.id);
      if (selectedAnswer === question.correctAnswerId) {
        score++;
      }
    });
    return score;
  }

  #randomize(questions) {
    const randomQuestionArray = [...questions];
    for (let i = randomQuestionArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [randomQuestionArray[i], randomQuestionArray[j]] = [
        randomQuestionArray[j],
        randomQuestionArray[i],
      ];
    }
    return randomQuestionArray;
  }
}
