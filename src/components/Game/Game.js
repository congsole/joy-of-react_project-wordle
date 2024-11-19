import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import { checkGuess } from "../../game-helpers";
import Keyboard from "../Keyboard";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [keyword, setKeyword] = React.useState('');
  const [guessList, setGuessList] = React.useState([]);
  const [userStatus, setUserStatus] = React.useState('playing');

  return (<>
    <div className={"guess-results"}>
      {guessList.map((guess) => {
        return (<p key={Math.random()} className={"guess"}>
          {guess.map((letterObj, i) => {
            return (<span key={i} className={`cell ${letterObj.status}`}>{letterObj.letter}</span>);
          })}
        </p>)
      })}
      {Array.from({length: NUM_OF_GUESSES_ALLOWED - guessList.length}, (_, i) => {
        return (<p key={i} className={"guess"}>
          {Array.from({length: 5}, (_, j) => {
            return (<span key={j} className={"cell"}></span>);
          })}
        </p>)
      })}
    </div>
    <Keyboard guessList={guessList} />
    <form
        className={"guess-input-wrapper"}
        onSubmit={(e) => {
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
              setUserStatus('won');
            }
          }
          if (guessList.length + 1 === NUM_OF_GUESSES_ALLOWED && userStatus !== 'won') {
            setUserStatus('lost')
          }
        }}
    >
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
    <div className="happy banner" style={{display: userStatus === 'won' ? 'block' : 'none'}}>
      <p>
        <strong>Congratulations!</strong> Got it in
        <strong>{guessList.length} guesses</strong>.
      </p>
    </div>
    <div className="sad banner" style={{display: userStatus === 'lost' ? 'block' : 'none'}}>
      <p>Sorry, the correct answer is <strong>{answer}</strong>.</p>
    </div>
  </>);
}

export default Game;
