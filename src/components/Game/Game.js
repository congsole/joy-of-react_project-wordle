import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessResults from '../GuessResults'
import Keyboard from "../Keyboard";
import Banner from "../Banner";
import GuessForm from "../GuessForm";

function Game() {

  const [guessList, setGuessList] = React.useState([]);
  const [userStatus, setUserStatus] = React.useState('playing');
  const [answer, setAnswer] = React.useState(sample(WORDS));

  React.useEffect(() => {
    console.log(answer);
  }, [answer]);

  const handleRestart = () => {
    setAnswer(sample(WORDS));
    setGuessList([]);
    setUserStatus('playing');
  }

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
            handleRestart={handleRestart}
        />
    }
  </>);
}

export default Game;
