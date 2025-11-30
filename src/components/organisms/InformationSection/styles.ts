import { styled, darkTheme } from "@/styles/stitches.config";
import { devModeHighlightStyles } from "@/styles/dev-mode.styles";
import backgroundPattern from "./background.webp";

const backgroundPatternUrl = `url(${backgroundPattern.src})`;

export const Section = styled("section", {
  paddingTop: "4.44rem",
  paddingBottom: "4.44rem",
  paddingLeft: "1.78rem",
  paddingRight: "1.78rem",
  backgroundColor: "#F1DFD2",
  backgroundImage: `linear-gradient(rgba(241, 223, 210, 0.95), rgba(241, 223, 210, 0.95)), ${backgroundPatternUrl}`,
  [`.${darkTheme} &`]: {
    backgroundColor: "#261D1D",
    backgroundImage: `linear-gradient(rgba(38, 29, 29, 0.99), rgba(38, 29, 29, 0.99)), ${backgroundPatternUrl}`,
    color: "#F1DFD2",
  },
  "@md": {
    paddingTop: "6.67rem",
    paddingBottom: "6.67rem",
  },
  "@lg": {
    paddingLeft: "4.44rem",
    paddingRight: "4.44rem",
    position: "relative",
  },
});

export const ContentWrapper = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "2.22rem",
  width: "100%",
  maxWidth: "75rem",
  margin: "0 auto",
  "@lg": {
    flexDirection: "row",
    alignItems: "flex-start",
    gap: "4.44rem",
  },
});

export const TextContent = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "1.33rem",
  width: "100%",
  "@lg": {
    flex: 1,
    gap: "3.33rem",
    "& p:first-of-type": {
      width: "74%",
    },
    "& p:nth-of-type(2), & p:nth-of-type(3)": {
      width: "100%",
    },
  },
  "& p": {
    margin: 0,
    width: "100%",
  },
  "& strong": {
    fontWeight: 700,
    color: "#542918",
    [`.${darkTheme} &`]: {
      color: "#F1DFD2",
    },
    "&[data-devmode-highlight='true']:hover, &[data-devmode-highlight='true']:focus-within": {
      ...devModeHighlightStyles,
    },
  },
});

export const SeparatorLine = styled("hr", {
  width: "100%",
  border: "none",
  borderTop: "1px solid rgba(98, 65, 65, 0.3)",
  margin: 0,
  [`.${darkTheme} &`]: {
    borderTop: "1px solid rgba(231, 193, 154, 0.3)",
  },
  "&[data-devmode-highlight='true']:hover, &[data-devmode-highlight='true']:focus-within": {
    ...devModeHighlightStyles,
  },
});

export const FoxWrapper = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
  maxWidth: "17.66rem",
  height: "auto",
  "@md": {
    position: "absolute",
    top: "7.6rem",
    right: "0.778rem",
  },
  "@lg": {
    flex: "0 0 auto",
  },
  "& img": {
    width: "100%",
    height: "75%",
    maxWidth: "402px",
    objectFit: "contain",
    "@md": {
      height: "auto",
    },
  },
  "&[data-devmode-highlight='true']:hover, &[data-devmode-highlight='true']:focus-within": {
    ...devModeHighlightStyles,
  },
});

