import { styled, darkTheme } from "@/styles/stitches.config";
import { devModeHighlightStyles } from "@/styles/dev-mode.styles";

export const StyledDescription = styled("p", {
  fontFamily: "$heading",
  fontSize: "1.2rem",
  lineHeight: 1.4,
  color: "#261D1D",
  width: "100%",
  [`.${darkTheme} &`]: {
    color: "#F1DFD2",
  },
  "@lg": {
    fontSize: "1.55rem",
  },
  "&[data-devmode-highlight='true']:hover, &[data-devmode-highlight='true']:focus-visible": {
    ...devModeHighlightStyles,
  },
});

