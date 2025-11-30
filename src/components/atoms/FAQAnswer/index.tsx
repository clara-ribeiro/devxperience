import React from "react";
import { StyledFAQAnswer } from "./styles";

export type FAQAnswerProps = {
  children: React.ReactNode;
  isExpanded: boolean;
  id?: string;
  className?: string;
  style?: React.CSSProperties;
};

export const FAQAnswer: React.FC<FAQAnswerProps> = ({
  children,
  isExpanded,
  id,
  className,
  style,
}) => {
  return (
    <StyledFAQAnswer
      id={id}
      data-expanded={isExpanded}
      className={className}
      style={style}
      role="region"
      aria-hidden={!isExpanded}
    >
      {children}
    </StyledFAQAnswer>
  );
};

export default FAQAnswer;

