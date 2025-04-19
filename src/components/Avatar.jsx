//Avatar
//displays game avatar along with the speech bubble with different dialogues
//all dialogues are included in the src/assets/dialogues/dialogues.json
import React from "react";

import usagi_normal from '/avatar/usagi_normal.png'
import usagi_happy from '/avatar/usagi_happy.png'
import usagi_sad from '/avatar/usagi_sad.png'
import usagi_smug from '/avatar/usagi_smug.png'
import dialogues from '../assets/dialogues/dialogues.json'

export default function Avatar(props) {
    const livesLeft = props.playerData.lives > 0 ? true : false

    let dialogue;
    let image;
    switch (props.gameState) {
        case 0: // start screen
            dialogue = dialogues.startScreen
            image = usagi_happy
            break;
        case 1: // game start
            dialogue = `${dialogues.gameStart[0]} ${dialogues.gameStart[1]} ${props.numbers.currentNumber}. ${dialogues.gameStart[2]}`
            image = usagi_normal
            break;
        case 2: // reveal
            dialogue = `${dialogues.revealAnswer[0]} ${props.numbers.nextNumber} ${dialogues.revealAnswer[1]}`
            image = usagi_smug
            break;
        case 3: // check
            dialogue = props.answerResult === 0 ?
                `${dialogues.checkingAnswer[2]} ${dialogues.checkingAnswer[3]}` :
                props.answerResult === 1 ?
                    `${dialogues.checkingAnswer[0]} ${dialogues.checkingAnswer[1]}` :
                    `${dialogues.checkingAnswer[4]} ${livesLeft ? dialogues.checkingAnswer[5] : dialogues.checkingAnswer[6]}`
            image = props.answerResult === 0 ? usagi_normal : props.answerResult === 1 ? usagi_happy : usagi_sad
            break;
        case 4: // result

            if (props.playerData.points < 6) {
                dialogue = `${dialogues.finalResult.points.lt_5} ${dialogues.finalResult.finalResponse.below_avg}`
            } else if (props.playerData.points <= 10) {
                dialogue = `${dialogues.finalResult.points.lt_10} ${dialogues.finalResult.finalResponse.average}`
            } else if (props.playerData.points <= 25) {
                dialogue = `${dialogues.finalResult.points.lt_25} ${dialogues.finalResult.finalResponse.mediocre}`
            } else if (props.playerData.points <= 50) {
                dialogue = `${dialogues.finalResult.points.lt_50} ${dialogues.finalResult.finalResponse.mediocre}`
            } else if (props.playerData.points <= 75) {
                dialogue = `${dialogues.finalResult.points.lt_75} ${dialogues.finalResult.finalResponse.good}`
            } else if (props.playerData.points <= 100) {
                dialogue = `${dialogues.finalResult.points.lt_100} ${dialogues.finalResult.finalResponse.excellent}`
            } else if (props.playerData.points > 100) {
                dialogue = `${dialogues.finalResult.points.gt_100} ${dialogues.finalResult.finalResponse.excellent}`
            }

            image = props.playerData.points > 5 ? usagi_happy : usagi_sad
            break;
        default:
            console.log("Error fetching dialogue")
            break;
    }

    return (
        <div className="flex justify-center pt-2.5">
            <span className="text-center w-[600px] z-0 bg-[url('/speechbubble.png')] bg-no-repeat text-[#666666]">
                {/* <img src={speechBubble} className="speech-bubble"/> */}
                <p className="mt-[5%] ml-auto mr-auto pl-[5%] pr-[9%] w-[480px] z-[1]">{dialogue}</p>
            </span>
            <img src={image} />
        </div>
    )
}