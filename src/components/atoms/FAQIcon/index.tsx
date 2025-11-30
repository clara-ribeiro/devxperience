import React from "react";
import { IconArrow } from "@/components/icons/IconArrow";
import { IconButton } from "./styles";

export type FAQIconProps = {
  isExpanded: boolean;
  onClick: (event?: React.MouseEvent<HTMLButtonElement>) => void;
  ariaControls?: string;
  ariaLabel?: string;
  className?: string;
  style?: React.CSSProperties;
  "data-devmode-highlight"?: string;
  "data-devmode-target"?: string;
  onMouseEnter?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  onMouseLeave?: () => void;
  onFocusCapture?: (event: React.FocusEvent<HTMLButtonElement>) => void;
  onBlurCapture?: () => void;
};

export const FAQIcon: React.FC<FAQIconProps> = ({
  isExpanded,
  onClick,
  ariaControls,
  ariaLabel,
  className,
  style,
  "data-devmode-highlight": dataDevModeHighlight,
  "data-devmode-target": dataDevModeTarget,
  onMouseEnter,
  onMouseLeave,
  onFocusCapture,
  onBlurCapture,
}) => {
  const defaultAriaLabel = isExpanded ? "Recolher resposta" : "Expandir resposta";
  
  return (
    <IconButton
      type="button"
      onClick={onClick}
      aria-controls={ariaControls}
      aria-label={ariaLabel || defaultAriaLabel}
      aria-expanded={isExpanded}
      className={className}
      style={style}
      data-expanded={isExpanded}
      data-devmode-highlight={dataDevModeHighlight}
      data-devmode-target={dataDevModeTarget}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onFocusCapture={onFocusCapture}
      onBlurCapture={onBlurCapture}
    >
      <IconArrow />
    </IconButton>
  );
};

export default FAQIcon;

