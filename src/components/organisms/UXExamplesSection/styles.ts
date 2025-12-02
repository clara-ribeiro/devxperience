import { styled, darkTheme } from "@/styles/stitches.config";
import { devModeHighlightStyles } from "@/styles/dev-mode.styles";

export const Section = styled("section", {
  paddingTop: 0,
  paddingBottom: "3.56rem",
  paddingLeft: "1.78rem",
  paddingRight: "1.78rem",
  "@md": {
    paddingTop: 0,
    paddingBottom: "4.44rem",
  },
  "@lg": {
    paddingLeft: "4.44rem",
    paddingRight: "4.44rem",
  },
});

export const ContentWrapper = styled("div", {
  width: "100%",
  maxWidth: "66.67rem",
  margin: "0 auto",
  display: "flex",
  flexDirection: "column",
  gap: "2.22rem",
});

export const ExampleCard = styled("article", {
  backgroundColor: "$surface",
  borderRadius: "$lg",
  padding: "1.78rem 1.56rem",
  boxShadow: "$md",
  border: "1px solid $border",
  display: "flex",
  flexDirection: "column",
  gap: "1.78rem",
  [`.${darkTheme} &`]: {
    backgroundColor: "$surfaceAlt",
  },
  "&[data-devmode-highlight='true']:hover, &[data-devmode-highlight='true']:focus-within": {
    ...devModeHighlightStyles,
  },
});

export const ExampleTitle = styled("h2", {
  margin: 0,
  fontFamily: "$body",
  fontSize: "2.11rem",
  textTransform: "uppercase",
  fontWeight: 700,
  color: "#261D1D",
  [`.${darkTheme} &`]: {
    color: "#F1DFD2",
  },
});

export const ExampleDescription = styled("p", {
  margin: 0,
  fontFamily: "$heading",
  fontSize: "1.22rem",
  lineHeight: 1.5,
  color: "$hiContrast",
  [`.${darkTheme} &`]: {
    color: "$loContrast",
  },
  "& a": {
    fontWeight: 700,
    color: "$hiContrast",
    [`.${darkTheme} &`]: {
      color: "$loContrast",
    },
  },
});

export const ExampleItem = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "1.11rem",
  padding: "1.11rem",
  borderRadius: "$lg",
  border: "1px solid $border",
  backgroundColor: "rgba(255, 255, 255, 0.5)",
  [`.${darkTheme} &`]: {
    backgroundColor: "rgba(27, 20, 18, 0.5)",
  },
  "&[data-devmode-highlight='true']:hover, &[data-devmode-highlight='true']:focus-within": {
    ...devModeHighlightStyles,
  },
});

export const ExampleSeparator = styled("hr", {
  display: "none",
});

export const ExampleSubtitle = styled("h3", {
  margin: 0,
  fontFamily: "$heading",
  fontSize: "$h3",
  fontWeight: 700,
  color: "#261D1D",
  [`.${darkTheme} &`]: {
    color: "#F1DFD2",
  },
});

export const ExampleImageWrapper = styled("div", {
  borderRadius: "$md",
  overflow: "hidden",
  backgroundColor: "$surface",
  boxShadow: "$md",
  [`.${darkTheme} &`]: {
    backgroundColor: "#3A1F1A",
  },
  "& img": {
    display: "block",
    width: "100%",
    height: "auto",
  },
});


