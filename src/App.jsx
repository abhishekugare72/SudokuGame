import React from "react";
import SudokuGrid from "./components/SudokuGrid";
import Buttons from "./components/Buttons";
import ErrorMessage from "./components/ErrorMessage";
import { useSudokuGame } from "./hooks/useSudokuGame";
import styled from "styled-components";

const initialPuzzle = [
  [5, 3, 0, 0, 7, 0, 0, 0, 0],
  [6, 0, 0, 1, 9, 5, 0, 0, 0],
  [0, 9, 8, 0, 0, 0, 0, 6, 0],
  [8, 0, 0, 0, 6, 0, 0, 0, 3],
  [4, 0, 0, 8, 0, 3, 0, 0, 1],
  [7, 0, 0, 0, 2, 0, 0, 0, 6],
  [0, 6, 0, 0, 0, 0, 2, 8, 0],
  [0, 0, 0, 4, 1, 9, 0, 0, 5],
  [0, 0, 0, 0, 8, 0, 0, 7, 9],
];

const Container = styled.div`
  min-height: 100vh;
  padding: 2rem;
  background: linear-gradient(135deg, #f0f4ff 0%, #e6eeff 100%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  color: #1a365d;
  margin-bottom: 1rem;
  position: relative;
  text-align: center;

  &::after {
    content: "";
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 60%;
    height: 4px;
    background: linear-gradient(90deg, #3b82f6, #60a5fa);
    border-radius: 2px;
  }
`;

const App = () => {
  const {
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
    setSelectedCell,
  } = useSudokuGame(initialPuzzle);

  console.log("Rendering App component");

  return (
    <Container>
      <Title>Sudoku Solver</Title>

      {console.log("Rendering SudokuGrid component")}
      <SudokuGrid
        grid={grid}
        initialCells={initialCells}
        selectedCell={selectedCell}
        onCellChange={handleChange}
        onCellFocus={(row, col) => setSelectedCell({ row, col })}
      />

      {console.log("Rendering ErrorMessage component")}
      <ErrorMessage message={error} />

      {console.log("Rendering Buttons component")}
      <Buttons
        onSolve={handleSolve}
        onValidate={handleValidate}
        onReset={handleReset}
        solving={solving}
        isResetting={isResetting}
      />
    </Container>
  );
};

export default App;
