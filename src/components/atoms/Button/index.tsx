"use client";

import React from "react";
import { StyledButton, type StyledButtonVariants } from "./styles";

type ButtonColors = {
  background?: string;
  text?: string;
  border?: string;
};

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  StyledButtonVariants & {
    label?: string;
    colors?: ButtonColors;
    children?: React.ReactNode;
  };

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ label, children, colors, variant = "solid", style, ...props }, ref) => {
    const content = children ?? label;
    const cssVariables = {
      ...(colors?.background && { "--btn-bg": colors.background }),
      ...(colors?.text && { "--btn-text": colors.text }),
      ...(colors?.border && { "--btn-border": colors.border }),
    } as React.CSSProperties;

    const customStyle: React.CSSProperties = { ...cssVariables, ...style };

    return (
      <StyledButton ref={ref} variant={variant} style={customStyle} {...props}>
        {content}
      </StyledButton>
    );
  },
);

Button.displayName = "Button";

export default Button;


