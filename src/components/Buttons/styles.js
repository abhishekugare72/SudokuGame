import styled from 'styled-components';

export const ButtonContainer = styled.div`
  display: flex;
  gap: 1rem;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  font-weight: bold;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 0.5px;

  &.solve-button {
    background: linear-gradient(135deg, #3b82f6, #2563eb);
  }

  &.validate-button {
    background: linear-gradient(135deg, #10b981, #059669);
  }

  &.reset-button {
    background: linear-gradient(135deg, #6366f1, #4f46e5);
  }

  &:hover {
    animation: hover-animation 0.3s ease-in-out;
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
    transform: none;
  }
`;

const hoverAnimation = styled.keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
`;