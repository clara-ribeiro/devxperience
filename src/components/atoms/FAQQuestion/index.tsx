import React from "react";
import { StyledFAQQuestion } from "./styles";

export type FAQQuestionProps = {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
};

export const FAQQuestion: React.FC<FAQQuestionProps> = ({
  children,
  className,
  style,
}) => {
  return (
    <StyledFAQQuestion className={className} style={style}>
      {children}
    </StyledFAQQuestion>
  );
};

export default FAQQuestion;

