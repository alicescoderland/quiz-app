function Answer({ answers, correctAnserId }) {
  return (
    <section>
      {answers.map((answer) => (
        <div key={answer.id}>
          {answer.id === correctAnserId ? (
            <strong>{answer.answer}</strong>
          ) : (
            answer.answer
          )}
        </div>
      ))}
    </section>
  );
}
export default Answer;
