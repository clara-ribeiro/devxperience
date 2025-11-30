import { styled, darkTheme } from "@/styles/stitches.config";
import { devModeHighlightStyles } from "@/styles/dev-mode.styles";

export const StyledDesktopNote = styled("p", {
  fontFamily: "$heading",
  fontSize: "0.89rem",
  lineHeight: 1.5,
  color: "#542918",
  margin: 0,
  textAlign: "left",
  [`.${darkTheme} &`]: {
    color: "#F1DFD2",
  },
  "&[data-devmode-highlight='true']:hover, &[data-devmode-highlight='true']:focus-within": {
    ...devModeHighlightStyles,
  },
});

