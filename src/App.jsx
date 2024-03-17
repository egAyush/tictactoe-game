import './style.scss';
import { useState } from 'react';
import { calculateWinner } from './winner';

import Board from './components/board';

function App() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [isXnext, setIsXNext] = useState(false);

  const winner = calculateWinner(squares);

  const nextPlayer = isXnext ? 'x' : '0';

  const statusMessage = winner
    ? `winner is ${winner}`
    : `next player is ${nextPlayer}`;

  const handleSquareClick = clickedPosition => {
    if (squares[clickedPosition] || winner) {
      return;
    }

    setSquares(currentSquares => {
      return currentSquares.map((SquareValue, position) => {
        if (clickedPosition === position) {
          return isXnext ? 'X' : '0';
        }

        return SquareValue;
      });
    });

    setIsXNext(currentIsXNext => !currentIsXNext);
  };

  return (
    <div className="app">
      <h2>{statusMessage}</h2>
      <Board squares={squares} handleSquareClick={handleSquareClick} />
    </div>
  );
}

export default App;
