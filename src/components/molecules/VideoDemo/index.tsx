import React from "react";
import { VideoContainer, VideoWrapper } from "./styles";

export type VideoDemoProps = {
  videoSrc: string;
  videoAlt?: string;
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  "data-devmode-highlight"?: string;
  "data-devmode-target"?: string;
  onMouseEnter?: (event: React.MouseEvent<HTMLDivElement>) => void;
  onMouseLeave?: () => void;
  onFocusCapture?: (event: React.FocusEvent<HTMLDivElement>) => void;
  onBlurCapture?: () => void;
  onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
};

export const VideoDemo: React.FC<VideoDemoProps> = ({
  videoSrc,
  videoAlt = "Demonstração do Modo Dev em ação",
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
    <VideoContainer className={className} style={style}>
      <VideoWrapper
        data-devmode-highlight={dataDevModeHighlight}
        data-devmode-target={dataDevModeTarget}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        onFocusCapture={onFocusCapture}
        onBlurCapture={onBlurCapture}
        onClick={onClick}
      >
        <video autoPlay loop muted playsInline aria-label={videoAlt}>
          <source src={videoSrc} type="video/webm" />
        </video>
      </VideoWrapper>
      {children}
    </VideoContainer>
  );
};

export default VideoDemo;

