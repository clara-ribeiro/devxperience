import { styled, darkTheme } from "@/styles/stitches.config";
import { devModeHighlightStyles } from "@/styles/dev-mode.styles";

export const StyledCategoryTag = styled("span", {
  display: "inline-block",
  padding: "0.33rem 1.11rem",
  fontFamily: "$heading",
  fontSize: "$body2",
  fontWeight: 700,
  textTransform: "uppercase",
  // Visualmente mais próximo do layout: pill claro sobre o card
  backgroundColor: "#F4E2D4",
  color: "#261D1D",
  borderRadius: "9999px",
  lineHeight: 1.2,
  maxWidth: "100%",
  boxSizing: "border-box",
  wordBreak: "break-word",
  overflowWrap: "break-word",
  
  [`.${darkTheme} &`]: {
    backgroundColor: "#F6ECE7",
    color: "#542918",
  },
  
  "&[data-devmode-highlight='true']:hover, &[data-devmode-highlight='true']:focus-visible": {
    ...devModeHighlightStyles,
  },
});

