import React, { useState } from "react";
import "./TicTacToe.css";

const TicTacToe = () => {
  const [turn, setTurn] = useState("X");
  const [cells, setCells] = useState(Array(9).fill("-"));
  const [hasWon, setHasWon] = useState(false);

  const checkWin = (arr) => {
    const win_patterns = {
      across: [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
      ],
      down: [
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
      ],
      diagonal: [
        [0, 4, 8],
        [2, 4, 6],
      ],
    };
    for (let pattern in win_patterns) {
      win_patterns[pattern].forEach((combo) => {
        if (
          arr[combo[0]] === "-" ||
          arr[combo[1]] === "-" ||
          arr[combo[2]] === "-"
        ) {
          // do nothing
        } else {
          if (
            arr[combo[0]] === arr[combo[1]] &&
            arr[combo[1]] === arr[combo[2]]
          ) {
            console.log(`${turn} is the winner!`);
            setHasWon(true);
          }
        }
      });
    }
  };

  const updateCell = (arr) => {
    setCells(arr);
  };

  const handleClick = (num) => {
    let arr = [...cells];
    if (arr[num] !== "-") {
      alert("Invalid move");
      return;
    }
    if (turn === "X") {
      arr[num] = "X";
      setTurn("O");
    } else {
      arr[num] = "O";
      setTurn("X");
    }
    setCells(arr);
    updateCell(arr);
    checkWin(arr);
  };

  const Cell = ({ num }) => {
    return <td onClick={() => handleClick(num)}>{cells[num]}</td>;
  };

  const result = hasWon ? (
    <div> Has Won Bitch </div>
  ) : (
    <table>
      Turn : {turn}
      <tbody>
        <tr>
          <Cell num={0} />
          <Cell num={1} />
          <Cell num={2} />
        </tr>
        <tr>
          <Cell num={3} />
          <Cell num={4} />
          <Cell num={5} />
        </tr>
        <tr>
          <Cell num={6} />
          <Cell num={7} />
          <Cell num={8} />
        </tr>
      </tbody>
    </table>
  );

  return <div className="container">{result}</div>;
};

export default TicTacToe;
