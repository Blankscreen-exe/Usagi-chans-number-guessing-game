//Game start button
//generic press start button displayed at the very beginning
import React from 'react'

export default function GameStartButton(props) {

  function gameStart() {
    props.setGameState(1)
    props.genNum()
  }

  return (
    <button className='border-4 border-[#e12407] btn-shadow py-3 px-5 text-[15pt] font-bold font-[yoster] bg-[#ffd8d2] cursor-pointer text-[#e12407] hover:bg-[#ff7a65] hover:border-[#d42a10] hover:text-white focus:outline-0 focus-visible:outline-0' onClick={gameStart}>🥕 Press Start 🥕</button>
  )
}
