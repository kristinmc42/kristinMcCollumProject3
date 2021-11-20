// ask user a series of questions and store their responses
import questionsData from "./questionsData";
import { useState } from "react";

function QuestionForm() {
  const userAnswerArray = [];
  // initialize state
  const [userAnswer, setUserAnswer] = useState("");
  // const [storedAnswer, setStoredAnswer] = useState([]);

  const handleChange = (event) => {
    setUserAnswer(event.target.value);
    console.log(userAnswer)
    userAnswerArray.push(event.target.value)
    console.log(userAnswerArray)
  }
  // initialize empty array for storing user answers

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log(event)
    //store user input in array

    // userAnswerArray.push();
    // console.log(userAnswer, userAnswerArray, event.target)
  }
 
   
  return(
    <>
      <form onSubmit={handleSubmit}>
        {
          // map through questions data to populate the fieldsets
          questionsData.map((data, index) => {
            return(

              <fieldset key={`question${index}`} id={`question${index}`}>
                <legend>{data.question}</legend>

                <label htmlFor="answer1">{data.answer[0]}</label>
                <input 
                  type="radio" 
                  name="answer" 
                  id="answer1" 
                  value={data.answer[0]} 
                  checked={userAnswer === data.answer[0] ? true : false} 
                  onChange={handleChange} 
                />

                <label htmlFor="answer2">{data.answer[1]}</label>
                <input 
                  type="radio" 
                  name="answer" 
                  id="answer2" 
                  value={data.answer[1]} 
                  checked={userAnswer === data.answer[1] ? true : false} 
                  onChange={handleChange} 
                />

                <label htmlFor="answer3">{data.answer[2]}</label>
                <input 
                  type="radio" 
                  name="answer" 
                  id="answer3" 
                  value={data.answer[2]} 
                  checked={userAnswer === data.answer[2] ? true : false} 
                  onChange={handleChange} 
                />

                <label htmlFor="answer4">{data.answer[3]}</label>
                <input 
                  type="radio" 
                  name="answer" 
                  id="answer4" 
                  value={data.answer[3]} 
                  checked={userAnswer === data.answer[3] ? true : false} 
                  onChange={handleChange} 
                />
             
              </fieldset>
            )
          })
        }
        <button>Submit</button>
      </form>
    </>
  ) 
}

export default QuestionForm;