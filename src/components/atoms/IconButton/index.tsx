import React from "react";
import { StyledIconButton } from "./styles";

export type IconButtonProps = {
  icon: React.ReactNode;
  ariaLabel?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  title?: string;
  ariaPressed?: boolean;
  ariaControls?: string;
  ariaExpanded?: boolean;
  type?: "button" | "submit" | "reset";
  style?: React.CSSProperties;
  className?: string;
};

export const IconButton: React.FC<IconButtonProps> = ({
  icon,
  ariaLabel,
  onClick,
  title,
  ariaPressed,
  ariaControls,
  ariaExpanded,
  type = "button",
  style,
  className,
}) => {
  return (
    <StyledIconButton
      type={type}
      aria-label={ariaLabel || undefined}
      title={title}
      aria-pressed={ariaPressed}
      aria-controls={ariaControls}
      aria-expanded={ariaExpanded}
      onClick={onClick}
      style={style}
      className={className}
    >
      {icon}
    </StyledIconButton>
  );
};

export default IconButton;

