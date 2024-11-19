import React from 'react';
import {KEY_BOARD} from "../../data";

function Keyboard ({ guessList }) {

    let keys = {}

    guessList.map((guess) => {
        guess.map(({ status, letter }, i) => {
            if (status === 'correct') {
                keys = {...keys,
                [letter] : 'correct', };
            } else if (status === 'misplaced') {
                keys = {...keys,
                [letter] : 'misplaced',};
            } else {
                keys = {...keys,
                [letter] : 'incorrect',}
            }
        })
    })

    return (
        <div className={"keyboard-wrapper"}>
            {KEY_BOARD.map((key_line, i) => {
                return (
                    <p className={"key-line"} key={`key-line-${i + 1}`}>
                        {key_line.map((key) => {
                            return (<span key={key} className={`key ${keys[key]}`}>{key}</span>);
                        })}
                    </p>
                );
            })}
        </div>
    );
}

export default Keyboard;