import { styled, darkTheme } from "@/styles/stitches.config";
import { devModeHighlightStyles } from "@/styles/dev-mode.styles";
import backgroundPattern from "./background.webp";

const heroPatternUrl = `url(${backgroundPattern.src})`;

export const Section = styled("section", {
  overflow: "hidden",
  paddingTop: "4.44rem",
  paddingBottom: "4.44rem",
  paddingLeft: "1.78rem",
  paddingRight: "1.78rem",
  display: "flex",
  justifyContent: "center",
  backgroundColor: "#F1DFD2",
  backgroundImage: `linear-gradient(rgba(241, 223, 210, 0.9), rgba(241, 223, 210, 0.9)), ${heroPatternUrl}`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "center",
  "@md": {
    paddingTop: "6.67rem",
    paddingBottom: "6.67rem",
  },
  "@lg": {
    paddingLeft: "4.44rem",
    paddingRight: "4.44rem",
  },
  [`.${darkTheme} &`]: {
    backgroundColor: "#261D1D",
    backgroundImage: `linear-gradient(rgba(38, 29, 29, 0.97), rgba(38, 29, 29, 0.97)), ${heroPatternUrl}`,
    color: "#F1DFD2",
  },
  "&[data-devmode-highlight='true']:hover": {
    ...devModeHighlightStyles,
  },
});

export const HeroCopy = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  textAlign: "center",
  gap: "2.22rem",
  width: "100%",
  maxWidth: "45rem",
  "@lg": {
    alignItems: "flex-start",
  },
});
