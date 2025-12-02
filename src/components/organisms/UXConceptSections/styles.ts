import { styled, darkTheme } from "@/styles/stitches.config";
import { devModeHighlightStyles } from "@/styles/dev-mode.styles";

export const Section = styled("section", {
  paddingTop: "3.56rem",
  paddingBottom: "3.56rem",
  paddingLeft: "1.78rem",
  paddingRight: "1.78rem",
  "@md": {
    paddingTop: "4.44rem",
    paddingBottom: "4.44rem",
  },
  "@lg": {
    paddingLeft: "4.44rem",
    paddingRight: "4.44rem",
  },
});

export const CardsWrapper = styled("div", {
  width: "100%",
  maxWidth: "66.67rem",
  margin: "0 auto",
  display: "flex",
  flexDirection: "column",
  gap: "2.22rem",
  "@lg": {
    gap: "4.44rem",
  },
});

export const Card = styled("article", {
  backgroundColor: "$surface",
  borderRadius: "$lg",
  padding: "1.78rem 1.56rem",
  boxShadow: "$md",
  border: "1px solid $border",
  display: "flex",
  flexDirection: "column",
  gap: "0.89rem",
  [`.${darkTheme} &`]: {
    backgroundColor: "$surfaceAlt",
    borderColor: "rgba(241, 223, 210, 0.24)",
  },
  "&[data-devmode-highlight='true']:hover, &[data-devmode-highlight='true']:focus-within": {
    ...devModeHighlightStyles,
  },
});

export const CardTitle = styled("h2", {
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

export const CardSeparator = styled("hr", {
  margin: "0.44rem 0 0.67rem",
  border: "none",
  borderTop: "1px solid rgba(98, 65, 65, 0.3)",
  [`.${darkTheme} &`]: {
    borderTop: "1px solid rgba(231, 193, 154, 0.3)",
  },
});

export const CardBody = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "2.44rem",
  fontFamily: "$heading",
  fontSize: "1.22rem",
  lineHeight: 1.5,
  color: "$hiContrast",
  [`.${darkTheme} &`]: {
    color: "$loContrast",
  },
  "& p": {
    margin: 0,
  },
  "& strong": {
    fontWeight: 700,
  },
  "& a": {
    fontWeight: 700,
    color: "$hiContrast",
    [`.${darkTheme} &`]: {
      color: "$loContrast",
    },
  },
});


