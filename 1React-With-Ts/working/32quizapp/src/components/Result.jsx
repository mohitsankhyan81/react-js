const Result = ({ useranser, question, resetquestion }) => {
  const correctans = useranser.filter(ans => ans).length

  return (
    <div>
      <h2>Result</h2>
      <p>
        You answered {correctans} out of {question.length}
        <span 
          onClick={resetquestion} 
          style={{ cursor: "pointer", color: "blue", marginLeft: "10px" }}
        >
          Click here to Retry
        </span>
      </p>
      <ul>
        {question.map((q, index) => (
          <li 
            key={index} 
            style={{ 
              color: useranser[index] ? "green" : "red", 
              fontWeight: "bold" 
            }}
          >
            Q{index + 1}. {q.question}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Result
