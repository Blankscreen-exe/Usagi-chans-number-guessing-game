import { useState } from 'react'

//importing styles
// import './styles/App.css'

//loading components
import Title from './components/Title'
import Avatar from './components/Avatar'
import IObox from './components/IObox'
import NavButtons from './components/NavButtons'
import Stats from './components/Stats';
import MenuIcon from '@mui/icons-material/Menu';

function App() {
  // game states
  // 0 - start screen
  // 1 - game start (asking question, showing input buttons)
  // 2 - reveal answer
  // 3 - checking answer showing result (if ans==good then state=1 wlse state=4)
  // 4 - result screen
  const [gameState, setGameState] = useState(0)

  // states for player stats
  const [playerData, setPlayerData] = useState({
    points: 0,
    turns: 0,
    lives: 3,
    reward: ""
  })
  // stats for numbers 
  const [numbers, setNumbers] = useState({
    currentNumber: Math.round(Math.random() * 9),
    nextNumber: Math.round(Math.random() * 9)
  })
  // state for answers
  const [answer, setAnswer] = useState("")
  const [answerResult, setAnswerResult] = useState(0)
  //display hint
  const [displayHint, setDisplayHint] = useState(false)
  // state for showing or not the ham menu
  const [show, setShow] = useState(false);

  function genNum() {
    setNumbers((prevNumbers) => {
      return {
        ...prevNumbers,
        currentNumber: prevNumbers.nextNumber,
        nextNumber: Math.round(Math.random() * 9)
      }
    })
  }

  // Ham menu custom style
  const hamMenuStyle = {
    fontSize: '2.25rem',
    transition: 'color 0.3s ease-in-out',
  }

  return (
    <div className="App">
      <button className='absolute top-6 right-10 cursor-pointer' onClick={() => setShow(true)}>
        <MenuIcon sx={hamMenuStyle} className='text-[brown] hover:text-[#d42a10]' />
      </button>
      <Title />
      <div className='game-container'>
        <NavButtons toggleShow={show} showMenu={setShow} />
        <Avatar
          gameState={gameState}
          numbers={numbers}
          playerData={playerData}
          answerResult={answerResult}
        />
        <Stats
          playerData={playerData}
          numbers={numbers}
          gameState={gameState}
          displayHint={displayHint}
          setDisplayHint={setDisplayHint}
        />
        <IObox
          gameState={gameState}
          setGameState={setGameState}
          genNum={genNum}
          answer={answer}
          setAnswer={setAnswer}
          numbers={numbers}
          playerData={playerData}
          setPlayerData={setPlayerData}
          setAnswerResult={setAnswerResult}
          setDisplayHint={setDisplayHint}
        />
      </div>

    </div>
  )
}

export default App
