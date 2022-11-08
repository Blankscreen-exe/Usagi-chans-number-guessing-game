//Hint button
//used to display a clickable button for gettting hints
// calculations are done in Stats.jsx
import React from 'react'

export default function Hint(props) {

  function showHint() {
    props.setDisplayHint((prevDisplayHint) => !prevDisplayHint)
  }

  return (
    <span className='header-field' onClick={showHint}>🥕 <span className='hint-anchor'>{props.displayHint && props.gameState === 1 ? "Hide Carrot" : "Need Carrot?"}</span></span>
  )
}
