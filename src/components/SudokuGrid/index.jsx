import React from "react";
import SudokuCell from "./SudokuCell";
import { GridContainer, Grid } from "./styles";

const SudokuGrid = ({
  grid,
  initialCells,
  selectedCell,
  onCellChange,
  onCellFocus,
}) => {
  return (
    <GridContainer>
      <Grid>
        {grid.map((row, rowIndex) =>
          row.map((cell, colIndex) => (
            <SudokuCell
              key={`${rowIndex}-${colIndex}`}
              value={cell}
              rowIndex={rowIndex}
              colIndex={colIndex}
              isInitialCell={initialCells.has(`${rowIndex}-${colIndex}`)}
              isSelected={
                selectedCell?.row === rowIndex && selectedCell?.col === colIndex
              }
              isSameRow={selectedCell?.row === rowIndex}
              isSameCol={selectedCell?.col === colIndex}
              onChange={(value) => onCellChange(rowIndex, colIndex, value)}
              onFocus={() => onCellFocus(rowIndex, colIndex)}
            />
          ))
        )}
      </Grid>
    </GridContainer>
  );
};

export default SudokuGrid;
