import React, { useState } from "react"
import "./App.css"
import Square from "./components/Square"
const App = () => {
  const [board, setBoard] = useState([
    "?",
    "?",
    "?",
    "?",
    "?",
    "?",
    "?",
    "?",
    "?"
  ])
  const [treasureLocation, setTreasureLocation] = useState(Math.floor(Math.random() * board.length)) 

  const handleGameplay = (currentSquare)=>{
    if (currentSquare === treasureLocation) { 
      board[currentSquare] = "💎";
 }else {
    board[currentSquare] = "🌴"
  }
     setBoard([...board])
}



  return (
    <>
      <h1>Treasure Hunt Game</h1>
      <div className="board">
        {board.map((square, index)=> (
         <Square
          key={index} 
          square= {square} 
          index={index} 
          handleGameplay={handleGameplay}/>
        ))}
      </div>
    </>
  );
}
        


export default App
