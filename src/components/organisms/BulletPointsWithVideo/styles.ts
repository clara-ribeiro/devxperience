import { styled, darkTheme } from "@/styles/stitches.config";
import { devModeHighlightStyles } from "@/styles/dev-mode.styles";

export const Section = styled("section", {
  paddingTop: "4.44rem",
  paddingBottom: "4.44rem",
  paddingLeft: "1.78rem",
  paddingRight: "1.78rem",
  backgroundColor: "#F1DFD2",
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
    color: "#F1DFD2",
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

export const LeftContent = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "2.22rem",
  width: "100%",
  "@lg": {
    flex: 1,
    gap: "3.33rem",
  },
});

export const TitleWrapper = styled("div", {
  "&[data-devmode-highlight='true']:hover, &[data-devmode-highlight='true']:focus-within": {
    ...devModeHighlightStyles,
  },
});
