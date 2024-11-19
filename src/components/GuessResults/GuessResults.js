import React from 'react';
import {NUM_OF_GUESSES_ALLOWED} from "../../constants";

function GuessResults({ guessList }) {
  return (
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
  );
}
export default GuessResults;