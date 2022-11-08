//Stats
//Contains the statistics of the player (turns,points,lives)
//displays it on the screen
import React, {useState} from 'react'
import Hint from './Hint'

export default function Stats(props) {

  //life display
  let lives = "❤️".repeat(props.playerData.lives) + "☠️".repeat(3 - props.playerData.lives)

  //calculating probability of hints
  const currNumber = props.numbers.currentNumber
  const probabilityOfLarger =  ( (9 - currNumber  ) * 10 )
  const probabilityOfSmaller =  ( (10 - (10 - currNumber )) * 10 )

  return (
    <span>
      <div className='stats-container'>
          <span>
            <span className='header-field'>Turns: </span> 
            <span className='data-field'>{props.playerData.turns}</span> 
          </span>
          <span>
            <span className='header-field'>Lives: </span> 
            <span className='data-field'>{lives}</span> 
          </span>
          <span>
            <span className='header-field'>Points: </span> 
            <span className='data-field'>{props.playerData.points}</span>
          </span>
          <span>
            <Hint 
              gameState={props.gameState}
              displayHint={props.displayHint}
              setDisplayHint={props.setDisplayHint}
            />
          </span>
      </div>
      {props.displayHint && 
      props.gameState === 1 &&
      <div className='hint-container'>
        <span>
        <span className='header-field'>Chance of "Smaller" = </span>
        <span className='hint-field'>{probabilityOfSmaller} %</span>
        </span>
        <span>
        <span className='header-field'>Chance of "Larger" = </span>
        <span className='hint-field'>{probabilityOfLarger} %</span>
        </span>
      </div>}
    </span>
  )
}
