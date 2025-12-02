import React from "react";
import { StyledFAQQuestion } from "./styles";

export type FAQQuestionProps = {
  children: React.ReactNode;
  id?: string;
  className?: string;
  style?: React.CSSProperties;
};

export const FAQQuestion: React.FC<FAQQuestionProps> = ({
  children,
  id,
  className,
  style,
}) => {
  return (
    <StyledFAQQuestion id={id} className={className} style={style}>
      {children}
    </StyledFAQQuestion>
  );
};

export default FAQQuestion;

