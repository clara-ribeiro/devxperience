import { styled, darkTheme } from "@/styles/stitches.config";
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

export const HeadingRow = styled("div", {
  display: "flex",
  alignItems: "stretch",
  justifyContent: "center",
  width: "100%",
});

export const HeadingGroup = styled("h1", {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  gap: "0.44rem",
  textTransform: "uppercase",
  margin: 0,
  color: "#542918",
  flex: "1 1 auto",
  height: "100%",
  [`.${darkTheme} &`]: {
    color: "#E7C19A",
  },
  textAlign: "center",
});

export const HeadingDev = styled("span", {
  fontFamily: "$body",
  fontWeight: 600,
  lineHeight: 1,
  fontSize: "clamp(5rem, 26vw, 14.33rem)",
});

export const HeadingXperience = styled("span", {
  fontFamily: "$body",
  fontWeight: 600,
  lineHeight: 0.1,
  fontSize: "clamp(2.22rem, 8vw, 4.5rem)",
  letterSpacing: "0.1em",
});

export const Description = styled("p", {
  fontFamily: "$heading",
  fontSize: "1.2rem",
  lineHeight: 1.4,
  color: "#261D1D",
  width: "100%",
  [`.${darkTheme} &`]: {
    color: "#F1DFD2",
  },
  "@lg": {
    fontSize: "1.55rem",
  },
});

export const Actions = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: "0.89rem",
  width: "100%",
  maxWidth: "22rem",
  "& > button": {
    width: "100%",
  },
  "@sm": {
    maxWidth: "26rem",
  },
  "@lg": {
    flexDirection: "row",
    maxWidth: "100%",
    "& > button": {
      width: "12.56rem", // ~226px
    },
  },
});

export const FoxWrapper = styled("div", {
  display: "none",
  "@lg": {
    display: "flex",
    height: "16rem",
    alignItems: "flex-end",
    justifyContent: "left",
    overflow: "visible",
  },
  "& img": {
    width: "auto",
    height: "100%",
    maxWidth: "none",
    transform: "none",
  },
});


