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
            break;
    }

    return (
        <div className="flex flex-col justify-center items-center pt-2.5 gap-y-3 md:gap-y-0 md:flex-row md:items-start">
            <span className="flex flex-col items-center w-full relative text-center z-0 text-[#666666] md:inline md:w-[480px] lg:w-[600px]">
                <picture>
                    <source media="(min-width: 768px)" srcSet="/speechbubble.png" />
                    <img src="/speechbubble-mobile.png" alt="Speech buble" className="w-full h-72 max-w-80 md:h-56 md:max-w-none lg:h-auto" />
                </picture>
                <p className="absolute text-[.8rem] leading-6 max-w-72 top-0 mt-8 ml-auto mr-auto pl-6 pr-4 z-[1] md:max-w-[430px] md:mt-6 md:pl-8 md:text-[1rem] lg:max-w-[550px]">{dialogue}</p>
            </span>
            <img src={image} />
        </div>
    )
}