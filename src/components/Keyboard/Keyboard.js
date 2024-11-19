import React from 'react';
import { keyMap } from '../../data';

function Keyboard ({ guessList }) {

    let keys = {...keyMap}

    guessList.map((guess) => {
        guess.map(({ status, letter }, i) => {
            if (status === 'correct') {
                keys = {...keys,
                [letter] : 'correct', };
            } else if (status === 'misplaced') {
                keys = {...keys,
                [letter] : 'misplaced',};
            }
        })
    })

    return (
        <div className={"keyboard-wrapper"}>
            <p className={"key-line"}>
                <span className={`key ${keys['Q']}`}>Q</span>
                <span className={`key ${keys['W']}`}>W</span>
                <span className={`key ${keys['E']}`}>E</span>
                <span className={`key ${keys['R']}`}>R</span>
                <span className={`key ${keys['T']}`}>T</span>
                <span className={`key ${keys['Y']}`}>Y</span>
                <span className={`key ${keys['U']}`}>U</span>
                <span className={`key ${keys['I']}`}>I</span>
                <span className={`key ${keys['O']}`}>O</span>
                <span className={`key ${keys['P']}`}>P</span>
            </p>
            <p className={"key-line"}>
                <span className={`key ${keys['A']}`}>A</span>
                <span className={`key ${keys['S']}`}>S</span>
                <span className={`key ${keys['D']}`}>D</span>
                <span className={`key ${keys['F']}`}>F</span>
                <span className={`key ${keys['G']}`}>G</span>
                <span className={`key ${keys['H']}`}>H</span>
                <span className={`key ${keys['J']}`}>J</span>
                <span className={`key ${keys['K']}`}>K</span>
                <span className={`key ${keys['L']}`}>L</span>
            </p>
            <p className={"key-line"}>
                <span className={`key ${keys['Z']}`}>Z</span>
                <span className={`key ${keys['X']}`}>X</span>
                <span className={`key ${keys['C']}`}>C</span>
                <span className={`key ${keys['V']}`}>V</span>
                <span className={`key ${keys['B']}`}>B</span>
                <span className={`key ${keys['N']}`}>N</span>
                <span className={`key ${keys['M']}`}>M</span>
            </p>
        </div>
    );
}

export default Keyboard;