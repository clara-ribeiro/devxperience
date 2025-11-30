import { styled } from "@/styles/stitches.config";
import { devModeHighlightStyles } from "@/styles/dev-mode.styles";

export const VideoContainer = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  gap: "1.33rem",
  width: "100%",
  "@lg": {
    flex: "0 0 auto",
    width: "auto",
  },
});

export const VideoWrapper = styled("div", {
  width: "100%",
  borderRadius: "0.67rem",
  overflow: "hidden",
  backgroundColor: "#D4D4D4",
  aspectRatio: "3 / 4",
  "@lg": {
    width: "24rem",
  },
  "& video": {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    display: "block",
  },
  "&[data-devmode-highlight='true']:hover, &[data-devmode-highlight='true']:focus-within": {
    ...devModeHighlightStyles,
  },
});

