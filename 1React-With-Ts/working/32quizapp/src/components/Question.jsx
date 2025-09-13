const Question = ({ question, onAnsClick }) => {
  return (
    <div>
      <h2>{question.question}</h2>
      <ul>
        {question.answerOptions.map((option) => (
          <li key={option.text}>
            <button onClick={() => onAnsClick(option.isCorrect)}>
              {option.text}
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Question
