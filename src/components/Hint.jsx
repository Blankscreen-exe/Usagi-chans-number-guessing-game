//Hint button
//used to display a clickable button for gettting hints
// calculations are done in Stats.jsx
import React from 'react'

export default function Hint(props) {

  function showHint() {
    props.setDisplayHint((prevDisplayHint) => !prevDisplayHint)
  }

  return (
    <span className='font-[yoster] text-[19pt] text-[brown]' onClick={showHint}>🥕 <span className='hover:text-[#ec5d5d] hover:underline hover:cursor-help'>{props.displayHint && props.gameState === 1 ? "Hide Carrot" : "Need Carrot?"}</span></span>
  )
}
