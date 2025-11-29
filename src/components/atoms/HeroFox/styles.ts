import { styled } from "@/styles/stitches.config";
import { devModeHighlightStyles } from "@/styles/dev-mode.styles";

export const StyledFoxWrapper = styled("div", {
  display: "none",
  "@lg": {
    display: "flex",
    height: "16rem",
    alignItems: "flex-end",
    justifyContent: "left",
    overflow: "visible",
  },
  "& img": {
    width: "auto",
    height: "100%",
    maxWidth: "none",
    transform: "none",
  },
  "&[data-devmode-highlight='true']:hover, &[data-devmode-highlight='true']:focus-within": {
    ...devModeHighlightStyles,
  },
});

