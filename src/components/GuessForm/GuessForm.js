import React from 'react';
import {NUM_OF_GUESSES_ALLOWED} from "../../constants";
import {checkGuess} from "../../game-helpers";

function GuessForm({ guessList, setGuessList, userStatus, setUserStatus, answer }) {
  const [keyword, setKeyword] = React.useState('');

  const handleSubmit = (e) => {
    let playStatus = userStatus;
    e.preventDefault();

    if (guessList.length < NUM_OF_GUESSES_ALLOWED) {
      const guess = checkGuess(keyword, answer);
      setGuessList([...guessList, guess]);
      if (keyword.toUpperCase() === answer.toUpperCase()) {
        playStatus = 'won'
        setUserStatus(playStatus);
      }
    }
    if (guessList.length + 1 === NUM_OF_GUESSES_ALLOWED && playStatus !== 'won') {
      playStatus = 'lost'
      setUserStatus(playStatus)
    }
    setKeyword('')
  }

  return (
      <form
          className={"guess-input-wrapper"}
          onSubmit={(e) => handleSubmit(e)}>
        <label htmlFor={"guess-input"}>Enter guess: </label>
        <input
            id={"guess-input"}
            type="text"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value.toLocaleUpperCase())}
            pattern="[a-zA-Z]{5}"
            title="Must be 5 letters long, only English letters."
            minLength={5}
            maxLength={5}
            disabled={userStatus !== 'playing'}
        />
      </form>
  );
}

export default GuessForm;
