import { styled, darkTheme } from "@/styles/stitches.config";
import { devModeHighlightStyles } from "@/styles/dev-mode.styles";

export const StyledSectionDescription = styled("p", {
  fontFamily: "$heading",
  fontSize: "1.2rem",
  lineHeight: 1.5,
  color: "#542918",
  margin: 0,
  textAlign: "center",
  width: "auto",
  [`.${darkTheme} &`]: {
    color: "#F1DFD2",
  },
  "@md": {
    fontSize: "1.75rem", // 28px
    textAlign: "left",
    width: "85%",
  },
  "&[data-devmode-highlight='true']:hover, &[data-devmode-highlight='true']:focus-visible": {
    ...devModeHighlightStyles,
  },
});

