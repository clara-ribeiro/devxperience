import { styled, darkTheme } from "@/styles/stitches.config";
import { devModeHighlightStyles } from "@/styles/dev-mode.styles";

export const StyledReadingCard = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "$lg",
  padding: "$xl",
  backgroundColor: "#261D1D",
  border: "0.11rem solid #F6ECE7",
  borderRadius: "$md",
  position: "relative",
  transition: "transform 150ms ease, box-shadow 150ms ease",
  textDecoration: "none",
  cursor: "pointer",
  minHeight: "20rem",
  width: "100%",
  boxSizing: "border-box",
  minWidth: 0,
  overflow: "hidden",
  
  "@md": {
    padding: "$2xl",
    maxWidth: "none",
  },
  
  "&:hover": {
    transform: "translateY(-0.22rem)",
    boxShadow: "$md",
  },
  
  "&:focus-visible": {
    outline: "2px solid $focus",
    outlineOffset: "2px",
  },
  
  [`.${darkTheme} &`]: {
    backgroundColor: "#261D1D",
    border: "0.11rem solid #F6ECE7",
  },
  
  "&[data-devmode-highlight='true']:hover, &[data-devmode-highlight='true']:focus-visible": {
    ...devModeHighlightStyles,
  },
});

