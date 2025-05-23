//Stats
//Contains the statistics of the player (turns,points,lives)
//displays it on the screen
import React, { useState } from 'react'
import Hint from './Hint'

export default function Stats(props) {

  //life display
  let lives = "❤️".repeat(props.playerData.lives) + "☠️".repeat(3 - props.playerData.lives)

  //calculating probability of hints
  const currNumber = props.numbers.currentNumber
  const probabilityOfLarger = ((9 - currNumber) * 10)
  const probabilityOfSmaller = ((10 - (10 - currNumber)) * 10)

  return (
    <span className='flex justify-center flex-col items-center lg:inline lg:items-start'>
      <div className='flex flex-col justify-around py-5 px-0 text-left w-max gap-y-1.5 md:flex-row md:gap-x-4 md:my-4 lg:w-auto lg:gap-y-0 lg:gap-x-0 lg:my-0 lg:text-center'>
        <span>
          <span className='font-[yoster] text-[19pt] text-[brown]'>Turns: </span>
          <span className='text-[17pt] text-[#ff6200]'>{props.playerData.turns}</span>
        </span>
        <span>
          <span className='font-[yoster] text-[19pt] text-[brown]'>Lives: </span>
          <span className='text-[17pt] text-[#ff6200]'>{lives}</span>
        </span>
        <span>
          <span className='font-[yoster] text-[19pt] text-[brown]'>Points: </span>
          <span className='text-[17pt] text-[#ff6200]'>{props.playerData.points}</span>
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
        <div className='flex flex-col gap-y-2 justify-around py-[5px] px-0 my-[15px] mx-auto hint-container-border bg-[#d2bb8c] lg:flex-row lg:gap-y-0'>
          <span>
            <span className='font-[yoster] text-[14pt] text-[brown] md:text-[19pt]'>Chance of "Smaller" = </span>
            <span className='text-[12pt md:text-[17pt]'>{probabilityOfSmaller} %</span>
          </span>
          <span>
            <span className='font-[yoster] text-[14pt] text-[brown] md:text-[19pt]'>Chance of "Larger" = </span>
            <span className='text-[12pt md:text-[17pt]'>{probabilityOfLarger} %</span>
          </span>
        </div>}
    </span>
  )
}
