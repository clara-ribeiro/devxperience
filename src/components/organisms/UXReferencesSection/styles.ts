import { styled, darkTheme } from "@/styles/stitches.config";
import { devModeHighlightStyles } from "@/styles/dev-mode.styles";

export const Section = styled("section", {
  paddingTop: "3.56rem",
  paddingBottom: "3.56rem",
  paddingLeft: "1rem",
  paddingRight: "1rem",
  overflowX: "hidden",
  width: "100%",
  maxWidth: "100vw",
  boxSizing: "border-box",
  "@md": {
    paddingTop: "4.44rem",
    paddingBottom: "4.44rem",
    paddingLeft: "1.78rem",
    paddingRight: "1.78rem",
  },
  "@lg": {
    paddingLeft: "4.44rem",
    paddingRight: "4.44rem",
  },
});

export const Card = styled("article", {
  width: "100%",
  maxWidth: "66.67rem",
  margin: "0 auto",
  backgroundColor: "$surface",
  borderRadius: "$lg",
  padding: "0.89rem 0.89rem",
  boxShadow: "$md",
  border: "1px solid $border",
  display: "flex",
  flexDirection: "column",
  gap: "1.11rem",
  boxSizing: "border-box",
  "@md": {
    padding: "1.78rem 1.56rem",
  },
  [`.${darkTheme} &`]: {
    backgroundColor: "$surfaceAlt",
    borderColor: "rgba(241, 223, 210, 0.24)",
  },
  "&[data-devmode-highlight='true']:hover, &[data-devmode-highlight='true']:focus-within": {
    ...devModeHighlightStyles,
  },
});

export const Title = styled("h2", {
  margin: 0,
  fontFamily: "$body",
  fontSize: "1.56rem",
  textTransform: "uppercase",
  fontWeight: 700,
  color: "#261D1D",
  wordBreak: "break-word",
  overflowWrap: "break-word",
  "@md": {
    fontSize: "2.11rem",
  },
  [`.${darkTheme} &`]: {
    color: "#F1DFD2",
  },
});

export const ReferencesList = styled("ol", {
  listStyle: "none",
  padding: 0,
  margin: 0,
  display: "flex",
  flexDirection: "column",
  gap: "0.67rem",
  fontFamily: "$heading",
  fontSize: "1rem",
  lineHeight: 1.5,
  color: "$hiContrast",
  width: "100%",
  "@md": {
    fontSize: "1.22rem",
  },
  [`.${darkTheme} &`]: {
    color: "$loContrast",
  },
});

export const ReferenceItem = styled("li", {
  display: "flex",
  gap: "0.44rem",
  scrollMarginTop: "6rem",
  borderRadius: "0.33rem",
  padding: "0.22rem 0.33rem",
  minWidth: 0,
  width: "100%",
  "&:target": {
    backgroundColor: "rgba(173, 69, 40, 0.12)",
    boxShadow: "0 0 0 2px rgba(173, 69, 40, 0.35)",
  },
});

export const ReferenceNumber = styled("span", {
  fontWeight: 700,
});

export const ReferenceText = styled("span", {
  wordBreak: "break-word",
  overflowWrap: "break-word",
  minWidth: 0,
  flex: 1,
});

export const FooterActions = styled("div", {
  marginTop: "1.33rem",
  display: "flex",
  justifyContent: "flex-end",
});


