//IO box
//This module is dedicated to control of the game state and show different screen based on the game state Hook.
//This operation of changing visuals is only performed within this module
import React, {useState} from "react";

import AnswerButtons from "./AnswerButtons";
import Reveal from "./Reveal";
import CheckAnswer from "./CheckAnswer";
import Result from "./Result";
import GameStartButton from "./GameStartButton";

import titlebg from '/titlebg.png';

export default function IObox(props) {
    // dialogue for the result (right wrong etc)
    const [dialogue, setDialogue] = useState("")

    // showing content based on game state
    let ioToShow = <div></div>
    switch (props.gameState){
        case 0: // start screen
            ioToShow = (
                <GameStartButton 
                    setGameState={props.setGameState}
                    genNum={props.genNum}
                />)
            break;

        case 1: // game accepting user response
            ioToShow = (
                <div className="answer-button-container">
                    <AnswerButtons 
                        setGameState={props.setGameState}
                        genNum={props.genNum}
                        numbers={props.numbers}
                        setAnswer={props.setAnswer}
                    />
                </div>)
            break;

        case 2: // reveal next number
            ioToShow = (
                <Reveal 
                    setGameState={props.setGameState}
                    answer={props.answer}
                    numbers={props.numbers}
                    playerData={props.playerData}
                    setPlayerData={props.setPlayerData}
                    genNum={props.genNum}
                    setAnswerResult={props.setAnswerResult}
                    setDialogue={setDialogue}
                />)
            break;

        case 3: // check answer 
            ioToShow = (
                <CheckAnswer
                    setGameState={props.setGameState}
                    answer={props.answer}
                    numbers={props.numbers}
                    playerData={props.playerData}
                    setPlayerData={props.setPlayerData}
                    genNum={props.genNum}
                    dialogue={dialogue}
                    setDisplayHint={props.setDisplayHint}
                />)
            break;
        
        case 4: // result screen 
            ioToShow = (
                <Result
                    setGameState={props.setGameState}
                    playerData={props.playerData}
                    setPlayerData={props.setPlayerData}
                />)
            break;

        default:
            ioToShow = <div>Default ERROR</div>
    }

    return (
        <div className="iobox">
            <img src={titlebg} className="io-bg"/>
            <div className="io-content">
                {ioToShow}
            </div>
        </div>
    )
}