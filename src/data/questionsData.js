import htmlImg from "../assets/image/html-logo.png";
import cssImg from "../assets/image/css-logo.png";
import jsImg from "../assets/image/javascript-logo.png";
import reactImg from "../assets/image/react-logo.png";

const questionsData = {
  html: {
    img: htmlImg,
    questions: [
      {
        id: 1,
        question: "What is the capital of Turkey?",
        answers: [
          {
            id: 1,
            answer: "Antalya",
          },
          {
            id: 2,
            answer: "Ankara",
          },
          {
            id: 3,
            answer: "Konya",
          },
          {
            id: 4,
            answer: "Istanbul",
          },
        ],
        correctAnswerId: 2,
        time: 10,
      },
      {
        id: 2,
        question: "Who wrote the novel 'Crime and Punishment?",
        answers: [
          {
            id: 1,
            answer: "William Shakespeare",
          },
          {
            id: 2,
            answer: "Charles Dickens",
          },
          {
            id: 3,
            answer: "Leo Tolstoj",
          },
          {
            id: 4,
            answer: "Fiodor Dostojewski",
          },
        ],
        correctAnswerId: 4,
        time: 5,
      },
      {
        id: 3,
        question: "What is the main ingredient of risotto?",
        answers: [
          {
            id: 1,
            answer: "Cottage cheese",
          },
          {
            id: 2,
            answer: "Tomates",
          },
          {
            id: 3,
            answer: "Pasta",
          },
          {
            id: 4,
            answer: "Rice",
          },
        ],
        correctAnswerId: 4,
        time: 10,
      },
      {
        id: 4,
        question: "How many atriums does the human heart have?",
        answers: [
          {
            id: 1,
            answer: "One",
          },
          {
            id: 2,
            answer: "Two",
          },
          {
            id: 3,
            answer: "None",
          },
        ],
        correctAnswerId: 2,
        time: 5,
      },
    ],
  },

  css: {
    img: cssImg,
    questions: [
      {
        id: 1,
        question: "What is the capital of Poland?",
        answers: [
          {
            id: 1,
            answer: "Katowice",
          },
          {
            id: 2,
            answer: "Warszawa",
          },
          {
            id: 3,
            answer: "Kraków",
          },
          {
            id: 4,
            answer: "Wrocław",
          },
        ],
        correctAnswerId: 2,
        time: 10,
      },
      {
        id: 2,
        question: "Who wrote the novel 'Hobbit?",
        answers: [
          {
            id: 1,
            answer: "William Shakespeare",
          },
          {
            id: 2,
            answer: "Charles Dickens",
          },
          {
            id: 3,
            answer: "Leo Tolstoj",
          },
          {
            id: 4,
            answer: "J.R.R. Tolkien",
          },
        ],
        correctAnswerId: 4,
        time: 5,
      },
      {
        id: 3,
        question: "What is the main ingredient of spaghetti?",
        answers: [
          {
            id: 1,
            answer: "Cottage cheese",
          },
          {
            id: 2,
            answer: "Tomates",
          },
          {
            id: 3,
            answer: "Pasta",
          },
          {
            id: 4,
            answer: "Rice",
          },
        ],
        correctAnswerId: 3,
        time: 10,
      },
      {
        id: 4,
        question: "How many kidneys does the human have?",
        answers: [
          {
            id: 1,
            answer: "One",
          },
          {
            id: 2,
            answer: "Two",
          },
          {
            id: 3,
            answer: "None",
          },
        ],
        correctAnswerId: 2,
        time: 5,
      },
    ],
  },

  js: {
    img: jsImg,
    questions: [
      {
        id: 1,
        question: "What is the capital of Italy?",
        answers: [
          {
            id: 1,
            answer: "Venice",
          },
          {
            id: 2,
            answer: "Rome",
          },
          {
            id: 3,
            answer: "Palermo",
          },
          {
            id: 4,
            answer: "Bolonia",
          },
        ],
        correctAnswerId: 2,
        time: 10,
      },
      {
        id: 2,
        question: "Who wrote the novel 'Lalka'?",
        answers: [
          {
            id: 1,
            answer: "Bolesław Prus",
          },
          {
            id: 2,
            answer: "Charles Dickens",
          },
          {
            id: 3,
            answer: "Leo Tolstoj",
          },
          {
            id: 4,
            answer: "Fiodor Dostojewski",
          },
        ],
        correctAnswerId: 1,
        time: 5,
      },
      {
        id: 3,
        question: "What is the main ingredient of pizza?",
        answers: [
          {
            id: 1,
            answer: "Cottage cheese",
          },
          {
            id: 2,
            answer: "Tomates",
          },
          {
            id: 3,
            answer: "Pasta",
          },
          {
            id: 4,
            answer: "Flour",
          },
        ],
        correctAnswerId: 4,
        time: 10,
      },
      {
        id: 4,
        question: "How many fingers does the human have?",
        answers: [
          {
            id: 1,
            answer: "10",
          },
          {
            id: 2,
            answer: "20",
          },
          {
            id: 3,
            answer: "15",
          },
        ],
        correctAnswerId: 2,
        time: 5,
      },
    ],
  },
  react: {
    img: reactImg,
    questions: [
      {
        id: 1,
        question: "What is the capital of Ukraine?",
        answers: [
          {
            id: 1,
            answer: "Lviv",
          },
          {
            id: 2,
            answer: "Kyiv",
          },
          {
            id: 3,
            answer: "Odessa",
          },
          {
            id: 4,
            answer: "Kherson",
          },
        ],
        correctAnswerId: 2,
        time: 10,
      },
      {
        id: 2,
        question: "Who wrote the novel 'Zemsta'?",
        answers: [
          {
            id: 1,
            answer: "William Shakespeare",
          },
          {
            id: 2,
            answer: "Aleksander Fredro",
          },
          {
            id: 3,
            answer: "Leo Tolstoj",
          },
          {
            id: 4,
            answer: "Fiodor Dostojewski",
          },
        ],
        correctAnswerId: 2,
        time: 5,
      },
      {
        id: 3,
        question: "What is the main ingredient of kebeb?",
        answers: [
          {
            id: 1,
            answer: "Cottage cheese",
          },
          {
            id: 2,
            answer: "Tomates",
          },
          {
            id: 3,
            answer: "Pasta",
          },
          {
            id: 4,
            answer: "Meat",
          },
        ],
        correctAnswerId: 4,
        time: 10,
      },
      {
        id: 4,
        question: "How many spleens does the human have?",
        answers: [
          {
            id: 1,
            answer: "One",
          },
          {
            id: 2,
            answer: "Two",
          },
          {
            id: 3,
            answer: "None",
          },
        ],
        correctAnswerId: 2,
        time: 5,
      },
    ],
  },
};

export default questionsData;
