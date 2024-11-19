import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import { checkGuess } from "../../game-helpers";
import GuessResults from '../GuessResults'
import Keyboard from "../Keyboard";


// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {

  const [keyword, setKeyword] = React.useState('');
  const [guessList, setGuessList] = React.useState([]);
  const [userStatus, setUserStatus] = React.useState('playing');

  const handleSubmit = (e) => {
    let playStatus = userStatus;
    e.preventDefault();
    setKeyword('')
    if (guessList.length < NUM_OF_GUESSES_ALLOWED) {
      let correct = true;
      const guess = checkGuess(keyword, answer);
      setGuessList([...guessList, guess]);
      Array.from(guess).forEach((letterObj, i) => {
        if (letterObj.status !== 'correct') {
          correct = false;
          return;
        }
      })
      if (correct) {
        playStatus = 'won'
        setUserStatus(playStatus);
      }
    }
    if (guessList.length + 1 === NUM_OF_GUESSES_ALLOWED && playStatus !== 'won') {
      playStatus = 'lost'
      setUserStatus(playStatus)
    }
  }

  const happyBanner = (
      <div className="happy banner" style={{display: userStatus === 'won' ? 'block' : 'none'}}>
        <p>
          <strong>Congratulations!</strong> Got it in
          <strong>{guessList.length} guesses</strong>.
        </p>
      </div>
  );

  const sadBanner = (
      <div className="sad banner" style={{display: userStatus === 'lost' ? 'block' : 'none'}}>
        <p>Sorry, the correct answer is <strong>{answer}</strong>.</p>
      </div>
  );



  return (<>
    <GuessResults guessList={guessList} />
    <Keyboard guessList={guessList} />
    <form
        className={"guess-input-wrapper"}
        onSubmit={(e) => handleSubmit(e)}>
      <label htmlFor={"guess-input"}>Enter guess: </label>
      <input
          id={"guess-input"}
          type="text"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value.toLocaleUpperCase())}
          pattern=".{5,5}"
          maxLength={5}
          disabled={userStatus !== 'playing'}
      />
    </form>

    {happyBanner}
    {sadBanner}
  </>);
}

export default Game;
