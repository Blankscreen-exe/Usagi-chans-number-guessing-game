//Check answer
//this module only shows the results of the given asnwer
//calculations are done in Reveal.jsx so that the states could be updated before this module loads
import React from 'react'

export default function CheckAnswer(props) {

    const livesLeft = props.playerData.lives > 0 ? true : false

    const changeState = () => {
        //display hint to false
        props.setDisplayHint(false)
        // generating new numbers
        props.genNum()
        //changing game state (1=continue or 4=end)
        props.setGameState(props.playerData.lives > 0 ? 1 : 4)
    }

    return (
        <div>
            <p>Current Number: <span className='text-orange-600 font-bold underline'>{props.numbers.currentNumber}</span></p>
            <p>Next Number: <span className='text-orange-600 font-bold underline'>{props.numbers.nextNumber}</span></p>
            <p>Your Answer: <span className='text-orange-600 font-bold underline'>{props.answer}</span></p>
            <h3>Result: <span className='text-orange-600 font-bold underline'>{props.dialogue}</span></h3>
            <button onClick={changeState} className="border-4 border-[#e12407] btn-shadow py-2.5 px-5 text-[15pt] font-bold font-[yoster] bg-[#ffd8d2] cursor-pointer text-[#e12407] hover:bg-[#ff7a65] hover:border-[#d42a10] hover:text-white focus:outline-0 focus-visible:outline-0">Next {">"}</button>
        </div>
    )
}
