function Answer({ answer, handleClick, checked, isCorrect, clicked }) {
  const buttonStyle = {
    backgroundColor: checked ? (isCorrect ? "green" : "red") : null,
    color: clicked === answer.id ? "white" : "black",
  };

  return (
    <>
      <button
        style={buttonStyle}
        key={answer.id}
        onClick={() => {
          handleClick(answer.id);
        }}
      >
        {answer.answer}
      </button>
    </>
  );
}
export default Answer;
