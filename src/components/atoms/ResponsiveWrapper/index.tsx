import React from "react";
import { StyledResponsiveWrapper } from "./styles";

export type ResponsiveWrapperProps = {
  variant: "mobileOnly" | "desktopOnly" | "tabletOnly";
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
};

export const ResponsiveWrapper: React.FC<ResponsiveWrapperProps> = ({
  variant,
  children,
  className,
  style,
}) => {
  return (
    <StyledResponsiveWrapper variant={variant} className={className} style={style}>
      {children}
    </StyledResponsiveWrapper>
  );
};

export default ResponsiveWrapper;

