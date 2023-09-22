function Answer({ answer, handleAnswerClick, checked, isCorrect, clicked }) {
  const buttonStyle = {
    backgroundColor: checked
      ? isCorrect
        ? "green"
        : clicked === answer.id && "red"
      : null,
    color: clicked === answer.id ? "white" : "black",
  };

  return (
    <>
      <button
        style={buttonStyle}
        key={answer.id}
        onClick={() => {
          handleAnswerClick(answer.id);
        }}
      >
        {answer.answer}
      </button>
    </>
  );
}
export default Answer;
