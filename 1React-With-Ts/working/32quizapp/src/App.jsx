import { useState } from 'react'
import questions from './comp/question.json'
import Question from './components/Question'
import Result from './components/Result'


const App = () => {
  const [current, setCurrentQuestion] = useState(0)
  const [useranser, setuserans] = useState([])

  const handlenextquestion = (isCorrect) => {
    setCurrentQuestion(current + 1)
    setuserans([...useranser, isCorrect])
  }

  const resetquestion = () => {
    setCurrentQuestion(0)
    setuserans([])
  }

  return (
    <div>
      <h1>World Quiz</h1>

      {/* Question Component */}
      {current < questions.length && (
        <Question 
          question={questions[current]} 
          onAnsClick={handlenextquestion} 
        />
      )}

      {/* Result Component */}
      {current === questions.length && (
        <Result 
          useranser={useranser} 
          question={questions} 
          resetquestion={resetquestion} 
        />
      )}
    </div>
  )
}

export default App
