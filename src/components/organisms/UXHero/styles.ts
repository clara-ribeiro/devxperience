import { styled, darkTheme } from "@/styles/stitches.config";
import { devModeHighlightStyles } from "@/styles/dev-mode.styles";

export const Section = styled("section", {
  paddingTop: "4.44rem",
  paddingBottom: "4.44rem",
  paddingLeft: "1.78rem",
  paddingRight: "1.78rem",
  display: "flex",
  justifyContent: "center",
  "@md": {
    paddingTop: "6.67rem",
    paddingBottom: "6.67rem",
  },
  "@lg": {
    paddingLeft: "4.44rem",
    paddingRight: "4.44rem",
  },
  "&[data-devmode-highlight='true']:hover, &[data-devmode-highlight='true']:focus-within": {
    ...devModeHighlightStyles,
  },
});

export const ContentWrapper = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  gap: "2.22rem",
  width: "100%",
  maxWidth: "66.67rem",
  position: "relative",
  "@lg": {
    minHeight: "20rem",
  },
});

export const HeroContent = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  textAlign: "left",
  gap: "1.33rem",
  position: "relative",
  zIndex: 2,
});

export const HeroTitle = styled("h1", {
  marginTop: "4.44rem",
  marginLeft: 0,
  fontFamily: "$body",
  fontSize: "6.67rem",
  lineHeight: "4.44rem",
  letterSpacing: "0.05em",
  color: "#261D1D",
  textShadow: "-6px 4px 4px rgba(0, 0, 0, 0.25)",
  textAlign: "center",
  alignSelf: "center",
  margin: "0 auto",
  width: "fit-content",
  "& span:first-child": {
    display: "block",
    fontSize: "6.67rem",
  },
  "& span:last-child": {
    display: "block",
    fontSize: "3rem",
  },
  "@lg": {
    marginTop: "9.33rem",
    marginLeft: "22rem",
    fontSize: "13.89rem", // 250px
    lineHeight: "5.56rem", // 100px
    "& span:first-child": {
      fontSize: "13.89rem",
      textAlign: "left",
    },
    "& span:last-child": {
      fontSize: "7rem",
      textAlign: "left",
    },
  },
  [`.${darkTheme} &`]: {
    color: "#F1DFD2",
  },
});

export const FoxWrapper = styled("div", {
  position: "relative",
  marginTop: "2.22rem",
  width: "315px",
  maxWidth: "80vw",
  alignSelf: "center",
  zIndex: 1,
  "@lg": {
    position: "absolute",
    left: "5.5rem",
    top: "0.6rem",
    marginTop: 0,
  },
  "&[data-devmode-highlight='true']:hover, &[data-devmode-highlight='true']:focus-within": {
    ...devModeHighlightStyles,
  },
});


