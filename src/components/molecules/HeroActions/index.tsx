import React from "react";
import { StyledActions } from "./styles";

export type HeroActionsProps = {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
};

export const HeroActions: React.FC<HeroActionsProps> = ({ children, className, style }) => {
  return (
    <StyledActions className={className} style={style}>
      {children}
    </StyledActions>
  );
};

export default HeroActions;

