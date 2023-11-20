import { useEffect, useState } from "react";

function Time({ time, currentQuestionIndex, handleTimeUp }) {
  const [timeLeft, setTimeLeft] = useState(time);

  useEffect(() => {
    let timer;

    if (timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000);
    } else {
      clearInterval(timer);
    }

    return () => {
      clearInterval(timer);
    };
  }, [timeLeft, time, handleTimeUp]);

  useEffect(() => {
    if (timeLeft === 0) {
      handleTimeUp();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [timeLeft]);

  useEffect(() => {
    setTimeLeft(time);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentQuestionIndex]);

  return <div>Time: {timeLeft} seconds</div>;
}

export default Time;
