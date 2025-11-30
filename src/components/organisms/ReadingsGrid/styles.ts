import { styled, darkTheme } from "@/styles/stitches.config";
import { devModeHighlightStyles } from "@/styles/dev-mode.styles";

export const StyledSection = styled("section", {
  paddingTop: "3.56rem",
  paddingBottom: "4.44rem",
  backgroundColor: "#C28166",
  
  "@md": {
    paddingTop: "4.44rem",
    paddingBottom: "4.44rem",
  },
  
  [`.${darkTheme} &`]: {
    backgroundColor: "#1B1412",
  },
  
  "&[data-devmode-highlight='true']:hover, &[data-devmode-highlight='true']:focus-visible": {
    ...devModeHighlightStyles,
  },
});

export const StyledGrid = styled("div", {
  display: "grid",
  gridTemplateColumns: "1fr",
  gap: "$2xl",
  
  "@md": {
    gridTemplateColumns: "repeat(2, 1fr)",
  },
});

