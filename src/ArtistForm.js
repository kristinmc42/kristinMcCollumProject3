// gets the user's choice of artist
import { useState } from "react";


function ArtistForm(){
  // initialize useState for user input
  const [userInput, setUserInput] = useState("");

  const handleChange = (event) => {
    // update userInput state with what user types in input
    setUserInput(event.target.value);
  }

  // when user clicks submit button
  const handleSubmit = (event) => {
    event.preventDefault();

    // store user input in variable
    const artistName = userInput;

    console.log(artistName)

    // clear value of userInput
    setUserInput("");
  }

  return(
  
    <form onSubmit={handleSubmit}>
      <label htmlFor="artistChoice">Who is your musical inspiration today?</label>
      <input 
        type="text" 
        id="artistChoice" 
        value={userInput} 
        onChange={handleChange}
        placeholder="Taylor Swift, Ed Sheeran, Doja Cat, BTS, Lil Nas X..."
        />
      <button>Submit</button>
    </form>
   
  )
}

export default ArtistForm;