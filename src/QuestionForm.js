// ask user a series of questions and store their responses
import questionsData from "./questionsData";
// import { useState } from "react";

function QuestionForm() {
  // initialize state
  const [userAnswer, setUserAnswer] = useSate("");

  const handleChange = (event) => {
    setUserAnswer(event.target.value)
  }

   
  return(
    <>
    {
      questionsData.map((data, index) => {
        
        console.log(data.question, data.answer[0], data.answer[1], data.answer[2], data.answer[3])
        return(
          //use info from array to populate index, question and answers
          <form >
            <fieldset>
              <legend>{data.question}</legend>
  
              <label htmlFor="answer1">{data.answer[0]}</label>
              <input type="radio" name="answer" id="answer1" value={data.answer[0]} checked={userAnswer === data.answer[0] ? true : false} onChange={handleChange} />
  
              <label htmlFor="answer2">{data.answer[1]}</label>
              <input type="radio" name="answer" id="answer1" value={data.answer[1]} checked={userAnswer === data.answer[1] ? true : false} onChange={handleChange} />
  
              <label htmlFor="answer3">{data.answer[2]}</label>
              <input type="radio" name="answer" id="answer1" value={data.answer[2]} checked={userAnswer === data.answer[2] ? true : false} onChange={handleChange} />
  
              <label htmlFor="answer4">{data.answer[3]}</label>
              <input type="radio" name="answer" id="answer1" value={data.answer[3]} checked={userAnswer === data.answer[3] ? true : false} onChange={handleChange} />
  
              <button>Submit</button>
  
            </fieldset>
          </form>
  
        )

      })
    }
    </>
  )
}

export default QuestionForm;