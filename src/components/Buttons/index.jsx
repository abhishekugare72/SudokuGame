import React, { useRef, useEffect } from "react";
import { RotateCw, Play, CheckCircle } from "lucide-react";
import { gsap } from "gsap";
import styled from "styled-components";

const ButtonContainer = styled.div`
  display: flex;
  gap: 1rem;
`;

const Button = styled.button`
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

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }

  &:hover {
    transform: translateY(-2px);
    filter: brightness(110%);
  }
`;

const Buttons = ({ onSolve, onValidate, onReset, solving, isResetting }) => {
  const containerRef = useRef(null);
  const buttonRefs = useRef([]);

  useEffect(() => {
    gsap.from(buttonRefs.current, {
      duration: 0.5,
      opacity: 0,
      y: 20,
      stagger: 0.1,
      ease: "power2.out",
    });
  }, []);

  const handleButtonClick = (ref, callback) => {
    gsap.to(ref, {
      duration: 0.1,
      scale: 0.95,
      ease: "power2.out",
      yoyo: true,
      repeat: 1,
      onComplete: callback,
    });
  };

  const handleHover = (ref) => {
    gsap.to(ref, {
      duration: 0.3,
      scale: 1.1,
      ease: "power2.out",
    });
  };

  const handleHoverOut = (ref) => {
    gsap.to(ref, {
      duration: 0.3,
      scale: 1,
      ease: "power2.out",
    });
  };

  return (
    <ButtonContainer ref={containerRef}>
      <Button
        ref={(el) => (buttonRefs.current[0] = el)}
        onMouseEnter={() => handleHover(buttonRefs.current[0])}
        onMouseLeave={() => handleHoverOut(buttonRefs.current[0])}
        onClick={() => handleButtonClick(buttonRefs.current[0], onSolve)}
        disabled={solving || isResetting}
        className="solve-button"
      >
        <Play size={18} />
        {solving ? "Solving..." : "Solve"}
      </Button>

      <Button
        ref={(el) => (buttonRefs.current[1] = el)}
        onMouseEnter={() => handleHover(buttonRefs.current[1])}
        onMouseLeave={() => handleHoverOut(buttonRefs.current[1])}
        onClick={() => handleButtonClick(buttonRefs.current[1], onValidate)}
        disabled={solving || isResetting}
        className="validate-button"
      >
        <CheckCircle size={18} />
        Validate
      </Button>

      <Button
        ref={(el) => (buttonRefs.current[2] = el)}
        onMouseEnter={() => handleHover(buttonRefs.current[2])}
        onMouseLeave={() => handleHoverOut(buttonRefs.current[2])}
        onClick={() => handleButtonClick(buttonRefs.current[2], onReset)}
        disabled={solving || isResetting}
        className="reset-button"
      >
        <RotateCw size={18} />
        Reset
      </Button>
    </ButtonContainer>
  );
};

export default Buttons;
