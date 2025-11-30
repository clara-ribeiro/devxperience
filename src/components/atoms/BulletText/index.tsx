import React from "react";
import { StyledBulletText } from "./styles";

export type BulletTextProps = {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
};

export const BulletText: React.FC<BulletTextProps> = ({
  children,
  className,
  style,
}) => {
  return (
    <StyledBulletText className={className} style={style}>
      {children}
    </StyledBulletText>
  );
};

export default BulletText;

