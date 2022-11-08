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
        props.setGameState( props.playerData.lives > 0 ? 1 : 4)
    }

    return (
        <div>
            <p>Current Number: <span className='highlight'>{props.numbers.currentNumber}</span></p>
            <p>Next Number: <span className='highlight'>{props.numbers.nextNumber}</span></p>
            <p>Your Answer: <span className='highlight'>{props.answer}</span></p>
            <h3>Result: <span className='highlight'>{props.dialogue}</span></h3>
            <button onClick={changeState} className="io-button" >Next {">"}</button>
        </div>
    )
}
