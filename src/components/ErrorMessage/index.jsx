import React from "react";
import { ErrorContainer } from "./styles";

const ErrorMessage = ({ message }) => {
  if (!message) return null;

  return (
    <ErrorContainer>
      <span className="error-icon">⚠️</span>
      {message}
    </ErrorContainer>
  );
};

export default ErrorMessage;
