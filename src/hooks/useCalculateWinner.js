const useCalculateWinner = (squares) => {
  const list = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  const len = list.length;

  for (let i = 0; i < len; i++) {
    const [a, b, c] = list[i];
    if (squares && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }

  return null;
};

export default useCalculateWinner;
