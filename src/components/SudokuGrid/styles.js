import styled from 'styled-components';

export const GridContainer = styled.div`
  background: white;
  padding: 1.5rem;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 25px rgba(0, 0, 0, 0.15);
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(9, 45px);
  gap: 1px;
  background: white;
  padding: 2px;
  border-radius: 8px;
  border: 2px solid #1a365d;
`;

export const Cell = styled.input`
  width: 100%;
  height: 45px;
  text-align: center;
  font-size: 1.25rem;
  border: 1px solid #e2e8f0;
  background: white;
  outline: none;
  transition: all 0.2s ease;

  &:focus {
    background: #bfdbfe;
  }

  &.selected {
    background: #bfdbfe;
  }

  &.highlighted {
    background: #e0f2fe;
  }

  &.initial-cell {
    font-weight: bold;
    background: #f8fafc;
  }

  &.border-box-bottom {
    border-bottom: 2px solid #1a365d;
  }

  &.border-box-right {
    border-right: 2px solid #1a365d;
  }
`;