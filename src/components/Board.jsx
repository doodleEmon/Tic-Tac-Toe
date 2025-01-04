import { useState } from "react";
import Square from "./Square";
import useCalculateWinner from "../hooks/useCalculateWinner";

const Board = () => {
  const [xIsNext, setXIsNext] = useState(true);
  const [squares, setSquares] = useState(Array(9).fill(null));

  const winner = useCalculateWinner(squares);

  const handleClick = (i) => {
    const nextSquares = squares.slice();

    if (squares[i] || winner) {
      return; // if it is true, then the execution will be stop here and go out from this handleClick function, won't go through down!
    }

    if (xIsNext) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }
    setSquares(nextSquares);
    setXIsNext(!xIsNext);
  };

  const nullContainer = squares.filter((value) => value === null);

  let status;
  if (winner) {
    status = (
      <h3 className="text-gray-600 text-xl font-semibold my-3 text-center">
        Winner: <span className="text-red-500">{winner}</span>
      </h3>
    );
  } else if (winner === null && nullContainer.length === 0) {
    status = (
      <h3 className="text-gray-500 text-lg font-semibold my-3 text-center">
        No way! Try again!
      </h3>
    );
  } else {
    status = (
      <h3 className="text-gray-600 text-xl font-semibold my-3 text-center">
        Player turn:{" "}
        {xIsNext ? (
          <span className="text-yellow-500">X</span>
        ) : (
          <span className="text-blue-500">O</span>
        )}
      </h3>
    );
  }

  return (
    <div className="w-full mx-auto mt-[50%]">
      <h1 className="text-center font-semibold">
        Mini Tic-Tac-Toe (<span className="text-yellow-500">X</span> vs{" "}
        <span className="text-blue-500">O</span>)
      </h1>
      {status}
      <div className="w-full ml-5">
        <div className="board-row">
          <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
          <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
          <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
        </div>
        <div className="board-row">
          <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
          <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
          <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
        </div>
        <div className="board-row">
          <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
          <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
          <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
        </div>
      </div>
      {winner && (
        <button
          onClick={() => {
            setSquares(Array(9).fill(null));
            setXIsNext(true);
          }}
          className="bg-red-400 border-2 border-red-500 px-4 py-2 rounded-md mt-6 ml-[30.5%] text-white font-semibold tracking-wide"
        >
          Replay
        </button>
      )}

      {nullContainer.length === 0 && winner === null && (
        <button
          onClick={() => {
            setSquares(Array(9).fill(null));
            setXIsNext(true);
          }}
          className="bg-red-400 border-2 border-red-500 px-4 py-2 rounded-md mt-6 ml-[30.5%] text-white font-semibold tracking-wide"
        >
          Replay
        </button>
      )}
    </div>
  );
};

export default Board;
