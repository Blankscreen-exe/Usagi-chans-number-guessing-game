//answer Buttons
//displays the user input for the game
//"larger" and "smaller" buttons
import React from "react";

export default function AnswerButtons(props) {


    function handleAnswer (event) {
        props.setGameState(2)
        props.setAnswer(event.target.name)

        switch(event.target.name) {
            case "smaller":
                console.log("You clicked smaller")
                break;
            case "larger":
                console.log("You clicked larger")
                break;
            default:
                console.log("You didnt click anything")

        }
    }

    return (
        <div className="answer-box">
            <p>Current Number: <span className="highlight">{props.numbers.currentNumber}</span></p>
            <p>The next number is going to be ...</p>
            <div className="answer-button-section">
                <button className="answer-button io-button" onClick={handleAnswer} name="smaller">Smaller 🔻</button>
                <button className="answer-button io-button" onClick={handleAnswer} name="larger">Larger 🔺</button>
            </div>
        </div>
    )
}