export const isValid = (grid) => {
   for (let i = 0; i < 9; i++) {
     const row = new Set();
     const col = new Set();
     const box = new Set();
 
     for (let j = 0; j < 9; j++) {
       if (grid[i][j] !== '' && row.has(grid[i][j])) return false;
       row.add(grid[i][j]);
 
       if (grid[j][i] !== '' && col.has(grid[j][i])) return false;
       col.add(grid[j][i]);
 
       const boxRow = Math.floor(i / 3) * 3 + Math.floor(j / 3);
       const boxCol = (i % 3) * 3 + (j % 3);
       if (grid[boxRow][boxCol] !== '' && box.has(grid[boxRow][boxCol])) return false;
       box.add(grid[boxRow][boxCol]);
     }
   }
   return true;
 };
 
 export const findEmpty = (grid) => {
   for (let i = 0; i < 9; i++) {
     for (let j = 0; j < 9; j++) {
       if (grid[i][j] === '') return [i, j];
     }
   }
   return null;
 };
 
 export const solveSudoku = (grid) => {
   const empty = findEmpty(grid);
   if (!empty) return true;
 
   const [row, col] = empty;
 
   for (let num = 1; num <= 9; num++) {
     const numStr = String(num);
     grid[row][col] = numStr;
 
     if (isValid(grid) && solveSudoku(grid)) {
       return true;
     }
 
     grid[row][col] = '';
   }
 
   return false;
 };