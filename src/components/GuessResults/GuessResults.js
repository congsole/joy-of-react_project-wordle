import React from 'react';
import {NUM_OF_GUESSES_ALLOWED} from "../../constants";
import { range } from '../../utils';
function GuessResults({ guessList }) {
  return (
      <div className={"guess-results"}>

          {range(NUM_OF_GUESSES_ALLOWED).map((i) => {
              return (<p key={`guess-${i+1}`} className={"guess"}>
                  {guessList[i] ?
                      guessList[i].map(({ status, letter }, j) => {
                          return (<span key={j} className={`cell ${status}`}>{letter}</span>);
                      }) :
                      range(5).map((k) => {
                          return (<span key={k} className={"cell"}></span>);
                      })
                  }
              </p>);
          })}

      </div>
  );
}
export default GuessResults;