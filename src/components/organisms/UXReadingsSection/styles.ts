import { styled, darkTheme } from "@/styles/stitches.config";
import { devModeHighlightStyles } from "@/styles/dev-mode.styles";
import { StyledReadingCard } from "@/components/atoms/ReadingCard/styles";
import {
  StyledCardTitle,
  StyledCardAuthor,
  StyledCardDescription,
  StyledCardLink,
  StyledCardExternalLink,
} from "@/components/molecules/ReadingCardContent/styles";
import { StyledCategoryTag } from "@/components/atoms/CategoryTag/styles";

export const Section = styled("section", {
  overflow: "hidden",
  paddingTop: 0,
  paddingBottom: "4.44rem",
  paddingLeft: "1.78rem",
  paddingRight: "1.78rem",
  display: "flex",
  justifyContent: "center",
  "@md": {
    paddingTop: 0,
    paddingBottom: "6.67rem",
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
  "@lg": {
    flexDirection: "row",
    alignItems: "flex-end",
    gap: "3.56rem",
  },
});

export const TextColumn = styled("div", {
  flex: 1,
  display: "flex",
  flexDirection: "column",
  gap: "$3xl",
});

export const Title = styled("h2", {
  margin: 0,
  fontFamily: "$heading",
  fontSize: "$h2",
  fontWeight: 700,
  lineHeight: 1.2,
  color: "#261D1D",
  textAlign: "center",
  width: "100%",
  [`.${darkTheme} &`]: {
    color: "#F1DFD2",
  },
  "@md": {
    fontSize: "$h1",
    textAlign: "left",
  },
});

export const Subtitle = styled("p", {
  margin: 0,
  fontFamily: "$heading",
  fontSize: "1.2rem",
  lineHeight: 1.5,
  color: "$hiContrast",
  textAlign: "center",
  width: "100%",
  [`.${darkTheme} &`]: {
    color: "$loContrast",
  },
  "@md": {
    fontSize: "1.75rem",
    textAlign: "left",
    width: "90%",
  },
});

export const ReadingsList = styled("ul", {
  listStyle: "none",
  padding: 0,
  margin: "1.11rem 0 0",
  display: "flex",
  flexDirection: "column",
  gap: "0.67rem",
});

export const ReadingItem = styled("li", {
  fontFamily: "$body",
  fontSize: "$body2",
  color: "$hiContrast",
  [`.${darkTheme} &`]: {
    color: "$loContrast",
  },
});

export const ReadingTitle = styled("span", {
  fontWeight: 700,
});

export const ReadingAuthor = styled("span", {
  opacity: 0.85,
});

export const ButtonWrapper = styled("div", {
  marginTop: "1.33rem",
  display: "flex",
  justifyContent: "center",
  "@md": {
    justifyContent: "flex-start",
  },
});

export const FeaturedCardWrapper = styled("div", {
  display: "flex",
  flexWrap: "wrap",
  gap: "1.11rem",
  [`${StyledReadingCard}`]: {
    flex: "1 1 100%",
    minWidth: 0,
    minHeight: "16rem",
  },
  "@lg": {
    [`${StyledReadingCard}`]: {
      flex: "1 1 calc(24% - 0.74rem)",
    },
  },
});

export const FoxColumn = styled("div", {
  flexShrink: 0,
  display: "none",
  justifyContent: "center",
  alignItems: "flex-end",
  "@lg": {
    display: "flex",
  },
});

export const FoxWrapper = styled("div", {
  maxWidth: "14rem",
  width: "100%",
  "&[data-devmode-highlight='true']:hover, &[data-devmode-highlight='true']:focus-within": {
    ...devModeHighlightStyles,
  },
  "& img": {
    width: "100%",
    height: "auto",
  },
});


