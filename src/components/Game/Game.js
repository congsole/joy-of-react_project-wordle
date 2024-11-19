import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessResults from '../GuessResults'
import Keyboard from "../Keyboard";
import Banner from "../Banner";
import GuessForm from "../GuessForm";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {

  const [guessList, setGuessList] = React.useState([]);
  const [userStatus, setUserStatus] = React.useState('playing');

  return (<>
    <GuessResults guessList={guessList} />
    <Keyboard guessList={guessList} />
    <GuessForm
        guessList={guessList}
        setGuessList={setGuessList}
        userStatus={userStatus}
        setUserStatus={setUserStatus}
        answer={answer}
    />
    {userStatus !== 'playing' &&
        <Banner
            userStatus={userStatus}
            answer={answer}
            tryNum={guessList.length}
        />
    }
  </>);
}

export default Game;
