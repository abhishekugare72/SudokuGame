import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import styled from "styled-components";

const CellInput = styled.input`
  width: 100%;
  height: 45px;
  text-align: center;
  font-size: 1.25rem;
  border: 1px solid #94a3b8;
  background: #f8fafc;
  outline: none;
  position: relative;
  margin: 0;
  padding: 0;

  &.border-box-bottom {
    border-bottom: 2px solid #475569;
  }
  &.border-box-right {
    border-right: 2px solid #475569;
  }
  &.initial-cell {
    font-weight: bold;
  }
`;

const SudokuCell = ({
  value,
  rowIndex,
  colIndex,
  isInitialCell,
  isSelected,
  isSameRow,
  isSameCol,
  onChange,
  onFocus,
}) => {
  const cellRef = useRef(null);

  useEffect(() => {
    const entranceAnimation = gsap.from(cellRef.current, {
      duration: 0.5,
      opacity: 0,
      y: -20,
      delay: (rowIndex * 9 + colIndex) * 0.02,
      ease: "power2.out",
      onStart: () => {
        gsap.set(cellRef.current, { opacity: 1 });
      },
    });
    return () => {
      if (entranceAnimation) entranceAnimation.kill();
    };
  }, []); 

  useEffect(() => {
    if (!cellRef.current) return;

    const selectionAnimation = gsap.to(cellRef.current, {
      duration: 0.3,
      backgroundColor: isSelected
        ? "#bfdbfe"
        : isSameRow || isSameCol
        ? "#e0f2fe"
        : isInitialCell
        ? "#e2e8f0"
        : "#f8fafc",
      scale: isSelected ? 1.05 : 1,
      ease: "power2.out",
    });

    return () => {
      if (selectionAnimation) selectionAnimation.kill();
    };
  }, [isSelected, isSameRow, isSameCol, isInitialCell]);

  useEffect(() => {
    if (value && !isInitialCell && cellRef.current) {
      
      const valueAnimation = gsap.from(cellRef.current, {
        duration: 0.3,
        scale: 1.2,
        ease: "back.out(1.7)",
      });

      
      return () => {
        if (valueAnimation) valueAnimation.kill();
      };
    }
  }, [value, isInitialCell]);

  const classes = [];
  if ((rowIndex + 1) % 3 === 0 && rowIndex < 8)
    classes.push("border-box-bottom");
  if ((colIndex + 1) % 3 === 0 && colIndex < 8)
    classes.push("border-box-right");
  if (isInitialCell) classes.push("initial-cell");

  return (
    <CellInput
      ref={cellRef}
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      onFocus={onFocus}
      className={classes.join(" ")}
      maxLength={1}
      readOnly={isInitialCell}
    />
  );
};

export default SudokuCell;
