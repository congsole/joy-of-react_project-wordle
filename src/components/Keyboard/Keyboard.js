import React from 'react';
import {KEY_BOARD} from "../../data";

function Keyboard ({ guessList }) {

    let keyStatus = {}

    guessList.map((guess) => {
        guess.map(({ status, letter }, i) => {
            keyStatus = {
                ...keyStatus,
                [letter] : status,
            };
        })
    })

    return (
        <div className={"keyboard-wrapper"}>
            {KEY_BOARD.map((key_line, i) => {
                return (
                    <p className={"key-line"} key={`key-line-${i + 1}`}>
                        {key_line.map((key) => {
                            return (<span key={key} className={`key ${keyStatus[key]}`}>{key}</span>);
                        })}
                    </p>
                );
            })}
        </div>
    );
}

export default Keyboard;