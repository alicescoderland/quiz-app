import { useEffect, useState } from "react";

function Time({ onTimeUp, indexToShow }) {
  const [timeLeft, setTimeLeft] = useState(10);

  useEffect(() => {
    let timer;

    if (timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000);
    } else {
      clearInterval(timer);
      onTimeUp();
    }

    return () => {
      clearInterval(timer);
    };
  }, [timeLeft, onTimeUp]);

  useEffect(()=> {
    setTimeLeft(10)
  }, [indexToShow])

  return <div>Time: {timeLeft} seconds</div>;
}

export default Time;
