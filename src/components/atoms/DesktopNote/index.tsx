import React from "react";
import { StyledDesktopNote } from "./styles";

export type DesktopNoteProps = {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  "data-devmode-highlight"?: string;
  "data-devmode-target"?: string;
  onMouseEnter?: (event: React.MouseEvent<HTMLParagraphElement>) => void;
  onMouseLeave?: () => void;
  onFocusCapture?: (event: React.FocusEvent<HTMLParagraphElement>) => void;
  onBlurCapture?: () => void;
  onClick?: (event: React.MouseEvent<HTMLParagraphElement>) => void;
};

export const DesktopNote: React.FC<DesktopNoteProps> = ({
  children,
  className,
  style,
  "data-devmode-highlight": dataDevModeHighlight,
  "data-devmode-target": dataDevModeTarget,
  onMouseEnter,
  onMouseLeave,
  onFocusCapture,
  onBlurCapture,
  onClick,
}) => {
  return (
    <StyledDesktopNote
      className={className}
      style={style}
      data-devmode-highlight={dataDevModeHighlight}
      data-devmode-target={dataDevModeTarget}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onFocusCapture={onFocusCapture}
      onBlurCapture={onBlurCapture}
      onClick={onClick}
    >
      {children}
    </StyledDesktopNote>
  );
};

export default DesktopNote;

