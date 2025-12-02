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
});

export const Card = styled("article", {
  backgroundColor: "$surface",
  borderRadius: "$lg",
  padding: "1.78rem 1.56rem",
  boxShadow: "$md",
  border: "1px solid $border",
  [`.${darkTheme} &`]: {
    backgroundColor: "$surfaceAlt",
  },
  "&[data-devmode-highlight='true']:hover, &[data-devmode-highlight='true']:focus-within": {
    ...devModeHighlightStyles,
  },
});

export const Title = styled("h2", {
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

export const Description = styled("p", {
  marginTop: "0.44rem",
  marginBottom: "1.11rem",
  fontFamily: "$heading",
  fontSize: "1.22rem",
  lineHeight: 1.5,
  color: "$hiContrast",
  [`.${darkTheme} &`]: {
    color: "$loContrast",
  },
});

export const Separator = styled("hr", {
  margin: "0.44rem 0 1.11rem",
  border: "none",
  borderTop: "1px solid rgba(98, 65, 65, 0.3)",
  [`.${darkTheme} &`]: {
    borderTop: "1px solid rgba(231, 193, 154, 0.3)",
  },
});

export const Checklist = styled("ul", {
  listStyle: "none",
  padding: 0,
  margin: 0,
  display: "flex",
  flexDirection: "column",
  gap: "1.33rem",
});

export const ChecklistItem = styled("li", {
  display: "flex",
  alignItems: "flex-start",
  gap: "0.67rem",
  fontFamily: "$heading",
  fontSize: "1rem",
  lineHeight: 1.5,
  color: "$hiContrast",
  [`.${darkTheme} &`]: {
    color: "$loContrast",
  },
});

export const Bullet = styled("span", {
  width: "0.67rem",
  height: "0.67rem",
  marginTop: "0.33rem",
  borderRadius: "999px",
  border: "2px solid $primary",
  flexShrink: 0,
});


