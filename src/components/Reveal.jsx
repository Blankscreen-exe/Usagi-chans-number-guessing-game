//Reveal
//This module is dedicated to the game state where the next number is revealed
//it also sets the stage for check answer so that the State variables are set before entering the next game state
import React from "react";

export default function Reveal(props) {

    const livesLeft = props.playerData.lives > 0 ? true : false

    const currentNumber = props.numbers.currentNumber
    const nextNumber = props.numbers.nextNumber

    const changeState = () => {
        switch (props.answer) {
            case "smaller":
                if (currentNumber > nextNumber) {

                    //set player data (inc points, inc turns)
                    props.setPlayerData((prevData) => {
                        return {
                            ...prevData,
                            points: prevData.points + 1,
                            turns: prevData.turns + 1
                        }
                    })
                    //set dialogue for correct answer
                    props.setDialogue("Correct !")
                    //set answer result
                    props.setAnswerResult(1)

                } else if (currentNumber === nextNumber) {

                    //set player data (inc points, inc turns)
                    props.setPlayerData((prevData) => {
                        return {
                            ...prevData,
                            turns: prevData.turns + 1
                        }
                    })
                    //set dialogue for correct answer
                    props.setDialogue("They are the same number !")
                    //set answer result
                    props.setAnswerResult(0)

                } else {

                    //set player data ( dec life, inc turn )
                    props.setPlayerData((prevData) => {
                        return {
                            ...prevData,
                            lives: prevData.lives - 1,
                            turns: livesLeft ? prevData.turns + 1 : prevData.turns
                        }
                    })
                    //set dialogue for incorrect answer
                    props.setDialogue("Wrong !")
                    //set answer result
                    props.setAnswerResult(-1)
                }
                break;


            case "larger":
                if (currentNumber < nextNumber) {

                    //set player data (inc points, inc turns)
                    props.setPlayerData((prevData) => {
                        return {
                            ...prevData,
                            points: prevData.points + 1,
                            turns: prevData.turns + 1
                        }
                    })
                    //set dialogue for correct data
                    props.setDialogue("Correct !")
                    //set answer result
                    props.setAnswerResult(1)

                } else if (currentNumber === nextNumber) {

                    //set player data (inc points, inc turns)
                    props.setPlayerData((prevData) => {
                        return {
                            ...prevData,
                            turns: prevData.turns + 1
                        }
                    })
                    //set dialogue for correct answer
                    props.setDialogue("They are the same number !")
                    //set answer result
                    props.setAnswerResult(0)

                } else {

                    //set player data ( dec life, inc turn )
                    props.setPlayerData((prevData) => {
                        return {
                            ...prevData,
                            lives: prevData.lives - 1,
                            turns: livesLeft ? prevData.turns + 1 : prevData.turns
                        }
                    })
                    //set dialogue for incorrect answer
                    props.setDialogue("Wrong !")
                    //set answer result
                    props.setAnswerResult(-1)
                }
                break;

            default:
                console.log("Error in Check Answer")
        }

        //changing game state (sending to check answer)
        props.setGameState(3)
    }

    return (
        <div className="reveal-box">
            <p>The next number was ...</p>
            <h2><span className="text-orange-600 font-bold underline">{props.numbers.nextNumber}</span></h2>
            <button onClick={changeState} className="border-4 border-[#e12407] btn-shadow py-2.5 px-5 text-[15pt] font-bold font-[yoster] bg-[#ffd8d2] cursor-pointer text-[#e12407] hover:bg-[#ff7a65] hover:border-[#d42a10] hover:text-white focus:outline-0 focus-visible:outline-0">Next {">"}</button>
        </div>
    )
}