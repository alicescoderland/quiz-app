// utworzenie nowego quiz ktory zawiera pytania i odp. Cała logika.
const API_URL = "https://opentdb.com/api.php";
const ANSWER_TIME = 30;

export class Quiz {
  Ready;
  #id;
  #difficulty;
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

  constructor(id, difficulty) {
    if (!id || !difficulty) {
      throw new Error("missing id or difficulty parameter");
    }
    this.#id = id;
    this.#difficulty = difficulty;
    this.Ready = new Promise((resolve, reject) => {
      this.#getQuestions(id, difficulty)
        .then(() => {
          resolve();
        })
        .catch((error) => {
          reject(error);
        });
    });
  }

  #getQuestions(id, difficulty) {
    const params = new URLSearchParams();
    params.append("amount", 2);
    params.append("category", id.toString());
    params.append("type", "multiple");
    params.append("difficulty", difficulty);

    const url = API_URL + "?" + params.toString();

    return new Promise((resolve, reject) => {
      fetch(url, {
        method: "GET",
      })
        .then((response) => {
          if (response.ok) {
            return response.json();
          } else {
            reject();
          }
        })
        .then((data) => {
          this.#questions = this.#mapQuestions(data.results);
          resolve();
        })
        .catch((error) => {
          reject(error);
        });
    });
  }

  #mapQuestions(rawQuestions) {
    const mappedQuestions = rawQuestions.map((rawQuestion, index) => {
      return {
        id: index,
        question: rawQuestion.question,
        correctAnswer: rawQuestion.correct_answer,
        time: ANSWER_TIME,
        answers: [...rawQuestion.incorrect_answers, rawQuestion.correct_answer],
      };
    });

    return mappedQuestions;
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

  submmitAnswer(questionId, answer) {
    this.#answers.set(questionId, answer);
  }

  calculateScore() {
    let score = 0;
    this.#questions.forEach((question) => {
      const selectedAnswer = this.#answers.get(question.id);
      if (selectedAnswer === question.correctAnswer) {
        score++;
      }
    });
    return score;
  }
}
