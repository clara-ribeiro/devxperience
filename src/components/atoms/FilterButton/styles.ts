import { styled, darkTheme } from "@/styles/stitches.config";
import { devModeHighlightStyles } from "@/styles/dev-mode.styles";

export const StyledFilterButton = styled("button", {
  padding: "0.67rem 1.33rem",
  fontFamily: "$heading",
  fontSize: "$body1",
  fontWeight: 600,
  backgroundColor: "#AD4528",
  color: "#F1DFD2",
  border: "none",
  borderRadius: "$md",
  cursor: "pointer",
  transition: "background-color 150ms ease, transform 150ms ease",
  
  "&:hover": {
    backgroundColor: "#C74D00",
    transform: "translateY(-0.11rem)",
  },
  
  "&:focus-visible": {
    outline: "2px solid $focus",
    outlineOffset: "2px",
  },
  
  "&[data-active='true']": {
    backgroundColor: "#E26225",
    fontWeight: 700,
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
    
    "&[data-active='true']": {
      backgroundColor: "#AD4528",
      color: "#F1DFD2",
    },
  },
});

