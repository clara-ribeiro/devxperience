import { styled, darkTheme } from "@/styles/stitches.config";
import { devModeHighlightStyles } from "@/styles/dev-mode.styles";

export const StyledSectionTitle = styled("h2", {
  fontFamily: "$heading",
  fontSize: "$h2",
  fontWeight: 700,
  lineHeight: 1.2,
  color: "#542918",
  margin: 0,
  textAlign: "center",
  [`.${darkTheme} &`]: {
    color: "#F1DFD2",
  },
  "@md": {
    fontSize: "$h1",
    textAlign: "left",
  },
  "&[data-devmode-highlight='true']:hover, &[data-devmode-highlight='true']:focus-visible": {
    ...devModeHighlightStyles,
  },
});

