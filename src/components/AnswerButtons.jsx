//answer Buttons
//displays the user input for the game
//"larger" and "smaller" buttons
import React from "react";

export default function AnswerButtons(props) {


    function handleAnswer(event) {
        props.setGameState(2)
        props.setAnswer(event.target.name)

        switch (event.target.name) {
            case "smaller":
                break;
            case "larger":
                break;
            default:

        }
    }

    return (
        <div className="flex flex-col items-center gap-y-5">
            <p>Current Number: <span className="text-orange-600 font-bold underline">{props.numbers.currentNumber}</span></p>
            <p>The next number is going to be ...</p>
            <div className="flex justify-between w-[400px] m-auto">
                <button className="answer-button border-4 border-[#e12407] btn-shadow py-2.5 px-5 text-[15pt] font-bold font-[yoster] bg-[#ffd8d2] cursor-pointer text-[#e12407] hover:bg-[#ff7a65] hover:border-[#d42a10] hover:text-white focus:outline-0 focus-visible:outline-0" onClick={handleAnswer} name="smaller">Smaller 🔻</button>
                <button className="answer-button border-4 border-[#e12407] btn-shadow py-2.5 px-5 text-[15pt] font-bold font-[yoster] bg-[#ffd8d2] cursor-pointer text-[#e12407] hover:bg-[#ff7a65] hover:border-[#d42a10] hover:text-white focus:outline-0 focus-visible:outline-0" onClick={handleAnswer} name="larger">Larger 🔺</button>
            </div>
        </div>
    )
}