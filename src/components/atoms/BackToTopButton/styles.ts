import { styled, darkTheme } from "@/styles/stitches.config";
import { devModeHighlightStyles } from "@/styles/dev-mode.styles";

export const StyledBackToTopButton = styled("button", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "$lg $xl",
  fontFamily: "$heading",
  fontSize: "$body1",
  fontWeight: 600,
  backgroundColor: "#AD4528",
  color: "#F1DFD2",
  border: "none",
  borderRadius: "$md",
  cursor: "pointer",
  transition: "background-color 150ms ease, transform 150ms ease, opacity 150ms ease",
  margin: "$2xl auto 0",
  
  "&:hover": {
    backgroundColor: "#C74D00",
    transform: "translateY(-0.11rem)",
  },
  
  "&:focus-visible": {
    outline: "2px solid $focus",
    outlineOffset: "2px",
  },
  
  "&:active": {
    transform: "translateY(0)",
  },
  
  "&[data-devmode-highlight='true']:hover, &[data-devmode-highlight='true']:focus-visible": {
    ...devModeHighlightStyles,
  },
  
  [`.${darkTheme} &`]: {
    backgroundColor: "#542918",
    color: "#E7C19A",
    
    "&:hover": {
      backgroundColor: "#6B341F",
    },
  },
});

