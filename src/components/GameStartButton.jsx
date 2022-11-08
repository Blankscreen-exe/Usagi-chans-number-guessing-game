//Game start button
//generic press start button displayed at the very beginning
import React from 'react'

export default function GameStartButton(props) {

  function gameStart () {
    props.setGameState(1)
    props.genNum()
  }

  return (
    <button className='press-start-button io-button' onClick={gameStart}>🥕 Press Start 🥕</button>
  )
}
