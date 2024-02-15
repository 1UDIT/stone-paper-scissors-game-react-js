import { useState } from 'react'
import './App.css'

function App() {
  const [moves, setMoves] = useState(10)
  const [computerMoves, setcomputerMoves] = useState('')
  const [computerScore, setComputerScores] = useState(0)
  const [playerScore, setplayerscores] = useState(0);
  const [TieScores, setTieScores] = useState(0);
  const [result, setresult] = useState('Result...');

  const game = (value: string) => { 
    const computerOptions = ['rock', 'paper', 'scissors'];
    if (moves > 0) {
      setMoves(move => move - 1);

      const choiceNumber = Math.floor(Math.random() * 3);       
      const computerChoice = computerOptions[choiceNumber];
      setcomputerMoves(computerChoice);
      Winner(computerChoice, value);
    }
  }

  const Winner = (computerChoice: string, playerChoice: string) => { 
    if (playerChoice === computerChoice) {
      setresult("Tie");
      setTieScores(TieScores + 1);
    }
    else if (playerChoice === 'rock') {
      if (computerChoice === 'paper') {
        setresult("Computer Won");
        setComputerScores(computerScore + 1);
      } else {
        setresult("Player Won");
        setplayerscores(playerScore + 1);
      }
    }
    else if (playerChoice === 'paper') {
      if (computerChoice === 'scissors') {
        setresult("Computer Won");
        setComputerScores(computerScore + 1);
      } else {
        setresult("Player Won");
        setplayerscores(playerScore + 1);
      }
    }
    else if (playerChoice === 'scissors') {
      if (computerChoice === 'rock') {
        setresult("Computer Won");
        setComputerScores(computerScore + 1);
      } else {
        setresult("Player Won");
        setplayerscores(playerScore + 1);
      }
    }
  }

  return (
    <>
      <section className="game">
        <div className="title">Rock Paper Scissor</div>
        <div className="score">
          <div className="playerScore">
            <h2>Player</h2>
            <p className="p-count count">{playerScore}</p>

          </div>
          <div className="computerScore">
            <h2>Computer</h2>
            <p className="c-count count">{computerScore}</p>

          </div>
          <div className="computerScore">
            <h2>Tie</h2>
            <p className="c-count count">{TieScores}</p>

          </div>
        </div>
        <div className="move">Choose your move:</div>

        <div className="movesleft">Moves Left: {moves} </div>

        <div className="options">
          <button onClick={() => game("rock")} className="rock">Rock</button>
          <button onClick={() => game("paper")} className="paper">Paper</button>
          <button onClick={() => game("scissors")} className="scissor">Scissors</button>
        </div>

        <div className="result">{result}</div>

        <span className="ComputerPlayer"><h2>Computer Move:</h2><p className="p-count count">{computerMoves}</p></span>

      </section>
    </>
  )
}

export default App
