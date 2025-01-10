import { useState } from 'react';
import { isValid, solveSudoku } from '../utils/sudokuLogic';

export const useSudokuGame = (initialPuzzle) => {
  const [grid, setGrid] = useState(() =>
    initialPuzzle.map(row => row.map(cell => cell === 0 ? '' : String(cell)))
  );

  const [initialCells] = useState(() => {
    const cells = new Set();
    initialPuzzle.forEach((row, i) => {
      row.forEach((cell, j) => {
        if (cell !== 0) cells.add(`${i}-${j}`);
      });
    });
    return cells;
  });

  const [error, setError] = useState('');
  const [solving, setSolving] = useState(false);
  const [selectedCell, setSelectedCell] = useState(null);
  const [isResetting, setIsResetting] = useState(false);

  const handleChange = (row, col, value) => {
    if (initialCells.has(`${row}-${col}`)) return;

    if (value === '' || (value >= 1 && value <= 9)) {
      const newGrid = grid.map(r => [...r]);
      newGrid[row][col] = value;
      setGrid(newGrid);
      setError('');
    }
  };

  const handleSolve = () => {
    setSolving(true);
    if (isValid(grid)) {
      const newGrid = grid.map(r => [...r]);
      if (solveSudoku(newGrid)) {
        setGrid(newGrid);
        setError('');
      } else {
        setError('No solution exists!');
      }
    } else {
      setError('Invalid Sudoku grid!');
    }
    setSolving(false);
  };

  const handleValidate = () => {
    if (!isValid(grid)) {
      setError('Invalid Sudoku grid!');
    } else {
      setError('');
    }
  };

  const handleReset = () => {
    setIsResetting(true);
    setGrid(initialPuzzle.map(row => row.map(cell => cell === 0 ? '' : String(cell))));
    setError('');
    setIsResetting(false);
  };

  return {
    grid,
    error,
    solving,
    selectedCell,
    isResetting,
    initialCells,
    handleChange,
    handleSolve,
    handleValidate,
    handleReset,
    setSelectedCell
  };
};