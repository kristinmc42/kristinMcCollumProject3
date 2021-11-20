// gets the user's choice of artist
import { useEffect, useState } from "react";
import axios from "axios";


function ArtistForm(){
  // initialize useState for user input
  const [userInput, setUserInput] = useState("");

  const [artistTopTracks, setArtistTopTracks] = useState([]);

  // when user types something in the input field
  const handleChange = (event) => {
    // update userInput state with the input value
    setUserInput(event.target.value);
  }

  // when user clicks submit button
  const handleSubmit = (event) => {
    event.preventDefault();

    // store user input in variable
    const artistName = userInput;

    console.log(artistName)

    // call API based on artist name 
    const apiKey = "55a0c662e159f9a95c530a23f4af3da8";
    // const sharedSecret = "5653c82e28f07d2107a042a3d733d57f";
    axios({
      url: "http://ws.audioscrobbler.com/2.0/",
      params: {
        format: "json",
        method: "artist.gettoptracks",
        api_key: apiKey,
        artist: userInput,
        autocorrect: [0 | 1]
      }
    })
    .then(response => {
      // 
      console.log(response.data.toptracks.track[0].name, response.data.toptracks.track)

      setArtistTopTracks(response.data.toptracks.track);
    })

    // clear value of userInput
    setUserInput("");
  }

  return(
    <>
    <form onSubmit={handleSubmit}>
      <label htmlFor="artistChoice">Who is your musical inspiration today?</label>
      <input 
        type="text" 
        id="artistChoice" 
        value={userInput} 
        onChange={handleChange}
        placeholder="Taylor Swift, Coldplay, Doja Cat, BTS, Lil Nas X..."
        />
      <button>Submit</button>
    </form>
    {/* {
      artistTopTracks.map(topTracks => {
        return(
          <DisplaySoundtrack 
            key={topTracks.mbid}
            artist={topTracks.artist.name}
            trackTitle={topTracks.name}
            trackUrl={topTracks.url}
          />
        )
      })
    } */}
   </>
  )
}

export default ArtistForm;